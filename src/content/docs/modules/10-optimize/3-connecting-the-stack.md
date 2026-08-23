---
title: Connecting Ads ↔ GA4 ↔ Search Console
description: Link your three free tools into one joined-up picture and stop arguing with yourself about how many leads there were.
sidebar:
  order: 3
---

You sit down to write Meena's monthly report and hit a small crisis. Google Ads says the campaign drove **22 conversions**. GA4 says **17**. Search Console says the site got **340 organic clicks**, but GA4's Organic Search shows **290 sessions**. Nothing matches anything. You feel like you've been handed three different clocks in three different time zones and told to agree on when to serve lunch.

Relax. The tools disagree because they're *supposed* to — each measures a different slice of reality with its own rulebook. The professional skill isn't forcing them to match. It's **linking them so they share data**, then knowing which tool to trust for which question. Do that and you go from three arguing dashboards to one coherent story you can put your name on.

## The three tools, and what each is genuinely best at

Before you link anything, get this straight, because it prevents 90% of confusion:

| Tool | The one thing it's best at | Do NOT use it for |
|---|---|---|
| **Google Search Console (GSC)** | *Organic* search: which queries you appear for, your position, impressions, clicks — Google's own view of your SEO. | On-site behaviour or paid performance. It sees the search results page, not your website's insides. |
| **Google Analytics 4 (GA4)** | On-*site* behaviour and conversions: what people do after they arrive, across all channels. | Precise organic *query* data (GSC owns that) or being the billing source of truth for Ads. |
| **Google Ads** | *Paid* performance: spend, clicks, CPC, and paid conversions for bidding decisions. | Judging your organic SEO. It only knows about traffic you paid for. |

Remember it as: **GSC = before the click (on Google). GA4 = after the click (on your site). Ads = the money you spent to buy some of those clicks.** Three different vantage points on the same customer.

## Link 1: Google Ads ↔ GA4

This is the highest-value link, and most cheap "ad guys" never bother. Linking Ads and GA4 buys you two things:

1. **Import GA4 conversions into Ads** so the campaign can bid toward *real* on-site actions (a WhatsApp tap, a form submit) instead of just clicks. This is what makes Smart Bidding actually optimise for leads.
2. **See Ads data inside GA4** — your paid campaigns show up properly as the Paid Search channel, with cost data, so you can compare paid and organic in one place.

**How, robustly** (menus move — follow the intent):

1. In **GA4 → Admin → Product links → Google Ads links**, link the client's Google Ads account. You'll need edit access to both.
2. In **Google Ads → Tools → Data manager / linked accounts**, confirm the link and enable **auto-tagging** (the `gclid` parameter Ads adds to click URLs so GA4 recognises paid clicks — leave it ON).
3. Decide your conversion source. The clean modern approach for an SMB: define conversions once in GA4, then **import those GA4 key events into Ads** as conversion actions. One definition, one source of truth.

:::caution[⚠️ Gotcha]
**Import GA4 conversions into Ads — don't also set up a separate Ads conversion tag for the same action.** If you track "form submit" both as a GA4 key event *and* as a native Google Ads tag on the same button, Ads counts it twice and your cost-per-lead looks half what it really is. Pick one source per action. For most SMB setups, defining conversions in GA4 and importing them into Ads is the cleanest single-source approach. Double-counting is the most common self-inflicted reporting wound there is.
:::

## Link 2: Search Console ↔ GA4

Linking GSC to GA4 pulls your organic *query* and *landing-page* data into GA4's interface, so you can see, in one place, which search queries brought people in **and** what those people then did on the site.

**How:** **GA4 → Admin → Product links → Search Console links** → link the verified GSC property → then, one extra step everyone forgets, **publish the Search Console reports** so they appear in GA4's report navigation (Reports → Library, or under Acquisition). Without that publish step the link exists but the reports stay hidden and you'll swear it didn't work.

Now you can answer the money question SEO can't answer alone: *"the query 'braces cost jayanagar' brings 50 clicks a month — do those visitors convert, or bounce?"* GSC gives you the query and the click; GA4 gives you what happened next. Neither tool tells you that alone. Linked, they do.

:::note[📋 Swipe this]
**"Which tool answers which question" cheat-sheet** — pin this above your desk:

- *"What are people searching to find us, and where do we rank?"* → **Search Console** (Performance → Queries).
- *"Which pages get impressions but few clicks?"* → **Search Console** (Pages, sort by CTR). Your title-tag hit list.
- *"Where does our traffic come from — organic, paid, direct?"* → **GA4** (Traffic acquisition).
- *"What do visitors do on the site, and what converts?"* → **GA4** (Engagement + Key events).
- *"How much did we spend and what did paid clicks cost?"* → **Google Ads** (Campaigns).
- *"Is the ad spend producing real leads at a sane cost?"* → **Ads, reading imported GA4 conversions.**
- *"Did the query that ranks well actually convert?"* → **GSC ↔ GA4 linked.**
:::

## Building one source of truth for "leads"

Here's the discipline that makes you look like a genius: **decide, in writing, what counts as a "lead" and which tool is its official scorekeeper — then never let the client (or you) quote a different number.**

For Meena, a "lead" might be: *any phone tap, WhatsApp click, or form submit recorded as a GA4 key event.* GA4 is the official scorekeeper. Ads' conversion count is used *inside Ads for bidding*, GSC clicks are used *for SEO diagnosis* — but when the report says "we generated 31 leads this month," that number comes from **one place, defined once.** The moment two numbers claim to be "leads," the client trusts none of them, and neither should you.

:::caution[⚠️ Gotcha]
**Never compare raw numbers across tools and panic.** GSC clicks won't equal GA4 organic sessions — GSC counts clicks on the results page; GA4 counts sessions that started and loaded the tag (ad-blockers, bounces before load, and different time-zone/attribution windows all shave the number). A 10–30% gap between GSC clicks and GA4 sessions is *normal and expected.* It's not a bug and it's not your fault. Explain the gap to the client before they find it and think you're hiding something.
:::

## Common mistakes

- Double-counting a conversion by tracking it in both GA4 and a native Ads tag.
- Linking GSC to GA4 but forgetting to *publish* the reports, then assuming it failed.
- Leaving auto-tagging off, so Ads clicks land in GA4 as "Direct" and your paid channel looks empty.
- Letting "leads" mean three different numbers from three tools in the same report.

## Do this now

For your capstone client, confirm all three links exist: **Ads ↔ GA4** (Product links), **GSC ↔ GA4** (Product links, reports published), and **auto-tagging ON** in Ads. Then write one sentence in your notes defining "a lead" and naming its single source of truth. That definition goes at the top of every report and optimisation-log entry from now on.

<details>
<summary>Q: Google Ads reports 22 conversions; GA4 reports 17 for the same period. Is something broken?</summary>

Not necessarily. The two tools use different attribution windows, conversion definitions and counting rules, and one may be counting an action the other isn't. The real danger is *double-counting* (tracking the same action in both). Fix it by choosing one source per conversion — typically define in GA4 and import into Ads — and reconcile from there rather than expecting an exact match.
</details>

<details>
<summary>Q: The client asks why Search Console shows 340 organic clicks but GA4 shows 290 organic sessions. What do you tell them?</summary>

That a gap is normal: GSC counts clicks on Google's results page, while GA4 counts sessions where the page loaded and the tag fired — ad-blockers, instant bounces, and different time-zone/attribution rules mean GA4 is usually 10–30% lower. It's expected behaviour, not a tracking failure.
</details>

Next: with the picture joined up, we turn it into action — the weekly optimisation loop that turns numbers into changes.
