---
title: Search Console Setup & the Queries Report
description: Verify Google Search Console, submit a sitemap, and read the queries report to find real search wins.
sidebar:
  order: 5
---

GA4 tells you what people do *once they're on* Meena's site. **Google Search Console (GSC)** tells you the story *before that* — what people typed into Google, whether the clinic showed up, and whether anyone clicked. It's Google reporting on itself, for free, and it's the single most under-used tool in a local freelancer's kit. Skip it and you're optimising for search while wearing a blindfold about search.

If GA4 is your scoreboard, GSC is the match footage. You need both.

## Add and verify the property

GSC needs to confirm you actually control the site before it hands over the data. First decision: **which kind of property?**

- **Domain property** — covers the *entire* domain: every subdomain (`www`, `blog`, `shop`) and both `http` and `https`. Verified via **DNS** (a TXT record at the registrar). This is the recommended, complete choice — pick it when you can access the client's domain DNS (GoDaddy, BigRock, Hostinger, etc.).
- **URL-prefix property** — covers only *one exact address* (e.g. `https://www.meenadental.com/`). Verified several ways: an **HTML file** upload, an **HTML meta tag**, your **Google Analytics** tag, or **Google Tag Manager**. Pick it when you can't touch DNS but you *can* edit the site or already have GA4/GTM on it.

:::note[🎓 Foundations]
**Verification, in plain terms.** Google won't show you a site's private search data until you prove you own or manage it. Each method is just a different way of proving that: a DNS record only the domain owner can add, a file only someone with site access can upload, or a tag you already control. Nothing about verification changes the site — it's purely a "prove it's yours" handshake.
:::

### The robust flow

Menus and screens shift, so follow intent:

