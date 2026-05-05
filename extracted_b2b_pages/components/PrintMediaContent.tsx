'use client';

import { motion } from 'motion/react';
import { FileText, Zap, DollarSign, Layers } from 'lucide-react';

const FEATURES = [
  {
    icon: FileText,
    title: 'Content-to-print, in one system',
    desc: 'Store owners and brand teams can select any page, collection, or campaign within the CŪPR CMS and instantly generate layouts optimized for specific print formats: notebooks, posters, flyers, catalogs, newsletters, training materials, and more. Templates enforce brand consistency while allowing local teams to personalize messaging for their market or location.'
  },
  {
    icon: Zap,
    title: 'On-demand production, zero inventory',
    desc: 'Once approved, assets are sent directly to integrated print partners for just‑in‑time production and shipping, eliminating minimum order quantities, storage costs, and waste. Every print run—whether a single notebook or a large batch of in‑store posters—is triggered by demand, with status, costs, and fulfillment tracked alongside digital campaigns in the same dashboard.'
  },
  {
    icon: DollarSign,
    title: 'New margin-positive revenue streams',
    desc: 'CŪPR enables store owners to treat print not just as collateral, but as a product channel—selling branded notebooks, art prints, zines, and premium newsletters without owning presses or managing logistics. This positions print media as an incremental profit center layered on top of the existing CMS, leveraging the same content to drive both digital engagement and physical product sales.'
  },
  {
    icon: Layers,
    title: 'Operational leverage for multi-location brands',
    desc: 'For networks and franchises, CŪPR standardizes how print assets are created, customized, and ordered across locations, ensuring brand-safe templates, consistent quality, and streamlined fulfillment. Headquarters controls the core designs; local operators choose what they need, when they need it—turning a historically fragmented print workflow into a centralized, data-visible capability.'
  }
];

export default function PrintMediaContent() {
  return (
    <div className="flex flex-col w-full text-white">
      {/* Introduction */}
      <section className="pb-24 border-b border-white/10">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
            Print Media
          </h2>
          <p className="text-xl font-light text-neutral-300 leading-relaxed">
            Transform existing CMS content into professional print assets and on‑demand goods. From notebooks and posters to newsletters and branded collateral, CŪPR converts digital content into print‑ready formats and routes orders directly into a print‑on‑demand network for production and delivery.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURES.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-10 border border-white/5 bg-neutral-950/50 rounded-3xl transition-all duration-300 hover:border-white/10 hover:bg-neutral-900/30 hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.05)]"
            >
              <div className="mb-10 p-4 inline-block rounded-full bg-white/5 border border-white/10">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-light text-white mb-6 tracking-tight">{feature.title}</h4>
              <p className="text-neutral-400 font-light leading-relaxed">{feature.desc}</p>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
