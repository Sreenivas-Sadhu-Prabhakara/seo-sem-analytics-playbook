---
title: Crawling & Indexing
description: How Google discovers and stores your pages, and the controls that decide whether they show up at all.
sidebar:
  order: 1
---

You've just landed access to your capstone client — let's call them **Meena's Dental Clinic, Jayanagar** (a composite, standing in for every clinic that had a "web guy" three years ago and never logged in again). You type `site:meenadental.example` to see what Google has stored. Three pages. *Three.* The site has eleven. The services page, the appointment page, the entire blog — Google has never heard of them.

Nobody wrote bad content here. Google simply can't see most of the shop. This lesson is the pipeline that decides what Google knows exists — and the handful of controls that quietly make or break it.

## Why this pays

Half the "why aren't we ranking?" emergencies you'll be hired for aren't ranking problems at all — they're *indexing* problems. The page ranks nowhere because it's in Google's index nowhere. Diagnosing that in ten minutes with Search Console, when the last agency spent three months "optimising" a page Google never crawled, is the difference between a freelancer and a wizard.

## The pipeline: crawl → render → index

Three steps, and a page must survive all three to show up in search.

<figure class="rr-fig">
	<span class="rr-fig__title">The path a page takes to search</span>
	<ol class="rr-steps">
		<li><b>Crawl</b> — <span>Googlebot follows a link and fetches the page's raw code.</span></li>
		<li><b>Render</b> — <span>Google runs the page like a browser, executing the JavaScript, to see the finished page.</span></li>
		<li><b>Index</b> — <span>Google files that page in the searchable library. Only indexed pages can rank.</span></li>
	</ol>
	<figcaption class="rr-fig__cap">Miss any one step and the page never shows up in search.</figcaption>
</figure>

1. **Crawl.** Googlebot follows links and fetches your page's raw code — like a delivery guy arriving at your door. If he can't find the address (no links point to it) or you've locked the gate (`robots.txt`), he leaves.
2. **Render.** Google runs the page like a browser does, executing the JavaScript, to see the *finished* page a human would. Matters on sites where content only appears after scripts run.
3. **Index.** Google stores the page, understands what it's about, and files it in the library it searches when someone types a query. **Only indexed pages can rank.** Everything else is invisible.

Keep those two middle words separate in your head: **crawling** = Google *reads* the page; **indexing** = Google *keeps* it in the searchable library. A page can be crawled and then thrown away. Confusing the two is how beginners lose whole afternoons.

## The controls, and what each one actually does

### robots.txt — the "please don't come in" note on the gate

`robots.txt` is a plain text file at the root of the site (`yoursite.example/robots.txt`) that tells well-behaved crawlers which paths *not to crawl*. It's a request, not a wall — and it controls **crawling**, not indexing. Here's the trap that catches even paid "experts":

:::note[🎓 Foundations]
**robots.txt blocks crawling. `noindex` blocks indexing. They are not interchangeable — and using the wrong one backfires.**

If you `robots.txt`-block a page to keep it out of Google, you've actually *prevented Google from reading the very page*. That means Google may never see your `noindex` tag on it — so if the page has links pointing at it, Google can index the URL anyway, showing an ugly "No information is available for this page" result. To keep a page *out of the index*, you must let Google crawl it and put a `noindex` on it. Blocking in robots.txt is for saving crawl budget on junk (like internal search results), not for hiding pages from search.
:::

A sane small-business `robots.txt` is usually short and permissive. It points to the sitemap and blocks only genuinely useless paths:

```
User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php

Sitemap: https://meenadental.example/sitemap.xml
```

:::caution[⚠️ Gotcha]
The single most expensive line in SEO is `Disallow: /` sitting in a live site's robots.txt. It tells every crawler to stay out of the *entire* site. It's what a developer leaves in place after building on a staging server and forgets to remove at launch. If a client's traffic fell off a cliff on their relaunch date, check `yoursite.example/robots.txt` **first**. It takes ten seconds and it's the answer more often than anyone admits.
:::

### XML sitemaps — the guest list you hand Google

A sitemap is a machine-readable list of the URLs you *want* indexed — the fastest, most reliable way to say "here is every page that matters, go look." It's essential for SMB sites because they often have weak internal linking, so crawlers can't find deep pages on their own.

You almost never hand-write these. WordPress (Yoast/Rank Math, usually `/sitemap_index.xml`), Wix, Shopify, and Squarespace all auto-generate one at `/sitemap.xml`; static sites use a build plugin (Astro, Next, Hugo all have one). Then you **submit it in Google Search Console**: Indexing → Sitemaps → paste the URL → Submit. Google reports how many URLs it discovered and any errors.

> 📸 *[Screenshot placeholder: GSC → Sitemaps, showing a submitted sitemap with "Success" status and a discovered-URL count]*

### noindex and canonical — the "don't file this / file that one instead" tags

Two page-level tags you'll reach for constantly:

