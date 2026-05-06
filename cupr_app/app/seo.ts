import type { Metadata } from 'next';

const BASE_TITLE = 'CŪPR | Cannabis Ūtility Performance Research';
const BASE_DESCRIPTION =
  'Sophisticated, data-driven, and innovative cannabis hardware and software ecosystem.';

/**
 * Site-wide defaults — also exported from `app/layout.tsx` so child routes that
 * do not declare their own metadata still receive sensible OpenGraph defaults.
 */
export const SITE_METADATA: Metadata = {
  title: {
    default: BASE_TITLE,
    template: '%s | CŪPR',
  },
  description: BASE_DESCRIPTION,
  applicationName: 'CŪPR',
  openGraph: {
    type: 'website',
    title: BASE_TITLE,
    description: BASE_DESCRIPTION,
    siteName: 'CŪPR',
  },
  twitter: {
    card: 'summary_large_image',
    title: BASE_TITLE,
    description: BASE_DESCRIPTION,
  },
};

type RouteMeta = Pick<Metadata, 'title' | 'description'> & {
  path: string;
};

export const ROUTE_METADATA = {
  home: {
    path: '/',
    title: 'Vantage — Premium Cannabis Hardware & Software Ecosystem',
    description:
      'CŪPR Vantage frames the premium cannabis hardware and software opportunity: minimalist devices, privacy-first analytics, and a unified ecosystem.',
  },
  web: {
    path: '/web',
    title: 'CŪPROs Web — Hosting, E-commerce, and Channel Integrations',
    description:
      'Launch a 1-click Next.js website, sync your menu through the Retail Inventory Tunnel, and standardize every digital touchpoint with operational and channel integrations.',
  },
  cms: {
    path: '/cms',
    title: 'CŪPROs CMS — Compliance-Native Marketing Infrastructure',
    description:
      'Multi-tenant CMS, AI Studio, social, digital ads, print media, and compliance tooling for cannabis retail and smoke shop operators.',
  },
  data: {
    path: '/data',
    title: 'CŪPR Data — First-Party, Partner, and Industry Intelligence',
    description:
      'How CŪPR turns operator and consumer behavior into actionable intelligence across proprietary, partner, third-party, and end-user data layers.',
  },
  budbook: {
    path: '/budbook',
    title: 'BudBook — Connected Cannabis Companion',
    description:
      'BudBook unifies inventory, sessions, social discovery, and in-app shopping for cannabis users — and gives operators a Pro tier for visibility, loyalty, and floor-staff enablement.',
  },
  join: {
    path: '/join',
    title: 'Join CŪPR',
    description: 'Join the CŪPR ecosystem — partner, operator, or early access.',
  },
  proprietary: {
    path: '/proprietary',
    title: 'Proprietary Hardware — CŪPR Industrial Design',
    description: 'Patent-pending cannabis hardware engineered for performance and lifestyle.',
  },
  cuprBrandApp: {
    path: '/cupr-brand-app',
    title: 'CŪPR Brand — Identity & Visual System',
    description: 'The CŪPR brand system: tone, typography, color, motion, and product story.',
  },
  hardgoods: {
    path: '/hardgoods',
    title: 'Hardgoods — CŪPR Hardware Catalog',
    description: 'Hardgoods catalog across the CŪPR ecosystem.',
  },
  softgoods: {
    path: '/softgoods',
    title: 'Softgoods — CŪPR Apparel & Accessories',
    description: 'Softgoods catalog across the CŪPR ecosystem.',
  },
  consumables: {
    path: '/consumables',
    title: 'Consumables — CŪPR Network Catalog',
    description: 'Consumables catalog across the CŪPR ecosystem.',
  },
} as const satisfies Record<string, RouteMeta>;

export type RouteKey = keyof typeof ROUTE_METADATA;

/** Build a Next.js Metadata object for a known route. */
export function metadataFor(route: RouteKey): Metadata {
  const r = ROUTE_METADATA[route];
  return {
    title: r.title,
    description: r.description,
    openGraph: {
      title: r.title,
      description: r.description,
      url: r.path,
      type: 'website',
      siteName: 'CŪPR',
    },
    twitter: {
      card: 'summary_large_image',
      title: r.title,
      description: r.description,
    },
    alternates: {
      canonical: r.path,
    },
  };
}
