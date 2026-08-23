---
title: How Links Still Work (and the Myths)
description: The honest state of link-based authority, and the myths that quietly get small sites penalised.
sidebar:
  order: 1
---

You're on a WhatsApp call with Sunrise Physiotherapy (a composite Indiranagar clinic we'll follow through this module), and the owner drops the sentence you'll hear from every second SMB client: "My cousin's friend can get me 500 backlinks for ₹1,500. Should we do it?"

Your job in the next ten minutes is to talk them off that ledge without sounding like you're upselling. To do that, you need to actually understand how links work — not the 2012 version, the honest current version.

## Why this pays

Links are still one of the strongest signals in Google's ranking system. But the *way* they matter has changed so much that most "link building" services are selling a product that ranged from useless to radioactive years ago. If you understand the real mechanics, you become the person who saves the client from a penalty — and that's a trust deposit you'll draw on for the whole engagement.

:::note[🎓 Foundations]
A **backlink** is just a hyperlink on *someone else's* website that points to your client's website. If the Indiranagar Runners Club page has the words "physio partner: Sunrise Physiotherapy" linked to the clinic's site, that's one backlink. Google discovers it while crawling the web and treats it as a signal. The collection of all links pointing to a site is its **backlink profile**.
:::

## Links are votes — but weighted, not counted

The original idea (PageRank, the thing the whole company was built on) was elegant: treat a link as a vote of confidence. A page with lots of votes is probably important. A vote *from* an important page is worth more than a vote from a nobody.

That's still directionally true, with two decades of spam-fighting bolted on top. The modern reality you can safely teach a client:

- **Quality and relevance beat quantity — by a landslide.** One link from a respected local news site or a physiotherapy association is worth more than a thousand links from auto-generated junk. Not "worth a bit more." A different universe.
- **Relevance matters twice: topical and local.** For an Indiranagar clinic, a link from a Bengaluru health blog or a local sports club is gold. A link from a random crypto blog in another country is noise at best, a red flag at worst.
- **Context matters.** A link inside a real sentence in real content ("we send our runners to Sunrise for recovery") means something. The same link buried in a footer link-farm means nothing.
- **Links are earned by being link-worthy.** Everything downstream in this module is really about *deserving* the vote, then making it easy to cast.

:::caution[⚠️ Gotcha]
That "500 backlinks for ₹1,500" gig? Those links come from link farms, hacked sites, spun-content blogs and comment sections. At best Google ignores them and you wasted the money. At worst it's an unnatural-link pattern that contributes to a penalty. You are not buying rankings; you're buying risk. The correct answer to the cousin's friend is a polite, firm no.
:::

## Editorial links vs the stuff that gets you hurt

Draw a hard line in your own head, because clients won't:

<figure class="rr-fig">
	<span class="rr-fig__title">Two ways a link lands on the internet</span>
	<div class="rr-compare">
		<div class="rr-compare__col rr-compare--a">
			<h4><span class="rr-compare__tag rr-compare__tag--a">Good</span> Earned &amp; editorial</h4>
			<ul><li>A blogger links because your guide is genuinely useful</li><li>A supplier lists you as an authorised partner</li><li>Local press covers your free physio camp</li><li>A club you sponsor thanks you with a link</li></ul>
		</div>
		<div class="rr-compare__col rr-compare--b">
			<h4><span class="rr-compare__tag rr-compare__tag--b">Risk</span> Manufactured &amp; paid</h4>
			<ul><li>You paid ₹500 for a "guest post" on a site that sells them by the dozen</li><li>You dropped your link in 200 blog comments</li><li>You bought a "package" of directory submissions on a fiverr-style gig</li><li>You joined a "you link me, I link you" ring with ten strangers</li></ul>
		</div>
	</div>
	<figcaption class="rr-fig__cap">Same HTML tag, opposite outcomes. The whole difference is <em>why</em> the link exists.</figcaption>
</figure>

The tell is simple: **would this link exist if Google didn't?** If a real human put it there because it genuinely helps their reader, it's editorial. If it exists *only* to move rankings, it's the risky kind — and modern spam systems are frighteningly good at spotting the pattern.

## The link attributes: nofollow, sponsored, ugc

Not every link passes "credit." HTML lets a site tag a link with a `rel` attribute that tells Google how to treat it:

- **`rel="nofollow"`** — "I'm linking, but don't count this as my endorsement." Long the default for links a site can't fully vouch for.
- **`rel="sponsored"`** — "This link is paid or an ad." Use this for anything you paid for, including legit sponsorships and paid placements.
- **`rel="ugc"`** — "User-generated content," e.g. forum posts and comments.

Two things a working freelancer must know. First, Google now treats these as *hints* rather than strict commands, so a nofollowed link isn't automatically worthless — it can still drive traffic, brand awareness and discovery. Second, and this is the compliance point: **any link you get in exchange for money or free product should be tagged `sponsored` (or nofollow).** A paid link that passes full credit violates Google's policies. So when you sponsor the local marathon and they add your link, a `sponsored` or `nofollow` tag keeps everyone clean — and you still win the brand exposure and the referral traffic.

:::tip[⚔️ War story]
A boutique owner in Jaipur (composite) proudly showed a freelancer her "SEO report": 3,000 new backlinks in one month. They were from cloned article sites in five languages she'd never heard of. Rankings had dropped, not risen. The previous "expert" had spent her retainer building the exact footprint Google's spam systems hunt for. Cleaning it up took longer than earning honest links would have. Fast link building is usually just fast risk accumulation.
:::

## The myths that get small sites penalised

Say these out loud to clients so they never fall for them:

- **"More links, faster, is better."** No. Unnatural velocity and junk sources are what get flagged.
- **"Buying links is fine if you're careful."** Buying links that pass credit violates Google's link-spam policy. Full stop.
- **"Submit to 200 directories."** A handful of *relevant, real* local directories (we'll cover these) help. Mass directory blasting is spam.
- **"Post my link in comments and forums."** Comment spam is a signal of desperation, not authority — and usually nofollowed anyway.
- **"Reciprocal link rings work."** "Link to me and I'll link to you" at scale is a recognised manipulation pattern.

For an ordinary Indian SMB, the highest-ROI truth is unglamorous: **a few relevant, local, genuinely-earned links beat everything else.** That's not a limitation. That's your entire ethical playbook, and it works.

## Common mistakes

- Chasing high "Domain Authority" numbers from irrelevant sites instead of relevance and locality.
- Treating nofollow links as worthless (they still build brand and traffic).
- Letting a client buy links behind your back — set the rule early and in writing.

## Do this now

Open **Google Search Console** for your capstone client and go to the **Links** report. Skim the top linking sites. Are they relevant and local, or a graveyard of junk domains you don't recognise? Write down your gut read in one line — you'll build on this in the audit later.

<details>
<summary>Q: A client got a link from a respected Bengaluru news site, but it's tagged nofollow. Wasted effort?</summary>

Not at all. A nofollow link from a real, relevant publication still drives referral traffic, builds brand awareness, gets your name in front of humans who then search for you — and Google treats nofollow as a hint, not a hard block. You want the coverage regardless of the tag.
</details>

<details>
<summary>Q: Why is one link from a local physio association worth more than 500 directory links?</summary>

Relevance and trust. The association link is topical, local and editorial — a real vote from a credible, related source. The 500 directory links are irrelevant, low-trust and pattern-match to spam, so Google discounts or distrusts them. Quality and relevance beat raw quantity every time.
</details>

Next up: how a normal local business actually *earns* those good links without a PR agency or a black-hat bone in its body.
