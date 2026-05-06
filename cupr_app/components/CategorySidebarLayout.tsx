'use client';

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export type CategoryTab = {
  id: string;
  title: string;
};

export type CategorySidebarLayoutProps<T extends CategoryTab> = {
  /** Sidebar eyebrow (defaults to "Categories"). */
  eyebrow?: string;
  /** All categories shown in the sidebar / mobile dropdown. */
  categories: ReadonlyArray<T>;
  /** Render the main panel for the active category. Hero + grid live inside. */
  renderContent: (category: T) => ReactNode;
};

/**
 * B2C / catalog-style sidebar that adds a mobile `<select>` jump-to control to the
 * shared tabbed-sidebar shell. Implements the WAI-ARIA tabs pattern in the desktop
 * nav and animates content transitions between tabs.
 */
export function CategorySidebarLayout<T extends CategoryTab>({
  eyebrow = 'Categories',
  categories,
  renderContent,
}: CategorySidebarLayoutProps<T>) {
  const baseId = useId();
  const [activeId, setActiveId] = useState<string>(categories[0]?.id ?? '');
  const active = categories.find(c => c.id === activeId) ?? categories[0];
  const tabRefs = useRef<Map<string, HTMLButtonElement | null>>(new Map());

  const tabId = (id: string) => `${baseId}-tab-${id}`;
  const panelId = (id: string) => `${baseId}-panel-${id}`;

  const focusTab = (id: string) => {
    const el = tabRefs.current.get(id);
    if (el) {
      setActiveId(id);
      el.focus();
    }
  };

  const onTabsKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const idx = categories.findIndex(c => c.id === activeId);
    if (idx < 0) return;
    let nextIdx = idx;
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        nextIdx = (idx + 1) % categories.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        nextIdx = (idx - 1 + categories.length) % categories.length;
        break;
      case 'Home':
        nextIdx = 0;
        break;
      case 'End':
        nextIdx = categories.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    focusTab(categories[nextIdx].id);
  };

  if (!active) return null;

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <div className="lg:hidden sticky top-20 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <label className="sr-only" htmlFor={`${baseId}-mobile-select`}>
          {eyebrow}
        </label>
        <div className="relative">
          <select
            id={`${baseId}-mobile-select`}
            value={activeId}
            onChange={e => setActiveId(e.target.value)}
            className="w-full appearance-none bg-neutral-900 border border-white/10 text-white rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.title}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none"
            aria-hidden
          />
        </div>
      </div>

      <aside className="hidden lg:block w-72 flex-shrink-0 border-r border-white/10 bg-black min-h-[calc(100vh-80px)] sticky top-20 z-10 self-start">
        <div className="p-8 space-y-8">
          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">{eyebrow}</h3>
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label={eyebrow}
            className="flex flex-col space-y-1"
            onKeyDown={onTabsKeyDown}
          >
            {categories.map(cat => {
              const selected = cat.id === activeId;
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
                  onClick={() => setActiveId(cat.id)}
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
      </aside>

      <main
        id={panelId(activeId)}
        role="tabpanel"
        aria-labelledby={tabId(activeId)}
        tabIndex={0}
        className="flex-1 w-full bg-black relative focus:outline-none"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col w-full overflow-hidden"
          >
            {renderContent(active)}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
