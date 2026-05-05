'use client';

import { motion } from 'motion/react';
import {
  MapPin,
  Users,
  Landmark,
  Scale,
  FileCheck,
  Building2,
  HeartPulse,
  Brain,
  DollarSign,
  TrendingUp,
  Home,
  Layers,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

/* ────────────────────────────────────────────────────────────
 *  Source item type
 * ──────────────────────────────────────────────────────────── */
interface SourceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  points: string[];
}

/* ────────────────────────────────────────────────────────────
 *  Demographic & Geographic Enrichment
 * ──────────────────────────────────────────────────────────── */
const DEMOGRAPHIC_SOURCES: SourceItem[] = [
  {
    icon: Users,
    title: 'US Census & ESRI Demographic Data',
    points: [
      'Age, income, education, household composition by ZIP code',
      'Hyper-local consumer profile construction around each operator location',
    ],
  },
  {
    icon: MapPin,
    title: 'Foot Traffic Intelligence',
    points: [
      'Real-world mobility patterns via Placer.ai, SafeGraph',
      'Who visits dispensaries, when, from where, and what other locations they frequent',
    ],
  },
  {
    icon: Landmark,
    title: 'Competitive Location Data',
    points: [
      'Proximity of competing operators',
      'Market saturation by geography',
    ],
  },
];

/* ────────────────────────────────────────────────────────────
 *  Regulatory & Compliance Data
 * ──────────────────────────────────────────────────────────── */
const REGULATORY_SOURCES: SourceItem[] = [
  {
    icon: Scale,
    title: 'State-by-State Advertising Law Databases',
    points: [
      'Continuously updated to power the CMS compliance engine',
    ],
  },
  {
    icon: FileCheck,
    title: 'License Status Monitoring',
    points: [
      'Tracking operator license health, renewal dates',
      'Compliance actions across all 50 states',
    ],
  },
  {
    icon: Building2,
    title: 'Zoning & Proximity Restrictions',
    points: [
      'Relevant for new operator market entry modeling',
    ],
  },
];

/* ────────────────────────────────────────────────────────────
 *  Consumer Wellness & Lifestyle Enrichment
 * ──────────────────────────────────────────────────────────── */
const WELLNESS_SOURCES: SourceItem[] = [
  {
    icon: HeartPulse,
    title: 'Wearable & Health Platform Data',
    points: [
      'With user consent — Whoop, Oura, Apple Health integration potential',
      'Correlating cannabis session wellness outcomes with objective biometric data',
      'Validating and enriching BudBook\'s subjective wellness logs',
    ],
  },
  {
    icon: Brain,
    title: 'Psychographic & Lifestyle Segmentation',
    points: [
      'Layering onto BudBook user profiles',
      'Enriching Buddy AI recommendation quality',
      'Improving BudBook Social\'s For You algorithm',
    ],
  },
];

/* ────────────────────────────────────────────────────────────
 *  Market & Financial Enrichment
 * ──────────────────────────────────────────────────────────── */
const MARKET_SOURCES: SourceItem[] = [
  {
    icon: DollarSign,
    title: 'Cannabis Pricing Indices',
    points: [
      'Cannabis Benchmarks, BDSA — wholesale flower and extract pricing by state',
      'Enabling operators to benchmark their margins',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Consumer Spending Trend Data',
    points: [
      'Broader CPG and wellness market behavior',
      'Informing cannabis consumption trend analysis',
    ],
  },
  {
    icon: Home,
    title: 'Real Estate & Retail Performance',
    points: [
      'Informing operator expansion decisions',
      'Market entry modeling and site selection',
    ],
  },
];

/* ────────────────────────────────────────────────────────────
 *  Enrichment groups
 * ──────────────────────────────────────────────────────────── */
const GROUPS: {
  tag: string;
  title: string;
  sources: SourceItem[];
}[] = [
  {
    tag: 'Enrichment Layer 01',
    title: 'Demographic & Geographic Enrichment',
    sources: DEMOGRAPHIC_SOURCES,
  },
  {
    tag: 'Enrichment Layer 02',
    title: 'Regulatory & Compliance Data',
    sources: REGULATORY_SOURCES,
  },
  {
    tag: 'Enrichment Layer 03',
    title: 'Consumer Wellness & Lifestyle Enrichment',
    sources: WELLNESS_SOURCES,
  },
  {
    tag: 'Enrichment Layer 04',
    title: 'Market & Financial Enrichment',
    sources: MARKET_SOURCES,
  },
];

/* ────────────────────────────────────────────────────────────
 *  Source card
 * ──────────────────────────────────────────────────────────── */
function SourceCard({ source, index }: { source: SourceItem; index: number }) {
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
export default function ThirdPartyDataContent() {
  return (
    <div className="flex flex-col w-full">

      {/* ──────────────────── HERO / INTRO ──────────────────── */}
      <section className="pb-24 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest text-neutral-400 backdrop-blur-md">
            <Layers className="w-4 h-4 text-white" />
            Third-Party Enrichment
          </div>
          <p className="text-xl md:text-2xl font-light text-white leading-relaxed max-w-4xl">
            External datasets layered onto proprietary and partner data for contextual intelligence. Enrichment turns CŪPR&apos;s internal signals into market-grade predictions by adding the demographic, regulatory, wellness, and financial context that no closed platform can generate alone.
          </p>
        </div>
      </section>

      {/* ──────────────────── ENRICHMENT GROUP SECTIONS ──────────────────── */}
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
              className="mb-14 space-y-3"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-600">{group.tag}</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white">{group.title}</h2>
            </motion.div>

            {/* Source cards — adaptive grid */}
            <div className={`grid gap-6 ${
              group.sources.length === 2
                ? 'grid-cols-1 md:grid-cols-2'
                : 'grid-cols-1 md:grid-cols-3'
            }`}>
              {group.sources.map((source, i) => (
                <SourceCard key={source.title} source={source} index={i} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ──────────────────── WHAT ENRICHMENT ADDS ──────────────────── */}
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
              What Enrichment Adds
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
              Third-party data transforms CŪPR&apos;s proprietary and partner datasets from <span className="text-white font-medium">descriptive</span> — what happened on our platform — to <span className="text-white font-medium">predictive</span> — what will happen in this market, with this consumer segment, for this operator category.
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
                <Sparkles className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <p className="text-neutral-300 font-light leading-relaxed text-lg">
                  It is the difference between a <span className="text-white font-medium">reporting tool</span> and an <span className="text-white font-medium">intelligence platform</span>. Enrichment is what makes CŪPR&apos;s data product genuinely actionable — enabling forward-looking recommendations for operators, investors, and brands that no competitor can replicate.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
