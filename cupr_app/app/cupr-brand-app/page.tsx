'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DeviceManagement } from '../budbook/DeviceManagement';
import { CustomerServiceTab } from '../budbook/CustomerServiceTab';

const TABS = [
  {
    id: 'device-management',
    title: 'Device Management',
    desc: 'Control your CŪPR hardware directly from the app.',
  },
  {
    id: 'customer-service',
    title: 'Customer Service',
    desc: 'Support, diagnostics, and warranty workflows for your ecosystem.',
  },
] as const;

function TabBody({ tabId }: { tabId: (typeof TABS)[number]['id'] }) {
  if (tabId === 'device-management') return <DeviceManagement />;
  return <CustomerServiceTab />;
}

export default function CuprBrandAppPage() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]['id']>(TABS[0].id);
  const active = TABS.find(t => t.id === activeTab) ?? TABS[0];

  return (
    <div className="flex w-full min-h-screen flex-col lg:flex-row">
      <aside className="sticky top-20 z-10 hidden w-72 flex-shrink-0 self-start border-r border-white/10 bg-black lg:block">
        <div className="space-y-8 p-8">
          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">CŪPR App</h3>
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

      <main className="relative w-full flex-1 bg-black">
        <section className="relative flex min-h-[30vh] flex-col justify-center overflow-hidden border-b border-white/10 px-6 md:px-12">
          <div className="relative z-10 mt-16 w-full max-w-7xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">CŪPR Platform</span>
            <h1 className="text-5xl font-light tracking-tighter text-white">CŪPR App</h1>
            <p className="max-w-2xl text-neutral-400 font-light leading-relaxed">{active.desc}</p>
          </div>
        </section>

        <section className="w-full px-6 py-12 md:px-12 md:py-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex w-full flex-col overflow-hidden"
            >
              <TabBody tabId={activeTab} />
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}

