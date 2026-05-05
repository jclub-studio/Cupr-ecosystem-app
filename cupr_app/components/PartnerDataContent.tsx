'use client';

import { motion } from 'motion/react';
import {
  CreditCard,
  Users,
  BarChart3,
  UserCheck,
  ShoppingBag,
  ShoppingCart,
  Truck,
  MapPin,
  Search,
  Star,
  Warehouse,
  Globe,
  TrendingUp,
  ArrowRight,
  Handshake,
  Link2,
} from 'lucide-react';

/* ────────────────────────────────────────────────────────────
 *  POS System Integrations
 * ──────────────────────────────────────────────────────────── */
const POS_SOURCES = [
  {
    icon: CreditCard,
    title: 'Complete Transaction Histories',
    points: [
      'Product, quantity, price, time, budtender, payment method',
    ],
  },
  {
    icon: Users,
    title: 'Customer Loyalty Program Data',
    points: [
      'Visit frequency, average basket size',
      'Preferred product categories',
      'Lifetime value by customer segment',
    ],
  },
  {
    icon: BarChart3,
    title: 'Inventory Turnover Rates',
    points: [
      'What sells, how fast, at what margin',
      'By day-part and day-of-week',
    ],
  },
  {
    icon: UserCheck,
    title: 'Staff Performance Data',
    points: [
      'Which budtenders drive which product categories',
      'Upsell rates',
    ],
  },
];

/* ────────────────────────────────────────────────────────────
 *  E-Commerce Platform Integrations
 * ──────────────────────────────────────────────────────────── */
const ECOMMERCE_SOURCES = [
  {
    icon: ShoppingBag,
    title: 'Online vs. In-Store Purchase Behavior',
    points: [
      'Channel preference by customer',
      'Cross-channel purchase patterns',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Cart Composition & Abandonment',
    points: [
      'Cart composition patterns',
      'Abandonment triggers by product category',
    ],
  },
  {
    icon: Truck,
    title: 'Delivery vs. Pickup Preference',
    points: [
      'Fulfillment preference by geography',
      'Preference breakdown by customer segment',
    ],
  },
];

/* ────────────────────────────────────────────────────────────
 *  Marketplace Integrations
 * ──────────────────────────────────────────────────────────── */
const MARKETPLACE_SOURCES = [
  {
    icon: Search,
    title: 'Discovery-to-Conversion Attribution',
    points: [
      'Where consumers find operators',
      'What drives them to transact',
    ],
  },
  {
    icon: MapPin,
    title: 'Menu Impression Data',
    points: [
      'Which products receive the most browsing before purchase',
    ],
  },
  {
    icon: Star,
    title: 'Review & Rating Data',
    points: [
      'Consumer sentiment signals at scale',
    ],
  },
];

/* ────────────────────────────────────────────────────────────
 *  Wholesale & Distribution Partner Data
 * ──────────────────────────────────────────────────────────── */
const WHOLESALE_SOURCES = [
  {
    icon: TrendingUp,
    title: 'Regional Supply & Pricing',
    points: [
      'Regional supply availability',
      'Pricing trends across markets',
    ],
  },
  {
    icon: Globe,
    title: 'Brand Distribution Footprints',
    points: [
      'Which products are available in which markets',
    ],
  },
  {
    icon: Warehouse,
    title: 'Wholesale Sell-Through Rates',
    points: [
      'Accessory sell-through rates across the CŪPR Network',
    ],
  },
];

/* ────────────────────────────────────────────────────────────
 *  Integration group type + data
 * ──────────────────────────────────────────────────────────── */
interface SourceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  points: string[];
}

