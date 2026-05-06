'use client';

import { Activity, LayoutDashboard, TrendingUp, Zap } from 'lucide-react';
import Image from 'next/image';

export function IntroTab() {
  return (
    <div className="w-full max-w-5xl space-y-24 pb-20">
      {/* Intro header + CTA */}
      <div className="flex flex-col gap-8 rounded-[2.5rem] border border-white/10 bg-neutral-950/50 p-10">
        <div className="space-y-4 max-w-3xl">
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-500">BudBook demo</span>
          <h2 className="text-4xl font-light tracking-tight text-white">
            Your inventory, routines, and insights — unified.
          </h2>
          <p className="text-neutral-400 font-light leading-relaxed text-lg">
            Explore the core BudBook surfaces: journaled telemetry, social discovery, intelligent procurement, and staff
            education — all shaped around what you actually carry and how you actually operate.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="/budbook-app/"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Open BudBook
          </a>
          <a
            href="/budbook?tab=journal"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Jump to Journal
          </a>
        </div>
      </div>

      {/* Moved content (from Journal) */}
      <div className="flex flex-col space-y-6 max-w-3xl">
        <h2 className="text-4xl font-light tracking-tight text-white animate-in fade-in slide-in-from-bottom-4 duration-700">
          BudBook Journal: Personal Telemetry &amp; Inventory
        </h2>
        <p className="text-neutral-400 font-light leading-relaxed text-xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
          The BudBook Journal serves as your central command hub for documenting your cannabis journey. Moving beyond
          basic logging, this is a sophisticated telemetry dashboard engineered to give you comprehensive oversight of
          your inventory, consumption habits, and physiological responses—empowering responsible, data-driven use.
        </p>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-medium text-white leading-tight">
                Command Dashboard: Macroscopic Oversight
              </h3>
            </div>
            <p className="text-neutral-400 font-light text-lg leading-relaxed">
              Your personalized home screen provides an immediate, high-level visualization of your ecosystem activity,
              giving you actionable insights at a glance.
            </p>
          </div>

          <div className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-start gap-4 transition-all hover:translate-x-1">
              <Activity className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
              <div className="flex flex-col">
                <span className="text-lg font-medium text-white block">Activity Summaries</span>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  View recent session data and macroscopic consumption trends over time.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 transition-all hover:translate-x-1">
              <TrendingUp className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
              <div className="flex flex-col">
                <span className="text-lg font-medium text-white block">Inventory Telemetry</span>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Monitor real-time product levels and hardware status to anticipate procurement needs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 transition-all hover:translate-x-1">
              <Zap className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
              <div className="flex flex-col">
                <span className="text-lg font-medium text-white block">Data Insights</span>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Automatically surface key patterns from your historical logs to optimize your routine.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 bg-neutral-900/40 shadow-2xl group">
          <Image
            src="https://picsum.photos/seed/budboard/1200/900"
            alt="BudBook Command Dashboard in-app UI"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">
              Live Interface Preview — v2.4
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

