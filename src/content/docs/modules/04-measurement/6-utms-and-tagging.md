---
title: UTMs & Campaign Tagging
description: Tag the traffic you drive so you get the credit — without breaking your own analytics data.
sidebar:
  order: 6
---

You spend a Saturday designing Meena's Diwali offer, blast it to her WhatsApp broadcast list and post it on Instagram. Monday, sixty new sessions land on the site and three people book. In GA4 they show up as… "direct" and "unassigned." Your beautiful campaign, invisible. The client thinks the traffic appeared by magic, and you don't get credit for the thing that actually worked.

**UTMs** are how you fix that. They're little tags you bolt onto a link so GA4 knows exactly where a visitor came from. Master them and every campaign you run becomes traceable, reportable, and — crucially — *attributable to you.*

## What UTM parameters are

A UTM is just extra text appended to a URL after a `?`. GA4 reads it and files the visitor under the right source. There are five:

| Parameter | Answers | Example value |
|---|---|---|
| `utm_source` | *Where* did it come from? | `whatsapp`, `instagram`, `justdial`, `newsletter` |
| `utm_medium` | *What kind* of traffic? | `social`, `broadcast`, `email`, `qr`, `referral` |
| `utm_campaign` | *Which campaign*? | `diwali_offer_2026` |
| `utm_term` | *(optional)* keyword — mostly for paid | `teeth_whitening` |
| `utm_content` | *(optional)* which version/link | `story_swipeup`, `footer_button` |

A tagged link looks like this:

```
https://meenadental.com/diwali-offer?utm_source=whatsapp&utm_medium=broadcast&utm_campaign=diwali_offer_2026
```

The first three (**source, medium, campaign**) are the workhorses — set those on every campaign link and you're 90% there. Term and content are for when you're running multiple variants and need to tell them apart.

:::note[🎓 Foundations]
**Why not just "look at the referrer"?** Because most of the channels that matter in India don't pass a clean referrer. A WhatsApp tap, a link in an Instagram bio, a QR code on a flyer — these arrive as **"direct"** traffic with no origin attached, indistinguishable from someone typing the URL. UTMs are you *manually* labelling the link so GA4 doesn't have to guess (and guess wrong).
:::

## When to use UTMs (and when never to)

This is where beginners hurt themselves. UTMs are for **external, inbound links *you* control** that point *at* the site:

**✅ Tag these:**

