// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub Pages project site: served from a subfolder, so `base` is required.
// https://sreenivas-sadhu-prabhakara.github.io/seo-sem-analytics-playbook/
export default defineConfig({
	site: 'https://sreenivas-sadhu-prabhakara.github.io',
	base: '/seo-sem-analytics-playbook',
	integrations: [
		starlight({
			title: 'Ranking for Rupees',
			tagline: 'Get found. Get clicks. Get paid.',
			description:
				'The freelancer’s playbook for turning SEO, Google Analytics and Google Ads into paid work — built for Indian local businesses.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/Sreenivas-Sadhu-Prabhakara/seo-sem-analytics-playbook',
				},
			],
			lastUpdated: true,
			pagination: true,
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'How to use this playbook', slug: 'start/how-to-use' },
						{ label: 'The free toolstack', slug: 'start/toolstack' },
						{ label: 'The capstone client', slug: 'start/capstone' },
						{ label: 'Templates & swipe files', slug: 'start/templates' },
						{ label: 'Glossary', slug: 'start/glossary' },
					],
				},
				{
					label: 'Module 0 · The Landscape',
					collapsed: true,
					items: [{ autogenerate: { directory: 'modules/00-landscape' } }],
				},
				{
					label: 'Module 1 · Land the Client',
					collapsed: true,
					items: [{ autogenerate: { directory: 'modules/01-land-the-client' } }],
				},
				{
					label: 'Module 2 · Audit & Discovery',
					collapsed: true,
					items: [{ autogenerate: { directory: 'modules/02-audit' } }],
				},
				{
					label: 'Module 3 · Strategy & Keywords',
					collapsed: true,
					items: [{ autogenerate: { directory: 'modules/03-strategy' } }],
				},
				{
					label: 'Module 4 · Measure First',
					collapsed: true,
					items: [{ autogenerate: { directory: 'modules/04-measurement' } }],
				},
				{
					label: 'Module 5 · Local SEO & GBP',
					collapsed: true,
					items: [{ autogenerate: { directory: 'modules/05-local-seo' } }],
				},
				{
					label: 'Module 6 · On-Page & Content',
					collapsed: true,
					items: [{ autogenerate: { directory: 'modules/06-onpage' } }],
				},
				{
					label: 'Module 7 · Technical SEO',
					collapsed: true,
					items: [{ autogenerate: { directory: 'modules/07-technical' } }],
				},
				{
					label: 'Module 8 · Off-Page & Authority',
					collapsed: true,
					items: [{ autogenerate: { directory: 'modules/08-offpage' } }],
				},
				{
					label: 'Module 9 · Google Ads',
					collapsed: true,
					items: [{ autogenerate: { directory: 'modules/09-google-ads' } }],
				},
				{
					label: 'Module 10 · Optimize with Data',
					collapsed: true,
					items: [{ autogenerate: { directory: 'modules/10-optimize' } }],
				},
				{
					label: 'Module 11 · Report & Prove ROI',
					collapsed: true,
					items: [{ autogenerate: { directory: 'modules/11-report' } }],
				},
				{
					label: 'Module 12 · Retain & Scale',
					collapsed: true,
					items: [{ autogenerate: { directory: 'modules/12-scale' } }],
				},
			],
		}),
	],
});
