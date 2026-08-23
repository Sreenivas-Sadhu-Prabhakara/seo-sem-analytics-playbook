---
title: Account Architecture
description: Organise a Google Ads account cleanly so every rupee is spent on relevant searches, not chaos.
sidebar:
  order: 2
---

You've inherited a campaign from the client's "cousin's friend" and you open it up. One campaign. One ad group. Forty-seven keywords stuffed inside, from "dentist" to "teeth whitening cost" to "kids braces price," all pointed at the same two ads and the homepage. It's a junk drawer. And like every junk drawer, nothing in it works well because everything in it is jumbled together.

Account architecture is the unglamorous skill that separates a professional campaign from an expensive mess. Get the structure right and relevance goes up, Quality Score goes up, cost-per-click goes *down*, and you can actually tell what's working. Get it wrong and you're paying premium prices for irrelevant clicks and can't diagnose why.

## Why structure pays

Google rewards relevance with cheaper clicks (remember Ad Rank from the last lesson). Relevance comes from tight structure: a searcher who types "kids braces cost" should hit an ad group that is *only* about kids' braces, with an ad that says "kids' braces" and a landing page about kids' braces. That three-way match is only possible if your account is organised. Sloppy structure is a tax you pay on every click, forever. Clean structure is the freelancer's quiet edge — and a big part of what your management fee buys.

## The hierarchy: four levels

A Google Ads account nests like a set of dabbas:

| Level | What it is | Local example |
|---|---|---|
| **Account** | The whole thing — one business, one billing setup | Meena's Dental Clinic |
| **Campaign** | A budget + settings bucket (locations, schedule, bid strategy) | "Search — Implants — Jayanagar" |
| **Ad group** | One tight theme, holding related keywords + ads | "Dental Implants" |
| **Keywords & Ads** | The searches you bid on and the ads that show | keyword: `dental implants cost`; ad: an RSA about implants |

**Budgets live at the campaign level.** Settings that should differ — a location, a schedule, a bid strategy — are reasons to split into separate campaigns. **Themes** are reasons to split into separate ad groups.

<figure class="rr-fig">
	<span class="rr-fig__title">HOW THE ACCOUNT NESTS</span>
	<div class="rr-pyramid">
		<div class="rr-pyramid__row"><b>Keywords &amp; Ads</b><span>the exact searches you bid on and the ads that show</span></div>
		<div class="rr-pyramid__row"><b>Ad group</b><span>one tight theme — related keywords + its ads</span></div>
		<div class="rr-pyramid__row"><b>Campaign</b><span>budget, geo, schedule, bid strategy</span></div>
		<div class="rr-pyramid__row"><b>Account</b><span>the whole business — one billing setup</span></div>
	</div>
	<figcaption class="rr-fig__cap">Broadest at the base (the account), narrowing to the exact search — illustrative structure.</figcaption>
</figure>

:::note[🎓 Foundations]
**Campaign vs ad group — the one thing beginners muddle.** A *campaign* controls the money and the settings: how much you spend a day, which city you target, what hours you run, how you bid. An *ad group* controls the *matching*: a small cluster of closely related keywords and the ads that answer them. One campaign holds several ad groups. Rule of thumb: **if two things need different budgets or targeting, split the campaign; if they're just different topics, split the ad group.**
:::

## The golden rule: one theme, one ad group

The single most important structural habit: **each ad group covers exactly one tightly-related theme.** All the keywords in it are near-synonyms of one intent, and the ads speak directly to that intent.

Bad (junk drawer):
- Ad group "Dental": `dentist`, `teeth whitening`, `root canal`, `braces`, `implants cost`

Good (tight):
- Ad group "Teeth Whitening": `teeth whitening`, `teeth whitening cost`, `dentist for whitening near me`
- Ad group "Dental Implants": `dental implants`, `dental implants cost`, `tooth implant near me`
- Ad group "Root Canal": `root canal treatment`, `rct cost`, `emergency root canal`

Now each ad group's ad can literally repeat the searcher's words ("Affordable Dental Implants in Jayanagar"), Quality Score climbs, and you can pause "Teeth Whitening" alone if it underperforms without touching implants. Relevance isn't a nicety here — it's the discount mechanism.

:::caution[⚠️ Gotcha]
Don't over-shard either. Fifty ad groups with one keyword each starves every one of data and becomes a nightmare to manage on a small budget. Group genuinely synonymous searches together; split only when the *intent or the ideal ad copy differs*. "Cost of implants" and "implants near me" can share an ad group. "Implants" and "dentures" cannot.
:::

## The campaign types, in one line each

