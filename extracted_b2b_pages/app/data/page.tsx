'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { BarChart3, MessageSquare, Network, TrendingUp, AlertTriangle, PieChart, Layers, ActivitySquare, Globe, Activity, Users } from 'lucide-react';

function MarketIntelContent() {
  return (
    <>
      {/* Section 1: The Full Picture */}
      <section className="pb-24 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="space-y-6"
            >
              <h2 className="text-sm font-mono uppercase tracking-[0.15em] text-neutral-500">Connecting Demand to Dollars</h2>
              <h3 className="text-4xl font-light tracking-tight text-white">The Full Picture.</h3>
              <p className="text-neutral-400 font-light leading-relaxed text-lg">
                CŪPR provides a channel-agnostic view of the cannabis and smoke accessory market by uniquely linking social demand signals with commercial performance data. Our platform surfaces patterns that are directly actionable for product, brand, operations, and capital allocation teams.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-video rounded-2xl border border-white/10 bg-neutral-900/50 overflow-hidden flex items-center justify-center p-8 group"
            >
               {/* Abstract visualization of demand meeting dollars */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
               <div className="relative w-full h-full flex items-center justify-between z-10 px-4 md:px-8">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                       <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-neutral-500" />
                    </div>
                    <span className="font-mono text-[10px] md:text-xs text-neutral-500 uppercase text-center">Social Demand</span>
                  </div>
                  
                  {/* Connecting Line */}
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-2 md:mx-4 relative overflow-hidden">
                     <motion.div 
                       animate={{ x: ['-100%', '100%'] }}
                       transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                       className="absolute top-0 bottom-0 w-1/4 bg-white/50 shadow-[0_0_10px_white]"
                     />
                  </div>
                  
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform">
                       <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <span className="font-mono text-[10px] md:text-xs text-white uppercase text-center">Commercial Impact</span>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 & 3: Qualitative vs Quantitative Grid */}
      <section className="py-24 px-6 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            
            {/* Qualitative Insights */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="p-8 md:p-10 rounded-[2rem] border border-white/10 bg-neutral-950 flex flex-col h-full"
            >
              <div className="mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <ActivitySquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-medium mb-2 text-white">Qualitative Insights</h3>
                <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-4">Understanding the Consumer</p>
                <p className="text-neutral-400 font-light leading-relaxed">
                  Go beyond standard sales data to understand how consumers actually use, discuss, and perceive products in the real world.
                </p>
              </div>

              <div className="space-y-6 flex-grow">
                {[
                  { title: 'Multi-Platform Understanding', desc: 'We continuously collect and analyze public conversations across Reddit, YouTube, Twitch, X, Instagram, and Facebook.' },
                  { title: 'Domain-Specific Classification', desc: 'Posts are automatically classified by product form, ingestion method, accessories, and usage occasions.' },
                  { title: 'Context-Aware Sentiment', desc: 'Sentiment is classified at both the post and aspect level (e.g., "vape pen for hiking" vs. "vape pen left in hot car"), with time-series tracking.' }
                ].map((item, i) => (
                  <div key={i} className="pt-6 border-t border-white/5">
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">Actionable Takeaways</p>
                <ul className="space-y-3">
                  {[
                    'See how brands & accessories are perceived relative to competitors.',
                    'Identify failing product reliability before it hits sales figures.',
                    'Understand which forms & methods are gaining favor, and where.',
                    'Real-time live charts showing volume & sentiment by platform.'
                  ].map((list, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-neutral-300 font-light">
                      <span className="text-neutral-600 font-mono mt-0.5">-</span>
                      <span>{list}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Quantitative Metrics */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="p-8 md:p-10 rounded-[2rem] border border-white/10 bg-neutral-950 flex flex-col h-full"
            >
              <div className="mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-medium mb-2 text-white">Quantitative Metrics</h3>
                <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-4">Tracking Commercial Health</p>
                <p className="text-neutral-400 font-light leading-relaxed">
                  Access the commercial metrics institutional investors and operators need to track sales velocity, inventory, and segment performance.
                </p>
              </div>

              <div className="space-y-6 flex-grow">
                {[
                  { title: 'Unified Market Ingestion', desc: 'Aggregate data from DTC headshops, Shopify stores, Amazon, eBay, and TikTok Shop.' },
                  { title: 'Proprietary Product Taxonomy', desc: 'Every SKU is classified into our domain-specific ontology and segmented by material, price tier, and brand tier for granular analysis.' },
                  { title: 'Commercial Health Analytics', desc: 'Track quantitative metrics in real-time: conversion rates, revenue, AOV, refund/return rates, and marketplace Buy Box share.' }
                ].map((item, i) => (
                  <div key={i} className="pt-6 border-t border-white/5">
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6"></div> {/* Spacer to balance height mostly */}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 4: Behavioral Correlation Engine (Hero-style feature block) */}
      <section className="py-32 px-6 border-b border-white/10 relative overflow-hidden bg-black">
        {/* Background Graphic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-neutral-900/30 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
            <Network className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
            The Behavioral Correlation Engine
          </h2>
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-neutral-500">
            Our Unique Advantage
          </p>
          <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-3xl mx-auto">
            Our platform uniquely links the social graph with commerce data. We map accessory growth in revenue and market share to specific consumer use-cases and occasions (e.g., gaming, hiking, discrete use at work), connecting social demand signals directly to commercial uplift.
          </p>
        </div>
      </section>

      {/* Section 5: Actionable Insights for Capital & Strategy */}
      <section className="py-32 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">Actionable Insights for Capital & Strategy</h2>
            <p className="text-neutral-500 font-light max-w-2xl mx-auto">
              CŪPR Commerce provides critical insights that drive high-level decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: PieChart,
                title: 'Pricing Strategy',
                desc: 'Identify the "sweet spot" price bands and bundles that yield the highest AOV in each channel.'
              },
              {
                icon: Globe,
                title: 'Market Share & Channel Mix',
                desc: 'Track revenue share by brand/category, and analyze a brand\'s channel mix (DTC vs. Amazon vs. eBay) over time.'
              },
              {
                icon: AlertTriangle,
                title: 'Risk & Anomaly Detection',
                desc: 'Our alerting system flags abnormal spikes in returns (quality issues) and rapid price undercutting (price wars).'
              },
              {
                icon: Layers,
                title: 'Segment Performance',
                desc: 'Benchmark brand performance against competitors on traffic, AOV, and revenue within hyper-specific segments.'
              }
            ].map((insight, i) => {
              const Icon = insight.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-black border border-white/10 rounded-2xl flex flex-col hover:border-white/30 transition-colors"
                >
                  <Icon className="w-6 h-6 text-neutral-400 mb-6" />
                  <h3 className="text-lg font-medium text-white mb-3">{insight.title}</h3>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">{insight.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

const TABS = [
  { id: 'proprietary', title: 'Proprietary' },
  { id: 'partner', title: 'Partner' },
  { id: 'third-party', title: 'Third-Party' },
  { id: 'end-users', title: 'End-Users' },
];

function TabContent({ tabId }: { tabId: string }) {
  if (tabId === 'third-party') {
    return <MarketIntelContent />;
  }
  if (tabId === 'proprietary') {
    return (
      <div className="flex flex-col items-center justify-center p-24 border border-dashed border-white/10 rounded-2xl bg-neutral-950/50 w-full max-w-5xl mx-auto">
          <Activity className="w-8 h-8 text-white mb-4" />
          <h1 className="text-4xl">Proprietary</h1>
         <span className="font-mono text-sm uppercase tracking-widest text-neutral-500">Coming Soon</span>
      </div>
    );
  }
  if (tabId === 'partner') {
    return (
      <div className="flex flex-col items-center justify-center p-24 border border-dashed border-white/10 rounded-2xl bg-neutral-950/50 w-full max-w-5xl mx-auto">
          <Network className="w-8 h-8 text-white mb-4" />
          <h1 className="text-4xl">Partner</h1>
         <span className="font-mono text-sm uppercase tracking-widest text-neutral-500">Coming Soon</span>
      </div>
    );
  }
  if (tabId === 'end-users') {
    return (
      <div className="flex flex-col items-center justify-center p-24 border border-dashed border-white/10 rounded-2xl bg-neutral-950/50 w-full max-w-5xl mx-auto">
          <Users className="w-8 h-8 text-white mb-4" />
          <h1 className="text-4xl">End-Users</h1>
         <span className="font-mono text-sm uppercase tracking-widest text-neutral-500">Coming Soon</span>
      </div>
    );
  }
  return null;
}

export default function DataInsightsPage() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const activeTabTitle = TABS.find(t => t.id === activeTab)?.title;

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <aside className="w-72 flex-shrink-0 border-r border-white/10 bg-black sticky top-20 z-10 self-start">
        <div className="p-8 space-y-8">
           <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">Categories</h3>
           <nav className="flex flex-col space-y-4">
             {TABS.map(tab => (
               <button 
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id)} 
                 className={`text-left text-lg font-light tracking-wide transition-colors ${activeTab === tab.id ? 'text-white' : 'text-neutral-500 hover:text-white'}`}
               >
                 {tab.title}
               </button>
             ))}
           </nav>
        </div>
      </aside>

      <main className="flex-1 w-full bg-black relative">
        <section className="relative min-h-[40vh] flex flex-col justify-center px-6 md:px-12 border-b border-white/10 overflow-hidden">
            <div className="max-w-7xl w-full relative z-10 space-y-8 mt-16">
              <h1 className="text-5xl font-light tracking-tighter text-white">{activeTabTitle}</h1>
            </div>
        </section>
        <section className="py-24 px-6 md:px-12 w-full">
            <TabContent tabId={activeTab} />
        </section>
      </main>
    </div>
  );
}

