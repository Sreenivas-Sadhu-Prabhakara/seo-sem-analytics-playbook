---
title: GA4 From Scratch
description: Stand up Google Analytics 4 correctly with INR, IST, clean internal traffic and data actually flowing.
sidebar:
  order: 2
---

You've sold Meena on measuring first. Now you open her existing analytics and find… nothing. Or worse, a dusty **Universal Analytics** account that stopped collecting data in mid-2023 and now shows a flat line like a hospital monitor. Universal Analytics is dead. Google retired it and it's gone. Everything today is **Google Analytics 4** — a completely different, event-based model. If a "guru" is still talking about "bounce rate" and "sessions" the old way, they've been asleep for two years. You haven't.

Standing up GA4 correctly is a genuine paid service. Plenty of local businesses have no analytics at all, or a broken install their nephew attempted. Getting it right — clean, INR, IST, internal traffic filtered — is worth real money precisely because doing it *wrong* produces confident lies.

## The structure: account → property → data stream

GA4 nests three things, and mixing them up is the first beginner trip:

- **Account** — the top-level container, usually one per business (or one agency account for a client sub-account structure). Think of it as the filing cabinet.
- **Property** — one website/app's dataset. Meena's clinic site = one property. The drawer in the cabinet.
- **Data stream** — the actual source feeding the property. For a website, a **Web data stream**. This is where your tracking ID lives. The folder in the drawer.

You'll create all three in one sitting at [analytics.google.com](https://analytics.google.com), signed in with a Google account **the client will ultimately own** (more on that in the Gotcha below).

### The setup flow, robustly

Menus move — Google reshuffles this UI regularly — so follow the *intent*, not the pixels:

<figure class="rr-fig">
	<span class="rr-fig__title">THE GA4 SETUP, IN FOUR MOVES</span>
	<ol class="rr-steps">
		<li><b>Create an Analytics account</b> — <span>Admin → Create → Account. Name it after the business ("Meena Dental Clinic"). Set the data-sharing checkboxes to the client's comfort — defaults are fine for most.</span></li>
		<li><b>Create a property</b> — <span>Name it, then <b>set the reporting time zone and currency here — this is the step everyone fumbles.</b> Time zone: (GMT+05:30) India Standard Time. Currency: Indian Rupee (INR ₹).</span></li>
		<li><b>Describe the business</b> — <span>(size, category) — low stakes, pick honestly.</span></li>
		<li><b>Create a Web data stream</b> — <span>Enter the website URL and a stream name. GA4 hands you a <b>Measurement ID</b> that looks like <b>G-XXXXXXXXXX</b>. That's the golden ticket — the ID that ties the site to this property.</span></li>
	</ol>
	<figcaption class="rr-fig__cap">Follow the intent, not the pixels — Google reshuffles this UI, but the four moves stay put.</figcaption>
</figure>

> 📸 *[Screenshot placeholder: GA4 Admin → Data Streams → Web, showing the Measurement ID field with a G-XXXXXXXXXX value]*

:::caution[⚠️ Gotcha]
**Forgetting INR and IST is the mistake that quietly ruins your reports.** Currency and time zone are set at the *property* level and — critically — they **only apply going forward, not retroactively.** Leave it on the US default and your ecommerce revenue reports in dollars, and your "daily" numbers roll over at some absurd hour Bengaluru time, smearing every day's data across two calendar days. Set INR and IST *before* data starts flowing. There's no clean fix afterward.
:::

## Installing the tag: three routes

The Measurement ID does nothing until the tracking code is on every page. You have three ways to get it there — pick the *simplest one the site allows*:

| Route | Best when | How |
|---|---|---|
| **CMS native field** | Site is on WordPress, Wix, Shopify, Squarespace | Paste the **Measurement ID** (or gtag snippet) into the platform's built-in GA4 / "Google Analytics" field or an official plugin (e.g. Site Kit for WordPress). Cleanest for small sites. |
| **gtag.js snippet** | Hand-coded or static site you can edit | Copy the **Google tag** snippet GA4 gives you and paste it into the `<head>` of every page (or the shared header/template). |
| **Google Tag Manager** | You'll manage several tags, or want click-tracking later | Deploy GA4 *through* GTM. Covered in the next lesson. |

