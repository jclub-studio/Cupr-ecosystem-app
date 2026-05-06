'use client';

import { Suspense, useEffect, useId, useRef, type KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowDown } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ProTab } from './ProTab';
import { SocialTab } from './SocialTab';
import { ShopTab } from './ShopTab';
import { JournalTab } from './JournalTab';
import { IntroTab } from './IntroTab';
import { BUDBOOK_TABS } from '@/content/tabs';

const SIDEBAR_GROUPS = [
  {
    title: 'BudBook',
    items: BUDBOOK_TABS,
  },
];

const DEFAULT_TAB_ID = SIDEBAR_GROUPS[0].items[0].id;
const ALLOWED_TAB_IDS = new Set(
  SIDEBAR_GROUPS.flatMap((group) => group.items.map((item) => item.id)),
);

function resolveTabFromSearchParams(tabParam: string | null): string {
  if (tabParam === 'edu') return 'pro';
  if (tabParam && ALLOWED_TAB_IDS.has(tabParam)) return tabParam;
  return DEFAULT_TAB_ID;
}

function getCategoryContent(id: string) {
  if (id === 'intro') {
     return <IntroTab />;
  }

  if (id === 'journal') {
     return <JournalTab />;
  }

  if (id === 'social') {
     return <SocialTab />;
  }

  if (id === 'shop') {
     return <ShopTab />;
  }

  if (id === 'pro') {
     return <ProTab />;
  }

  return <IntroTab />;
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

          <div className="pt-8 text-neutral-600 animate-bounce cursor-default" aria-hidden>
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

function MobileAppsPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const baseId = useId();
  const tabRefs = useRef<Map<string, HTMLButtonElement | null>>(new Map());

  useEffect(() => {
    if (searchParams.get('tab') !== 'edu') return;
    const next = new URLSearchParams(searchParams.toString());
    next.set('tab', 'pro');
    router.replace(`/budbook?${next.toString()}`);
  }, [searchParams, router]);

  const activeCategoryId = resolveTabFromSearchParams(searchParams.get('tab'));
  const allItems = SIDEBAR_GROUPS.flatMap(g => g.items);

  const setActiveAndSyncUrl = (nextId: string) => {
    const next = new URLSearchParams(searchParams.toString());
    next.set('tab', nextId);
    router.replace(`/budbook?${next.toString()}`);
  };

  const tabId = (id: string) => `${baseId}-tab-${id}`;
  const panelId = (id: string) => `${baseId}-panel-${id}`;

  const focusTab = (id: string) => {
    setActiveAndSyncUrl(id);
    tabRefs.current.get(id)?.focus();
  };

  const onTabsKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const idx = allItems.findIndex(i => i.id === activeCategoryId);
    if (idx < 0) return;
    let nextIdx = idx;
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        nextIdx = (idx + 1) % allItems.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        nextIdx = (idx - 1 + allItems.length) % allItems.length;
        break;
      case 'Home':
        nextIdx = 0;
        break;
      case 'End':
        nextIdx = allItems.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    focusTab(allItems[nextIdx].id);
  };

  const activeGroup = SIDEBAR_GROUPS.find(g => g.items.some(i => i.id === activeCategoryId)) || SIDEBAR_GROUPS[0];
  const activeCategory = activeGroup.items.find(i => i.id === activeCategoryId) || activeGroup.items[0];

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <div className="lg:hidden sticky top-20 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <label className="sr-only" htmlFor={`${baseId}-mobile-select`}>BudBook section</label>
        <div className="relative">
          <select
            id={`${baseId}-mobile-select`}
            value={activeCategoryId}
            onChange={(e) => setActiveAndSyncUrl(e.target.value)}
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
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" aria-hidden />
        </div>
      </div>

      <aside className="hidden lg:block w-72 flex-shrink-0 border-r border-white/10 bg-black min-h-[calc(100vh-80px)] sticky top-20 z-10 self-start custom-scrollbar h-[calc(100vh-80px)] overflow-y-auto">
        <div
          role="tablist"
          aria-orientation="vertical"
          aria-label="BudBook sections"
          className="p-8 space-y-12"
          onKeyDown={onTabsKeyDown}
        >
          {SIDEBAR_GROUPS.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">{group.title}</h3>
              <div className="flex flex-col space-y-1">
                {group.items.map(cat => {
                  const selected = activeCategoryId === cat.id;
                  return (
                    <button
                      key={cat.id}
                      ref={el => {
                        tabRefs.current.set(cat.id, el);
                      }}
                      type="button"
                      role="tab"
                      id={tabId(cat.id)}
                      aria-selected={selected}
                      aria-controls={panelId(cat.id)}
                      tabIndex={selected ? 0 : -1}
                      onClick={() => setActiveAndSyncUrl(cat.id)}
                      className={`sidebar-nav-tab px-4 py-4 ${selected ? 'active' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-light tracking-wide">{cat.title}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      <main
        id={panelId(activeCategoryId)}
        role="tabpanel"
        aria-labelledby={tabId(activeCategoryId)}
        tabIndex={0}
        className="flex-1 w-full bg-black relative focus:outline-none"
      >
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

export default function MobileAppsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[80vh] flex items-center justify-center pt-20 px-6">
          <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest">Loading…</p>
        </div>
      }
    >
      <MobileAppsPageInner />
    </Suspense>
  );
}

