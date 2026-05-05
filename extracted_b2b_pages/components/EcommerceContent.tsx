'use client';

import { motion } from 'motion/react';
import { Store, Network, Shirt } from 'lucide-react';

const FEATURES = [
  {
    icon: Store,
    title: 'Retail Inventory Tunnel',
    desc: 'Connect internal POS and inventory systems to seamlessly transition first-party retail items online. Digital storefronts sync automatically with shelf realities—eliminating manual data entry while powering reliable direct sales and in-store foot traffic.',
  },
  {
    icon: Network,
    title: 'CŪPR Network Product Hosting',
    desc: 'Monetize audience attention with zero inventory carrying costs. Tap into our curated ecosystem to showcase partner brands, wholesale accessories, and network-exclusive items, earning commission revenue on every conversion without holding a single physical unit.',
  },
  {
    icon: Shirt,
    title: 'Print On Demand',
    desc: 'Deploy custom-branded apparel and lifestyle accessories on day one. By routing orders directly to top-tier fulfillment centers, operators can cultivate brand loyalty and generate high-margin merchandise sales without ever managing production or shipping logistics.',
  }
];

export default function EcommerceContent() {
  return (
    <div className="flex flex-col w-full">
      {/* Introduction */}
      <section className="pb-24 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto space-y-8">
          <p className="text-xl md:text-2xl font-light text-white leading-relaxed max-w-4xl">
            Launch instantly with our one-click website creator, establishing a polished digital presence that naturally scales. As your business evolves, seamlessly unlock deeper e-commerce capabilities to aggregate, manage, and monetize products across multiple integrated avenues.
          </p>
          <p className="text-neutral-400 font-light leading-relaxed text-lg max-w-3xl">
            Our commerce infrastructure is designed for staged expansion to support long-term revenue growth. We provide three distinct, low-overhead channels allowing owners to activate powerful integration points precisely when their operations demand them.
          </p>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(38, 38, 38, 0.5)' }}
                  className="flex flex-col p-8 md:p-10 border border-white/5 bg-neutral-950 rounded-2xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]"
                >
                  <div className="mb-8">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">{feature.title}</h3>
                  <p className="text-neutral-400 leading-relaxed font-light flex-grow">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="mt-20 pt-8 border-t border-white/10 text-center"
          >
            <p className="text-sm uppercase tracking-widest text-neutral-500 font-mono">
               Modular infrastructure ensures you only manage the complexity you require.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