:::note[🎓 Foundations]
**What's the "gtag snippet"?** It's a short block of JavaScript Google generates for you, carrying your Measurement ID. When a browser loads a page containing it, it phones home to GA4: "someone's here, on this page, from this source." That's the whole magic. It must be on *every* page you want tracked — miss the header on one template and that section of the site goes dark.
:::

:::note[📋 Swipe this]
**GA4 setup checklist** — run this on every new client:

- [ ] Analytics account created, named for the business
- [ ] Property created; **currency = INR ₹**, **time zone = IST (GMT+5:30)**
- [ ] Web data stream created; Measurement ID (`G-…`) copied
- [ ] Tag installed on **all** pages (CMS field / gtag / GTM)
- [ ] **Enhanced measurement** left ON (auto-tracks scrolls, outbound clicks, site search, file downloads)
- [ ] Data-retention set to **14 months** (Admin → Data settings → Data retention — the default 2 months is stingy)
- [ ] **Internal traffic excluded** (your own + client's office visits filtered)
- [ ] Verified live in **Realtime** and **DebugView**
- [ ] Access granted to the client's own Google account as Administrator
:::

## Verify data is actually flowing

Never assume the tag works. *Check.*

- **Realtime report:** open GA4 → Reports → Realtime, then visit the client's site in another tab (or on your phone off Wi-Fi). Within seconds you should see yourself appear as an active user. If you don't, the tag isn't firing — recheck the ID and that the snippet's on the page.
- **DebugView:** for granular checking, DebugView (Admin → DebugView) shows individual events in real time when debug mode is on. Great for confirming specific events later.

> 📸 *[Screenshot placeholder: GA4 Realtime report showing 1 active user and the current page path after a test visit]*

## Two settings people skip (don't)

- **Data retention → 14 months.** The default (2 months) limits how far back your *exploration* reports can reach. Bump it. Standard reports keep aggregate data longer, but explorations respect this setting.
- **Exclude internal traffic.** Every time you or Meena's front-desk staff open the site, you pollute the data with fake "visitors." Set up an internal-traffic filter (Admin → Data Streams → Configure tag settings → Define internal traffic) using your IP addresses, then activate the filter. Ask the client for their clinic's office IP.

:::caution[⚠️ Gotcha]
**Your own visits inflate everything.** During setup you'll reload the site fifty times. On a business getting 40 sessions a week, *you* can be 20% of the "traffic" — and your obsessive homepage refreshing looks like wild engagement on page one. Filter internal traffic before you take any baseline, or your "before" number is a lie you told yourself.
:::

## Common mistakes

- Leaving currency in USD / time zone in US default (unfixable retroactively).
- Installing the tag on the homepage template only, missing blog or landing pages.
- Creating the account under *your personal* Google login with no client access — when you part ways, they lose their own data. Add the client as **Administrator** from day one.
- Skipping verification and discovering weeks later that nothing was recorded.

## Do this now

Create the GA4 property for your capstone client, set **INR + IST**, install the tag via the simplest route the site allows, and confirm your own test visit appears in **Realtime**. Then paste the **Measurement ID** into your baseline doc. That green "1 active user" is the first heartbeat of your scoreboard.

<details>
<summary>Q: You set up GA4 in January but forgot to change the currency to INR. In March you notice revenue is in dollars. Can you fix the January–February data?</summary>

No. Currency and time zone apply only going forward, not retroactively. You can set INR now so future data is correct, but the already-collected data stays mislabelled — which is exactly why you set it *before* data flows.
</details>

<details>
<summary>Q: Realtime shows zero users even though you just visited the site. Name two likely causes.</summary>

The tag isn't on the page you visited (wrong template, or not on every page), or the Measurement ID is mismatched/mistyped. An ad-blocker or your own internal-traffic filter can also hide *your* visit — test from a phone off Wi-Fi to rule that out.
</details>

Next: Google Tag Manager — what it is, and the honest answer to whether a five-page shop site even needs it.