- **Email / newsletter** links
- **Social posts** (Instagram bio, Facebook, LinkedIn)
- **WhatsApp broadcasts** and status links
- **Offline / QR codes** (flyer, menu, hoarding, visiting card) — tag the URL the QR encodes
- **Listing / partner links** where you can set the destination URL (some directory profiles, a partner's site)

**🚫 NEVER tag these:**

- **Internal links** — links *within* the same site (menu, buttons, "read more"). This is the cardinal sin (see Gotcha).
- **Google Ads final URLs** — Ads has **auto-tagging** (the `gclid` parameter) that's richer than UTMs. Adding your own UTMs on top is redundant and can *break* the clean Ads → GA4 handshake. Leave Ads URLs alone.
- Anything where the source is already obvious and clean (you rarely need to tag organic-search results — you can't, anyway).

:::caution[⚠️ Gotcha]
**Tagging internal links shreds your data.** Put a UTM on a *button that links to another page on the same site* and here's what happens: when a visitor clicks it, GA4 sees the UTM, decides "new campaign source!", **ends their current session and starts a brand-new one** — re-attributing them away from however they truly arrived. Your real sources (organic, WhatsApp) get robbed and dumped into a fake internal "campaign." Sessions inflate, attribution scrambles, and your reports become fiction. **UTMs point *at* your site from *outside* — never *between* your own pages.** Ever.
:::

:::caution[⚠️ Gotcha]
**Don't double-tag Google Ads.** Ads auto-tagging (`gclid`) already tells GA4 everything — campaign, ad group, keyword, cost. Slapping manual UTMs on your Ads final URLs is at best redundant and at worst overrides the richer auto-tagged data, breaking cost and conversion linkage. Rule: **Ads = auto-tagging, everything else = UTMs.**
:::

## Build them with the free URL Builder (don't hand-type)

Hand-typing UTMs invites typos, and typos fragment your data (`Instagram` and `instagram` become two different sources). Use Google's free **Campaign URL Builder** (search "Google Campaign URL Builder" — the ga-dev-tools page): fill in the fields, copy the generated URL, done. For offline use, paste that tagged URL into any QR-code generator.

## A consistent naming convention (this is the real skill)

The tool prevents typos; *discipline* prevents chaos. Pick a convention and never deviate:

- **lowercase everything** — GA4 is case-sensitive, so `WhatsApp` ≠ `whatsapp`. Force lowercase always.
- **underscores, no spaces** — spaces become ugly `%20` in URLs; use `diwali_offer_2026`.
- **stable vocabulary** — decide your fixed set of sources and mediums and reuse them. Don't invent `whatsApp`, `wa`, `WA-broadcast` for the same channel across three campaigns.
- **dated campaigns** — `diwali_offer_2026`, not just `offer`, so next year's is distinct.

:::note[📋 Swipe this]
**UTM naming convention — lock this in per client:**

| Field | Rule | Allowed values (example set) |
|---|---|---|
| `utm_source` | the platform | `whatsapp`, `instagram`, `facebook`, `newsletter`, `justdial`, `qr_flyer` |
| `utm_medium` | the channel type | `social`, `broadcast`, `email`, `qr`, `referral` |
| `utm_campaign` | `name_year` (or `name_monthyear`) | `diwali_offer_2026`, `newyear_checkup_jan2026` |
| `utm_content` | *(optional)* link variant | `bio_link`, `story_swipeup`, `flyer_bottom` |

**Rules:** all lowercase · underscores not spaces · reuse the same source/medium words forever · one campaign name per campaign, dated. Keep this table in a shared sheet so every link you (and the client) build matches.
:::

## Where they show up in GA4

Tagged traffic lands in **Reports → Acquisition → Traffic acquisition**, grouped by "Session source / medium" (e.g. `whatsapp / broadcast`) and, when you switch the dimension, by campaign. That's where you'll point at the screen and say "the Diwali WhatsApp blast drove 60 sessions and 3 bookings" — a sentence you literally could not say without the tag.

:::note[💰 Rupee check]
UTMs cost **nothing** — but the *attribution* they unlock is what justifies your retainer. When you can show "this ₹0 WhatsApp broadcast out-converted the ₹6,000 Ads test," you're not just a service cost anymore — you're the person who tells the client *where their money and effort actually work.* That clarity is what renews contracts (illustrative example — real results vary; the point is that provable attribution is your leverage, not the specific numbers).
:::

## Common mistakes

- **UTM-tagging internal links** → shattered sessions and fake sources. The #1 killer.
- Manually tagging **Google Ads** URLs → breaks auto-tagging's richer data.
- Inconsistent casing/spelling → the same channel splits into several "sources."
- Hand-typing instead of using the URL Builder → typos, broken links.
- Forgetting to date campaigns → this year's and last year's data merge.

## Do this now

For your capstone client, (1) write the UTM convention table above into your shared sheet with *their* actual channels, and (2) build **one** properly-tagged link for a real upcoming post or WhatsApp message using the Campaign URL Builder. Add "UTM convention agreed" to your baseline doc. From now on, every campaign link you touch is traceable.

<details>
<summary>Q: A colleague adds `?utm_source=home_button` to the "Book Now" button on the homepage that links to the contact page. What breaks?</summary>

That's an internal link, so the UTM forces GA4 to end the visitor's real session and start a fresh one attributed to a fake "home_button" campaign — stealing credit from their true source (organic, WhatsApp, etc.) and inflating session counts. Never put UTMs on links between your own pages.
</details>

<details>
<summary>Q: Should you add UTM parameters to your Google Ads final URLs to track them better?</summary>

No. Google Ads uses auto-tagging (the `gclid` parameter), which passes richer data to GA4 than manual UTMs and links cost/conversion data automatically. Adding UTMs on top is redundant and can override that cleaner data. Ads = auto-tagging; everything else = UTMs.
</details>

<details>
<summary>Q: Why does `Instagram` in one link and `instagram` in another cause a problem?</summary>

GA4 treats UTM values as case-sensitive, so those become two separate sources and your Instagram traffic splits across two rows, understating each. Force lowercase (and consistent spelling) in your naming convention, ideally via the URL Builder, to keep one channel as one source.
</details>

That's the toolkit. Next stop — the Assignment, where you wire all of this onto your real capstone client and capture the baseline that every later win gets measured against.