- **`<meta name="robots" content="noindex">`** in a page's `<head>` says "crawl me if you like, but don't keep me in the index." Use it on genuinely thin or private pages: booking-confirmation pages, tag archives that duplicate everything, members-only pages. Keep it *off* anything you want found.
- **`<link rel="canonical" href="...">`** says "if you find near-identical versions of this page, treat *this* URL as the real one." Use it to consolidate duplicates — the classic being a product reachable at five URLs via tracking parameters and category paths. Point them all at one canonical and Google pools the ranking signals instead of splitting them.

:::caution[⚠️ Gotcha]
The nightmare scenario: a global `noindex` accidentally applied site-wide. It happens when WordPress's **Settings → Reading → "Discourage search engines from indexing this site"** checkbox is left ticked (developers tick it during build), or when an SEO plugin's default is misconfigured. The site slowly evaporates from Google over a few weeks and everyone blames "the algorithm." Whenever you inherit a site, check that box and your plugin's indexing settings on day one. Un-ticking it has resurrected more clients than any content strategy.
:::

## Reading the truth in Search Console

Guessing is for amateurs. GSC tells you exactly what Google thinks.

- **Pages report** (formerly "Coverage"): how many URLs are indexed vs not, and *why* the not-indexed ones failed — grouped by reason. Your triage screen.
- **URL Inspection** (the search bar atop GSC): paste any URL and Google tells you whether it's indexed, when it was last crawled, which canonical it chose, and whether it's mobile-usable. If it's not indexed there's a **"Request indexing"** button — useful for a new or freshly-fixed page, useless as a magic wand for a page Google is deliberately ignoring.

> 📸 *[Screenshot placeholder: GSC URL Inspection result showing "URL is on Google" with last crawl date and Google-selected canonical]*

### The not-indexed reasons you'll see most

| GSC reason | Plain meaning | Usual fix |
|---|---|---|
| **Crawled – currently not indexed** | Google read it and shrugged. Usually thin or low-value. | Make the page genuinely useful; add internal links to it. |
| **Discovered – currently not indexed** | Google knows the URL exists but hasn't bothered crawling it. Often a crawl-budget / low-priority signal. | Strengthen internal links; improve site quality overall. |
| **Duplicate, Google chose different canonical** | Google decided another URL is the "real" version. | Set your own canonical, or consolidate the duplicates. |
| **Blocked by robots.txt** | You told crawlers to stay out. | Remove the Disallow if the page should be indexed. |
| **Excluded by 'noindex' tag** | The page carries a noindex. | Remove the tag if you want it indexed. |

:::tip[⚔️ War story]
A freelancer inherits a boutique's site that "just won't rank." She spends two weeks rewriting product descriptions before finally opening the Pages report. Every product URL sat under **"Crawled – currently not indexed."** The culprit: the theme generated a near-identical URL for every colour swatch — forty thin variants of one saree, all competing. Ten minutes of canonical tags pointing swatches at the parent product, and the products indexed within the week. *Open the Pages report before you touch the content.* Diagnose, then fix.
:::

## Common mistakes

- **Treating "Request indexing" as a fix.** It nudges Google to look; it doesn't make a bad page worthy. Fix the reason, then request.
- **Blocking a page in robots.txt to "hide" it** — which strips Google of the ability to see your noindex. Use one or the other, correctly.
- **Submitting a sitemap full of `noindex` or redirected URLs** — mixed signals confuse Google and clutter your reports. A sitemap should list only clean, canonical, indexable pages.
- **Never checking the Pages report.** It's the single most useful screen in technical SEO and beginners forget it exists.

## Do this now

On your capstone client's site:

1. Open `yoursite.example/robots.txt` in a browser. Confirm there's no `Disallow: /` and that it points to a sitemap.
2. Run `site:yoursite.example` in Google and count the results. Compare that to how many real pages the site has.
3. In GSC, open the **Pages** report and screenshot the not-indexed reasons. Pick the biggest bucket — that's your first fix.
4. Inspect the homepage and one key service page in **URL Inspection**. Confirm both say "URL is on Google."

Write down what you find. That's the opening section of your Assignment audit.

## Gut-check quiz

<details>
<summary>Q: A client wants a "thank you for enquiring" page kept out of Google. Do you block it in robots.txt or noindex it?</summary>

**noindex it.** robots.txt blocks *crawling*, which means Google might never see the noindex — and could still list the bare URL if something links to it. Let Google crawl the page and add a `noindex` meta tag so it's explicitly kept out of the index.
</details>

<details>
<summary>Q: In GSC a page shows "Discovered – currently not indexed." What's the most likely story?</summary>

Google knows the URL exists (it found the link) but has deprioritised actually crawling it — often a signal the page or site is low-value or the page is weakly linked internally. Strengthening internal links to it and improving overall site quality usually helps more than hitting "Request indexing" repeatedly.
</details>

<details>
<summary>Q: You relaunch a client's site and organic traffic vanishes overnight. What's the first file you check?</summary>

`robots.txt`. A `Disallow: /` left over from the staging build blocks the entire site from crawling and is the classic launch-day disaster. It's a ten-second check and a frighteningly common cause.
</details>

Next up: the pages are indexed — now let's make sure they load before the visitor gives up and taps back.
