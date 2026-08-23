---
title: Key Events & Conversions
description: Measure the SMB actions that equal money — calls, WhatsApp taps, form fills and direction requests.
sidebar:
  order: 4
---

This is the lesson where measurement starts paying rent. Everything before was plumbing; now we track the water. For Meena's Dental Clinic, "success" isn't a pageview — nobody ever got a root canal because someone *looked* at the website. Success is a **phone call**, a **WhatsApp message**, a **filled appointment form**, a **"Get directions" tap** from someone in Jayanagar deciding to actually show up. Those are the money-actions. Count those and you can finally answer Dr. Meena's only real question: *"is this bringing me patients?"*

## Events vs "key events" (conversions)

In GA4, everything is an **event** — a pageview, a scroll, a click, a video play. Most events are just ambient noise you don't care about. The events that represent business value, you promote to **key events** (GA4's current name for what everyone still calls "conversions"; the Ads side still says "conversions" too — same idea, and Google keeps renaming this, so don't be thrown).

:::note[🎓 Foundations]
**The funnel, in one breath.** A visitor arrives (session) → looks at pages (pageviews) → does something valuable (a *key event* / conversion). Only that last step is worth money. Your whole job in this lesson is to define, for *this* business, which events are the valuable ones — then tell GA4 to treat them as key events so they show up in every report as the number that matters.
:::

## The SMB conversions that actually matter

For an Indian local business, the money-actions are almost always **contact attempts.** Here's the canonical set:

:::note[📋 Swipe this]
**"SMB conversions to track" — the standard local-business list:**

- **Phone-number click** — a tap on a `tel:` link (mobile users tapping to call).
- **WhatsApp click** — a tap on a `wa.me` / `api.whatsapp.com` / click-to-chat link (huge in India).
- **Form submission** — enquiry / appointment / callback-request form.
- **"Get directions" / map click** — a tap on a link to Google Maps directions.
- **Email click** — a tap on a `mailto:` link (less common for SMBs, still worth it).
- **Purchase / booking** — for ecommerce or online-booking sites (the real transaction).

Track these six and you've captured the vast majority of how a local customer says "I'm interested."
:::

## How each one is actually captured

Different actions need different mechanisms. Be precise here — this is where sloppy freelancers create fake conversions that fire on nothing:

| Conversion | How it's captured |
|---|---|
| **Outbound / file / scroll / site-search** | **Enhanced Measurement** — GA4's built-in auto-tracking (on by default). Catches *outbound link clicks*, scrolls, file downloads, site searches with **zero setup**. |
| **Phone (`tel:`) click** | Usually a **GTM Click trigger** where Click URL contains `tel:` → a GA4 event like `phone_click`. (Some are caught as generic outbound clicks, but a dedicated event is cleaner and nameable.) |
| **WhatsApp (`wa.me`) click** | GTM Click trigger where Click URL contains `wa.me` or `api.whatsapp.com` → GA4 event `whatsapp_click`. |
| **"Get directions" click** | GTM Click trigger where Click URL contains `google.com/maps` (or the directions link) → GA4 event `directions_click`. |
| **Form submission** | GTM **Form Submit** trigger, or a "thank-you" **page-view** trigger if the form redirects to a confirmation page (often the most reliable route). |
| **Purchase** | GA4 **ecommerce** events from the platform (Shopify/WooCommerce send `purchase` with value) — enable ecommerce tracking, don't hand-roll it. |

:::note[🎓 Foundations]
**What "Enhanced Measurement" gives you free.** In your Web data stream settings there's an **Enhanced Measurement** toggle (leave it ON). It auto-tracks page views, scrolls, **outbound clicks**, site search, video engagement, and file downloads — no code. It's a great baseline, but note what it *doesn't* neatly do: it won't hand you a clean, separately-named "phone_click" vs "whatsapp_click" — for those distinct, reportable events you want the GTM click triggers above.
:::

### Setting them up, then marking them as key events

