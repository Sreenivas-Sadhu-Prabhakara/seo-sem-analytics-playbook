---
title: Structured Data / Schema
description: Add machine-readable markup so Google understands your page and your business becomes eligible for rich results.
sidebar:
  order: 4
---

You search for Meena's Dental Clinic and a rival's listing shows star ratings, opening hours, and a little price band — while Meena's is a plain blue link with a grey snippet. Same city, same service, but one *looks* like a business and one looks like a Word document someone put online. The difference usually isn't magic or ad spend. It's **structured data** — a few lines of code that spell out, in a language Google reads perfectly, exactly what this business is.

This is the lesson where you stop hoping Google figures out the page and start *telling* it.

## Why this pays

Structured data makes a business **eligible for rich results** — the star ratings, FAQ drop-downs, breadcrumb trails, and business panels that make a listing bigger and far more clickable than a bare link. More real estate, more clicks, same ranking position. It's a showable win clients rarely have, so it sells as a distinct deliverable — and because it's fiddly and policy-sensitive, doing it *correctly* separates you from the ₹500 "we'll add schema" crowd who mostly break it.

## What structured data actually is

Structured data is a standardised vocabulary — from **schema.org**, a standard the search engines agreed on — for describing things on a page so machines understand them. Instead of Google *guessing* that "Meena's Dental Clinic, 10am–7pm, ⭐4.6" is a dental clinic with hours and a rating, you label each fact explicitly: this is the name, the type, the opening hours, the phone number.

The format you'll use almost every time is **JSON-LD** — a block of code that sits invisibly in the page's HTML. Google **recommends JSON-LD** over the older inline formats (Microdata, RDFa) because it's clean and doesn't tangle with your visible content. "Add schema," "add structured data," and "add JSON-LD" all mean this. A **rich result** (or "rich snippet") is the enhanced listing your markup makes *possible* — but it doesn't lift your position, it makes your existing spot bigger and more eye-catching.

## The high-value schema types for SMB clients

You don't need the hundreds of types on schema.org. For local businesses, a small handful does almost all the work:

| Type | Use it for | What it can unlock |
|---|---|---|
| **LocalBusiness** (and sub-types: `Dentist`, `Restaurant`, `HairSalon`, `Gym`…) | The core "who and where" of any local business | Name, address, hours, phone, geo, price range in Google's eyes |
| **Service** | Individual services a business offers (teeth whitening, personal training) | Clearer topical understanding of service pages |
| **Product** | E-commerce / catalogue items | Price, availability, ratings in results |
| **Review** / **AggregateRating** | Genuine ratings the business has earned | Star ratings in results — *policy-bound, see the Gotcha* |
| **FAQPage** | A page with genuine Q&A content | Expandable FAQ entries under your listing |
| **BreadcrumbList** | Site hierarchy (Home › Services › Teeth Whitening) | A clean breadcrumb trail instead of a raw URL |

Use the **most specific type that fits.** A dental clinic is a `Dentist` (which is a sub-type of `LocalBusiness`), not a generic business — the more precise you are, the better Google understands the page.

:::caution[⚠️ Gotcha]
**Do not mark up reviews you invented, or reviews you wrote about yourself.** Google's policy is explicit: `Review` and `AggregateRating` markup must reflect *genuine, independent* reviews that are actually displayed on the page — not self-serving ratings a business awards itself, and not fabricated testimonials. Marking up fake or self-created reviews is a policy violation that can get your rich results removed and earn a **manual action** (a human penalty) against the site. If the business genuinely has reviews shown on the page, mark those up. If it doesn't, leave `AggregateRating` out entirely — an honest listing beats a penalised one. This is one of the fastest ways cheap "SEO experts" torch a client's site; don't be them.
:::

## How to add it

Three routes, pick by platform:

1. **JSON-LD directly in the page `<head>`** — best for hand-coded and static sites where you control the template. Paste one `<script type="application/ld+json">` block.
2. **A plugin.** On WordPress, Rank Math and Yoast generate LocalBusiness, FAQ, breadcrumb, and product schema from fields you fill in — no code. The most common route, and usually the right one.
3. **Google Tag Manager** — inject JSON-LD as a Custom HTML tag when you can't edit the site's code. It works, but it's the fiddliest option (the markup only exists after GTM fires, so validate carefully). Prefer routes 1 or 2.

