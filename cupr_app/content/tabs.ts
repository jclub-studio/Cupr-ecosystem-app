/**
 * Single source of truth for sidebar/tab labels across the marketing app.
 *
 * Keeping copy here (rather than inlined in each `view.tsx`) makes it possible to
 * edit, A/B-test, or i18n the labels without touching layout code. The `id`s are
 * referenced from the `view.tsx` switch statements that pick which body component
 * to render, so the IDs are part of this module's stable contract.
 */

import type { SidebarTab } from '@/components/TabbedSidebarLayout';

export const WEB_TABS: ReadonlyArray<SidebarTab> = [
  { id: 'cms', title: 'Website Hosting & CMS' },
  { id: 'ecommerce', title: 'E-Commerce' },
  { id: 'integration', title: 'Channel Integrations' },
  { id: 'operational', title: 'Operational Integrations' },
];
export const WEB_EYEBROW = 'Solutions';

export const CMS_TABS: ReadonlyArray<SidebarTab> = [
  { id: 'cupros-intro', title: 'CŪPROs intro' },
  { id: 'platform', title: 'Platform' },
  { id: 'generative-ai', title: 'AI Studio' },
  { id: 'social-content', title: 'Social Content' },
  { id: 'digital-ads', title: 'Digital Ads' },
  { id: 'print-media', title: 'Print Media' },
  { id: 'compliance', title: 'Compliance' },
];
export const CMS_EYEBROW = 'CŪPROs CMS';

export const DATA_TABS: ReadonlyArray<SidebarTab> = [
  { id: 'proprietary', title: 'Proprietary' },
  { id: 'partner', title: 'Partner' },
  { id: 'third-party', title: 'Third-Party' },
  { id: 'end-users', title: 'End-Users' },
];
export const DATA_EYEBROW = 'Categories';

export type BudbookTab = SidebarTab & { desc: string };

export const BUDBOOK_TABS: ReadonlyArray<BudbookTab> = [
  {
    id: 'intro',
    title: 'Intro',
    desc: 'A guided overview of BudBook’s core surfaces and why they matter.',
  },
  {
    id: 'journal',
    title: 'Journal',
    desc: 'A dual-format approach to consumption journaling. Organize your inventory and track your sessions intelligently.',
  },
  {
    id: 'social',
    title: 'Social',
    desc: 'Connect with a curated community, join niche Smoke Circles, and share selective social posts.',
  },
  {
    id: 'shop',
    title: 'Shop',
    desc: 'Seamlessly purchase premium cannabis accessories and CŪPR devices directly from the app.',
  },
  {
    id: 'pro',
    title: 'Pro',
    desc: 'Professional subscription for dispensaries, smoke shops, and influencers seeking greater visibility, stronger customer engagement, and connected retail utility within the BudBook ecosystem.',
  },
];
