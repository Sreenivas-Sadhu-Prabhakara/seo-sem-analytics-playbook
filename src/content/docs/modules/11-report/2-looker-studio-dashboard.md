---
title: Build a Free Looker Studio Dashboard
description: Wire GA4, Search Console and Google Ads into one live, branded, zero-cost dashboard your client can open any time.
sidebar:
  order: 2
---

Dr. Meena texts you on a Tuesday: *"How are we doing this month?"* The amateur freelancer's stomach drops — that means an hour of exporting spreadsheets, screenshotting GA4, and stitching it into an email. The pro replies in nine seconds: *"Live link's in your bookmarks — open it any time, it's always current."* Then goes back to their chai.

That's what a dashboard buys you: you build it once, and it reports forever. And the tool that does it is completely free.

## Why this pays

A live dashboard makes you look like an agency for the price of an afternoon. It kills the "are we doing well?" texts, it makes your monthly report faster to write (the numbers are already there), and it quietly signals *permanence* — a client with a branded dashboard bookmarked feels like they have a marketing department, not a temp. Some freelancers even charge a one-time "dashboard setup" fee for it. You're about to build one for ₹0.

:::note[🎓 Foundations]
**What is Looker Studio?** It's Google's free reporting tool (you may have heard its old name, Google Data Studio). It connects directly to your Google data sources — GA4, Search Console, Google Ads, Google Sheets — and turns them into charts and tables on a shareable page that updates on its own. No install, no licence, works in the browser. Find it at the Looker Studio site while signed into the Google account that has access to the client's data.
:::

## Step 1 — Connect the right sources (natively)

The magic is that Google's own tools plug straight in with first-party connectors — no dodgy middleware. In a new Looker Studio report, "Add data" and pick:

- **Google Analytics** → the client's **GA4** property. This is your leads engine: conversions, channels, top pages.
- **Search Console** → the client's verified property. Two tables exist — *Site Impression* gives you queries (with impressions, clicks, CTR, average position) but not landing pages, and *URL Impression* gives you landing pages but not queries. You can't combine query and page in one table, so use the Site table for your queries tile. This is your organic-visibility source.
- **Google Ads** → the client's Ads account. Spend, clicks, conversions, cost per conversion.

:::caution[⚠️ Gotcha]
**You can only connect data you have access to.** Looker Studio borrows *your* Google permissions. If you can't see the client's GA4 or Ads account, the connector won't either. Sort access first — get added as a user on GA4 (Viewer is enough), Search Console, and Google Ads — before you start building, or you'll rage at "no data" that's really "no permission."
:::

:::caution[⚠️ Gotcha]
**There's no free first-party connector for Google Business Profile.** GBP calls and direction requests live in GBP's own performance insights, and Google doesn't offer a native Looker Studio connector for them. Don't promise a live GBP tile you can't deliver. The honest options: pull the GBP numbers manually each month into a **Google Sheet** and connect *that* sheet as a source, or use a paid third-party connector if the client's budget justifies it. For most SMBs, a monthly hand-entered GBP row in a Sheet is plenty.
:::

## Step 2 — Build the tiles that matter

Resist the urge to add everything. A great SMB dashboard is skimmable in ten seconds. Build these, in roughly this order top to bottom:

1. **Scorecard row (the headline numbers):** big single-number tiles for the money metrics — total conversions (calls + WhatsApp + forms), and if Ads is running, cost per lead. These are the first thing the owner's eye lands on.
2. **Leads over time:** a time-series line of conversions by day or week. The shape tells the story — up-and-to-the-right is the whole point.
3. **Channel breakdown:** a bar or pie of where the leads came from (Organic, Paid, Direct, Referral, GBP). Shows the owner the mix they're paying for.
4. **Top pages:** which pages pull the traffic and conversions — usually the home page, the service page, the contact page.
5. **Top queries & positions:** from Search Console — the searches winning impressions and clicks, with average position. This is where the ranking-curious client gets their fix, in context.
6. **Ad spend vs conversions / CPL:** if Ads is live — spend against conversions, and the cost per lead. The single most important tile for justifying ad budget.
7. **GBP calls & directions (if available):** from your Sheet — a simple monthly bar.

<figure class="rr-fig">
	<span class="rr-fig__title">THE SCORECARD ROW — WHAT THE OWNER'S EYE HITS FIRST</span>
	<div class="rr-stats">
		<div class="rr-stat rr-stat--good"><span class="rr-stat__num">42</span><span class="rr-stat__label">total leads this month</span></div>
		<div class="rr-stat rr-stat--seo"><span class="rr-stat__num">28</span><span class="rr-stat__label">phone calls</span></div>
		<div class="rr-stat rr-stat--seo"><span class="rr-stat__num">9</span><span class="rr-stat__label">WhatsApp enquiries</span></div>
		<div class="rr-stat rr-stat--ads"><span class="rr-stat__num">₹180</span><span class="rr-stat__label">cost per lead (Ads)</span></div>
	</div>
	<figcaption class="rr-fig__cap">Illustrative numbers — your live dashboard shows the client's real figures. Money metrics headline; diagnostics sit below.</figcaption>
