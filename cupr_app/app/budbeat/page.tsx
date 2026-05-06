'use client';

import { Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowDown, ExternalLink } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { VideoTab } from '../budbook/VideoTab';
import { MediaTab } from '../budbook/MediaTab';
import { GamesTab } from '../budbook/GamesTab';
import { IntegrationTab } from '../budbook/IntegrationTab';

const SIDEBAR_GROUPS = [
  {
    title: 'BudBeat',
    items: [
      {
        id: 'video',
        title: 'Video Sessions',
        desc: 'Real-time, collaborative performance with intelligent audio routing and synchronized beat playback.',
      },
      {
        id: 'media',
        title: 'Media',
        desc: 'AI-generated beats, personal playlists, photos, and your full media crate in one place.',
      },
      {
        id: 'games',
        title: 'Games',
        desc: 'Second-screen party game mechanics layered directly onto live group video and freestyle sessions.',
      },
      {
        id: 'integration',
        title: 'Ecosystem',
        desc: 'How your BudBook Stash and live BudBeat identity connect into a unified digital presence.',
      },
    ],
  },
];

const DEFAULT_TAB_ID = SIDEBAR_GROUPS[0].items[0].id;
const ALLOWED_TAB_IDS = new Set(
  SIDEBAR_GROUPS.flatMap((group) => group.items.map((item) => item.id)),
);

function resolveTab(tabParam: string | null): string {
  if (tabParam && ALLOWED_TAB_IDS.has(tabParam)) return tabParam;
  return DEFAULT_TAB_ID;
}

function getTabContent(id: string) {
  switch (id) {
    case 'video':
      return <VideoTab />;
    case 'media':
      return <MediaTab />;
    case 'games':
      return <GamesTab />;
    case 'integration':
      return <IntegrationTab />;
    default:
      return <VideoTab />;
  }
}

function TabContent({
  category,
  groupName,
  activeId,
}: {
  category: { id: string; title: string; desc: string };
  groupName: string;
  activeId: string;
}) {
  return (
    <>
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 md:px-12 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800/40 via-black to-black pointer-events-none" />
        <div className="max-w-7xl w-full relative z-10 space-y-8 mt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
            {groupName}
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

      <section className="py-24 px-6 md:px-12 w-full">{getTabContent(activeId)}</section>
    </>
  );
}

function BudBeatPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeId = resolveTab(searchParams.get('tab'));

  const setTab = (nextId: string) => {
    const next = new URLSearchParams(searchParams.toString());
    next.set('tab', nextId);
    router.replace(`/budbeat?${next.toString()}`);
  };

  const activeGroup =
    SIDEBAR_GROUPS.find((group) => group.items.some((item) => item.id === activeId)) ??
    SIDEBAR_GROUPS[0];
  const activeCategory =
    activeGroup.items.find((item) => item.id === activeId) ?? activeGroup.items[0];

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <div className="lg:hidden sticky top-20 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="relative">
          <select
            value={activeId}
            onChange={(event) => setTab(event.target.value)}
            className="w-full appearance-none bg-neutral-900 border border-white/10 text-white rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            {SIDEBAR_GROUPS.map((group) => (
              <optgroup key={group.title} label={group.title}>
                {group.items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
        </div>
      </div>

      <aside className="hidden lg:block w-72 flex-shrink-0 border-r border-white/10 bg-black min-h-[calc(100vh-80px)] sticky top-20 z-10 self-start h-[calc(100vh-80px)] overflow-y-auto">
        <div className="p-8 space-y-10">
          {SIDEBAR_GROUPS.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">
                {group.title}
              </h3>
              <nav className="flex flex-col space-y-1">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTab(item.id)}
                    className={`sidebar-nav-tab px-4 py-4 ${activeId === item.id ? 'active' : ''}`}
                  >
                    <span className="text-sm font-light tracking-wide">{item.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          ))}

          <div className="pt-4 border-t border-white/10">
            <a
              href="/budbeat-app"
              className="sidebar-nav-tab px-4 py-4 flex items-center justify-between group w-full"
            >
              <span className="text-sm font-light tracking-wide">BudBeat App</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-600 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </aside>

      <main className="flex-1 w-full bg-black relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col w-full overflow-hidden"
          >
            <TabContent category={activeCategory} groupName={activeGroup.title} activeId={activeId} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function BudBeatPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[80vh] flex items-center justify-center pt-20 px-6">
          <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest">Loading...</p>
        </div>
      }
    >
      <BudBeatPageInner />
    </Suspense>
  );
}
