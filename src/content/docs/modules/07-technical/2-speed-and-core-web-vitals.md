---
title: Site Speed & Core Web Vitals
description: Measure and fix a slow SMB site cheaply, using the three metrics Google actually cares about.
sidebar:
  order: 2
---

You pull up Meena's Dental Clinic on your phone, on mobile data, standing outside the office like a real patient would. You tap the link. Blank white screen. One Mississippi, two Mississippi… at four the logo pops in, at six a giant hero image loads, and just as you reach for "Book appointment" the whole layout jumps because an ad banner squeezed in above it — and your thumb hits the wrong thing. That's not a hypothetical. It's the median experience on a lot of Indian SMB sites, and every one of those seconds is a patient tapping back to the next clinic on the list.

Speed is the least glamorous thing you'll fix and one of the most *felt*. This lesson is how to measure it honestly and fix it without a developer or a big budget.

## Why this pays

Two reasons. First, **users leave slow sites** — every extra second bleeds enquiries, especially on the patchy mobile connections most of your clients' customers use. Second, **speed is a Google ranking factor** — not the biggest lever (great content on a slow page still beats thin content on a fast one), but when two clinics are otherwise neck-and-neck, the faster one wins the tiebreak. And "make the site faster" is a clean, sellable project with a visible before/after score. Clients love a number that goes up.

## Core Web Vitals: the three metrics Google grades

Google boils "how does this page *feel* to use" down to three measurable things, collectively called **Core Web Vitals (CWV)**. Learn these three initials cold — they come up in every technical audit.

<figure class="rr-fig">
	<span class="rr-fig__title">Core Web Vitals — the three "good" targets</span>
	<div class="rr-stats">
		<div class="rr-stat rr-stat--good"><span class="rr-stat__num">&lt;2.5s</span><span class="rr-stat__label">LCP — the biggest thing on screen has loaded</span></div>
		<div class="rr-stat rr-stat--seo"><span class="rr-stat__num">&lt;200ms</span><span class="rr-stat__label">INP — the page responds when you tap</span></div>
		<div class="rr-stat rr-stat--ads"><span class="rr-stat__num">&lt;0.1</span><span class="rr-stat__label">CLS — how much the layout jumps</span></div>
	</div>
	<figcaption class="rr-fig__cap">Google's published "good" thresholds — you want all three green, not an average.</figcaption>
</figure>

| Metric | Full name | In plain terms | The "good" target |
|---|---|---|---|
| **LCP** | Largest Contentful Paint | How long until the biggest thing on screen (usually the hero image or headline) has loaded. The "is it there yet?" metric. | Under **2.5 seconds** |
| **INP** | Interaction to Next Paint | When you tap or click, how long until the page visibly responds. The "is it laggy?" metric. | Under **200 milliseconds** |
| **CLS** | Cumulative Layout Shift | How much the page jumps around as it loads. The "why did the button move as I tapped it?" metric. | Under **0.1** |

:::caution[⚠️ Gotcha]
If you learned SEO from an older blog post, you'll see **FID (First Input Delay)** listed as the third metric. It's gone. Google **replaced FID with INP in March 2024** because INP measures responsiveness across the *whole* visit, not just the first tap. If a course, tool, or "expert" is still talking about FID as a current Core Web Vital, that's your cue their information is stale. The current trio is **LCP, INP, CLS.**
:::

Three metrics instead of one score because "fast" has three failure modes: a page can *appear* quickly (good LCP) but freeze when you tap (bad INP), or load fine but jump around and make you misclick (bad CLS). You want all three green, not an average.

## Measuring: PageSpeed Insights and the CWV report

Two free tools, and you need both because they measure different things.

### PageSpeed Insights (the lab test)

Go to `pagespeed.web.dev`, paste a URL, hit Analyse. You get a score out of 100 and — more usefully — the LCP / INP / CLS values plus a specific, prioritised list of what's slowing the page ("Properly size images," "Reduce unused JavaScript," "Eliminate render-blocking resources"). Read the *Opportunities* and *Diagnostics* sections; that's your fix list, handed to you for free.

> 📸 *[Screenshot placeholder: PageSpeed Insights results for a mobile URL, showing the Core Web Vitals assessment and the Opportunities list]*

:::caution[⚠️ Gotcha]
**Always read the mobile score, not desktop.** PSI shows both, and the desktop score is almost always flatteringly higher because desktops have fast connections and beefy processors. Your client's customers are on phones. Judge the site on the tab that matches reality.
:::

### The Search Console Core Web Vitals report (the field data)

In GSC, under **Experience → Core Web Vitals**, Google reports how *real visitors* experienced the site over the last 28 days, grouped Good / Needs improvement / Poor, mobile and desktop separately. This is the source of truth — your actual users on their actual phones, not a single test run.

### Lab data vs field data — know the difference

