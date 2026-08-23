---
title: Why You Install Tracking Before You Optimise
description: Baselining and attribution are what turn your SEO effort into a provable, billable result.
sidebar:
  order: 1
---

Picture Meena's Dental Clinic in Jayanagar, Bengaluru — a composite client we'll follow through this module, the kind of practice you'll actually work with. Dr. Meena is sharp, busy, and mildly burned: her last "SEO guy" took ₹8,000 a month for six months, sent her a PDF full of green arrows, and vanished. When she asks *did it actually bring me patients?*, nobody can answer. Not him. Not her. The data to answer that question was never collected.

That right there is the whole reason this module exists. The single most common way freelancers lose clients isn't bad work — it's **unprovable work**. You can be genuinely good at SEO and still get fired because you can't show the number moving.

## No "before," no proof

Optimisation is a claim: *"I made this better."* A claim without a starting point is just a story. If you don't know Meena was getting 40 organic sessions and 3 appointment calls a week *before* you touched anything, then when she's getting 90 sessions and 11 calls three months later, you can't prove you caused it — and, more painfully, you can't *bill confidently* for it.

A baseline is the "before" photo. It's not glamorous. It's a Tuesday-afternoon task. But it's the difference between "trust me, it's working" and "here's the chart."

:::caution[⚠️ Gotcha]
**"We'll add tracking later" means never.** The moment work starts, "later" becomes "after we see results," which becomes "why bother now, we've already improved." And now you've optimised away your own baseline. You literally cannot re-create last month's numbers once last month is gone — GA4 only records from the day it's installed forward. Measurement is a *day one* job, not a *someday* job.
:::

## Attribution: knowing which effort caused which result

Baselining tells you *that* something changed. **Attribution** tells you *what changed it.* When Meena's calls jump, was it the new title tags you wrote? The five reviews you helped her collect? The ₹6,000 Google Ads test? The festival season? Without measurement wiring — traffic sources, conversions, campaign tags — you're guessing, and guessing badly.

Attribution is what lets you say "the organic work drove the calls, the Ads drove the form fills, kill the Ads that aren't converting." That sentence is worth a retainer. Guesswork isn't.

:::note[🎓 Foundations]
**What's a "conversion"?** A conversion is any action a visitor takes that has business value — the thing you actually want them to do. For a US software company that's a signup. For an Indian local SMB it's almost always **a way to make contact**: a phone call, a WhatsApp message, a "Get directions" tap, a filled enquiry form, a booking. A visit is not a conversion. A *contact* is. Everything in this module builds toward measuring those contacts, because those are the events that turn into money.
:::

## Starting work blind is a real risk, not a vibe

Optimising without measurement isn't just unprovable — it's *dangerous* to your reputation:

- You might "improve" a page that was already the best converter and quietly make it worse, with no way to notice.
- You might pour effort into ranking a keyword that brings traffic but zero enquiries — busy, broke, and blind.
- You might take credit for a seasonal bump you didn't cause, then look like a fraud when the season ends and "your" numbers fall.

Measurement protects *you*. It's not paperwork for the client; it's your professional insurance policy.

:::tip[⚔️ War story]
A freelancer (composite, but you've met him) rewrote a boutique's entire site over three weeks — beautiful work. The owner then said sales were *down*. He had no baseline, no analytics, nothing to check. Turned out an unrelated payment-gateway bug had broken checkout the same week; his SEO was fine. But with no data, he couldn't prove it, ate the blame, and lost the client. Ten minutes of GA4 setup on day one would have shown checkout starts flat and completions cratering — case closed, freelancer vindicated.
:::

## What a baseline snapshot actually contains

When you take a baseline for Meena, you're capturing the "before" across every channel you'll later influence:

| What | Where it comes from | Why it matters |
|---|---|---|
| Monthly organic **sessions** | GA4 (once installed) | The traffic you'll try to grow |
| **Conversions** — calls, WhatsApp, forms | GA4 key events | The contacts that equal money |
| **Top queries & positions** | Search Console | What you already rank for, and where |
| **Indexing status** | Search Console (Pages report) | Whether Google can even see the site |
| **Google Business Profile calls & direction requests** | GBP performance insights | Local demand you'll grow separately |

You won't have all of it on day one — GA4 needs time to accumulate. That's fine. You record what exists now, note the install date, and let it run.

:::caution[⚠️ Gotcha]
**GBP calls live in a different place.** Phone calls that come from your client's Google Business Profile (the Maps/Search listing) are counted in **GBP's own performance insights**, *not* in GA4. GA4 only sees taps on the phone link on the *website*. You'll capture both — just from two different tools. Mixing them up, or double-counting, is a classic beginner error we'll untangle in the conversions lesson.
:::

## Do this now

Open a blank doc titled **"[Client] — Baseline Snapshot — [today's date]."** Don't fill it in yet — you don't have the tools installed. Just create it and write the install date at the top. This doc is your Assignment deliverable; every lesson in this module adds a row to it. Committing the date to paper right now is your promise that measurement came *first*.

<details>
<summary>Q: A client says "just start improving things, we'll set up analytics once we see it working." What's wrong with that, in one sentence?</summary>

Analytics only records from the day it's installed forward, so waiting means you permanently lose the "before" and can never prove the "after" was caused by your work — you'd be optimising away your own baseline.
</details>

<details>
<summary>Q: What's the difference between baselining and attribution?</summary>

Baselining captures the starting numbers so you can prove *that* something changed; attribution connects each result to the specific effort that caused it, so you can prove *what* changed it and double down on what's working.
</details>

Next: we stop talking about measurement and go install it — GA4, from scratch, done right.
