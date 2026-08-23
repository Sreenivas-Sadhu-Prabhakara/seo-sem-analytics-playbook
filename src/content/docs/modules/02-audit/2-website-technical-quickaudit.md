---
title: The Website & Technical Quick-Audit
description: A fast, free health-check of a client's website — does it exist, load, work on mobile, and show up in Google at all.
sidebar:
  order: 2
---

You ask the owner for their website. There's a pause. Then: "We have one, my nephew made it in college." Your stomach does a small flip, because you already know what's coming — a site that loads like it's on dial-up, breaks on a phone, and hasn't been touched since the nephew got placed at Infosys.

This lesson is the fifteen-minute health-check that tells you whether the patient is stable or on a ventilator. It's a *quick* audit on purpose. You are not doing a deep technical teardown here — that's Module 7. Right now you're a paramedic taking vitals: is there a pulse, is it breathing, is anything obviously broken?

## Why this pays

The website is where every click you'll ever send — organic, local, paid — eventually lands. If it's broken or invisible, everything downstream is a leaky bucket, and no amount of clever SEO or ad spend fills a leaky bucket. Catching a fundamental site problem in the audit lets you say, honestly, "before we spend a rupee on ads, we fix the thing they land on." That's a real, sellable finding.

## The six vitals

Run these in order. Each takes two minutes and needs nothing but a browser and free tools.

### 1. Is there a site at all — and is it *theirs*?

Sounds obvious. It isn't. Plenty of small businesses have only a JustDial listing, a Facebook page, or a free `wixsite.com`/`business.site` URL they don't control. Confirm there's a real website on a domain the client actually owns. A business whose only web presence is a directory listing has a very different (and often cheaper, faster) first project than one with a real site.

:::note[🎓 Foundations]
**What "indexed" means.** Google runs two separate jobs. First it **crawls** — a bot visits your pages and reads them. Then it **indexes** — it files those pages in its giant library so they *can* appear in results. A page can exist, look perfect, and still be completely invisible on Google because it was never indexed. "Not ranking" and "not indexed" are different diseases: one is a competition problem, the other means Google doesn't even know the page exists. Always check indexing *before* you worry about rankings.
:::

### 2. Is it mobile-friendly?

In India, the overwhelming majority of local searches happen on a phone — someone standing outside looking for "chemist near me." Open the site on your own phone. Does text reflow, or do you pinch-and-zoom like it's 2011? Are tap targets (buttons, the call link) big enough for a thumb? Is the phone number a **tappable** `tel:` link or just plain text they have to copy? Google also indexes the mobile version of a site first, so a bad mobile experience isn't cosmetic — it's foundational.

### 3. Is it fast?

Run the homepage and one key page through **Google PageSpeed Insights** (search "PageSpeed Insights"). Look at the mobile score and the Core Web Vitals summary — does it pass or fail the "real-world" field data? You don't need to fix anything now; you need to record whether it's *fine*, *sluggish*, or *unusable*. A ten-second load on a patchy 4G connection means the customer is gone before the page paints.

> 📸 *[Screenshot placeholder: PageSpeed Insights results for the homepage, showing the mobile performance score and the Core Web Vitals pass/fail badges]*

### 4. Is it indexed?

Two free checks:

- **The `site:` search.** Type `site:theirdomain.com` into Google. This shows roughly how many of their pages Google has indexed. Zero results is a five-alarm fire — Google doesn't know the site exists. A handful when you'd expect dozens means pages are missing from the index.
- **Google Search Console.** If it's set up (you'll confirm in the Analytics audit lesson), the Pages/Indexing report tells you exactly what's indexed and what's excluded, and why. If it's *not* set up, that's itself a finding — and one of your first fixes.

### 5. Is it secure (HTTPS)?

Look at the address bar. Does the URL start with `https://` with a padlock, or plain `http://`? A site without HTTPS gets a "Not Secure" warning in Chrome that scares customers off, and it's a (small) ranking negative. Getting an SSL certificate is usually cheap-to-free and quick — an easy, visible win to put in the report.

### 6. Is anything obviously broken?

