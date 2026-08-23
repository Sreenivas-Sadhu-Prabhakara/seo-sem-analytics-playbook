---
title: Attribution Basics
description: Understand which channel earns the credit for a lead and why no single number ever deserves your blind trust.
sidebar:
  order: 2
---

A woman in Jayanagar searches "wisdom tooth removal cost." She finds Meena's clinic on Google's organic results, reads the treatments page, thinks *"maybe."* Two days later she's scrolling, sees Meena's Google Ad for "painless wisdom tooth extraction," clicks it, and books. Question: who gets the credit for that patient — the SEO or the Ads?

If you answer "the Ads, obviously, that's the click that booked her," congratulations, you've just described **last-click attribution**, and you've also just described how a well-meaning freelancer accidentally kills the exact channel that was doing the heavy lifting. Attribution is the quiet, unglamorous skill that stops you from making confident, expensive mistakes. Let's get it right.

## What attribution even is

:::note[🎓 Foundations]
**Attribution is the story you tell about which touchpoint "caused" a conversion.** Almost nobody buys on first contact. They search, they read a review, they see an ad, they ask a friend on WhatsApp, they come back a week later and finally call. That's a *journey* of several touchpoints. Attribution is the rulebook that decides how to split the credit for the sale across those touchpoints. It's not physics — it's an accounting choice, and different choices tell you to spend your money in different places. That's why it matters more than it sounds.
:::

## Last click, and its enormous blind spot

**Last-click attribution** gives 100% of the credit to the final touchpoint before conversion. It's the default in most people's heads because it's simple: *whatever they clicked right before booking, that's what worked.*

The problem is everything that happened *before* that last click becomes invisible. In Meena's story, last-click hands all the credit to the Ad and zero to the organic search that first put the clinic on the woman's radar. Read your data that way and you'll conclude "SEO isn't converting, Ads is — let's cut the SEO budget." You'd be defunding the channel that *started* the journey. The Ad only closed a patient the SEO had already warmed up.

The reverse happens too. Someone clicks an Ad, doesn't book, remembers the name, and three weeks later searches the brand directly and calls. Last-click credits "Direct" or "Organic" and makes the Ad look worthless — when the Ad is what planted the name.

:::tip[⚔️ War story]
**The channel that was killed for a crime it didn't commit.** A freelancer takes over a boutique's account — call it a composite, "Anaya's Label" in Indiranagar. Google Ads is spending ₹18,000/month and, by last-click, converting badly: lots of clicks, few "final-click" sales. Organic and Direct look like the heroes. So he pauses the Ads to "save the client money." Next month, sales drop across *every* channel, including organic and direct. Why? The Ads had been the top-of-funnel introduction — people discovered the boutique via Ads, then came back later via search or by typing the name. Kill the introduction and the whole funnel starves. He'd read a last-click number as gospel and switched off the thing feeding everything else. Two months and an awkward conversation later, he turned it back on.
:::

## GA4's answer: data-driven attribution (the honest version)

GA4's default model is now **data-driven attribution (DDA)**. Instead of dumbly crediting the last click, it uses your account's own conversion patterns to distribute credit *across* the touchpoints — giving partial credit to the SEO visit *and* the Ad click in Meena's story.

Here's the honest bit, because this course doesn't oversell: DDA is a genuine improvement over last-click, but it's still a model — an estimate — and it needs a reasonable amount of conversion data to work well. On a clinic getting a handful of conversions a week, treat DDA's splits as *directional*, not precise. It's better than last-click. It is not a truth machine. Don't quote its decimals to a client as if they were measured with a ruler.

<figure class="rr-fig">
	<span class="rr-fig__title">TWO WAYS TO SPLIT THE CREDIT</span>
	<div class="rr-compare">
		<div class="rr-compare__col rr-compare--a">
			<h4><span class="rr-compare__tag rr-compare__tag--a">Last-click</span> Winner-takes-all</h4>
			<ul><li>100% of the credit to the final touchpoint</li><li>Blind to everything that happened before it</li><li>Tempts you to defund the channel that <em>started</em> the journey</li></ul>
		</div>
		<div class="rr-compare__col rr-compare--b">
			<h4><span class="rr-compare__tag rr-compare__tag--b">Data-driven</span> Credit shared</h4>
			<ul><li>Splits credit across the touchpoints</li><li>Learns from your account's own conversion patterns</li><li>Better than last-click — still a model, directional on low volume</li></ul>
		</div>
	</div>
	<figcaption class="rr-fig__cap">Same patient journey, two rulebooks — and they point your budget in different directions.</figcaption>
