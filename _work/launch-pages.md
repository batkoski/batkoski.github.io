---
title: Launch pages, built in code
summary: A landing page pattern for launch offers that I designed, wrote, and shipped myself. The first one went from design to merged code in about two days. The third took an afternoon.
year: 2026
role: Product design, copy, front-end build
team: PM, design lead, engineering reviewers
tools: Figma, HTML/CSS, code review
order: 1
tone: clay
---

## The problem

Launch offers don't wait for a sprint. A conference promo, a partner deal, a limited-time trial: each one shows up with a date attached and a lot of small decisions nobody has made yet. Who's eligible? What happens when the offer ends? What does someone see if sign-up fails halfway through?

The usual path was design, then copy, then a handoff to engineering. Engineering was already stretched, so the handoff was where things stalled.

## How I approached it

I started by asking what was actually new. The existing landing page template already converted well, so redesigning it would have been a nicer version of something that worked, not something that helped the launch. I put the design effort where it mattered: the offer itself and every state around it.

That meant writing out the full path before drawing anything:

- someone arrives from a link and reads the offer
- they sign up and get a confirmation
- something goes wrong, and they need a way forward
- they show up after the offer ended
- they get a welcome email that matches what they were promised

Then I made the copy plain and consistent across every offer: one small-print format, everyday words like “teammates” instead of “collaborators,” and no internal plan names in anything customers see.

## What I made

Placeholder: one or two lines on the Figma file and how the screens were tagged as new, updated, or unchanged against the existing page.

<div class="figs">
  <figure><div class="frame"><div class="ph" data-tone="clay"><span>Image placeholder</span></div></div><figcaption>Placeholder: landing page on desktop and phone.</figcaption></figure>
  <figure><div class="frame"><div class="ph" data-tone="sand"><span>Image placeholder</span></div></div><figcaption>Placeholder: confirmation, error, and offer-ended states.</figcaption></figure>
</div>

Then I built it. The page, its strings, the responsive rules for portrait tablets and small phones, and a launch flag so it could ship dark and turn on when the offer did. Engineers reviewed the code like any other change, and I worked through their comments the same way.

<div class="figs figs--wide">
  <figure><div class="frame"><div class="ph" data-tone="stone"><span>Image placeholder</span></div></div><figcaption>Placeholder: the full flow, from first visit to welcome email.</figcaption></figure>
</div>

## Outcome

The first page went from design to merged code in about two days, without an engineer doing the build. Because the pattern was reusable, the next promo was mostly a content swap, and the third went from request to a working page and full onboarding flow in an afternoon.

The part I'd do differently: I fully built one direction before getting a design lead's read on it, and it got replaced by a lighter option. Now I get a direction check on the Figma options first, then build.
