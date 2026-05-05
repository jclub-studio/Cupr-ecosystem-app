'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowDown } from 'lucide-react';
import { DeviceManagement } from './DeviceManagement';
import { EduTab } from './EduTab';
import { SocialTab } from './SocialTab';
import { ShopTab } from './ShopTab';
import { JournalTab } from './JournalTab';
import { VideoTab } from './VideoTab';
import { IntegrationTab } from './IntegrationTab';
import { MediaTab } from './MediaTab';
import { GamesTab } from './GamesTab';
import { CustomerServiceTab } from './CustomerServiceTab';

const SIDEBAR_GROUPS = [
  {
    title: 'BudBook',
    items: [
      { id: 'journal', title: 'Journal', desc: 'A dual-format approach to consumption journaling. Organize your inventory and track your sessions intelligently.' },
      { id: 'social', title: 'Social', desc: 'Connect with a curated community, join niche Smoke Circles, and share selective social posts.' },
      { id: 'shop', title: 'Shop', desc: 'Seamlessly purchase premium cannabis accessories and CŪPR devices directly from the app.' },
      { id: 'edu', title: 'Edu', desc: 'Access an authoritative encyclopedia featuring deep dives into nuanced cannabinoids, rare terpenes, and regional strains.' },
    ]
  },
  {
    title: 'BudBeat',
    items: [
      { id: 'integration', title: 'Integration', desc: 'Transition your network from the feed to the stage into a dedicated live room.' },
      { id: 'video-chat', title: 'Video Chat', desc: 'Real-time video communication to share your sessions and connect with friends.' },
      { id: 'media', title: 'Media', desc: 'Exclusive content, podcasts, and video media tailored for the modern consumer.' },
      { id: 'games', title: 'Games', desc: 'Spontaneous, interactive party game mechanics layered directly onto your live freestyle sessions.' },
    ]
  },
  {
    title: 'CŪPR',
    items: [
      { id: 'device-management', title: 'Device Management', desc: 'Control Your CŪPR E-Series hardware directly from the app. Monitor battery life, track usage stats and customize temperature presets.' },
      { id: 'customer-service', title: 'Customer Service', desc: 'Direct support line and comprehensive troubleshooting guides for all CŪPR products.' },
    ]
  }
];

function getCategoryContent(id: string) {
  if (id === 'journal') {
     return <JournalTab />;
  }

  if (id === 'social') {
     return <SocialTab />;
  }

  if (id === 'shop') {
     return <ShopTab />;
  }

  if (id === 'edu') {
     return <EduTab />;
  }

  if (id === 'video-chat') {
     return <VideoTab />;
  }

  if (id === 'device-management') {
     return <DeviceManagement />;
  }

  if (id === 'integration') {
     return <IntegrationTab />;
  }

  if (id === 'media') {
     return <MediaTab />;
  }

  if (id === 'games') {
     return <GamesTab />;
  }

  if (id === 'customer-service') {
    return <CustomerServiceTab />;
 }

  // Placeholder for Shop, BudBeat, and other tabs
  return (
    <div className="flex flex-col items-center justify-center p-24 border border-dashed border-white/10 rounded-2xl bg-neutral-950/50 w-full max-w-5xl">
       <span className="font-mono text-sm uppercase tracking-widest text-neutral-500">Coming Soon</span>
    </div>
  );
}

function CategoryContent({ category, groupName }: { category: { id: string, title: string, desc: string }, groupName: string }) {
  return (
    <>
      {/* Category Hero */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 md:px-12 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800/40 via-black to-black pointer-events-none" />
        
        <div className="max-w-7xl w-full relative z-10 space-y-8 mt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
            {groupName} Platform
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-white">
            {category.title}
          </h1>
          <p className="max-w-xl text-neutral-400 font-light text-lg leading-relaxed">
            {category.desc}
          </p>

          <div className="pt-8 text-neutral-600 animate-bounce cursor-default">
            <ArrowDown className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* Items Section */}
      <section className="py-24 px-6 md:px-12 w-full">
         {getCategoryContent(category.id)}
      </section>
    </>
  );
}

export default function MobileAppsPage() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(SIDEBAR_GROUPS[0].items[0].id);

  const activeGroup = SIDEBAR_GROUPS.find(g => g.items.some(i => i.id === activeCategoryId)) || SIDEBAR_GROUPS[0];
  const activeCategory = activeGroup.items.find(i => i.id === activeCategoryId) || activeGroup.items[0];

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* Mobile Top Dropdown */}
      <div className="lg:hidden sticky top-20 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="relative">
          <select 
            value={activeCategoryId} 
            onChange={(e) => setActiveCategoryId(e.target.value)}
            className="w-full appearance-none bg-neutral-900 border border-white/10 text-white rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            {SIDEBAR_GROUPS.map((group) => (
              <optgroup key={group.title} label={group.title}>
                {group.items.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.title}</option>
                ))}
              </optgroup>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
        </div>
      </div>

      {/* Sticky Left Sidebar for Desktop */}
      <aside className="hidden lg:block w-72 flex-shrink-0 border-r border-white/10 bg-black min-h-[calc(100vh-80px)] sticky top-20 z-10 self-start custom-scrollbar h-[calc(100vh-80px)] overflow-y-auto">
        <div className="p-8 space-y-12">
           {SIDEBAR_GROUPS.map((group) => (
             <div key={group.title} className="space-y-4">
               <h3 className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">{group.title}</h3>
               <nav className="flex flex-col space-y-4">
                 {group.items.map(cat => (
                   <button 
                     key={cat.id}
                     onClick={() => setActiveCategoryId(cat.id)} 
                     className={`text-left text-lg font-light tracking-wide transition-colors ${activeCategoryId === cat.id ? 'text-white' : 'text-neutral-500 hover:text-white'}`}
                   >
                     {cat.title}
                   </button>
                 ))}
               </nav>
             </div>
           ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full bg-black relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategoryId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col w-full overflow-hidden"
          >
            <CategoryContent category={activeCategory} groupName={activeGroup.title} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

