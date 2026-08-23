---
title: The Analytics & Tracking Audit
description: Check whether GA4, Search Console and conversion tracking exist at all — and document exactly what can and can't be measured today.
sidebar:
  order: 4
---

You ask the owner the most awkward question in the whole engagement: "How many leads did your website bring you last month?" They look at you the way you'd look at someone asking your blood pressure from three years ago. "I... don't know? A few? The phone rings sometimes."

That's not their failure — it's your finding. Most local SMBs are flying completely blind. There's no GA4, no conversion tracking, and often a ghost of dead Universal Analytics code still rotting in the page. This lesson answers one question: **can we even measure anything right now?** Because if you can't measure it, you can't improve it, and you certainly can't prove to the client that you did.

## Why this pays

Measurement is the foundation of every rupee you'll ever justify. A client who can't see results won't renew, no matter how good your work is. Documenting the measurement gaps now does two things: it sets up Module 4 (where you'll actually install and configure everything), and it lets you sell the setup itself as a deliverable. "Right now we're driving with the dashboard lights off" is a sentence that sells analytics work every single time.

:::note[🎓 Foundations]
**Traffic vs conversions — the difference that pays your rent.** *Traffic* is how many people visited. *Conversions* are how many did the thing that makes money — called, filled the form, messaged on WhatsApp, booked. A site can have 5,000 visitors and zero conversions (a beautiful, busy dead end) or 200 visitors and 30 calls (small but printing money). Owners obsess over traffic because it's a big flattering number. Your job is to drag the conversation to conversions — the metric that actually feeds the family. Everything in this audit is about whether conversions are being *counted* at all.
:::

## Is GA4 installed — and is it actually GA4?

**Google Analytics 4 (GA4)** is the current, only version of Google Analytics. The old **Universal Analytics (UA)** was **retired in 2023 and stopped processing data** — if you find UA tags, they are dead weight collecting nothing. Yet you'll still find them everywhere, because nobody removed them.

How to check what's really on the site:

1. **View source / use the browser's developer tools** and search the page for tracking snippets. A GA4 tag looks like `gtag('config', 'G-XXXXXXX')` — note the **`G-` prefix** on the Measurement ID. A dead UA tag uses a **`UA-XXXXXX`** ID. Google Tag Manager shows as `GTM-XXXXXX`.
2. **Ask for GA4 access.** If a property exists, get added and confirm it's actually *receiving* data — open **Reports → Realtime** and load the site in another tab. If Realtime stays empty, the tag is missing, misconfigured, or on only some pages.
3. **Check for Tag Manager.** If GTM is installed, the tags live inside it — that's often a *good* sign (cleaner setup) and worth noting.

> 📸 *[Screenshot placeholder: GA4 Realtime report showing (or failing to show) active users while you load the site in another tab]*

You'll finish this check able to write one of four verdicts: **(a)** proper GA4, collecting data; **(b)** GA4 exists but broken/partial; **(c)** only dead UA leftovers; or **(d)** nothing at all. Each is a legitimate, sellable finding.

:::caution[⚠️ Gotcha]
**Assuming "there's Analytics" means it works.** An owner saying "oh yes, my web guy set up Analytics" tells you almost nothing. It might be dead UA. It might be GA4 with a broken tag firing on the homepage only. It might be a property with data no one has looked at since setup. *Never take installed = working on faith.* Load Realtime and watch your own visit appear. If it doesn't, the "Analytics" is a placebo — and quietly, one of the easiest wins you'll ever sell.
:::

## Is Google Search Console set up?

**Google Search Console (GSC)** is free, separate from GA4, and shows how the site performs in Google Search — what queries bring impressions and clicks, which pages are indexed, and coverage errors. Many SMBs have never heard of it.

Check whether a verified GSC property exists (ask for access, or check for a verification meta tag / DNS record). If it does, you get a goldmine: real search queries, click-through data, and the indexing report you started in the technical audit. If it doesn't, that's a first-week fix — and until it's set up, you're guessing about organic search instead of measuring it.

## Are conversions actually tracked?

This is the heart of the audit. For a local SMB, the conversions that matter are almost always: **phone calls, form submissions, and WhatsApp clicks** (plus bookings or directions requests). Ask the brutal question of each: *is this being counted anywhere?*

