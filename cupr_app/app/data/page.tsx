'use client';

import { useState } from 'react';
import ProprietaryDataContent from '@/components/ProprietaryDataContent';
import PartnerDataContent from '@/components/PartnerDataContent';
import ThirdPartyDataContent from '@/components/ThirdPartyDataContent';
import EndUsersDataContent from '@/components/EndUsersDataContent';

const TABS = [
  { id: 'proprietary', title: 'Proprietary' },
  { id: 'partner', title: 'Partner' },
  { id: 'third-party', title: 'Third-Party' },
  { id: 'end-users', title: 'End-Users' },
];

function TabContent({ tabId }: { tabId: string }) {
  if (tabId === 'third-party') {
    return <ThirdPartyDataContent />;
  }
  if (tabId === 'proprietary') {
    return <ProprietaryDataContent />;
  }
  if (tabId === 'partner') {
    return <PartnerDataContent />;
  }
  if (tabId === 'end-users') {
    return <EndUsersDataContent />;
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

