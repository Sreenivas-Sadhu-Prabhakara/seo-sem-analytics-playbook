---
title: "Assignment: Live Tracking + Baseline"
description: Wire up GA4, Search Console and conversions on your capstone client and capture the baseline snapshot.
sidebar:
  order: 99
---

Time to earn the module. Everything so far was rehearsal; this is the real rep. You're going to install a complete measurement setup on your capstone client and capture the **baseline snapshot** — the single most valuable document you'll produce in the whole gig, because it's the "before" that turns every future result into proof.

## The brief

Deliver, for your real capstone client, a **live measurement setup plus a baseline snapshot**:

- **GA4** installed, configured for INR + IST, internal traffic excluded, and verified with data flowing.
- **Conversion tracking** for the money-actions: phone click, WhatsApp click, form submit (add "Get directions" if relevant), each tested and marked as a key event.
- **Search Console** verified with the sitemap submitted and returning "Success."
- A one-page **baseline snapshot** recording where the client stands *today*.

If you don't have a real client yet, use the Simulated Client fallback below — the work is identical.

## Steps / checklist

Work top to bottom; don't skip verification:

1. **Install GA4.** Create account → property → web data stream. Grab the Measurement ID.
2. **Set INR + IST** at the property level (currency ₹, time zone GMT+5:30) — *before* data accumulates.
3. **Deliver the tag** by the simplest route the site allows (CMS field / gtag / GTM). Decide GTM in/out on merit, not habit.
4. **Set up GBP-relevant conversions:** phone (`tel:`), WhatsApp (`wa.me`), form submit, directions (`google.com/maps`). Use Enhanced Measurement for what it covers; GTM click triggers for the rest.
5. **Verify in Realtime + DebugView.** Perform each action yourself and watch it fire. **Mark each as a key event.**
6. **Exclude internal traffic** (your IP and the client's office) so the baseline isn't polluted.
7. **Set up Search Console.** Add & verify the property (Domain via DNS if possible, else URL-prefix via the GA4/GTM tag). **Submit the sitemap** and confirm "Success."
8. **Link GSC to GA4** (Admin → Product Links).
9. **Record the baseline snapshot** (see format below). Note the install date — some GA4 rows will read "just installed" and that's fine; capture what exists now.

## Deliverable format

A short **"Measurement Setup + Baseline"** document (a doc, a slide, or a sheet — client-facing) containing:

- **Setup confirmation:** Measurement ID, install date, tag method, conversions live, GSC property type, sitemap status — each with a screenshot placeholder you'll fill with a real screenshot.
- **The baseline table:**

| Metric | Source | Value today | Notes |
|---|---|---|---|
| Monthly organic sessions | GA4 | *(or "GA4 installed [date] — accruing")* | |
| Website conversions (calls/WA/form) | GA4 key events | | Which events are live |
| Top 10–20 queries + clicks/impressions/position | GSC | | The ranking "before" |
| Pages indexed vs not indexed | GSC (Pages) | | Any indexing issues found |
| GBP calls & direction requests | GBP insights | | Tracked separately from GA4 |

Plus a folder of the real screenshots (Realtime showing a live user, DebugView showing a conversion firing, GSC "Ownership verified" and sitemap "Success").

## Simulated Client fallback

*(Hypothetical — clearly fictional, for readers with no live client yet.)*

**"Rao Fitness Studio," a composite two-branch gym in Indiranagar, Bengaluru.** Spin up a free practice-lab site — a simple WordPress.com/Wix/Blogger site, or a small static page you host — with a phone number, a WhatsApp link, an enquiry form and an embedded map. Run the entire checklist against *that* site: install GA4, set INR/IST, wire the four conversions, verify Search Console, submit the sitemap, and document a baseline. It won't have real traffic, but you'll prove the *mechanics* end to end — which is exactly what a client is paying you to know how to do. Screenshot every step.

## Self-assessment rubric

Grade yourself honestly — "Client-ready" means you'd stake your reputation on it.

| Criterion | Missing | Getting there | Client-ready |
|---|---|---|---|
| **GA4 live & verified** | Not installed, or no data flowing | Installed but wrong currency/time zone, or unverified | Firing on all pages, INR + IST, internal traffic excluded, confirmed in Realtime |
| **Conversions defined** | None, or pageviews called "conversions" | Events fire but not marked as key events, or untested | Phone/WhatsApp/form (+directions) tested in DebugView and marked as key events |
| **GSC verified + sitemap** | Not set up | Verified but no sitemap, or sitemap erroring | Verified, sitemap "Success," linked to GA4 |
| **Baseline captured** | No snapshot | Partial (e.g. sessions only, no queries) | Full table: traffic, conversions, top queries + positions, indexing, GBP actions, dated |

If any row sits in "Missing" or "Getting there," go back to that lesson before you call the module done. A half-installed scoreboard is worse than none — it lies with confidence.

## How this feeds your capstone

This baseline is the reference line for **everything** that follows. When Module 5's local-SEO work lifts the GBP calls, when Module 6's on-page fixes push those "striking distance" queries onto page one, when Module 9's Ads drive form fills — you'll prove each one by pointing back to *this* snapshot. Keep the document safe and dated. Months from now, it's the receipt that turns "trust me" into "look."