For local SMB work you'll live almost entirely in **Search**, but know the menu so you can advise:

- **Search** — text ads on Google's results for what people type. **The freelancer's bread-and-butter:** high intent, controllable, transparent. Start here, always.
- **Performance Max (PMax)** — one campaign that Google auto-spreads across Search, Display, YouTube, Gmail, Maps and Discover using your assets and goals. Powerful for some, but a *black box* — beginners can't see or control where money goes. Not a first campaign.
- **Display** — banner/image ads across websites and apps. Great for awareness and remarketing, weak for direct local leads.
- **Video** — ads on YouTube. Brand-building, not "book an appointment today."
- **Shopping** — product listings with image + price, for e-commerce with a product feed. Not relevant to a service clinic.
- **Demand Gen** — visual ads across YouTube, Discover and Gmail feeds. Social-style demand creation, not high-intent search.
- **Local intent / PMax with store goals** — Google can optimise a PMax campaign toward **store visits and local actions** for a business with a physical storefront (calls, direction requests). Useful once you've mastered Search — still start with Search.

The through-line: **for a local business chasing enquiries, Search is where you begin and where most of the budget belongs.** Everything else is a later conversation.

:::note[📋 Swipe this]
**Account-structure blueprint for a local service business:**

```
Account: [Client Name]
│
├── Campaign: Search — [Core Service] — [City]
│     Settings: geo = [city + radius], schedule = business hours,
│               budget = ₹[daily], bid = Maximize Clicks (to start)
│     ├── Ad group: [Service theme A]   → 5–8 tight keywords + 1 RSA
│     ├── Ad group: [Service theme B]   → 5–8 tight keywords + 1 RSA
│     └── Ad group: [Service theme C]   → 5–8 tight keywords + 1 RSA
│
├── Shared: Negative keyword list ("free", "jobs", "cheap", other cities…)
└── Conversion actions: Call, Form submit, WhatsApp click (imported from GA4)
```

Start with **one campaign and two-to-four tight ad groups.** You can always expand; you can't easily un-tangle a mess.
:::

## Naming conventions: your future self will thank you

Name things so a stranger (or you, in three months, at 11pm) can read the account at a glance. A simple, consistent pattern:

`[Type] — [Theme] — [Geo]` → `Search — Implants — Jayanagar`

Ad groups get the plain theme: `Dental Implants`, `Root Canal`. Consistent names make reports readable and stop you from mistaking one campaign for another when you're pausing something at speed.

:::tip[🚀 Level up]
Once you run multiple clients, standardise the *same* naming skeleton across all of them. When every account reads `Search — [Service] — [City]`, you can jump between clients without re-learning each mess, and you can hand a campaign to a collaborator without a two-hour handover. Consistency scales; cleverness doesn't.
:::

## Conversion tracking first — before anything

Here's the order that separates pros from amateurs: **you set up conversion tracking as part of building the account, not as an afterthought.** The whole structure exists to funnel toward measurable actions — a call, a form fill, a WhatsApp tap. If you can't see which ad group produces those, the tidiest structure in the world is decoration. We build the tracking itself in [lesson 6](/seo-sem-analytics-playbook/modules/09-google-ads/6-landing-pages-and-conversion/); for now, just internalise that a campaign without it is not ready to launch. Structure and measurement are the same job.

## Common mistakes

- One giant ad group holding every keyword ("the junk drawer").
- Splitting by topic when you should split the *campaign* by budget/geo — or vice versa.
- Over-sharding into single-keyword ad groups that never gather data.
- Random names that make reports unreadable.
- Building the whole thing before deciding how you'll measure success.

## Do this now

Sketch your capstone client's account on paper: **one campaign, and two-to-four ad groups**, each with a one-word theme and three or four keyword ideas. Give the campaign a name in the `Search — Theme — City` pattern. You're not building in the tool yet — you're proving the structure holds before you spend.

<details>
<summary>Q: You want to advertise the same service in two cities with different budgets. Two ad groups, or two campaigns?</summary>

Two campaigns. Budgets and geographic targeting are set at the *campaign* level, so different budgets or different cities always mean separate campaigns — an ad group can't hold its own budget or location.
</details>

<details>
<summary>Q: Why does cramming twenty unrelated keywords into one ad group cost you money?</summary>

Because the ad can't be relevant to all of them at once, so Quality Score drops and every click costs more. Tight, single-theme ad groups let the ad mirror the search, which lifts relevance and *lowers* your cost-per-click.
</details>

Structure's set. Next: choosing the exact keywords and match types that decide which searches trigger your ads — and the negatives that stop the wrong ones.
