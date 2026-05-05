'use client';

import { useState } from 'react';
import PlatformContent from '@/components/PlatformContent';
import AIStudioContent from '@/components/AIStudioContent';
import PrintMediaContent from '@/components/PrintMediaContent';
import SocialContent from '@/components/SocialContent';
import AdCampaignsContent from '@/components/AdCampaignsContent';
import ComplianceContent from '@/components/ComplianceContent';

const TABS = [
  { id: 'platform', title: 'Intro' },
  { id: 'generative-ai', title: 'AI Studio' },
  { id: 'social-content', title: 'Social Content' },
  { id: 'digital-ads', title: 'Digital Ads' },
  { id: 'print-media', title: 'Print Media' },
  { id: 'compliance', title: 'Compliance' },
];

function TabContent({ tabId }: { tabId: string }) {
  if (tabId === 'platform') {
    return <PlatformContent />;
  }
  if (tabId === 'generative-ai') {
    return <AIStudioContent />;
  }
  if (tabId === 'social-content') {
    return <SocialContent />;
  }
  if (tabId === 'digital-ads') {
    return <AdCampaignsContent />;
  }
  if (tabId === 'print-media') {
    return <PrintMediaContent />;
  }
  if (tabId === 'compliance') {
    return <ComplianceContent />;
  }
  return (
    <div className="flex flex-col items-center justify-center p-24 border border-dashed border-white/10 rounded-2xl bg-neutral-950/50 w-full max-w-5xl">
       <h1 className="text-4xl">{TABS.find(t => t.id === tabId)?.title}</h1>
       <span className="font-mono text-sm uppercase tracking-widest text-neutral-500">Coming Soon</span>
    </div>
  );
}

export default function CMSPage() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const activeTabTitle = TABS.find(t => t.id === activeTab)?.title;

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <aside className="w-72 flex-shrink-0 border-r border-white/10 bg-black sticky top-20 z-10 self-start">
        <div className="p-8 space-y-8">
           <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">Solutions</h3>
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
