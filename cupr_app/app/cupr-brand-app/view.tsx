'use client';

import { useId, useRef, useState, type KeyboardEvent } from 'react';
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

type TabId = (typeof TABS)[number]['id'];

function TabBody({ tabId }: { tabId: TabId }) {
  if (tabId === 'device-management') return <DeviceManagement />;
  return <CustomerServiceTab />;
}

export default function CuprBrandAppPage() {
  const baseId = useId();
  const [activeTab, setActiveTab] = useState<TabId>(TABS[0].id);
  const active = TABS.find(t => t.id === activeTab) ?? TABS[0];
  const tabRefs = useRef<Map<TabId, HTMLButtonElement | null>>(new Map());

  const tabId = (id: string) => `${baseId}-tab-${id}`;
  const panelId = (id: string) => `${baseId}-panel-${id}`;

  const onTabsKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const idx = TABS.findIndex(t => t.id === activeTab);
    if (idx < 0) return;
    let nextIdx = idx;
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        nextIdx = (idx + 1) % TABS.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        nextIdx = (idx - 1 + TABS.length) % TABS.length;
        break;
      case 'Home':
        nextIdx = 0;
        break;
      case 'End':
        nextIdx = TABS.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    const next = TABS[nextIdx].id;
    setActiveTab(next);
    tabRefs.current.get(next)?.focus();
  };

  return (
    <div className="flex w-full min-h-screen flex-col lg:flex-row">
      <aside className="sticky top-20 z-10 hidden w-72 flex-shrink-0 self-start border-r border-white/10 bg-black lg:block">
        <div className="space-y-8 p-8">
          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">CŪPR App</h3>
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label="CŪPR App"
            className="flex flex-col space-y-1"
            onKeyDown={onTabsKeyDown}
          >
            {TABS.map(tab => {
              const selected = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  ref={el => {
                    tabRefs.current.set(tab.id, el);
                  }}
                  type="button"
                  role="tab"
                  id={tabId(tab.id)}
                  aria-selected={selected}
                  aria-controls={panelId(tab.id)}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveTab(tab.id)}
                  className={`sidebar-nav-tab px-4 py-4 ${selected ? 'active' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-light tracking-wide">{tab.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
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

        <section
          id={panelId(activeTab)}
          role="tabpanel"
          aria-labelledby={tabId(activeTab)}
          tabIndex={0}
          className="w-full px-6 py-12 md:px-12 md:py-24 focus:outline-none"
        >
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
