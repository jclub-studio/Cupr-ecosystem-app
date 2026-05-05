'use client';

import { motion } from 'motion/react';
import {
  Store,
  BarChart3,
  Users2,
  Target,
  TrendingUp,
  AlertTriangle,
  Package,
  Globe,
  Search,
  MapPin,
  Bot,
  HeartPulse,
  Star,
  Sparkles,
  LineChart,
  Building2,
  Scale,
  Truck,
  ArrowRight,
  Zap,
} from 'lucide-react';

/* ────────────────────────────────────────────────────────────
 *  Types
 * ──────────────────────────────────────────────────────────── */
interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

interface EndUserGroup {
  tag: string;
  badge: string;
  title: string;
  subtitle: string;
  features: FeatureItem[];
}

/* ────────────────────────────────────────────────────────────
 *  For Operators — Performance Intelligence
 * ──────────────────────────────────────────────────────────── */
const OPERATOR_FEATURES: FeatureItem[] = [
  {
    icon: BarChart3,
    title: 'Menu Optimization Engine',
    desc: 'Which products to stock, price, promote, and discontinue based on real sales velocity, margin, consumer satisfaction scores, and competitive benchmarks across the network.',
  },
  {
    icon: Users2,
    title: 'Customer Segmentation',
    desc: 'Automatically clustered customer personas derived from purchase history, visit patterns, and demographic enrichment — enabling operators to market to the right customer with the right message at the right time.',
  },
  {
    icon: Target,
    title: 'Campaign Performance Attribution',
    desc: 'Closed-loop reporting showing exactly which CMS campaign drove which in-store or online transaction, with multi-touch attribution across channels.',
  },
  {
    icon: TrendingUp,
    title: 'Market Benchmarking',
    desc: 'How an operator\'s key metrics compare to anonymized peers in their market and nationally, identifying specific gaps and opportunities.',
  },
  {
    icon: AlertTriangle,
    title: 'Churn & Retention Signals',
    desc: 'Early identification of at-risk customers based on declining visit frequency and basket degradation, triggering automated re-engagement through the CMS.',
  },
];

/* ────────────────────────────────────────────────────────────
 *  For Brands & Suppliers — Market Intelligence
 * ──────────────────────────────────────────────────────────── */
const BRAND_FEATURES: FeatureItem[] = [
  {
    icon: Search,
    title: 'Consumer Preference Mapping',
    desc: 'How their products perform across demographic segments, geographies, consumption methods, and wellness use cases — sourced from actual consumer session logs, not surveys.',
  },
  {
    icon: Globe,
    title: 'Network Distribution Analytics',
    desc: 'Which operators carry their products, where they are converting, and where distribution gaps exist.',
  },
  {
    icon: Package,
    title: 'Competitive Benchmarking',
    desc: 'How their SKUs perform relative to category averages across the CŪPR operator network.',
  },
  {
    icon: MapPin,
    title: 'New Market Identification',
    desc: 'Which geographies show unmet consumer demand for their product category based on BudBook session and search data.',
  },
];

/* ────────────────────────────────────────────────────────────
 *  For Consumers — Personalized Intelligence
 * ──────────────────────────────────────────────────────────── */
const CONSUMER_FEATURES: FeatureItem[] = [
  {
    icon: Bot,
    title: 'Buddy AI Recommendations',
    desc: 'Strain, product, and consumption method recommendations trained on personal session history, wellness outcomes, and the Cannadex knowledge base — refined continuously as they log more sessions.',
  },
  {
    icon: HeartPulse,
    title: 'Wellness Trend Analysis',
    desc: 'Longitudinal visualization of how mood, pain, and anxiety metrics have shifted over time in correlation with specific products, methods, and dosages.',
  },
  {
    icon: Star,
    title: 'Product Efficacy Scoring',
    desc: 'A personal, data-driven ranking of which products actually work for their specific therapeutic or recreational goals — not based on general reviews but on their own measured outcomes.',
  },
  {
    icon: Sparkles,
    title: 'Predictive Recommendations',
    desc: 'As the dataset matures, Buddy AI anticipates needs before they are expressed: suggesting a specific strain before a workout based on historical activity-correlated session performance.',
  },
];

/* ────────────────────────────────────────────────────────────
 *  For the Industry — Aggregate Intelligence
 * ──────────────────────────────────────────────────────────── */
const INDUSTRY_FEATURES: FeatureItem[] = [
  {
    icon: LineChart,
    title: 'Cannabis Consumer Behavior Index',
    desc: 'A first-of-its-kind longitudinal dataset correlating product consumption with wellness outcomes, lifestyle context, and commercial behavior across hundreds of thousands of consumers.',
  },
  {
    icon: Building2,
    title: 'Retail Performance Benchmarks',
    desc: 'Standardized performance metrics across 1,000+ operator locations enabling industry-wide benchmarking that currently does not exist at this granularity.',
  },
  {
    icon: Scale,
    title: 'Regulatory Impact Modeling',
    desc: 'Real-time analysis of how state-level regulatory changes affect consumer behavior, operator performance, and market structure — uniquely valuable to policy researchers, investors, and multi-state operators.',
  },
  {
    icon: Truck,
    title: 'Supply Chain Intelligence',
    desc: 'Demand forecasting data informing distributors and cultivators about emerging product category trends before they reach traditional sales reporting cycles.',
  },
];