</figure>

## Assist interactions: the invisible teamwork

The concept that fixes your thinking is the **assist**. An assist is a touchpoint that helped along the way but wasn't the final click. In GA4 you can look at conversion paths (Advertising → Attribution, or via an Exploration) and see channels that *assisted* rather than closed.

The pattern you'll see constantly in SMBs: **SEO and local warm people up; Ads and direct close them.** Or the reverse. The two channels aren't competing — they're a relay team. Your job is to notice the hand-off, not to declare one runner the winner and bench the other.

## Channel groupings, decoded

GA4 sorts traffic into default channels. Know what each really means:

| Channel | What it is |
|---|---|
| **Organic Search** | Free clicks from Google/Bing results — your SEO work. |
| **Paid Search** | Clicks from Google Ads — traffic you rented. |
| **Direct** | GA4 couldn't see a source — typed URL, untagged link, WhatsApp, app. The junk drawer. |
| **Referral** | A link from another website (a directory, a blog, JustDial). |
| **Organic Social** | Free clicks from Instagram, Facebook, YouTube. |
| **Paid Social** | Clicks from paid social ads (if the client runs them). |

Misreading these is easy. A big "Direct" number usually means an **untagged-link problem**, not genuine brand loyalty — tag your WhatsApp and campaign links with UTMs so the credit lands where it's earned.

## The SMB attribution reality nobody admits: it happens offline

Here's the part that separates you from the dashboard-worshippers. For a local business, **most conversions finish where GA4 can't see them.** The patient taps "Call," GA4 records the tap — and then the actual booking, the "yes, come at 4pm," happens on a phone call GA4 has no visibility into. Someone walks in off a "Get directions" click. Someone messages on WhatsApp and books there. The scoreboard sees the *doorway*, not the *sale*.

So how do you reason about it honestly?

- **Count the on-site action as the proxy conversion** — the call tap, the WhatsApp click — and accept it's a leading indicator, not the sale itself.
- **Ask the client for the ground truth.** "How many new patients this month, and did any mention finding you online?" Cross-check GA4's trend against the client's actual booking book. If GA4 says calls are up 30% and the client says "yeah, busier month," the story holds.
- **Use a call tracking number if the budget justifies it** — a separate phone number for the website/ads that logs calls. Powerful, but often overkill for a two-chair clinic; suggest it, don't force it.

:::caution[⚠️ Gotcha]
**Never over-trust a single number — from any tool.** GA4's DDA, Ads' own conversion count, Search Console's clicks: each is measuring a slightly different thing with slightly different rules, and none can see the phone call that closed the deal. The professional move is triangulation — read three tools plus the client's real-world results and look for a *consistent story*, not one perfect metric. Anyone who quotes you one number to two decimal places as "the truth" is selling certainty they don't have.
:::

## Common mistakes

- Reading last-click and pausing a channel that was assisting — the classic funnel-starving error.
- Treating a fat "Direct" number as loyalty instead of a tagging leak.
- Quoting DDA's percentages as precise fact on a low-volume account.
- Forgetting that the real conversion — the booking — usually happens off-site, on a call.

## Do this now

In your capstone client's GA4, open **Advertising → Attribution** (or an Exploration of conversion paths) and find one channel that *assists* more than it closes. Write one sentence naming it. That's the channel you must never judge by last-click alone — and it belongs in your optimisation log as a "do not kill" note.

<details>
<summary>Q: Your Ads campaign has a poor last-click conversion count, so a "save money" instinct says pause it. What must you check first?</summary>

Whether the Ads are *assisting* conversions that close on other channels. Look at conversion paths for assist interactions. If the Ad is the top-of-funnel introduction that people act on later via organic or direct, pausing it can starve the whole funnel — the war-story mistake.
</details>

<details>
<summary>Q: Why is attribution especially unreliable for a local business specifically?</summary>

Because the real conversion — the booking — usually happens offline, on a phone call or a WhatsApp chat GA4 can't see. GA4 records the doorway (the call tap), not the sale. So you treat on-site actions as proxy conversions and cross-check the trend against the client's actual bookings.
</details>

Next: we stop looking at each tool in isolation and wire Ads, GA4 and Search Console into one joined-up picture.
