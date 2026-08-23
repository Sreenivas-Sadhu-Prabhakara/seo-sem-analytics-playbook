---
title: Fixing the Platforms SMBs Actually Use
description: Apply crawl, speed, mobile, and schema fixes on the real CMSes your Indian clients are stuck with.
sidebar:
  order: 5
---

Everything so far has been the *theory* of a healthy site. Reality is messier: a WordPress install with two SEO plugins quietly at war and a login the client "thinks the cousin who made it still has." A Wix site where the SEO settings are real but the export button isn't. A one-page Dukaan store the owner runs from her phone. This lesson is where clean theory meets the grubby platform — because that's where you actually earn the fee.

## Why this pays

"I know technical SEO" is worth little until it's "I know how to *do* it on the platform in front of me." The freelancer who already knows where Yoast hides the sitemap toggle, or that Shopify won't let you edit `robots.txt` the normal way, delivers in an afternoon what a generalist fumbles for a week. Platform fluency makes you fast, and fast is what makes technical work profitable.

## First, get access — safely

Before you fix anything, you need in — professionally, not as a cowboy. Ask for **your own named account at the lowest level that does the job** (least privilege): on WordPress, an **Administrator** or **Editor** account tied to your email, never their shared password. For real fixes you'll often also need **Google Search Console** and sometimes hosting/DNS access as separate, named grants. When the gig ends, your access comes off.

:::caution[⚠️ Gotcha]
Never work off the client's sole admin login. Sharing one password is how disasters happen: they change it and lock you out mid-job, or you're blamed for a change someone else made because "everyone used the same account." Your own named account protects the client *and* protects you.
:::

## WordPress — the one you'll meet most

A large share of Indian SMB sites run WordPress. Its superpower is plugins; its curse is *too many* plugins.

- **SEO plugin (pick ONE):** **Yoast** or **Rank Math** handle the core — per-page titles and meta, automatic sitemaps, `noindex` toggles, canonicals, and built-in schema. Either is fine. **The rule is exactly one.**
- **Caching + images:** a caching plugin is usually the single biggest speed win; an image plugin that auto-compresses and serves WebP kills the most common LCP problem without hand-resizing.
- **The indexing checkbox:** confirm **Settings → Reading → "Discourage search engines"** is *un*-ticked (the accidental site-wide `noindex` from lesson 1).

:::caution[⚠️ Gotcha]
**Two SEO plugins running at once is a classic self-inflicted wound.** Install Rank Math on a site that already has Yoast and they both try to write the title tag, both output a canonical, both generate a sitemap — Google sees duplicated or contradictory tags, and your carefully-set title gets overwritten by the other plugin's default. Symptoms: titles that won't "stick," two sitemaps, doubled meta tags in the page source. The fix: **pick one, fully deactivate and delete the other** (most SEO plugins have an import tool to carry settings over first). Never run two.
:::

:::note[📋 Swipe this]
**Per-platform quick-fix list**

- [ ] **WordPress:** exactly one SEO plugin (delete the second); "Discourage search engines" un-ticked; sitemap submitted to GSC; caching + image/WebP plugins active; per-page titles/meta on money pages; LocalBusiness schema filled in.
- [ ] **Wix:** SEO setup checklist completed; per-page title + meta set; auto-sitemap submitted; per-page indexing enabled; images compressed, heavy animations trimmed.
- [ ] **Shopify:** per-product/collection title + meta set; duplicate-variant/thin tag pages watched; light theme, compressed product images; Product/LocalBusiness schema validated.
- [ ] **Dukaan / one-pagers:** every exposed SEO field filled; NAP + hours present and consistent with GBP; tappable phone + WhatsApp button.
:::

## Wix & Shopify — good SEO fields, real fences

These hosted, closed platforms have come a long way. Modern **Wix** exposes proper SEO controls — editable titles and meta, an auto-generated sitemap, per-page index toggles, and a setup checklist. **Shopify** gives per-product and per-collection meta fields, an auto sitemap, and handles the technical bones competently. But know the fences:

- **You work within the platform, not around it.** You generally can't freely hand-edit `robots.txt` (Shopify controls it), can't restructure URLs arbitrarily (Shopify pins `/products/`, `/collections/` paths), and can't make server-level tweaks. What you get is the fields they give you — for most SMBs, plenty.
- **Shopify's duplicate-URL quirk.** Products are reachable via multiple paths and tag/filter pages can spawn thin duplicates. Shopify sets canonicals to help, but keep an eye on it (the canonical work from lesson 1).

A "closed/hosted" platform (Wix, Shopify, Dukaan) runs the servers and hands you a fixed set of controls; "open/self-hosted" (WordPress, hand-coded) gives you everything — more power, more ways to break it. Neither is "better"; the real question is what *this client* can maintain. An owner who'll never touch code is often better served by a tidy Wix site than a powerful WordPress install they can't manage.