/* ────────────────────────────────────────────────────────────
 *  Group definitions
 * ──────────────────────────────────────────────────────────── */
const GROUPS: EndUserGroup[] = [
  {
    tag: 'End-User Product 01',
    badge: 'Operators',
    title: 'For Operators — Performance Intelligence',
    subtitle: 'Dispensaries and smoke shops receive actionable intelligence that would cost $50K–$150K annually to source from traditional market research firms.',
    features: OPERATOR_FEATURES,
  },
  {
    tag: 'End-User Product 02',
    badge: 'Brands & Suppliers',
    title: 'For Brands & Suppliers — Market Intelligence',
    subtitle: 'Cannabis brands and wholesale accessory suppliers gain distribution and consumer intelligence unavailable through any existing channel.',
    features: BRAND_FEATURES,
  },
  {
    tag: 'End-User Product 03',
    badge: 'Consumers',
    title: 'For Consumers — Personalized Intelligence',
    subtitle: 'BudBook end-users receive intelligence about their own consumption that no other platform can generate.',
    features: CONSUMER_FEATURES,
  },
  {
    tag: 'End-User Product 04',
    badge: 'Enterprise Tier',
    title: 'For the Industry — Aggregate Intelligence',
    subtitle: 'At network scale, CŪPR\'s anonymized, aggregated dataset becomes a market intelligence product with no existing competitor.',
    features: INDUSTRY_FEATURES,
  },
];

/* ────────────────────────────────────────────────────────────
 *  Feature card
 * ──────────────────────────────────────────────────────────── */
function FeatureCard({ feature, index }: { feature: FeatureItem; index: number }) {
  const Icon = feature.icon;
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
        <h4 className="text-white font-medium text-[15px] leading-tight">{feature.title}</h4>
      </div>
      <p className="text-sm text-neutral-400 font-light leading-relaxed flex-grow">{feature.desc}</p>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────
 *  Main export
 * ──────────────────────────────────────────────────────────── */
export default function EndUsersDataContent() {
  return (
    <div className="flex flex-col w-full">

      {/* ──────────────────── HERO / INTRO ──────────────────── */}
      <section className="pb-24 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest text-neutral-400 backdrop-blur-md">
            <Zap className="w-4 h-4 text-white" />
            Data End-User Products
          </div>
          <p className="text-xl md:text-2xl font-light text-white leading-relaxed max-w-4xl">
            The intelligence outcomes delivered to operators, brands, consumers, and the industry. Every layer of CŪPR&apos;s data stack — proprietary, partner, and enrichment — converges here into products that create measurable value for every participant in the ecosystem.
          </p>
        </div>
      </section>

      {/* ──────────────────── END-USER GROUP SECTIONS ──────────────────── */}
      {GROUPS.map((group, groupIdx) => (
        <section
          key={group.tag}
          className="py-24 border-b border-white/10 relative overflow-hidden bg-black"
        >
          {/* Alternating background glow */}
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
              className="mb-14 space-y-4"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-600">{group.tag}</span>
                <span className="text-[10px] font-mono uppercase tracking-widest border border-white/10 rounded-full px-3 py-1 text-neutral-400">{group.badge}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white">{group.title}</h2>
              <p className="text-neutral-400 font-light leading-relaxed text-lg max-w-3xl">{group.subtitle}</p>
            </motion.div>

            {/* Feature cards — adaptive grid */}
            <div className={`grid gap-6 ${
              group.features.length === 5
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                : group.features.length === 4
                  ? 'grid-cols-1 md:grid-cols-2'
                  : 'grid-cols-1 md:grid-cols-3'
            }`}>
              {group.features.map((feature, i) => (
                <FeatureCard key={feature.title} feature={feature} index={i} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ──────────────────── THE ONE-SENTENCE DATA THESIS ──────────────────── */}
      <section className="py-32 relative overflow-hidden bg-black">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-900/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-10"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
              The One-Sentence Data Thesis
            </p>

            <p className="text-xl md:text-2xl font-light text-white leading-relaxed max-w-4xl mx-auto">
              Every operator that joins CŪPR generates data that makes the consumer experience richer. Every consumer that logs a session generates data that makes the operator&apos;s marketing smarter. The platform compounds in intelligence with every action taken on it — creating a proprietary dataset that becomes more valuable, more accurate, and more defensible every single day it operates.
            </p>

            <div className="h-px w-24 mx-auto bg-white/20" />

            {/* Strategic callout */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm max-w-3xl mx-auto"
            >
              <div className="flex items-start gap-4">
                <ArrowRight className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <p className="text-neutral-300 font-light leading-relaxed text-lg text-left">
                  This is the <span className="text-white font-medium">compounding flywheel</span> at the heart of CŪPR&apos;s defensibility. No single-tool competitor can replicate it because no single-tool competitor owns both sides of the data loop.
                </p>
              </div>
            </motion.div>

            <div className="pt-4">
              <p className="text-sm font-mono uppercase tracking-[0.2em] text-neutral-600">
                CŪPR&ensp;|&ensp;Cannabis Ūtility Performance Research&ensp;|&ensp;Series Seed
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
