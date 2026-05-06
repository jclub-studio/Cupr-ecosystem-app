'use client';

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';

export type SidebarTab = {
  id: string;
  title: string;
};

export type TabbedSidebarLayoutProps = {
  /** Small uppercase label that sits above the sidebar nav (e.g. "Solutions"). */
  eyebrow: string;
  /** Tabs in display order. The first entry is the default active tab. */
  tabs: ReadonlyArray<SidebarTab>;
  /** Render the body for the currently active tab. */
  renderContent: (tabId: string) => ReactNode;
  /** Optional initial tab id; defaults to `tabs[0].id`. */
  initialTabId?: string;
};

/**
 * Reusable sidebar + hero + tab-body layout used by `/web`, `/cms`, `/data`, the B2C
 * category pages, and the CŪPR brand surface. Implements the WAI-ARIA tabs pattern
 * (role=tablist + roving tabindex, arrow-key navigation, aria-controls / aria-labelledby).
 */
export function TabbedSidebarLayout({
  eyebrow,
  tabs,
  renderContent,
  initialTabId,
}: TabbedSidebarLayoutProps) {
  const baseId = useId();
  const [activeTab, setActiveTab] = useState<string>(initialTabId ?? tabs[0]?.id ?? '');
  const activeTabRecord = tabs.find(t => t.id === activeTab) ?? tabs[0];
  const tabRefs = useRef<Map<string, HTMLButtonElement | null>>(new Map());

  const tabId = (id: string) => `${baseId}-tab-${id}`;
  const panelId = (id: string) => `${baseId}-panel-${id}`;

  const focusTab = (id: string) => {
    const el = tabRefs.current.get(id);
    if (el) {
      setActiveTab(id);
      el.focus();
    }
  };

  const onTabsKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const idx = tabs.findIndex(t => t.id === activeTab);
    if (idx < 0) return;
    let nextIdx = idx;
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        nextIdx = (idx + 1) % tabs.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        nextIdx = (idx - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        nextIdx = 0;
        break;
      case 'End':
        nextIdx = tabs.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    focusTab(tabs[nextIdx].id);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <aside className="w-72 flex-shrink-0 border-r border-white/10 bg-black sticky top-20 z-10 self-start">
        <div className="p-8 space-y-8">
          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">{eyebrow}</h3>
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label={eyebrow}
            className="flex flex-col space-y-1"
            onKeyDown={onTabsKeyDown}
          >
            {tabs.map(tab => {
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

      <main className="flex-1 w-full bg-black relative">
        <section className="relative min-h-[40vh] flex flex-col justify-center px-6 md:px-12 border-b border-white/10 overflow-hidden">
          <div className="max-w-7xl w-full relative z-10 space-y-8 mt-16">
            <h1 className="text-5xl font-light tracking-tighter text-white">
              {activeTabRecord?.title}
            </h1>
          </div>
        </section>
        <section
          id={panelId(activeTab)}
          role="tabpanel"
          aria-labelledby={tabId(activeTab)}
          tabIndex={0}
          className="py-24 px-6 md:px-12 w-full focus:outline-none"
        >
          {renderContent(activeTab)}
        </section>
      </main>
    </div>
  );
}
