---
title: "Assignment: Technical Fixes + Schema"
description: Run the technical checks, fix the crawl, speed, and mobile issues, deploy schema, and prove it with before/after evidence.
sidebar:
  order: 99
---

Time to stop reading and go fix a real site. This is the module's deliverable: a **completed technical fixes checklist, backed by evidence, plus validated schema deployed** on your capstone client. Not "I understand crawling" — *proof* that this specific site is now crawlable, faster, mobile-usable, and marked up correctly. It's the artefact you'll show the next client to say "here's what I do, and here's the before/after that proves it."

## The brief

For your capstone client's website, you will:

1. Diagnose its technical health (crawl/index, speed, mobile, schema).
2. Fix what you can, safely, within the platform.
3. Deploy correct structured data and validate it.
4. Document everything as a **before/after checklist with evidence**, plus a clear list of anything that needs the owner or a developer.

Work on the **money pages first** — the homepage and the top one or two conversion pages (booking, contact, key service or product). You don't need to fix all 40 pages of a site to deliver real value; fix the ones that earn.

## Steps / checklist

Work through these in order — each builds on the last.

### 1. Crawl & index health

- [ ] Check `robots.txt` — no accidental `Disallow: /`, and it references a sitemap.
- [ ] Confirm the site is **not** globally `noindex`-ed (WordPress "Discourage search engines" un-ticked; SEO plugin indexing on).
- [ ] Confirm an **XML sitemap** exists and is **submitted in Google Search Console**.
- [ ] Open the GSC **Pages** report; screenshot the indexed vs not-indexed breakdown and note the top not-indexed reason.
- [ ] **URL-inspect** the homepage and top conversion page; confirm both are "on Google."

### 2. Speed & Core Web Vitals

- [ ] Run the homepage and top conversion page through **PageSpeed Insights on mobile**; screenshot LCP, INP, CLS and the score (this is your "before").
- [ ] Apply the top quick-wins: compress/resize the largest images, convert to WebP, confirm lazy-loading, enable caching, remove unused heavy scripts/sliders/popups.
- [ ] **Re-run PageSpeed**; screenshot the "after."

### 3. Mobile usability

- [ ] On a real phone, **WiFi off**, run the 5-minute mobile check (readable text, thumb-sized taps, no sideways scroll, no ambush popup).
- [ ] Confirm the phone number is a tappable **`tel:`** link.
- [ ] Confirm a **WhatsApp** contact option exists and works (or flag it as a recommendation).

### 4. Structured data

- [ ] Deploy **LocalBusiness** schema (or the correct sub-type — `Dentist`, `Restaurant`, `ExerciseGym`…) with real name, address, phone, hours, URL — matching the Google Business Profile exactly.
- [ ] Add **BreadcrumbList** (still a real rich result) and/or **FAQPage** (valid markup, but no longer a rich result) where genuinely applicable.
- [ ] **Do not** mark up fake or self-created reviews.
- [ ] **Validate** with the Rich Results Test; screenshot the "eligible, 0 errors" result.

## Deliverable format

A single document (Google Doc, PDF, or shared sheet) containing:

1. **A before/after technical checklist** — every item above, marked done / partial / blocked.
2. **Evidence, embedded:** before-and-after PageSpeed screenshots (mobile), the GSC Pages/URL-inspection screenshots, and the Rich Results Test validation screenshot.
3. **A short "before → after" summary line** per area (e.g. "Mobile LCP 6.2s → 2.3s"; "Homepage was not indexed → now on Google"; "No schema → valid LocalBusiness").
4. **Notes for the owner / developer:** anything you couldn't fix yourself and why (needs hosting change, needs a dev to edit the theme, platform ceiling reached). Be specific and honest.

> 📸 *[Screenshot placeholder: a one-page before/after technical summary with embedded PageSpeed and Rich Results Test screenshots]*

:::note[📋 Swipe this]
**One-line client summary to top the document:**

> "Technical health pass for [Business], [date]. Before this pass: [key page] was [not indexed / slow / not mobile-usable / had no schema]. After: [indexed / mobile LCP X→Y / valid LocalBusiness schema]. Remaining items needing your web developer are listed at the end."
:::

## Simulated Client fallback

*(Clearly hypothetical — use if you have no real client yet.)*

Perform the full pass on the **practice-lab site** provided in the course, **or** produce a **prioritised fix plan** for this fictional-but-realistic client:

> **"FitZone Gym, Indiranagar"** *(composite)* — a two-branch gym on a three-year-old WordPress site. Mobile PageSpeed score in the teens (an un-compressed background video and a 6MB hero image). Both Yoast and Rank Math are installed and active. No LocalBusiness schema. The phone number is baked into the header image (not tappable) and there's no WhatsApp button. The GSC Pages report shows several "Crawled – currently not indexed" service pages.

Deliver the **same document format**: a prioritised checklist of what you'd fix, in what order, with expected before/after and clear reasoning. Label it a plan (you can't produce live scores), and call out which items you'd handle versus which need the owner or a developer.

## Self-assessment rubric

Grade yourself honestly against each criterion.

| Criterion | Missing | Getting there | Client-ready |
|---|---|---|---|
| **Crawl / index health** | Didn't check robots/index status | Checked, but issues left unresolved or undocumented | robots.txt & indexing confirmed clean; sitemap submitted; Pages report reviewed with evidence |
| **Speed** | No PageSpeed data | Ran PageSpeed but few/no fixes, or no "after" | Before/after mobile scores with real quick-wins applied and improvement (or a costed plan if blocked) |
| **Mobile usability** | Not tested on a phone | Tested but issues unaddressed | Passed the 5-minute check; tappable phone + WhatsApp confirmed or recommended |
| **Structured data** | None added | Added but not validated, or contradicts the page | Correct type deployed, matches GBP, validated with 0 errors, no fake reviews |
| **Documentation** | No write-up | Notes but no evidence or owner/dev handoff | Clear before/after checklist with embedded evidence and specific owner/dev notes |

Aim for **Client-ready** on at least four of five. If speed is genuinely blocked (a hosting limit you can't change), a well-reasoned *plan* in that row still counts as Client-ready — honest documentation of a blocker is professional work, not a failure.

:::caution[⚠️ Gotcha]
Don't fake the evidence. The whole value of this deliverable is that the screenshots are *real* — a genuine PageSpeed "before" that genuinely improved, a genuine Rich Results "eligible." A polished checklist with no evidence is exactly what the ₹500 crowd produces. Your before/after proof is the thing that gets you the *next* client.
:::

## How this feeds your capstone

A healthy, fast, mobile-friendly, well-marked-up site is the amplifier under everything else you'll do for this client. The content you write, the reviews you earn, the ads you'll run in later modules all work harder on a technically sound site and leak value on a broken one. This deliverable is also, quietly, your best portfolio piece: a concrete, evidence-backed "I made this site measurably better" you can anonymise and show the next prospect. Technical wins are the easiest wins in this course to *prove* — so prove them, and get paid for the proof.