## Indian builders, Dukaan & one-page sites

Plenty of clients won't be on the famous platforms at all — **Dukaan**, a WhatsApp/Instagram-linked one-pager, a host template, or a site a relative built in an afternoon. The principle is identical: **find every SEO field the tool exposes and fill it correctly** (title, description, name, address, phone, hours) and cover the basics — tappable phone, WhatsApp, fast, mobile-friendly. You may not be able to hand-code JSON-LD or edit `robots.txt`; do the maximum the platform allows and be honest with the client about the ceiling.

## Static / hand-coded sites — full control, full responsibility

At the other end: plain HTML or a static generator (Astro, Next, Hugo). Here *you* own everything — edit `robots.txt` directly, drop JSON-LD into the template, control every byte. These are often blazing fast by default, but there's no plugin safety net: nobody auto-generates the sitemap or schema, so you or the developer must wire it up. Great with dev capability behind it; a poor fit for a client who edits their own content weekly.

## When to fix within it vs when to say "rebuild"

The judgement call clients pay you for. Fix *within* the platform when the bones are sound and the problems are configuration — wrong settings, missing schema, bloated images, no sitemap. That's 90% of jobs and it's the responsible, low-cost answer. Recommend a **migrate or rebuild** only when the platform genuinely can't produce a sitemap, editable meta, or a mobile-friendly layout at all; the site is un-editable (dead builder, no login, a mess nobody can safely touch); or the business has clearly outgrown it.

:::caution[⚠️ Gotcha]
**"Rebuild it" is the lazy consultant's default, and clients smell it.** Recommending a costly rebuild when a ₹5,000 configuration fix would do isn't ambition — it's laziness or an upsell, and it torches the trust you're building. Reach for "work within it" first, every time. Reserve "rebuild" for when you can *show* the client the specific limitation that makes the current platform a dead end.
:::

:::tip[⚔️ War story]
A freelancer is asked to "fix the SEO" on a boutique's WordPress site where "nothing sticks." The previous freelancer had installed Rank Math *on top of* an existing Yoast and left both active. Every title reverted; the site emitted two sitemaps and doubled canonicals, and Google was quietly confused about every page. No rebuild, no drama — import Yoast's settings into Rank Math, delete Yoast, resubmit the one clean sitemap. The "broken" site was one plugin conflict away from fine. *Before you diagnose anything exotic, check what's fighting what.*
:::

:::note[💰 Rupee check]
*Illustrative — verify current rates.* A **platform clean-up / technical fix pass** (untangle plugins, set titles and meta, submit a clean sitemap, add caching + image optimisation, deploy schema) is commonly a one-off in the **₹8,000–₹30,000** band depending on platform and page count, or the core of a retainer. A full **migration/rebuild** is a separate, larger project you scope and price on its own — recommend it only when you can justify it.
:::

## Common mistakes

- **Two SEO plugins active at once** — pick one, delete the other (import settings first).
- **Taking the client's only login** instead of your own least-privilege account.
- **Fighting a hosted platform's fences** instead of maximising the fields it gives you.
- **Recommending a rebuild reflexively** when configuration fixes would do — it reads as an upsell.

## Do this now

Identify exactly what platform your capstone client is on (view source, footer, or ask). Get **your own** least-privilege admin access plus GSC. Then run the relevant column of the quick-fix list above and note what you *can* fix versus what's blocked by the platform's ceiling. That gap analysis feeds your Assignment's "notes for the owner/developer" section.

## Gut-check quiz

<details>
<summary>Q: A client's WordPress titles won't "stick" — they keep reverting to something generic. Likeliest cause?</summary>

Two SEO plugins active at once (e.g. Yoast and Rank Math), both writing the title tag and overwriting each other, often alongside doubled sitemaps and canonicals. Fix: import settings into one, then fully deactivate and delete the other so only a single plugin controls SEO output.
</details>

<details>
<summary>Q: A client hands you their personal admin password to make changes. What do you do instead?</summary>

Ask them to create a separate, named account for you at the least privilege the job needs (Administrator or Editor) with your own email — never work off their sole login. It protects their access, keeps changes attributable to you, and lets access be cleanly revoked when the gig ends.
</details>

<details>
<summary>Q: When is "migrate or rebuild" the right recommendation rather than fixing within the platform?</summary>

Only when the platform genuinely can't meet the need — it can't produce editable meta/a sitemap/a mobile layout, the site is un-editable or dangerously broken, or the business has outgrown it — and you can show the client specifically why. Default to fixing within the platform; reflexive rebuild recommendations read as upsells.
</details>

That's the full technical toolkit — crawl, speed, mobile, schema, and the platforms they live on. Time to put it to work on a real site in the Assignment.
