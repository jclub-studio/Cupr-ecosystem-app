'use client';

import { useState, useSyncExternalStore } from 'react';
import { motion } from 'motion/react';
import { VantageIntroShowcase } from '@/components/VantageIntroShowcase';

const TABS = [
  { id: 'intro', title: 'Intro' },
  { id: 'market', title: 'Market' },
  { id: 'mission', title: 'Mission' },
];

const noopSubscribe = () => () => {};

function IntroHighlightsSkeleton() {
  return (
    <section className="w-full pb-12 pt-12 md:pt-20" aria-busy="true" aria-label="Loading intro highlights">
      <div className="mx-auto max-w-7xl animate-pulse space-y-8 px-6">
        <div className="max-w-3xl space-y-4">
          <div className="h-3 w-40 rounded bg-white/10" />
          <div className="h-10 max-w-md rounded bg-white/10" />
          <div className="h-24 rounded bg-white/10" />
        </div>
        <div className="h-56 rounded-2xl bg-white/[0.06]" />
        <div className="h-56 rounded-2xl bg-white/[0.06]" />
        <div className="h-56 rounded-2xl bg-white/[0.06]" />
      </div>
    </section>
  );
}

/** Intro mounts post-hydrate via useSyncExternalStore so SSR + first client paint always match the skeleton. */
function VantageIntroAfterHydration() {
  const clientReady = useSyncExternalStore(noopSubscribe, () => true, () => false);

  if (!clientReady) {
    return <IntroHighlightsSkeleton />;
  }

  return <VantageIntroShowcase />;
}

function TabContent({ tabId }: { tabId: string }) {
  if (tabId === 'intro') {
     return <VantageIntroAfterHydration />;
  }
  if (tabId === 'market') {
     return (
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 min-h-[400px]">
          <div className="space-y-8 flex flex-col justify-center">
            <h2 className="text-3xl font-light tracking-tight">An Untapped Premium Segment</h2>
            <p className="text-neutral-400 font-light leading-relaxed">
              As legalization spreads and social stigmas dissolve, the consumer base has rapidly matured. Today&apos;s cannabis consumers are health-conscious professionals who track their sleep, optimize their fitness, and appreciate minimalist, premium consumer electronics.
            </p>
            <p className="text-neutral-400 font-light leading-relaxed">
              Despite this evolution, the hardware market has not kept pace. Existing solutions lack aesthetic intelligence, robust digital integration, and functional longevity. CŪPR answers this demand with a unified hardware-software ecosystem.
            </p>
          </div>

          <div className="relative border border-white/10 rounded-3xl p-8 bg-black flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 to-transparent pointer-events-none" />
            <div className="relative z-10 flex justify-between items-end pb-8 border-b border-white/10">
              <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest">Growth Trajectory</span>
              <span className="text-4xl font-mono tracking-tighter">$42B+</span>
            </div>
            
            <div className="relative z-10 mt-12 grid grid-cols-3 gap-4 items-end h-40">
              <div className="w-full bg-neutral-800 rounded-t-sm h-[40%]" />
              <div className="w-full bg-neutral-600 rounded-t-sm h-[65%]" />
              <div className="w-full bg-white rounded-t-sm h-[100%] relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-black bg-white px-2 py-1 rounded shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                  CŪPR TAM
                </div>
              </div>
            </div>
            <div className="relative z-10 flex justify-between mt-4 text-[10px] uppercase font-mono text-neutral-500">
              <span>Novlety (Declining)</span>
              <span>Mid-Tier</span>
              <span>Premium Tech</span>
            </div>
          </div>
        </div>
      </section>
     );
  }
  if (tabId === 'mission') {
     return (
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="border-b border-white/10 pb-4">
            <h3 className="text-lg uppercase tracking-widest font-mono text-neutral-500 mb-2">Strategic Positioning</h3>
            <p className="text-2xl font-light">Where performance meets lifestyle.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             {[
               { title: 'The Problem', text: 'Stigmatized, flashy, inefficient novelty items that break quickly and provide zero feedback.' },
               { title: 'The Consumer', text: 'Highly active, sophisticated, values privacy, sleek aesthetics, and data tracking (like Whoop/Oura).' },
               { title: 'The Solution', text: 'Minimalist, meticulously engineered devices combined with powerful companion software.' },
               { title: 'The Moat', text: 'Proprietary patent-pending hardware and an integrated ecosystem that competitors cannot easily replicate.' },
             ].map((block, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="p-6 border border-white/10 rounded-2xl bg-neutral-950/20 hover:bg-neutral-900 transition-colors"
                >
                  <h4 className="text-xs uppercase font-mono tracking-widest text-white/50 mb-4 pb-4 border-b border-white/5">{block.title}</h4>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed">{block.text}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>
     );
  }
  return null;
}

export default function VantagePage() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const activeTabTitle = TABS.find(t => t.id === activeTab)?.title;

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <aside className="w-72 flex-shrink-0 border-r border-white/10 bg-black sticky top-20 z-10 self-start">
        <div className="p-8 space-y-8">
           <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">Navigation</h3>
           <nav className="flex flex-col space-y-1">
             {TABS.map(tab => (
               <button 
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id)} 
                 className={`sidebar-nav-tab px-4 py-4 ${activeTab === tab.id ? 'active' : ''}`}
               >
                 <div className="flex items-center justify-between">
                   <span className="text-sm font-light tracking-wide">{tab.title}</span>
                 </div>
               </button>
             ))}
           </nav>
        </div>
      </aside>

      <main className="flex-1 w-full bg-black relative">
        <section className="relative min-h-[30vh] flex flex-col justify-center px-6 md:px-12 border-b border-white/10 overflow-hidden">
            <div className="max-w-7xl w-full relative z-10 space-y-8 mt-16">
              <h1 className="text-5xl font-light tracking-tighter text-white">{activeTabTitle}</h1>
            </div>
        </section>
        <section className="py-12 md:py-24 px-6 md:px-12 w-full">
            <TabContent tabId={activeTab} />
        </section>
      </main>
    </div>
  );
}
