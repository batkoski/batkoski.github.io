document.addEventListener('DOMContentLoaded', () => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Nav border once the page scrolls
  const nav = document.querySelector('.site-nav');
  const onScroll = () => nav && nav.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  // Hero words: hover retypes "writes" and rebuilds "builds", cycling the accent color
  const tones = ['var(--clay)', 'var(--moss)', 'var(--ochre)'];
  document.querySelectorAll('.mark').forEach((mark) => {
    const word = mark.textContent.trim();
    mark.innerHTML = `<span class="sr-only">${word}</span><span class="mark__chars" aria-hidden="true">${
      [...word].map((ch, i) => `<span class="ch" style="--i:${i}">${ch}</span>`).join('')
    }</span>`;
    if (reduced) return;
    const chars = [...mark.querySelectorAll('.ch')];
    const box = mark.querySelector('.mark__chars');
    const caret = document.createElement('span');
    caret.className = 'mark__caret';
    box.appendChild(caret);
    const caretAt = (n) => {
      // n = number of visible letters; caret sits right after the last one
      caret.style.left = `${n ? chars[n - 1].offsetLeft + chars[n - 1].offsetWidth : 0}px`;
    };
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const retype = async () => {
      caretAt(chars.length);
      mark.classList.add('is-typing');
      await wait(250);
      for (let n = chars.length - 1; n >= 0; n--) { chars[n].style.visibility = 'hidden'; caretAt(n); await wait(45); }
      await wait(220);
      for (let n = 0; n < chars.length; n++) { chars[n].style.visibility = ''; caretAt(n + 1); await wait(85); }
      await wait(500);
      mark.classList.remove('is-typing');
    };
    let tone = 0, busy = false;
    const play = async () => {
      if (busy) return;
      busy = true;
      tone = (tone + 1) % tones.length;
      mark.style.setProperty('--mark', tones[tone]);
      mark.classList.remove('is-play');
      void mark.offsetWidth; // restart the animations
      mark.classList.add('is-play');
      if (mark.dataset.fx === 'type') await retype();
      else await wait(chars.length * 65 + 700);
      busy = false;
    };
    mark.addEventListener('mouseenter', play);
    mark.addEventListener('click', play);
  });

  // Work rows: the row you rest on opens up and shows its image
  const list = document.querySelector('.work-list');
  if (list && window.matchMedia('(min-width: 761px)').matches) {
    const rows = [...list.querySelectorAll('.work-row')];
    let active = null, timer = null;
    const setActive = (row) => {
      if (row === active) return;
      if (active) active.classList.remove('is-active');
      active = row;
      if (row) row.classList.add('is-active');
    };
    rows.forEach((row) => {
      row.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        timer = setTimeout(() => setActive(row), active ? 60 : 120);
      });
    });
    list.addEventListener('mouseleave', () => {
      clearTimeout(timer);
      timer = setTimeout(() => setActive(null), 180);
    });
  }

  // Approach: a request plays out as a chat, lighting up the principle each reply shows
  document.querySelectorAll('.chat').forEach((chat) => {
    const log = chat.querySelector('.chat__log');
    const msgs = [...chat.querySelectorAll('.msg')];
    const typing = chat.querySelector('.chat__typing');
    const replay = chat.querySelector('.chat__replay');
    const principles = [...document.querySelectorAll('#principles > li')];
    const light = (i) => principles.forEach((p, j) => p.classList.toggle('is-lit', i === j));
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const show = (m) => {
      m.classList.add('is-shown');
      if (m.dataset.principle) light(Number(m.dataset.principle));
      log.scrollTop = log.scrollHeight;
    };
    let run = 0;
    const play = async () => {
      const id = ++run;
      replay.hidden = true;
      msgs.forEach((m) => m.classList.remove('is-shown'));
      light(-1);
      for (const m of msgs) {
        typing.dataset.who = m.dataset.who;
        typing.classList.add('is-on');
        await wait(Math.min(1500, 450 + m.textContent.trim().length * 12));
        if (id !== run) return;
        typing.classList.remove('is-on');
        show(m);
        await wait(m.querySelector('.card') ? 1400 : 700);
        if (id !== run) return;
      }
      light(-1);
      replay.hidden = false;
    };
    replay.addEventListener('click', play);
    if (reduced || !('IntersectionObserver' in window)) {
      msgs.forEach((m) => m.classList.add('is-shown'));
      replay.remove();
      return;
    }
    new IntersectionObserver(([entry], obs) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      play();
    }, { threshold: 0.4 }).observe(chat);
  });

  // Case study: section links that follow along
  const toc = document.querySelector('.case__toc');
  const heads = document.querySelectorAll('.case__body h2');
  if (toc && heads.length) {
    const links = [...heads].map((h) => {
      const a = document.createElement('a');
      a.href = `#${h.id}`;
      a.textContent = h.textContent;
      toc.appendChild(a);
      return a;
    });
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const i = [...heads].indexOf(entry.target);
        links.forEach((a, j) => a.classList.toggle('is-current', i === j));
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    heads.forEach((h) => spy.observe(h));

    // Group each heading with its content so a section can be highlighted on hover
    heads.forEach((h, i) => {
      const sec = document.createElement('section');
      sec.className = 'case-sec';
      h.before(sec);
      let el = h;
      while (el && !(el !== h && el.tagName === 'H2')) {
        const next = el.nextElementSibling;
        sec.appendChild(el);
        el = next;
      }
      sec.addEventListener('mouseenter', () => links[i].classList.add('is-hover'));
      sec.addEventListener('mouseleave', () => links[i].classList.remove('is-hover'));
    });
  }
});