:::tip[🚀 Level up]
Here's a **generic, correct LocalBusiness JSON-LD block** for a dental clinic. Note the specific type (`Dentist`), the structured address, opening hours, and geo. Swap in the client's real details — and only include `aggregateRating` if the business genuinely has reviews shown on the page (values below are illustrative placeholders, not to be invented):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Meena's Dental Clinic",
  "image": "https://meenadental.example/clinic.jpg",
  "url": "https://meenadental.example/",
  "telephone": "+91-98765-43210",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12, 4th Block, Jayanagar",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560011",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9250,
    "longitude": 77.5938
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "10:00",
      "closes": "19:00"
    }
  ]
}
</script>
```

Keep the schema's facts **identical** to what's on the page and on the Google Business Profile — same name, same address, same phone. Contradicting yourself across sources confuses Google and undermines local ranking.
:::

:::note[📋 Swipe this]
**Structured-data deployment checklist:**

- [ ] Choose the **most specific** type (`Dentist`, `Restaurant`, `Gym`…) not just `LocalBusiness`.
- [ ] Fill in name, address, phone, URL, hours, `priceRange` — matching the site and GBP exactly.
- [ ] Add `FAQPage` schema **only** to pages with real, visible Q&A.
- [ ] Add `AggregateRating` **only** if genuine reviews are shown on the page.
- [ ] Add `BreadcrumbList` for the site's navigation hierarchy.
- [ ] Validate every page with the **Rich Results Test**.
- [ ] Fix all **errors**; review **warnings** (they're optional but often worth completing).
:::

## Validate — never deploy schema blind

Two free tools, used every single time:

- **Rich Results Test** (`search.google.com/test/rich-results`) — paste a URL or code; Google tells you which rich-result types the page is *eligible* for and flags errors and warnings. The one that matters, because it tests Google's actual features.
- **Schema Markup Validator** (`validator.schema.org`) — checks your JSON-LD is technically valid schema.org syntax. Handy for catching typos and structural mistakes.

> 📸 *[Screenshot placeholder: Rich Results Test showing a page eligible for a Local Business result, with 0 errors]*

After deployment, GSC grows dedicated **enhancement reports** (Breadcrumbs, FAQ, etc.) once it detects your markup live — slower but authoritative confirmation.

:::caution[⚠️ Gotcha]
**Eligibility is not a guarantee.** Passing the Rich Results Test means the page is *eligible* for a rich result — not that Google *will* show one, or show it every time. Google decides case by case based on quality, query, and its own judgement. Never promise a client "you'll get star ratings." Promise "we'll make you eligible and give you the best shot" — then let the results speak. Over-promising rich results is a fast route to an awkward month-two conversation.
:::

:::tip[⚔️ War story]
A freelancer inherits a restaurant site where the previous "SEO guy" had hard-coded an `aggregateRating` of `"4.9"` with `"reviewCount": "500"` — pure invention, no reviews on the page at all. It earned a **manual action** for spammy markup, and the star ratings that *had* been showing vanished across the board. The fix: rip out the fake rating, mark up only real information (hours, cuisine, address, menu), file a reconsideration request, wait. Weeks of lost visibility to save a few fake stars. *Correct-and-honest schema beats impressive-and-fake every time — and it's not close.*
:::

:::note[💰 Rupee check]
*Illustrative — the market shifts, quote current rates.* Deploying and validating structured data for a local business (LocalBusiness + FAQ + breadcrumbs on the key pages) is commonly a one-off in the **₹3,000–₹15,000** range depending on page count and whether it's plugin-driven or hand-coded — or a line item in a technical-audit project. The value to the client is a visibly richer, more clickable listing; the value to you is that it's precise work most cheap providers get wrong, so doing it right is a genuine differentiator.
:::

## Common mistakes

- **Marking up fake or self-created reviews** — policy violation, penalty risk. The single biggest schema mistake.
- **Schema that contradicts the visible page** (different hours, different address) — confuses Google and can be ignored or flagged.
- **Using generic `LocalBusiness` when a specific sub-type fits** — less precise, less useful.
- **Deploying without validating** — one typo can silently break the whole block.
- **Promising rich results** — you can promise eligibility, never the result itself.

## Do this now

For your capstone client, draft a **LocalBusiness (or the correct sub-type) JSON-LD block** with their real name, address, phone, hours, and URL — matching their Google Business Profile exactly. If they have a genuine FAQ page, add `FAQPage`. Run it through the **Rich Results Test** and screenshot the "eligible, 0 errors" result. That validation screenshot is a required piece of evidence in your Assignment.

## Gut-check quiz

<details>
<summary>Q: A client has no reviews on their website but wants stars in Google. Can you add AggregateRating schema with a nice number?</summary>

No. `AggregateRating` must reflect genuine reviews actually shown on the page. Inventing a rating is a policy violation that risks a manual action and removal of rich results. Either display and mark up real reviews, or leave the rating markup out entirely.
</details>

<details>
<summary>Q: Your page passes the Rich Results Test as eligible for a Local Business result. Can you promise the client star ratings will appear?</summary>

No. Eligibility means Google *may* show a rich result — it's not a guarantee. Google decides per query and per its own quality judgement. Promise eligibility and your best effort, never the specific rich result.
</details>

<details>
<summary>Q: For a hair salon, should you use the LocalBusiness type or something more specific?</summary>

Use the most specific type that fits — `HairSalon` (a sub-type of `LocalBusiness`). Greater specificity helps Google understand the page better; fall back to generic `LocalBusiness` only when no accurate sub-type exists.
</details>

Next: all of this theory has to land on the messy, real CMSes your clients actually use. Let's fix the platforms.
