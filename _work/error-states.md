---
title: Designing for when things go wrong
summary: A framework for error, limit, and loading states, so the most frustrating moments in a product still tell people what happened and what to do next.
year: 2026
role: Content systems, interaction design, front-end fixes
team: PMs and engineers across desktop and web
tools: Source code, AI coding tools, Figma
order: 4
tone: stone
---

## The problem

Error messages are usually written last, by whoever happens to be closing the ticket. In a product that spans desktop and web, that adds up to dozens of slightly different ways of saying “something went wrong,” and most of them don't say what to do about it.

Fixing them one at a time wasn't working either. A single copy ticket could take weeks to get picked up.

## How I approached it

Start with an inventory, not a style rule. I got the PMs and engineers on each surface to list every error state they owned, and pulled the actual strings out of the source code with an AI coding tool instead of hunting through screens.

To write a good error message, you need three things: what the person was doing, what went wrong, and where the message shows up. Once those are known, the copy follows a simple pattern. Say what happened in plain words, say why if it helps, and end on something they can do.

## What I made

Placeholder: one line on the inventory and the framework doc.

<div class="figs">
  <figure><div class="frame"><div class="ph" data-tone="stone"><span>Image placeholder</span></div></div><figcaption>Placeholder: a limit message that says which limit you hit.</figcaption></figure>
  <figure><div class="frame"><div class="ph" data-tone="clay"><span>Image placeholder</span></div></div><figcaption>Placeholder: empty states that point somewhere.</figcaption></figure>
</div>

Some examples of what came out of it:

- **Usage limits** that tell you which limit you actually hit, instead of one generic “quota exceeded”
- **Long-running responses** that pause at a time limit with a clear choice to continue or retry, instead of just stopping
- **Empty states** that are different for “you haven't made one yet,” “nothing matched your search,” and “you haven't saved anything,” because those are three different situations
- **About 200 loading messages** so the wait while the app starts up says something useful

For one settings area, I skipped the ticket and changed the source code myself: rewrote the copy, simplified the layout, turned a confusing toggle into a clear button, and added a warning that shows up before you run into a usage limit instead of after.

<div class="figs figs--wide">
  <figure><div class="frame"><div class="ph" data-tone="moss"><span>Image placeholder</span></div></div><figcaption>Placeholder: the settings redesign, before and after.</figcaption></figure>
</div>

## Outcome

Placeholder: how teams use the framework now, and anything measurable (for example, fewer one-off copy reviews).