Click around like an impatient customer. Dead links (404s)? Contact form that throws an error or goes to a dead inbox? WhatsApp button that opens nothing? A "Menu" or "Services" page that's blank? Images that don't load? You're not cataloguing every flaw — you're noting the show-stoppers that would make a real customer bounce.

:::note[📋 Swipe this]
**The 15-minute quick-audit checklist:**

- [ ] Real website on a client-owned domain (not just JustDial/Facebook/free subdomain)
- [ ] Loads correctly on an actual phone; text reflows, no pinch-zoom
- [ ] Phone number is a tappable `tel:` link; WhatsApp link works
- [ ] PageSpeed Insights mobile: score + Core Web Vitals pass/fail noted
- [ ] `site:domain.com` returns a sensible number of pages
- [ ] Search Console exists (or flag: "needs setup")
- [ ] URL is HTTPS with a valid padlock
- [ ] No obvious 404s, dead forms, or broken buttons on key pages
- [ ] Every service they sell has a real page (not one giant "Services" blob)

Mark each: ✅ Good enough / ⚠️ Needs work / 🔴 Broken. That colour-coding becomes a report table later.
:::

## What "good enough" looks like for an SMB

Do not hold a dentist's website to the standard of a funded startup. "Good enough" for a local SMB is: it loads in a few seconds on mobile, it's secure, every service has a findable page, the phone number is one tap away, and Google has it indexed. That's it. A perfect Lighthouse score is a luxury; a working call button is oxygen. Your report should praise what's fine and flag only what genuinely costs the business customers.

:::caution[⚠️ Gotcha]
**Falling down the rabbit hole.** The moment you open PageSpeed Insights, a voice will whisper *"I could fix that render-blocking JavaScript right now."* Don't. This lesson is triage, not surgery. Deep technical work — crawl budgets, schema, redirects, Core Web Vitals remediation — is a whole module (Module 7) and often a whole separate paid project. In the audit, your job is to *note the problem and size it*, not to fix it. A two-hour audit that turns into a two-day unpaid technical fix is how freelancers go broke.
:::

:::tip[🚀 Level up]
Pull up **Search Console's Performance report** (if access exists) alongside your `site:` check. Compare the pages Google *shows to searchers* against the pages that actually exist. Big service pages that get zero impressions are either not indexed, or indexed but hopelessly uncompetitive — and knowing which is a sharper finding than "SEO needs work." You'll go deep on this in the SEO audit lesson next.
:::

## Common mistakes

- **Auditing on desktop only.** Your client's customers are on phones. Audit on a phone.
- **Confusing "no rankings" with "not indexed."** Always run the `site:` check first.
- **Trying to fix during the audit.** Note and move on. Fixing is a separate, billable phase.
- **Ignoring the free-subdomain trap.** A `business.site` or `wixsite.com` URL the client doesn't own is a strategic problem, not a footnote.

## Do this now

Run the full quick-audit checklist on your capstone client's site — on your phone. Record each item as Good / Needs work / Broken, and note the two single worst problems. You'll drop these straight into the Audit Report.

<details>
<summary>Q: A `site:clientdomain.com` search returns zero results. What does that tell you, and what does it NOT tell you?</summary>

It tells you Google has not indexed the site at all — it's effectively invisible in search, no matter how good the content is. It does *not* tell you the site is slow, ugly or badly written; those are separate checks. Indexing is the first gate: fix visibility before you worry about rank.
</details>

<details>
<summary>Q: Why audit a small-business site on your phone rather than your laptop?</summary>

Because most local "near me" searches in India happen on mobile, and Google indexes the mobile version of a site first. A site that looks fine on your 27-inch monitor can be an unusable mess on a phone — pinch-zoom text, a phone number you can't tap — which is exactly what the real customer experiences.
</details>

<details>
<summary>Q: You spot render-blocking JavaScript and a failing Core Web Vital during the quick-audit. Should you fix it now?</summary>

No. Note it, colour-code it, and size it as an opportunity for the report. The quick-audit is triage; deep technical remediation is Module 7 and usually a separate paid phase. Fixing during the audit is unpaid scope creep.
</details>

Next: the site's alive. But does anyone actually *find* it? Time to grade their SEO and local presence.