| Conversion | Common reality | What "tracked" looks like |
|---|---|---|
| Phone calls | Untracked — phone just rings | Click-to-call events in GA4; call tracking for ads |
| Website forms | Email arrives, nothing logged | A GA4 event fires on successful submit |
| WhatsApp clicks | The #1 SMB lead source, 100% invisible | Click on the WhatsApp link fires a GA4 event |
| Directions / map taps | Untracked | GBP insights + GA4 outbound event |

The near-universal finding: **the business's most important lead channel — WhatsApp and phone — is completely unmeasured.** They *feel* busy or slow but can't attribute a single lead to a source. Document each gap explicitly. You're not fixing it now (that's Module 4); you're building the list of exactly what Module 4 will wire up.

:::caution[⚠️ Gotcha]
**Trusting vanity metrics.** "We got 10,000 pageviews!" feels great and often means nothing. Pageviews, sessions, impressions, followers, "reach" — these are vanity metrics when they aren't tied to a business outcome. A number is only worth reporting if a change in it changes the money. During the audit, note which metrics the client currently celebrates, and gently flag the vanity ones. Part of your value is teaching them to stop cheering for numbers that don't pay.
:::

## Is there historical data to learn from?

If GA4 or GSC *has* been running, even badly, you may have months of history — traffic trends, top pages, top queries, seasonality you can cross-check against what the owner told you in discovery. That's a head start: you can spot which pages already pull, which queries already convert, and where the leaks are.

If there's nothing — no GA4, no GSC, no records — say so plainly and reframe it as a fresh start: **"We're setting the baseline from day one, so every result from here is provable and ours."** No history isn't a failure to hide; it's the reason your first month of work matters.

:::note[📋 Swipe this]
**The tracking-audit checklist:**

- [ ] GA4 property exists and is *confirmed receiving data* (Realtime test passed)
- [ ] No dead Universal Analytics (`UA-`) tags left on the site
- [ ] Google Tag Manager present? (note if yes)
- [ ] Search Console verified and accessible
- [ ] Phone calls tracked? (Y/N)
- [ ] Form submissions tracked as events? (Y/N)
- [ ] WhatsApp clicks tracked? (Y/N)
- [ ] Any historical data to analyse? (how many months)
- [ ] Client's current "success metrics" — flag any vanity ones

Write one summary line: *"What can we measure today, and what's completely dark?"*
:::

:::note[💰 Rupee check]
A proper GA4 + Search Console + conversion-tracking **setup** is a legitimate one-time project, illustratively in the ₹8,000–₹30,000 range for a small business depending on how many conversions and integrations (call tracking, WhatsApp, forms, GBP) are involved. Treat that as a rough calibration, not a quote — complexity varies wildly. The pitch writes itself: "We can't optimise what we can't see, so step one is turning the lights on."
:::

## Common mistakes

- **Believing "Analytics is installed" without a Realtime test.** Installed ≠ working.
- **Missing dead UA tags** and mistaking them for live tracking.
- **Forgetting WhatsApp** — India's biggest SMB lead channel and the most commonly untracked.
- **Celebrating history you didn't verify.** Confirm the data is clean before you build recommendations on it.

## Do this now

For your capstone client, complete the tracking-audit checklist. Run the GA4 Realtime test yourself. Then write the single most important sentence of this whole module: **"Today, this business can measure ___ and is completely blind to ___."** That sentence is the bridge to Module 4 and a headline in your report.

<details>
<summary>Q: You find `UA-XXXXXX` tags on a client's site. Are they collecting useful data?</summary>

No. Universal Analytics was retired in 2023 and no longer processes data — those tags are dead weight. Finding them tells you the site hasn't been maintained and that the client currently has *no working analytics*, which is a genuine finding and an easy win to fix (install GA4).
</details>

<details>
<summary>Q: The owner says "we get tons of website traffic." Why isn't that enough to plan around?</summary>

Traffic is a vanity metric until it's tied to conversions. Tons of visitors who never call, message or book is a busy dead end. Without conversion tracking you can't tell whether that traffic is worth anything — which is exactly why documenting the tracking gap matters.
</details>

<details>
<summary>Q: Why single out WhatsApp clicks in an Indian SMB tracking audit?</summary>

Because WhatsApp is one of the biggest lead channels for Indian small businesses and is almost never tracked. If you don't count WhatsApp clicks as conversions, you'll systematically undervalue every channel that drives them — and misattribute the client's real results.
</details>

Next: they might be spending money to be invisible. Time to audit the ads and size up the competition.
