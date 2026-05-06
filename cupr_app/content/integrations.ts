/**
 * Copy for the Channel Integrations and Operational Integrations tabs on `/web`.
 *
 * Card icons stay in the components (they map to lucide-react React components and
 * are visual decisions tied to layout). Everything that is *text* — labels, names,
 * descriptions, intro paragraphs, closing statements — lives here so it can be
 * edited or translated without touching JSX.
 */

export type IntegrationPlatformContent = {
  id: string;
  /** Lucide icon key — matched by the rendering component to a real Icon component. */
  iconKey:
    | 'Globe'
    | 'MapPin'
    | 'Smartphone'
    | 'Search'
    | 'Activity'
    | 'Store'
    | 'ShoppingBag'
    | 'Truck'
    | 'ShoppingCart'
    | 'BarChart2'
    | 'Leaf'
    | 'Package';
  name: string;
  label: string;
  desc: string;
};

export const CHANNEL_INTEGRATIONS_INTRO = {
  subhead: 'Standardize every digital touchpoint where customers discover and buy.',
  body:
    'Once CŪPR has normalized operational data, it distributes that data across the channels that shape visibility, trust, and conversion. This is how CŪPR delivers a unified digital presence: one synchronized layer for hours, menus, branding, reviews, ordering, pickup, and delivery across the full customer journey.',
  bridge:
    'CŪPR unifies two critical integration layers: the systems that run the business, and the channels where customers experience it. Together, they create a synchronized digital presence that is more accurate, more efficient, and more defensible over time.',
  sectionLabel: 'The distribution layer',
  closing:
    'Channel Integrations are how CŪPR turns operational truth into customer-facing performance. They ensure every external touchpoint reflects the same accurate business data, brand identity, and buying experience.',
} as const;

export const CHANNEL_INTEGRATIONS: ReadonlyArray<IntegrationPlatformContent> = [
  {
    id: 'budbook-profiles',
    iconKey: 'Globe',
    name: 'BudBook Profiles',
    label: 'Owned ecosystem presence',
    desc: 'Claim and optimize your verified hub within the CŪPR ecosystem. BudBook acts as a native discovery and profile layer where operators can present a complete, trusted identity inside the broader network.',
  },
  {
    id: 'google-business',
    iconKey: 'MapPin',
    name: 'Google Business',
    label: 'Local SEO and listing parity',
    desc: 'Synchronized hours, menus, and reviews help ensure that what customers see on Google matches the real business. This reduces inconsistency and strengthens local discovery.',
  },
  {
    id: 'apple-business-connect',
    iconKey: 'Smartphone',
    name: 'Apple Business Connect',
    label: 'Apple ecosystem presence',
    desc: 'Manage location visibility across Apple Maps, Siri, and Wallet so your store information stays accurate across another critical discovery surface.',
  },
  {
    id: 'snapchat-yelp',
    iconKey: 'Search',
    name: 'Snapchat & Yelp Optimization',
    label: 'Reputation and local visibility',
    desc: 'Maintain consistent business data, improve reputation workflows, and strengthen presence across high-intent local discovery channels.',
  },
  {
    id: 'weedmaps-leafly',
    iconKey: 'Activity',
    name: 'Weedmaps & Leafly',
    label: 'Cannabis marketplace synchronization',
    desc: 'Keep menus current and optimize profiles for cannabis-native customer acquisition channels. Weedmaps for Business itself emphasizes live integrations as part of its business platform offering.',
  },
  {
    id: 'dutchie',
    iconKey: 'Store',
    name: 'Dutchie Systems',
    label: 'Commerce continuity',
    desc: 'Integrate with existing POS and ordering workflows to ensure the customer buying journey remains connected from browsing to checkout. POS-ecommerce synchronization is widely treated as essential for accurate menu availability and omnichannel operations.',
  },
  {
    id: 'ecommerce-pickup',
    iconKey: 'ShoppingBag',
    name: 'E-Commerce & Pickup',
    label: 'Click-and-collect conversion',
    desc: 'Enable frictionless pickup flows that convert local digital demand into in-store revenue while preserving operational accuracy.',
  },
  {
    id: 'delivery-outfitting',
    iconKey: 'Truck',
    name: 'Delivery Outfitting',
    label: 'Last-mile coordination',
    desc: 'Support logistics integration, fleet routing, and digital outfitting so delivery operations can function as a coordinated extension of the brand.',
  },
];

export const OPERATIONAL_INTEGRATIONS_INTRO = {
  subhead: 'Connect the systems that already run the business.',
  body:
    'CŪPR integrates with the operational platforms behind cannabis retail, wholesale, and supply-chain workflows, turning fragmented business data into a unified digital intelligence layer. Rather than asking operators to replace their existing stack, CŪPR sits above it—standardizing inventory, product, order, compliance, and fulfillment data so it can power every downstream digital experience.',
  sectionLabel: 'The source-of-truth layer',
  closing:
    'Operational Integrations are what make CŪPR more than a front-end software layer. They give the platform access to the live business systems that drive accuracy, automation, and long-term data defensibility.',
} as const;

export const OPERATIONAL_INTEGRATIONS: ReadonlyArray<IntegrationPlatformContent> = [
  {
    id: 'meadow',
    iconKey: 'ShoppingCart',
    name: 'Meadow',
    label: 'Retail operations sync',
    desc: 'Meadow anchors the retail execution layer with POS, inventory, ecommerce, pickup, delivery, loyalty, analytics, and Metrc-linked compliance workflows. In the CŪPR framework, Meadow serves as a trusted system of record that helps keep menus accurate, commerce flows compliant, and customer-facing data aligned with real store operations.',
  },
  {
    id: 'nabis',
    iconKey: 'BarChart2',
    name: 'Nabis',
    label: 'Wholesale infrastructure sync',
    desc: 'Nabis extends CŪPR beyond the storefront into wholesale commerce, distribution, and supply intelligence. By connecting supplier access, fulfillment visibility, payment infrastructure, and wholesale analytics, Nabis helps CŪPR support smarter assortment expansion and tighter coordination between upstream supply and downstream demand.',
  },
  {
    id: 'canix',
    iconKey: 'Leaf',
    name: 'Canix',
    label: 'ERP and supply-chain sync',
    desc: 'Canix adds upstream visibility into manufacturing, seed-to-sale workflows, inventory, and compliance operations. Within CŪPR, this data enriches product intelligence, improves catalog accuracy, and creates a more complete operational picture from production through retail merchandising.',
  },
  {
    id: 'flower-co',
    iconKey: 'Package',
    name: 'Flower Co.',
    label: 'Fulfillment-edge alignment',
    desc: "Flower Co. represents the fulfillment and delivery edge of the ecosystem, reinforcing how regional logistics and convenience-led ordering shape customer conversion. In CŪPR's architecture, this layer informs routed commerce, delivery workflows, and the evolving relationship between digital demand and fulfillment execution.",
  },
];