</figure>

:::note[📋 Swipe this]
**Dashboard layout (top to bottom, one page):**

```
[ Logo + Client name ]        [ Date range control ]
──────────────────────────────────────────────
[ Leads ]  [ Calls ]  [ WhatsApp ]  [ Cost / lead ]   ← scorecards
──────────────────────────────────────────────
[  Leads over time (line, this period vs previous)  ]
──────────────────────────────────────────────
[ Channel breakdown ]        [ Top pages table ]
──────────────────────────────────────────────
[ Top queries + position (Search Console table)     ]
──────────────────────────────────────────────
[ Ad spend vs conversions ]  [ GBP calls (from Sheet) ]
```

One page. Money at the top. Diagnostics below. Done.
:::

> 📸 *[Screenshot placeholder: Looker Studio report in edit mode, showing the scorecard row and the leads-over-time chart with a GA4 source selected]*

## Step 3 — Date range and comparison (the tile setting that sells)

A number with no comparison is meaningless. Add a **date-range control** to the top of the page so the owner can flip periods, and — critically — turn on **"compare to previous period"** on your charts and scorecards. That's what surfaces the little green "+42%" next to a metric. That comparison arrow is doing more persuasion than any paragraph you'll write. Set the default range to "last 28 days" or "this month," and default the comparison to "previous period" or "same period last year" where seasonality matters (a sweet shop at Diwali needs year-over-year, not month-over-month).

## Step 4 — Make it skimmable and branded

- **Add the client's logo and name** at the top, and use their brand colour for the accent. It takes five minutes and it makes the dashboard feel like *theirs*, not a generic Google page.
- **Label tiles in plain English.** "Patient enquiries," not "Conversions (event: generate_lead)." The owner shouldn't need a decoder ring.
- **Whitespace is your friend.** Fewer, bigger, clearer tiles beat a cramped grid of twenty charts.
- **One page if you can.** A second page for "detail nerds" is fine, but the story lives on page one.

:::tip[🚀 Level up]
**Blend sources and use calculated fields.** Looker Studio can *blend* data — e.g. join Google Ads spend with GA4 conversions on date to compute a true **cost per lead** in one tile, even though spend and conversions live in different tools. And **calculated fields** let you build metrics that don't exist natively: sum your call, WhatsApp and form events into a single "Total leads" metric, or divide spend by leads for CPL. These two features are the jump from "nice charts" to "actual analytics." Learn blends the day you run Ads and organic side by side.
:::

## Step 5 — Share: live link vs PDF

Two ways to hand it over, and you'll use both:

- **The live link** is the star. Set sharing so the client can *view* (not edit) — either invite their email or use "anyone with the link can view." Send it once, tell them to bookmark it. It's always current, zero effort forever.
- **The PDF / scheduled email** is for the record and the less tech-comfortable owner. Looker Studio can export a PDF and even *schedule* it to email automatically each month. Great as a snapshot attached to your written report — but the live link is what you want them living in.

:::note[💰 Rupee check]
*Illustrative — verify current market rates; they move.* The dashboard tool is free, but the *setup* is a billable skill. Freelancers commonly fold dashboard setup into the first month's fee, or charge a **one-time setup in the ₹3,000–₹10,000 range** for a properly built, branded, multi-source dashboard, then include "live reporting" as a standing part of a monthly retainer (retainers themselves often sit in the **₹8,000–₹30,000/month** band for local SMB SEO+Ads, depending on scope and city). Don't give the dashboard away as a freebie — it's one of the most visible things you produce.
:::

## Common mistakes

- **Building before you have data access** — then blaming the tool for "no data."
- **Twenty tiles, no hierarchy** — the owner can't find the win.
- **No comparison period** — every number floats without meaning.
- **Jargon labels** — "sessions," "engaged users," "event count" instead of "visits," "leads."
- **Promising a live GBP tile** the free connectors can't deliver.

## Do this now

Create a new Looker Studio report for your capstone client. Connect **GA4** and **Search Console** today (add Ads later if it's running). Build just the **scorecard row + leads-over-time chart** with compare-to-previous turned on, drop the client's logo at the top, and set view-only sharing. That skeleton is already more than most SMBs have ever seen — and it's the foundation of your Assignment.

<details>
<summary>Q: A client asks for a live tile showing their Google Business Profile phone calls. What do you tell them, honestly?</summary>

That there's no free first-party Looker Studio connector for GBP data, so the honest options are to hand-enter the GBP calls into a Google Sheet each month and connect that Sheet, or use a paid third-party connector — not to promise a live GBP tile the native connectors can't produce.
</details>

<details>
<summary>Q: Why is turning on "compare to previous period" one of the highest-value settings on the whole dashboard?</summary>

Because a raw number is meaningless without context; the comparison surfaces the trend ("+42% vs last month") that actually persuades the owner they're winning — it does more selling than any sentence you could write.
</details>

Next: the story you wrap around this dashboard — the monthly report that turns numbers into a narrative the owner retells.