const GROUPS: {
  tag: string;
  title: string;
  subtitle: string;
  platforms?: string[];
  sources: SourceItem[];
}[] = [
  {
    tag: 'Integration Layer 01',
    title: 'POS System Integrations',
    subtitle: 'Dutchie · Flowhub · Treez · Blaze · Others via API',
    sources: POS_SOURCES,
  },
  {
    tag: 'Integration Layer 02',
    title: 'E-Commerce Platform Integrations',
    subtitle: 'WooCommerce · Shopify-adjacent · Dispensary Menu Platforms',
    sources: ECOMMERCE_SOURCES,
  },
  {
    tag: 'Integration Layer 03',
    title: 'Marketplace Integrations',
    subtitle: 'Leafly · Weedmaps · I Heart Jane',
    sources: MARKETPLACE_SOURCES,
  },
  {
    tag: 'Integration Layer 04',
    title: 'Wholesale & Distribution Partner Data',
    subtitle: 'Supply chain intelligence across the CŪPR partner network',
    sources: WHOLESALE_SOURCES,
  },
];

/* ────────────────────────────────────────────────────────────
 *  Source card component
 * ──────────────────────────────────────────────────────────── */
function SourceCard({
  source,
  index,
}: {
  source: SourceItem;
  index: number;
}) {
  const Icon = source.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="group p-6 border border-white/5 bg-neutral-950 rounded-2xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_-12px_rgba(255,255,255,0.06)] flex flex-col"
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors flex-shrink-0">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h4 className="text-white font-medium text-[15px] leading-tight">{source.title}</h4>
      </div>
      <ul className="space-y-2.5 flex-grow">
        {source.points.map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-neutral-400 font-light leading-relaxed">
            <span className="w-1 h-1 rounded-full bg-white/20 mt-2 flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────
 *  Main export
 * ──────────────────────────────────────────────────────────── */
export default function PartnerDataContent() {
  return (
    <div className="flex flex-col w-full">

      {/* ──────────────────── HERO / INTRO ──────────────────── */}
      <section className="pb-24 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest text-neutral-400 backdrop-blur-md">
            <Handshake className="w-4 h-4 text-white" />
            Second-Party Data
          </div>
          <p className="text-xl md:text-2xl font-light text-white leading-relaxed max-w-4xl">
            Contributed by operator partners through connected platform integrations. This is the data that completes the picture — bridging what happens on CŪPR with everything that happens across the rest of an operator&apos;s business.
          </p>
        </div>
      </section>

      {/* ──────────────────── INTEGRATION GROUP SECTIONS ──────────────────── */}
      {GROUPS.map((group, groupIdx) => (
        <section
          key={group.tag}
          className={`py-24 border-b border-white/10 relative overflow-hidden bg-black`}
        >
          {/* Subtle alternating background glow for visual rhythm */}
          {groupIdx % 2 === 1 && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-neutral-900/20 rounded-full blur-[120px] pointer-events-none" />
          )}

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Group header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-14 space-y-3"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-600">{group.tag}</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white">{group.title}</h2>
              <div className="flex items-center gap-2">
                <Link2 className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" />
                <p className="text-sm font-mono text-neutral-500 tracking-wide">{group.subtitle}</p>
              </div>
            </motion.div>

            {/* Source cards — responsive grid that adapts to the number of items */}
            <div className={`grid gap-6 ${
              group.sources.length === 4
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4'
                : 'grid-cols-1 md:grid-cols-3'
            }`}>
              {group.sources.map((source, i) => (
                <SourceCard key={source.title} source={source} index={i} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ──────────────────── WHAT PARTNER DATA ADDS ──────────────────── */}
      <section className="py-32 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
              What Partner Data Adds
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed text-center max-w-4xl mx-auto">
              First-party data tells CŪPR what happens on its own platform. Partner data tells CŪPR what happens <span className="text-white font-medium">everywhere else</span> in an operator&apos;s business — creating a complete picture of the operator&apos;s commercial reality rather than just their CŪPR activity.
            </p>

            {/* Strategic callout */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <ArrowRight className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <p className="text-neutral-300 font-light leading-relaxed text-lg">
                  The combination makes <span className="text-white font-medium">attribution total</span> and <span className="text-white font-medium">churn prediction precise</span>: CŪPR can see when an operator&apos;s overall business health is declining before they cancel a subscription.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