- **Lab data** (PageSpeed's default single test) = one simulated visit in a controlled environment. Great for *diagnosing* what's slow and testing fixes fast, but it's one snapshot on Google's test connection.
- **Field data** (the data PSI shows at the top, and the whole GSC report) = aggregated real visits from real Chrome users over 28 days. This is what Google actually uses to assess the page.

The takeaway: **fix using lab data, judge success by field data.** A fix shows in the lab immediately; the field report takes a few weeks to catch up because it's a rolling 28-day average. Don't panic when Tuesday's fix hasn't moved the GSC report by Wednesday.

## The SMB speed quick-wins (in order of bang-for-buck)

Ninety percent of slow small-business sites are slow for the same boring handful of reasons. Roughly highest-impact first:

1. **Compress and resize images.** *The* one. SMB sites are stuffed with 6MB, 4000px photos straight off a phone shown in a 400px box. A single oversized hero image is the most common LCP killer alive.
2. **Serve WebP.** Modern image formats are far smaller than JPG/PNG at the same quality; most platforms auto-convert.
3. **Lazy-load below-the-fold images** so the browser doesn't download the footer gallery before the headline (usually automatic now via `loading="lazy"`).
4. **Enable caching.** A caching plugin serves a pre-built page instead of rebuilding it from the database on every visit — on WordPress, a one-plugin fix with dramatic effect.
5. **Cut heavy scripts and sliders.** The auto-playing carousel, three chat widgets, two analytics tools, and a "12 people are viewing this" popup each tax load time. Sliders especially are LCP-and-INP poison.
6. **Use decent hosting.** The cheapest ₹99/month shared plan on an overloaded server bottlenecks everything else.
7. **Add a CDN.** Serves files from a server closer to the visitor; matters less for a single-city client but is cheap (often free tiers).

:::note[📋 Swipe this]
**The 20-minute SMB speed quick-win checklist** — run top to bottom on any slow site:

- [ ] Run the URL through PageSpeed Insights on **mobile**; note LCP, INP, CLS.
- [ ] Find the single largest image on the page; resize it to its display size and compress it.
- [ ] Convert big images to **WebP** (plugin or export setting).
- [ ] Confirm below-the-fold images **lazy-load**.
- [ ] Install/enable a **caching** plugin or setting; clear the cache and retest.
- [ ] Remove or disable **unused** sliders, popups, chat widgets, and duplicate analytics tags.
- [ ] Re-run PageSpeed and screenshot the **before/after** scores as your proof.
:::

:::tip[🚀 Level up]
Once the basics are done, squeeze the last drops: set explicit `width`/`height` on every image (prevents layout shift, directly improving CLS); **preload the LCP image** so the browser fetches your hero first, not last; **defer non-critical JavaScript** so scripts don't block first paint; and use PageSpeed's "Reduce unused JavaScript/CSS" diagnostics to find bloated plugins. On WordPress, image dimensions + lazy-loading + caching + WebP covers most of what a ₹15,000 agency "speed optimisation package" actually does.
:::

:::note[💰 Rupee check]
*Illustrative, and the market moves — always quote current rates.* A focused **speed / Core Web Vitals tune-up** for a small business site is commonly a one-off project in the **₹5,000–₹20,000** band depending on the platform and how much is broken, or folded into a monthly retainer as a line item. The tools are all free; you're charging for the diagnosis and the fixes. The before/after PageSpeed screenshots are what justify the invoice — a number that visibly climbed is the easiest thing in this course to get paid for.
:::

:::tip[⚔️ War story]
A freelancer takes on a gym site scoring 19 on mobile PageSpeed. The owner is convinced they need a full rebuild and has a quote for ₹60,000 to prove it. The freelancer opens the homepage: a single un-compressed 8MB background video and a 5MB hero image the phone was downloading in full. Twenty minutes — compress the image to WebP, swap the autoplay video for a static poster, install a caching plugin. Mobile score jumps to 74. No rebuild. The client happily pays a fraction of the rebuild quote for the afternoon's work, and tells three other gym owners. *Most SMB slowness is a couple of oversized files, not an architecture problem.*
:::

## Common mistakes

- **Chasing a perfect 100 score.** Green Core Web Vitals matter; a vanity 100/100 does not. Get out of the red and move on.
- **Judging on the desktop score.** Reality is mobile.
- **Expecting the GSC report to update overnight.** Field data is a rolling 28-day average — give a fix a few weeks to show.
- **Adding a caching plugin *and* three "optimisation" plugins that fight each other.** More plugins is often slower, not faster.

## Do this now

Run your capstone client's homepage **and** their most important conversion page (booking, contact, or a key product) through PageSpeed Insights on mobile. Screenshot both. Note LCP, INP, and CLS for each. Then find and fix the single biggest image on each page and re-run. Save the before/after — it's evidence for your Assignment.

## Gut-check quiz

<details>
<summary>Q: Name the three current Core Web Vitals and, in one phrase each, what they measure.</summary>

**LCP** (Largest Contentful Paint) — how fast the main content appears. **INP** (Interaction to Next Paint) — how fast the page responds when you tap. **CLS** (Cumulative Layout Shift) — how much the layout jumps around while loading. (If you said FID, that's the retired metric INP replaced in 2024.)
</details>

<details>
<summary>Q: Your PageSpeed lab score jumped after a fix, but the GSC Core Web Vitals report still shows "Poor." Is the fix working?</summary>

Probably yes, but you can't tell yet. The GSC report is *field data* — a rolling 28-day average of real visits — so it lags a fix by weeks. The lab score confirms the fix is technically live; wait for the field report to catch up before declaring victory.
</details>

<details>
<summary>Q: What single change fixes the most SMB speed problems?</summary>

Compressing and correctly resizing images. Oversized photos are the most common LCP killer on small-business sites, and fixing them is usually the highest-leverage twenty minutes you'll spend.
</details>

Next: even a fast page fails if it's built for a desktop the visitor doesn't own. Let's talk mobile-first — and the India connection reality.
