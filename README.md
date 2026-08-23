# Ranking for Rupees

**The freelancer's playbook for turning SEO, Google Analytics and Google Ads into paid work — built for Indian local businesses.**

> Get found. Get clicks. Get paid.

This is a comprehensive, hands-on training course that teaches beginners-to-intermediates how to earn a **freelance income** doing search marketing (SEO + GA4 analytics + Google Ads / SEM) for local small businesses. It's written as the arc of a **real freelance gig** — land a client, audit them, wire up tracking, fix their search presence, run their ads, prove the results, and turn it into a retainer.

The whole course runs on **free tools** (GA4, Search Console, Google Business Profile, Google Ads, Looker Studio, Keyword Planner) and revolves around a **capstone client** — one real local business the learner works from cover to cover.

🔗 **Live site:** https://sreenivas-sadhu-prabhakara.github.io/seo-sem-analytics-playbook/

## What's inside

- **13 modules** following the freelance gig arc (Landscape → Land the Client → Audit → Strategy → Measure → Local SEO → On-Page → Technical → Off-Page → Google Ads → Optimize → Report → Scale)
- A graded **assignment** per module, each done for the learner's real capstone client
- **Level tags** (Foundations / Practitioner / Advanced) so a mixed audience can read at its own altitude
- Copy-paste **templates & swipe files**, a free **toolstack** reference, and a **glossary**

## Tech

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build). Content is plain Markdown in `src/content/docs/`.

```
src/content/docs/
├── index.mdx            # Home
├── start/               # How to use, toolstack, capstone, templates, glossary
└── modules/             # 00-landscape … 12-scale (each: intro + lessons + assignment)
```

## Run it locally

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # production build into ./dist
npm run preview    # preview the production build
```

> Node 18+ required.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site with the official Astro action and publishes it to GitHub Pages. The `site` and `base` values in `astro.config.mjs` are set for this repository's Pages URL — update them if you fork.

## A note on accuracy

Search platforms change their menus constantly, and this course teaches durable craft over brittle click-paths. Named businesses in examples are **composites** (realistic but invented), pricing figures are **illustrative ranges**, and screenshots are marked as placeholders to be filled with live captures. Nothing here guarantees income — it gives you the skills and the system.

---

© Sreenivas S P. Educational content.