1. At [search.google.com/search-console](https://search.google.com/search-console), **Add property**.
2. Choose **Domain** (enter the bare domain, e.g. `meenadental.com`) or **URL prefix** (the full URL).
3. Complete the matching verification: for Domain, copy the **TXT record** into the registrar's DNS and wait for propagation (minutes to hours); for URL-prefix, use the **GA4/GTM** option if you just installed those — it's the fastest since the proof is already on the site.
4. Confirm the green "Ownership verified."

> 📸 *[Screenshot placeholder: GSC property-type chooser showing "Domain" vs "URL prefix" options]*

:::caution[⚠️ Gotcha]
**A brand-new property shows almost no data at first.** GSC data isn't retroactive from before verification, and it lags **2–3 days** even once verified. If you verify today and the Performance report is nearly empty, that's normal — it fills in over the following days and only accumulates history going forward. Verify *early* for the same reason you install GA4 early: you're collecting the "before."
:::

## Submit the sitemap

A **sitemap** is a file (usually `sitemap.xml`) listing the site's important URLs — a map you hand Google so it can find every page instead of stumbling around. Most CMSs generate one automatically (WordPress via Yoast/Rank Math/Site Kit, Shopify and Wix natively).

1. Find the sitemap URL — commonly `https://the-site.com/sitemap.xml` (try it in a browser; if it loads XML, you've found it).
2. In GSC → **Sitemaps**, paste the path and **Submit**.
3. Check it returns **"Success"** with a page count that roughly matches the real site.

This won't magically boost rankings — but it makes sure Google *knows about* every page, which is the floor you build on.

## The Performance report: your keyword goldmine

This is the report you'll open weekly. It shows, for real Google searches, four core metrics:

:::note[🎓 Foundations]
**Impressions vs clicks vs position — the three you must not confuse:**

- **Impressions** — how many times the site *appeared* in someone's search results (whether or not they clicked). Demand and visibility.
- **Clicks** — how many times someone actually *clicked through* to the site.
- **CTR (click-through rate)** — clicks ÷ impressions, as a %. How compelling your listing is *once shown*.
- **Average position** — the site's average ranking spot for that query (1 = top). Lower is better.

Read together: *high impressions + low CTR* means "Google shows you but nobody clicks" (usually a weak title/meta, or you rank on page 2). *A top-3 ranking (position 1–3) + low clicks* means the demand just isn't there — you rank well, but almost nobody searches that query. Each pattern points to a different fix.
:::

### Finding wins in the Queries report

Switch the Performance report to the **Queries** tab and you're looking at the actual words people typed. Two gold seams:

- **"Striking distance" keywords** — queries where average position is **8–20** (bottom of page 1, top of page 2). These are *almost* ranking. A small on-page nudge (better title, more relevant content) often lifts them onto page 1 where the clicks live. This is the highest-ROI SEO list you'll ever build.
- **High-impression, low-CTR queries** — you're being *shown* but not clicked. Often a title/meta-description rewrite (Module 6 territory) fixes it without any new content at all.

:::tip[⚔️ War story]
A composite freelancer at a coaching centre almost pitched ten new blog posts. Then she opened GSC Queries and saw "**cbse tuition near [locality]**" at position 11 with 900 monthly impressions and barely any clicks — page two, so close. She rewrote *one* existing page's title and headings around that exact phrase, and weeks later it sat at position 6, clicks up several-fold, enquiries pinging. No new content — just reading what Google already told her for free. The Queries report is a to-do list the client is generating for you; most freelancers just never open it.
:::

## Coverage / Pages: is Google even seeing the site?

The **Pages** report (indexing) tells you which URLs are **indexed** (in Google's results) vs **not indexed**, and *why not* — "Crawled – currently not indexed," "Discovered – not indexed," "Excluded by noindex tag," and so on. If a client swears "we're not on Google," this report usually shows why: a stray `noindex`, a broken sitemap, or a site so new Google hasn't reached it. Diagnosing indexing here is a genuine, sellable skill — you can't rank a page Google refuses to index.

## Link GSC to GA4

Connect the two so search queries appear inside GA4's reports (Admin → Product Links → **Search Console links**). It stitches "what they searched" (GSC) to "what they did on-site" (GA4) in one place — free, and handy for reporting.

:::note[📋 Swipe this]
**Weekly GSC check routine** (10 minutes, every client):

1. **Performance → Queries**, last 28 days: skim for new "striking distance" (position 8–20) keywords → add to the optimise list.
2. Sort by **impressions**, spot high-impression / low-CTR queries → flag titles/metas to rewrite.
3. **Pages (indexing):** check for new "not indexed" jumps → investigate before they spread.
4. **Sitemaps:** confirm still "Success," page count sane.
5. Note anything odd (a manual action, a coverage spike) → tell the client *before* they notice.
:::

## Common mistakes

- Never verifying GSC at all — then having no idea why the site isn't ranking.
- Choosing URL-prefix and forgetting it misses `www` vs non-`www` or `http` vs `https` variants (Domain property avoids this).
- Submitting a sitemap once and never checking it went "Success."
- Reading *position* in isolation — a #3 ranking on a query nobody searches is worthless; pair it with impressions.
- Ignoring the Pages report until a client panics about not being found.

## Do this now

Verify Search Console for your capstone client (Domain via DNS if you can, else URL-prefix via the GA4/GTM tag you just installed), submit the sitemap and confirm "Success," then export the **top 10–20 queries** with their clicks, impressions and average position into your baseline doc. Those queries are the "before" for every ranking claim you'll make later.

<details>
<summary>Q: A query has 1,200 impressions, 9 clicks, and average position 12. What's the story, and what's the likely fix?</summary>

Google shows the site a lot (high impressions) but it sits on page two (position 12), so almost nobody clicks. That's a classic "striking distance" opportunity — a targeted on-page nudge (better title, more relevant content for that exact query) to push it onto page one, where the clicks are.
</details>

<details>
<summary>Q: You verify a brand-new GSC property and the Performance report is nearly empty. Panic?</summary>

No. GSC data isn't retroactive and lags a couple of days even after verification. A new property fills in over the following days and accumulates history going forward — which is exactly why you verify early to capture the baseline.
</details>

<details>
<summary>Q: When would you pick a URL-prefix property over a Domain property?</summary>

When you can't access the domain's DNS to add the TXT record, but you *can* verify another way — e.g. via the GA4 or GTM tag already on the site, or an HTML file/meta tag. Domain properties are more complete (all subdomains + protocols), so prefer them when DNS access is available.
</details>

Next: UTMs — making sure *you* get the credit for the traffic you drive, without poisoning your own data.
