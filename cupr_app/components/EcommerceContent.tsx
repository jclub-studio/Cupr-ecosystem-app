'use client';

import { motion } from 'motion/react';
import { Store, Network, Shirt, Globe, Package, Database, ArrowRight, Waypoints, BarChart3, MapPin, BookOpen, Truck } from 'lucide-react';

/* ────────────────────────────────────────────────────────────
 *  Channel card data for the Infrastructure section
 * ──────────────────────────────────────────────────────────── */
const CHANNELS = [
  {
    icon: Store,
    tag: 'Channel 01',
    title: 'Retail Inventory Tunnel',
    headline: 'Every SKU on Your Shelf Is a Digital Revenue Opportunity',
    desc: 'Connect your POS and inventory systems to sync your physical shelf with your online storefront automatically — no manual data entry, no inventory inaccuracy, no lost online sales. The Retail Inventory Tunnel transforms existing stock into a live digital catalog the moment an operator goes live on CŪPR.',
  },
  {
    icon: Network,
    tag: 'Channel 02',
    title: 'CŪPR Network Product Hosting',
    headline: 'A Catalog Exponentially Larger Than Your Back Room',
    desc: 'An operator with 200 physical SKUs can immediately offer thousands of network-hosted accessories and wholesale goods without purchasing a single additional unit of inventory. Every commission conversion earns revenue while simultaneously generating behavioral data — which products perform, for which audiences, and across which markets — feeding the intelligence layer that makes every future decision smarter.',
  },
  {
    icon: Shirt,
    tag: 'Channel 03',
    title: 'Print On Demand',
    headline: 'Brand Loyalty Infrastructure, Not Just Merchandise',
    desc: 'When an operator puts their brand on a domestically sourced glass piece, grinder, or apparel item through CŪPR\'s Print On Demand channel, the product becomes a physical extension of their digital brand. Every customer who uses or wears that product is a brand impression outside the store. That brand-loyal consumer is more likely to return, more likely to refer, and more likely to log their products into BudBook — feeding the data loop at the individual level. Zero production overhead. Zero inventory risk. Active from day one.',
  }
];

/* ────────────────────────────────────────────────────────────
 *  Network Effect advantages
 * ──────────────────────────────────────────────────────────── */
const NETWORK_ADVANTAGES = [
  {
    icon: Globe,
    title: 'Expanded Catalog Access',
    desc: 'Their storefront can host and sell products from every brand and wholesale supplier in the CŪPR partner network.',
  },
  {
    icon: MapPin,
    title: 'Demand Inflow',
    desc: 'Their physical location becomes an in-store pickup point for any product purchased through any CŪPR-connected storefront in their area.',
  },
  {
    icon: BookOpen,
    title: 'Consumer Discovery',
    desc: 'Their inventory becomes visible to BudBook consumers browsing the Shops function and Dispensaries directory, meaning platform-generated consumer demand routes directly to their register.',
  },
];

/* ────────────────────────────────────────────────────────────
 *  Data loop touchpoints
 * ──────────────────────────────────────────────────────────── */
const DATA_LOOP = [
  {
    label: 'Retail Inventory Tunnel',
    insight: 'Captures what sold, when, at what price, in what market, from which operator.',
  },
  {
    label: 'Network Product Hosting',
    insight: 'Reveals which products perform across which operator audiences.',
  },
  {
    label: 'BudBook Shop Purchases',
    insight: 'Closes a behavioral loop — connecting what someone consumed, how it made them feel, and what they bought next.',
  },
];