1. **Fire the events.** Use Enhanced Measurement for what it covers; add GTM click/form triggers for phone, WhatsApp, directions, and form submits (see the GTM lesson's Level-up for the exact click-trigger shape).
2. **Verify each one.** In GA4 **DebugView** (or GTM Preview), perform the action — tap the number, tap WhatsApp, submit the test form — and watch the event appear. Don't trust, verify.
3. **Mark as key events.** In GA4 → Admin → **Events** (or **Key events**), find each event (e.g. `phone_click`, `whatsapp_click`, `generate_lead`) and toggle **Mark as key event**. Now it's counted as a conversion across your reports and can be imported into Google Ads later.

> 📸 *[Screenshot placeholder: GA4 Admin → Events list with the "Mark as key event" toggle switched on for phone_click and whatsapp_click]*

:::caution[⚠️ Gotcha]
**Counting pageviews as success is the amateur's favourite lie.** "Traffic is up 60%!" sounds great and means nothing if calls and WhatsApp taps are flat. Plenty of freelancers report sessions and pageviews because they're easy and always look busy. Pageviews are an *input*; conversions are the *output*. If your report leads with pageviews, you're either a beginner or hoping the client is. Lead with the money-actions.
:::

:::tip[⚔️ War story]
A composite freelancer proudly told a gym owner "organic traffic doubled." The owner checked his front desk: same trial bookings as before. The traffic was real — but it ranked for a blog post ("benefits of morning workouts") pulling readers three cities away who'd never join a Bengaluru gym. No conversion tracking meant three months celebrating a vanity number. With `phone_click` and form conversions live from day one, he'd have seen flat conversions in week two and pivoted to local, buyer-intent keywords. Measurement isn't just proof — it's a steering wheel.
:::

## GBP calls are tracked separately (don't double-count)

Here's a distinction that trips up almost everyone: a customer who finds Meena on **Google Maps / the Business Profile** and taps "Call" there never touches the website. That call is counted in **Google Business Profile's own performance insights** ("Calls," "Directions," "Website clicks"), *not* in GA4. GA4 only sees actions on the *website*.

So Meena's true "contact" picture is the **sum of two sources**: **website conversions** in GA4 (phone/WhatsApp/form/directions clicks *on the site*) plus **profile actions** in GBP insights (calls, direction requests, website clicks *from the listing*).

:::caution[⚠️ Gotcha]
**Don't mix or double-count the two.** A "Get directions" tap on the *website* (GA4) and a "Directions" tap on the *Google listing* (GBP) are different events from different sources — report both, clearly labelled, but never add a GA4 number to a GBP number as if they're the same metric. In your baseline, keep two rows: "Website conversions (GA4)" and "Profile actions (GBP)."
:::

## Common mistakes

- Reporting pageviews/sessions as the headline instead of conversions.
- Setting up an event but never **marking it a key event**, so it never counts as a conversion.
- Trusting a tag fired without testing it in DebugView — dead tags count nothing.
- Double-counting website clicks and GBP profile actions as one number.
- Tracking a "form submit" that fires on validation error, not real submission — always test the *happy path*.

## Do this now

For your capstone client, set up and **verify** at least three money-conversions — realistically **phone click, WhatsApp click, and form submit** (add directions if relevant). Test each in DebugView, mark each as a key event, and add a "Conversions tracked" line to your baseline doc listing exactly which ones are live. Then note where GBP calls will come from separately.

<details>
<summary>Q: A freelancer's report says "sessions up 45%." Why might the client be unimpressed, and what should the report have led with?</summary>

Sessions are an input, not an outcome — traffic can rise while actual enquiries stay flat (or come from the wrong city). The report should lead with conversions/key events: phone clicks, WhatsApp taps, and form submissions, the actions that turn into patients or customers.
</details>

<details>
<summary>Q: You set up a `whatsapp_click` event and it fires correctly in DebugView, but it never appears as a conversion in the client's report. What did you forget?</summary>

You forgot to **mark it as a key event** in GA4 Admin. Until you toggle that on, it's just a regular event and won't be counted as a conversion in reports or importable into Google Ads.
</details>

<details>
<summary>Q: Where are calls that come from the client's Google Maps listing counted?</summary>

In Google Business Profile's own performance insights, not GA4 — because those callers tap "Call" on the listing and never load the website. Report GBP actions and GA4 website conversions as two separate sources; never add them together as one metric.
</details>

Next: Search Console — the free tool that shows you what Google *itself* thinks of your client's site.
