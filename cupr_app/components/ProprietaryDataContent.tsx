'use client';

import { motion } from 'motion/react';
import {
  Building2,
  Globe,
  Megaphone,
  ShoppingCart,
  Network,
  Shirt,
  BookOpen,
  Package,
  Bot,
  Heart,
  Store,
  Music,
  Fingerprint,
  TrendingUp,
  BarChart3,
  Target,
  ArrowRight,
} from 'lucide-react';

/* ────────────────────────────────────────────────────────────
 *  B2B Operator Layer sources
 * ──────────────────────────────────────────────────────────── */
const B2B_SOURCES = [
  {
    icon: Building2,
    title: 'Operator Onboarding Profiles',
    points: [
      'Business category, location, license type',
      'Product verticals, brand identity',
    ],
  },
  {
    icon: Globe,
    title: 'CŪPR Web Performance',
    points: [
      'Page traffic, session duration, menu engagement',
      'Conversion paths, search queries on operator storefronts',
    ],
  },
  {
    icon: Megaphone,
    title: 'CMS Campaign Data',
    points: [
      'Campaign type, creative format, channel, send volume',
      'Open/click rates, conversion attribution',
      'Compliance flags triggered, A/B performance differentials',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Retail Inventory Tunnel',
    points: [
      'SKU-level sales velocity, pricing, out-of-stock frequency',
      'Reorder patterns, BOPIS vs. delivery split',
      'Cart abandonment by product category',
    ],
  },
  {
    icon: Network,
    title: 'Network Product Hosting',
    points: [
      'Which network SKUs operators choose to carry',
      'Conversion rates by product category',
      'Commission revenue by operator, brand performance across network',
    ],
  },
  {
    icon: Shirt,
    title: 'Print On Demand',
    points: [
      'Merchandise category preferences by operator market',
      'Design patterns, sales velocity by region',
    ],
  },
];

/* ────────────────────────────────────────────────────────────
 *  B2C Consumer Layer sources
 * ──────────────────────────────────────────────────────────── */
const B2C_SOURCES = [
  {
    icon: BookOpen,
    title: 'BudBook Session Logs',
    points: [
      'Product consumed, strain, consumption method, dosage',
      'Accessories used, activity context',
      'Pre/post wellness metrics (mood / pain / anxiety on 0–10 scales)',
      'Effects experienced, overall product rating',
      'Free-text notes, timestamp and geolocation',
    ],
  },
  {
    icon: Package,
    title: 'My Stash Inventory',
    points: [
      'Products owned, accessories owned',
      'Preferred dispensaries, purchase frequency',
      'Brand loyalty signals',
    ],
  },
  {
    icon: Bot,
    title: 'Buddy AI Interactions',
    points: [
      'Natural language queries, product questions',
      'Recommendation acceptance / rejection rates',
      'Follow-up behavior after recommendations',
    ],
  },
  {
    icon: Heart,
    title: 'BudBook Social Engagement',
    points: [
      'Post interactions, Circles membership',
      'For You feed engagement patterns',
      'Correlative interest signals',
    ],
  },
  {
    icon: Store,
    title: 'BudBook Shop Conversions',
    points: [
      'Which products were purchased, from which operator',
      'Following which session or social interaction',
    ],
  },
  {
    icon: Music,
    title: 'BudBeat Activity',
    points: [
      'Genre preferences, BPM ranges',
      'Session participation patterns',
      'AI beat generation prompts',
      'Time-of-use correlation with BudBook sessions',
    ],
  },
];

/* ────────────────────────────────────────────────────────────
 *  "What this data tells CŪPR" insights
 * ──────────────────────────────────────────────────────────── */
const INSIGHTS = [
  {
    icon: Fingerprint,
    text: 'Exactly which products drive the highest consumer satisfaction across measurable wellness dimensions.',
  },
  {
    icon: Target,
    text: 'Which operator campaigns generate real downstream consumer behavior — not just clicks.',
  },
  {
    icon: BarChart3,
    text: 'How cannabis consumption correlates with lifestyle activities, mood outcomes, and accessory preferences at the individual and aggregate level.',
  },
  {
    icon: TrendingUp,
    text: 'Which products, brands, and formats are growing or declining in consumer preference before that signal reaches any distributor or retailer.',
  },
];

/* ────────────────────────────────────────────────────────────
 *  Source card component (reused for B2B + B2C)
 * ──────────────────────────────────────────────────────────── */
function SourceCard({
  source,
  index,
}: {
  source: { icon: React.ComponentType<{ className?: string }>; title: string; points: string[] };
  index: number;
}) {
  const Icon = source.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="group p-6 md:p-8 border border-white/5 bg-neutral-950 rounded-2xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_-12px_rgba(255,255,255,0.06)] flex flex-col"
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
export default function ProprietaryDataContent() {
  return (
    <div className="flex flex-col w-full">

      {/* ──────────────────── HERO / INTRO ──────────────────── */}
      <section className="pb-24 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest text-neutral-400 backdrop-blur-md">
            <Fingerprint className="w-4 h-4 text-white" />
            First-Party Data
          </div>
          <p className="text-xl md:text-2xl font-light text-white leading-relaxed max-w-4xl">
            Generated directly by CŪPR&apos;s own platform activity — across every operator interaction, every consumer session, every campaign, and every transaction. This is data no third party can replicate because no third party owns both sides of the marketplace.
          </p>
        </div>
      </section>

      {/* ──────────────────── B2B OPERATOR LAYER ──────────────────── */}
      <section className="py-24 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 space-y-4"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500">Sources</span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
              From the B2B Operator Layer
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed text-lg max-w-3xl">
              Every tool an operator uses on CŪPR — from onboarding through daily operations — produces structured, first-party data that feeds the intelligence engine.
            </p>
          </motion.div>

          {/* Source cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {B2B_SOURCES.map((source, i) => (
              <SourceCard key={source.title} source={source} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── B2C CONSUMER LAYER ──────────────────── */}
      <section className="py-24 border-b border-white/10 relative overflow-hidden bg-black">
        {/* Background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-900/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 space-y-4"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500">Sources</span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
              From the B2C Consumer Layer
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed text-lg max-w-3xl">
              The consumer side of the platform generates the behavioral and experiential data that no POS system, no ad platform, and no market research firm can access — because it is logged voluntarily, in real time, by the consumer themselves.
            </p>
          </motion.div>

          {/* Source cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {B2C_SOURCES.map((source, i) => (
              <SourceCard key={source.title} source={source} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── WHAT THIS DATA TELLS CŪPR ──────────────────── */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 space-y-6 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
              What This Data Tells CŪPR
            </h2>
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-neutral-500">
              — and only CŪPR
            </p>
          </motion.div>

          {/* Insight rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {INSIGHTS.map((insight, i) => {
              const Icon = insight.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="p-8 border border-white/10 rounded-2xl bg-neutral-950/50 flex items-start gap-5 group hover:border-white/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-neutral-300 font-light leading-relaxed">{insight.text}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Strategic moat callout */}
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
                <span className="text-white font-medium">No competitor has this dataset</span> because no competitor simultaneously operates the B2B infrastructure layer and the B2C consumer logging layer. The proprietary data compound — every new operator and every new consumer session makes the intelligence more granular, more predictive, and more defensible.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