export default function EcommerceContent() {
  return (
    <div className="flex flex-col w-full">

      {/* ──────────────────── HERO / OPENING SECTION ──────────────────── */}
      <section className="pb-24 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto space-y-8">
          <p className="text-xl md:text-2xl font-light text-white leading-relaxed max-w-4xl">
            Independent cannabis and smoke shop operators today rely on three separate vendors to build a website, sell online, and source products beyond their physical shelf. CŪPR collapses all three into a single infrastructure layer — and adds a fourth dimension no standalone tool can offer: a live consumer network that routes demand directly to the operator&apos;s storefront.
          </p>
          <p className="text-neutral-400 font-light leading-relaxed text-lg max-w-3xl">
            This is not a feature upgrade. It is a structural shift in how an independent retailer participates in commerce.
          </p>
        </div>
      </section>

      {/* ──────────────────── INFRASTRUCTURE SECTION ──────────────────── */}
      <section className="py-24 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
              A Revenue Terminal, Not a Website
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed text-lg max-w-3xl">
              CŪPR&apos;s commerce infrastructure eliminates the hard ceilings that define an independent operator&apos;s revenue today — physical shelf space, manual catalog management, and disconnection from the consumer discovery layer. Three modular channels activate in stages, each one compounding the last.
            </p>
          </motion.div>

          {/* Channel deep-dive cards — stacked, full-width for narrative density */}
          <div className="space-y-8">
            {CHANNELS.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group relative flex flex-col lg:flex-row gap-8 p-8 md:p-10 border border-white/5 bg-neutral-950 rounded-2xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.08)]"
                >
                  {/* Left: icon + tag */}
                  <div className="flex flex-col items-start gap-4 lg:w-56 flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-600">{channel.tag}</span>
                  </div>

                  {/* Right: text content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-light text-white">{channel.title}</h3>
                    <p className="text-sm font-mono uppercase tracking-widest text-neutral-500">{channel.headline}</p>
                    <p className="text-neutral-400 leading-relaxed font-light text-[15px]">
                      {channel.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────── NETWORK EFFECT SECTION ──────────────────── */}
      <section className="py-32 border-b border-white/10 relative overflow-hidden bg-black">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-neutral-900/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest text-neutral-400 backdrop-blur-md">
              <Waypoints className="w-4 h-4 text-white" />
              Network Architecture
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
              The Storefront as a Network Node
            </h2>
            <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-3xl mx-auto">
              When an operator activates E-Commerce on CŪPR, they are not opening an isolated online store. They are becoming a node in the CŪPR Network — with three immediate structural advantages:
            </p>
          </motion.div>

          {/* Three advantage cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {NETWORK_ADVANTAGES.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="p-8 border border-white/10 rounded-2xl bg-neutral-950/50 hover:border-white/20 transition-colors group"
                >
                  <Icon className="w-8 h-8 text-neutral-500 mb-6 group-hover:text-white transition-colors" />
                  <h3 className="text-lg font-medium text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Strategic implication callout */}
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
                <span className="text-white font-medium">The strategic implication:</span> the more operators that join CŪPR, the more valuable each individual operator&apos;s membership becomes. This is the classic network effect that makes CŪPR defensible at scale against any single-operator tool.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────── DOMESTIC FULFILLMENT SECTION ──────────────────── */}
      <section className="py-24 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Visualization — origin map concept */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square lg:aspect-[4/3] rounded-2xl border border-white/10 bg-neutral-900/50 overflow-hidden flex items-center justify-center p-8 group order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

            <div className="relative z-10 flex flex-col items-center gap-6">
              {/* Truck icon with animated routes */}
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Truck className="w-10 h-10 text-white" />
              </div>

              <div className="space-y-3 text-center">
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 block">Domestic-Origin</span>
                <div className="flex flex-wrap justify-center gap-3">
                  {['In-Store Pickup', 'Local Delivery', 'Regional', 'National US'].map((mode) => (
                    <span key={mode} className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest border border-white/10 rounded-full text-neutral-400">
                      {mode}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] font-mono text-neutral-600 block pt-2">Canada Expansion — On Roadmap</span>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <Package className="w-4 h-4" />
              Fulfillment
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
              Domestic-Origin Fulfillment Is a Market Position, Not a Logistics Choice
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed text-lg">
              The vast majority of smoke shop accessories sold through e-commerce today are fulfilled from overseas through generic dropshipping chains — commoditized products, inconsistent quality, long lead times, and zero dollars circulating within the communities where buyers live.
            </p>
            <p className="text-neutral-400 font-light leading-relaxed">
              CŪPR&apos;s network operates entirely differently. All products ship domestically from their origin location. In-store pickup, local and regional delivery, and national US shipping are all available, with Canada expansion on the roadmap.
            </p>
            <p className="text-neutral-400 font-light leading-relaxed">
              For the operator, this means a differentiated retail offering — not a white-labeled import catalog, but branded, high-quality goods with a traceable domestic supply chain. For CŪPR as a platform, domestic-origin fulfillment is a values statement embedded in the infrastructure — one that aligns with the accelerating &quot;buy local, support your community&quot; consumer behavior trend post-pandemic and creates a genuine narrative distinction from every foreign-fulfilled competitor in the accessory market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────── DATA MOAT SECTION ──────────────────── */}
      <section className="py-32 border-b border-white/10 relative overflow-hidden bg-black">
        {/* Background accent */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-neutral-800/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest text-neutral-400 backdrop-blur-md">
              <Database className="w-4 h-4 text-white" />
              Strategic Moat
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
              Every Transaction Is a Data Event
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-4xl">
              This is what separates CŪPR&apos;s E-Commerce layer from any standalone solution and makes it strategically irreplaceable once adopted.
            </p>
          </motion.div>

          {/* Data loop cards — numbered pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {DATA_LOOP.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="p-8 border border-white/10 rounded-2xl bg-neutral-950/50 flex flex-col group hover:border-white/20 transition-colors"
              >
                <span className="text-4xl font-mono text-white/10 mb-6 group-hover:text-white/20 transition-colors">0{i + 1}</span>
                <h4 className="text-white font-medium mb-3">{item.label}</h4>
                <p className="text-sm text-neutral-400 font-light leading-relaxed flex-grow">{item.insight}</p>
              </motion.div>
            ))}
          </div>

          {/* Moat thesis block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02]"
          >
            <div className="flex items-start gap-5">
              <BarChart3 className="w-8 h-8 text-white flex-shrink-0 mt-1" />
              <div className="space-y-4">
                <p className="text-neutral-300 font-light leading-relaxed text-lg">
                  Aggregated across hundreds of operators and hundreds of thousands of consumers, this becomes the <span className="text-white font-medium">most granular cannabis retail and consumer behavior dataset in existence</span>. No incumbent has it because no incumbent has simultaneously built the operator infrastructure and the consumer logging layer.
                </p>
                <p className="text-neutral-400 font-light leading-relaxed">
                  CŪPR&apos;s E-Commerce transactions are not just revenue — they are the raw material of the Data product, which is the long-term moat.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────── CLOSING STATEMENT ──────────────────── */}
      <section className="py-32 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
              Modular Infrastructure&ensp;·&ensp;Network Scale&ensp;·&ensp;Data Intelligence
            </p>

            <p className="text-xl md:text-2xl font-light text-white leading-relaxed max-w-4xl mx-auto">
              Before CŪPR, an operator&apos;s commercial reach is bounded by their physical location, manual catalog management, a generic website, and disconnection from the consumer discovery layer. After CŪPR, their storefront is a live, data-connected, multi-stream revenue terminal — simultaneously a node in a domestic commerce network, a surface for demand generated by a social platform, a branded merchandise operation, and the source of intelligence that makes every future campaign, recommendation, and product decision smarter.
            </p>

            <div className="h-px w-24 mx-auto bg-white/20" />

            <p className="text-lg font-light text-neutral-400 italic">
              That is a new commercial identity.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
