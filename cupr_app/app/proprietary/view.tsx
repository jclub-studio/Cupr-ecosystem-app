'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Apache110CanvaEmbed } from '@/components/Apache110CanvaEmbed';

const FIGURES_DRIVE_PREVIEW =
  'https://drive.google.com/file/d/1m3ypiOxl2RappmF8UXnXB5bdqk5rvIgc/preview';

const TABS: {
  id: string;
  title: string;
  /** Short line for desktop sidebar — keeps the index scannable */
  deskHint: string;
}[] = [
  { id: 'patent-pending', title: 'Patent-Pending', deskHint: 'Utility filing · Ūtility Bong' },
  { id: 'blitz-90', title: 'Blitz 90', deskHint: 'Tactical portable vault' },
  { id: 'apache-110-og', title: 'Apache 110 (OG)', deskHint: 'Series origin blueprint' },
  { id: 'moab-130', title: 'MOAB 130', deskHint: 'High-capacity containment' },
  { id: 'lock-e', title: 'Lock-E', deskHint: 'Digital mesh backbone' },
];

type ArchiveSection = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
};

const ARCHIVE_DATA: Record<
  string,
  {
    title: string;
    serial: string;
    status: string;
    clearance: string;
    description: string;
    specs: string[];
    sections?: ArchiveSection[];
  }
> = {
  'patent-pending': {
    title: 'Patent-Pending',
    serial: 'CP-UB-2026-01',
    status: 'PROTECTED',
    clearance: 'LVL 04',
    description:
      'The LockBox Ūtility Bong is CŪPR’s patent-pending water pipe built around a single locking handle that re-routes sealed fluid and smoke paths inside the body — not a traditional open tube with a loose slide bowl. It is designed to stay packed, sealed, and bag-ready: no spills, no wandering hardware, and no clearing slide to drop. Airflow opens only when you rotate the handle on purpose, and clearing is built into the same control, so the full session — lock, inhale, clear — stays in one wrist path instead of juggling a separate bowl.',
    specs: [],
    sections: [
      {
        title: 'First position — locked (packed / unused)',
        body:
          'The handle locks the down stem apertures against the sidewalls, sealing all fluid pathways. The water stays put, the bowl stays packed, and the device is ready to travel — no spills, no mess, no loose parts. For the first time, a water pipe can be packed up and thrown in a bag.',
        imageSrc: '/proprietary/position-1-locked.svg',
        imageAlt: 'Diagram: first position — sealed travel mode',
      },
      {
        title: 'Second position — inhaling',
        body:
          'A single rotation of the handle aligns the second aperture (132) with the second vein (108), opening the dedicated smoke pathway. Combustion draws from the chamber, filters through the water reservoir, and delivers a clean, cooled hit to the mouthpiece. Airflow only engages when you choose — putting the user in complete control of every hit.',
        imageSrc: '/proprietary/position-2-inhale.svg',
        imageAlt: 'Diagram: second position — dedicated inhale pathway',
      },
      {
        title: 'Third position — clearing',
        body:
          'Fully extending the handle to its maximum rotation aligns the first aperture (130) with the clearing port (302), flooding the reservoir with fresh air — the same function as pulling the bowl on a traditional bong, but entirely built in. No free hand needed, no loose bowl to fumble or drop. One continuous wrist motion completes the full session cycle: inhale, then clear.',
        imageSrc: '/proprietary/position-3-clearing.svg',
        imageAlt: 'Diagram: third position — built-in clearing',
      },
    ],
  },
  'blitz-90': {
    title: 'Blitz 90',
    serial: 'CP-LB-90-BTZ',
    status: 'ACTIVE',
    clearance: 'LVL 02',
    description:
      'Ultra-portable, biometric-locked container designed for rapid access and discreet transport. The Blitz 90 serves as the tactical entry point for the Lockbox series.',
    specs: ['Weight: 420g', 'Volume: 0.9L', 'Material: Grade 5 Titanium Alloy', 'Lock: Generation 3 Biometric'],
  },
  'apache-110-og': {
    title: 'Apache 110 (OG)',
    serial: 'CP-LB-110-APC',
    status: 'LEGACY',
    clearance: 'LVL 01',
    description:
      'The blueprint that started it all. Rugged, weather-sealed, and featuring the first generation CŪPR lock mechanism. A proven standard in secure storage.',
    specs: ['Weight: 850g', 'Volume: 1.1L', 'Material: Hard-Anodized Aluminum', 'Lock: Mechanical Override + Bio'],
  },
  'moab-130': {
    title: 'MOAB 130',
    serial: 'CP-LB-130-MOB',
    status: 'ACTIVE',
    clearance: 'LVL 03',
    description:
      'High-capacity, reinforced vault system for bulk storage and extreme environmental protection. Designed for long-term preservation and high-security containment.',
    specs: ['Weight: 2.4kg', 'Volume: 13.0L', 'Material: Carbon Fiber Composite', 'Lock: Dual-Auth Encrypted'],
  },
  'lock-e': {
    title: 'Lock-E',
    serial: 'CP-SYS-LCKE-01',
    status: 'R&D',
    clearance: 'LVL 05',
    description:
      'The digital backbone of the Lockbox series. Advanced encryption, mesh networking, and remote management protocols currently under development in the CŪPR R&D lab.',
    specs: ['Protocol: CŪPR Mesh v2', 'Encryption: 2048-bit Dynamic', 'Latency: <10ms', 'Battery: Inductive Charging'],
  },
};

function SupportingDocumentationPanel({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex min-h-0 max-w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/90 to-black/80 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.85)] ${className}`}
    >
      <div className="shrink-0 space-y-2 border-b border-white/10 px-5 py-5 md:px-6">
        <h3 className="text-[10px] font-mono uppercase tracking-[0.35em] text-neutral-500">Supporting documentation</h3>
        <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
          Utility filing figures — mechanical relationships for reference, including apertures (130, 132), second vein
          (108), and clearing port (302).
        </p>
      </div>
      <div className="relative isolate w-full min-h-[240px] max-md:aspect-[4/3] bg-black/60 sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px]">
        <iframe
          src={FIGURES_DRIVE_PREVIEW}
          title="Figures as Filed — Google Drive preview"
          allow="autoplay; fullscreen"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  );
}

function ArchiveRecordPanel({
  serial,
  status,
  clearance,
  specs,
}: {
  serial: string;
  status: string;
  clearance: string;
  specs: string[];
}) {
  const statusClass =
    status === 'ACTIVE'
      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
      : status === 'PROTECTED'
        ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
        : status === 'R&D'
          ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
          : 'bg-neutral-800 text-neutral-400 border-white/10';

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-950/95 to-black/90 p-6 md:p-8 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.75)]">
      <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-neutral-500 mb-6">Archive record</p>
      <div className="space-y-8">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 mb-2">Serial</p>
          <p className="text-xl md:text-2xl font-light tracking-[0.12em] text-white">{serial}</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 mb-2">Status</p>
            <span className={`inline-flex text-xs font-mono px-2.5 py-1 rounded-md border ${statusClass}`}>{status}</span>
          </div>
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 mb-2">Clearance</p>
            <p className="text-sm font-mono text-white/85">{clearance}</p>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 mb-4">Specifications</p>
          <ul className="grid grid-cols-1 gap-2.5">
            {specs.map((spec, i) => (
              <li
                key={i}
                className="flex items-baseline gap-3 text-xs font-light text-white/55 border-l border-white/10 pl-3 py-0.5"
              >
                <span className="font-mono text-[10px] text-neutral-600 w-5 shrink-0 tabular-nums">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PatentSerialStatusBlock({
  serial,
  status,
  clearance,
}: {
  serial: string;
  status: string;
  clearance: string;
}) {
  const statusClass =
    status === 'ACTIVE'
      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
      : status === 'PROTECTED'
        ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
        : status === 'R&D'
          ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
          : 'bg-neutral-800 text-neutral-400 border-white/10';

  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
      <div className="space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500">Document serial</span>
        <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] text-white">{serial}</h2>
      </div>
      <div className="flex gap-10 sm:gap-14">
        <div className="space-y-1.5">
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 block">Status</span>
          <span className={`inline-flex text-xs font-mono px-2.5 py-1 rounded-md border ${statusClass}`}>{status}</span>
        </div>
        <div className="space-y-1.5 sm:text-right">
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 block">Clearance</span>
          <span className="text-sm font-mono text-white/85">{clearance}</span>
        </div>
      </div>
    </div>
  );
}

function PatentPendingTechnicalBriefLead() {
  return (
    <p className="text-lg md:text-xl font-light leading-relaxed text-white/85">
      The LockBox product is a durable, all-in-one, and discreet water bong designed for the modern, mobile cannabis
      consumer who prefers the benefit of water filtration. It is engineered to solve the{' '}
      <span className="text-white">&ldquo;Hardware Gap&rdquo;</span> in the market — split today between bulky glass
      pieces and expensive electronic vaporizers.
    </p>
  );
}

function PatentPendingProductSummaryCard() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 md:p-8">
      <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-neutral-500 mb-4">Product summary</p>
      <p className="text-base md:text-lg font-light leading-relaxed text-white/75">
        LockBox&apos;s proprietary rectangular silhouette and{' '}
        <span className="text-teal-400/90">&ldquo;Lock-a-bowl&rdquo;</span> functionality give consumers discreet
        transport and a robust <span className="text-white/90">feature-stack</span> that acts as the primary defense
        against competitors.
      </p>
    </div>
  );
}

/** Material science, integrated design, watertight, filtration — full width */
function PatentPendingMaterialFeatures() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <article className="flex flex-col gap-3 rounded-xl border border-white/10 bg-neutral-950/80 p-6">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-teal-500/80">Material science</span>
        <h4 className="text-sm font-light tracking-wide text-white">Moat</h4>
        <p className="text-sm font-light leading-relaxed text-white/60">
          Built from medical-grade, platinum-cured silicone and borosilicate glass — chemically inert, tasteless, and
          odorless. That choice directly addresses the main objection to non-glass hardware: it avoids absorbing odors or
          imparting a plastic taste, the <span className="text-white/80">&ldquo;flavor ghosting&rdquo;</span> associated
          with low-cost, peroxide-cured silicone.
        </p>
      </article>
      <article className="flex flex-col gap-3 rounded-xl border border-white/10 bg-neutral-950/80 p-6">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-teal-500/80">Integrated design</span>
        <h4 className="text-sm font-light tracking-wide text-white">Travel ecosystem</h4>
        <p className="text-sm font-light leading-relaxed text-white/60">
          An internal proprietary compartment holds a lighter, grinder, and roughly two grams of flower — turning the
          device into a self-contained travel ecosystem instead of a loose pile of accessories.
        </p>
      </article>
      <article className="flex flex-col gap-3 rounded-xl border border-white/10 bg-neutral-950/80 p-6">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-teal-500/80">Watertight sealing</span>
        <h4 className="text-sm font-light tracking-wide text-white">Patent-pending seals</h4>
        <p className="text-sm font-light leading-relaxed text-white/60">
          Threaded and gasket seals make the unit <span className="text-white/80">100% watertight</span>, so it can be
          transported with water inside — a practical unlock for real mobility.
        </p>
      </article>
      <article className="flex flex-col gap-3 rounded-xl border border-white/10 bg-neutral-950/80 p-6">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-teal-500/80">Filtration</span>
        <h4 className="text-sm font-light tracking-wide text-white">Dual-chamber + glass bowl</h4>
        <p className="text-sm font-light leading-relaxed text-white/60">
          Dual-chamber water filtration with a borosilicate glass bowl keeps the flame on glass, supporting a pure flavor
          profile and a smooth draw.
        </p>
      </article>
    </div>
  );
}

function PatentPendingImplicationsSection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
        <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-neutral-500">
          Implications for cannabis consumers
        </p>
        <p className="max-w-3xl text-base font-light text-white/70">
          LockBox is positioned as{' '}
          <span className="text-white/90">&ldquo;Technical Gear for the Cannabis Enthusiast,&rdquo;</span> serving people
          who are mobile, flavor-conscious, and discretion-driven.
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-5">
        <li className="flex gap-4 rounded-lg border border-white/[0.06] bg-white/[0.02] p-5">
          <span className="shrink-0 pt-0.5 font-mono text-[10px] text-teal-600/90">01</span>
          <div>
            <p className="mb-1.5 text-sm font-light text-white">Enables mobile consumption</p>
            <p className="text-sm font-light leading-relaxed text-white/55">
              Closes the gap for the estimated <span className="text-white/75">21.7%</span> of consumers who primarily use
              water pipes but are often tethered to the home because traditional glass is fragile. Especially relevant for
              outdoor and adventure-oriented consumers who want rugged, unbreakable kit on hikes, camping trips, and
              festivals.
            </p>
          </div>
        </li>
        <li className="flex gap-4 rounded-lg border border-white/[0.06] bg-white/[0.02] p-5">
          <span className="shrink-0 pt-0.5 font-mono text-[10px] text-teal-600/90">02</span>
          <div>
            <p className="mb-1.5 text-sm font-light text-white">Preserves flavor purity</p>
            <p className="text-sm font-light leading-relaxed text-white/55">
              Medical-grade, platinum-cured silicone is non-porous, limiting absorption of terpenes and resins that
              create permanent &ldquo;bong water smell&rdquo; and rubbery off-notes in cheaper silicone — so experienced
              enthusiasts can keep premium flower tasting like itself.
            </p>
          </div>
        </li>
        <li className="flex gap-4 rounded-lg border border-white/[0.06] bg-white/[0.02] p-5">
          <span className="shrink-0 pt-0.5 font-mono text-[10px] text-teal-600/90">03</span>
          <div>
            <p className="mb-1.5 text-sm font-light text-white">Guarantees discretion</p>
            <p className="text-sm font-light leading-relaxed text-white/55">
              A cylindrical water-bottle silhouette plus an odor-proof seal supports professionals and renters who need to
              keep usage low-profile for housing or employment contexts.
            </p>
          </div>
        </li>
        <li className="flex gap-4 rounded-lg border border-white/[0.06] bg-white/[0.02] p-5">
          <span className="shrink-0 pt-0.5 font-mono text-[10px] text-teal-600/90">04</span>
          <div>
            <p className="mb-1.5 text-sm font-light text-white">Streamlined experience</p>
            <p className="text-sm font-light leading-relaxed text-white/55">
              All-in-one convenience resonates with social weekend users at festivals and concerts: integrated storage for
              flower, grinder, and lighter removes the juggling act of separate jars and tools.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

function PatentPendingFilingFocusCallout() {
  return (
    <div className="rounded-xl border border-teal-900/40 bg-teal-950/20 px-6 py-5">
      <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.3em] text-teal-500/70">Ūtility Bong — filing focus</p>
      <p className="text-sm font-light leading-relaxed text-white/65">
        The patent narrative for the LockBox Ūtility Bong centers on the locking handle that reconfigures sealed fluid
        and smoke paths: packed and travel-ready when locked, a dedicated inhale path on rotation, and built-in clearing
        without a loose slide — one continuous wrist cycle from inhale to clear.
      </p>
    </div>
  );
}

function PatentPendingTopSection({
  serial,
  status,
  clearance,
}: {
  serial: string;
  status: string;
  clearance: string;
}) {
  return (
    <div className="grid max-w-full min-w-0 grid-cols-1 min-[901px]:grid-cols-[minmax(0,1fr)_minmax(320px,400px)] min-[901px]:items-start gap-x-10 gap-y-10 overflow-x-hidden">
      <div className="min-w-0 max-w-full space-y-8 self-start">
        <PatentSerialStatusBlock serial={serial} status={status} clearance={clearance} />
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Technical brief</h3>
          <PatentPendingTechnicalBriefLead />
        </div>
        <PatentPendingProductSummaryCard />
      </div>
      <div className="min-w-0 w-full max-w-full self-start min-[901px]:sticky min-[901px]:top-28">
        <SupportingDocumentationPanel className="min-h-[320px] md:min-h-[400px]" />
        <p className="mt-3 text-[10px] font-mono uppercase tracking-wider text-neutral-600 text-center min-[901px]:text-left">
          Use the embedded viewer&apos;s controls to change pages and zoom.
        </p>
      </div>
    </div>
  );
}

function PatentPendingOperatingPositionsStack({ sections }: { sections: ArchiveSection[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [openIndex, close]);

  const active = openIndex !== null ? sections[openIndex] : null;

  return (
    <div className="space-y-8">
      <div className="space-y-2 border-b border-white/10 pb-6">
        <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Core operating positions</h3>
        <p className="max-w-2xl text-sm font-light text-neutral-500">
          Each position describes how the handle reconfigures sealed paths. Reference numerals match the utility filing
          figures in the documentation panel. Use <span className="text-neutral-400">Enlarge</span> for a focused view.
        </p>
      </div>

      <div className="flex flex-col gap-8 md:gap-10">
        {sections.map((sec, i) => {
          const odd = i % 2 === 0;
          return (
            <article
              key={sec.title}
              className={`flex flex-col gap-8 rounded-2xl border border-white/10 bg-neutral-950/60 p-6 md:gap-10 md:p-8 lg:gap-12 ${
                odd
                  ? 'md:flex-row md:items-center'
                  : 'flex-col-reverse md:flex-row-reverse md:items-center'
              }`}
            >
              <div className="flex w-full shrink-0 items-center justify-center md:w-[min(44%,20rem)] lg:w-[min(42%,22rem)]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="group relative w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/60"
                  aria-label={`Enlarge: ${sec.title}`}
                >
                  <Image
                    src={sec.imageSrc}
                    alt={sec.imageAlt}
                    width={800}
                    height={520}
                    className="mx-auto max-h-[220px] w-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02] sm:max-h-[260px] md:max-h-[min(280px,36vh)]"
                    sizes="(max-width: 768px) 100vw, 28rem"
                  />
                  <span className="absolute bottom-2 right-2 rounded bg-black/65 px-2 py-1 text-[9px] font-mono uppercase tracking-widest text-white/50">
                    Enlarge
                  </span>
                </button>
              </div>

              <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 md:py-1">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">{sec.title}</p>
                <p className="text-sm font-light leading-relaxed text-white/70 md:text-base">{sec.body}</p>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="self-start text-[10px] font-mono uppercase tracking-widest text-teal-500/90 underline-offset-4 hover:text-teal-400 hover:underline"
                >
                  Open full detail
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {openIndex !== null && active && (
          <motion.div
            key={openIndex}
            role="dialog"
            aria-modal="true"
            aria-labelledby="position-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
              onClick={close}
              aria-label="Close modal"
            />
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0c0c0c] shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 md:px-6">
                <h4
                  id="position-modal-title"
                  className="pr-4 text-xs font-mono uppercase leading-relaxed tracking-[0.2em] text-neutral-400 md:text-sm"
                >
                  {active.title}
                </h4>
                <button
                  type="button"
                  onClick={close}
                  className="shrink-0 rounded-lg p-2 text-neutral-500 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <div className="border-b border-white/5 bg-black/40">
                  <Image
                    src={active.imageSrc}
                    alt={active.imageAlt}
                    width={800}
                    height={520}
                    className="max-h-[42vh] w-full object-contain"
                    sizes="(max-width: 768px) 100vw, 90vw"
                  />
                </div>
                <div className="px-5 py-5 md:px-6 md:py-6">
                  <p className="text-sm font-light leading-relaxed text-white/70 md:text-base">{active.body}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ArchiveContent({ tabId }: { tabId: string }) {
  const data = ARCHIVE_DATA[tabId];
  const patentSections = tabId === 'patent-pending' && data.sections?.length ? data.sections : null;

  return (
    <motion.div
      key={tabId}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="min-w-0 max-w-full space-y-12"
    >
      {tabId === 'patent-pending' ? (
        <>
          <PatentPendingTopSection serial={data.serial} status={data.status} clearance={data.clearance} />

          <div className="mt-14 min-w-0 max-w-full space-y-16 border-t border-white/5 pt-14">
            <PatentPendingMaterialFeatures />

            {patentSections && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06, duration: 0.35 }}
              >
                <PatentPendingOperatingPositionsStack sections={patentSections} />
              </motion.div>
            )}

            <div className="space-y-12 border-t border-white/5 pt-14">
              <PatentPendingImplicationsSection />
              <PatentPendingFilingFocusCallout />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-12 lg:gap-14 xl:gap-16 items-start lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)]">
            <div className="space-y-8 min-w-0">
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Technical brief</h3>
                <p className="text-lg md:text-xl font-light leading-relaxed text-white/70 max-w-prose">
                  {data.description}
                </p>
              </div>

              {tabId === 'apache-110-og' && (
                <div className="max-w-prose">
                  <Apache110CanvaEmbed />
                </div>
              )}

              <div className="space-y-4 lg:hidden">
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Specifications</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {data.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-light text-white/50">
                      <span className="w-1 h-1 bg-white/20 rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
              <ArchiveRecordPanel serial={data.serial} status={data.status} clearance={data.clearance} specs={data.specs} />
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default function ProprietaryPage() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const activeTabTitle = TABS.find((t) => t.id === activeTab)?.title;

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-black">
      <aside className="w-full lg:w-[min(22rem,26vw)] xl:w-96 flex-shrink-0 border-r border-white/10 bg-black/60 backdrop-blur-xl lg:backdrop-blur-2xl sticky top-0 lg:h-screen z-20 flex flex-col">
        <div className="p-6 lg:p-8 space-y-10 lg:space-y-12">
          <div className="space-y-4 lg:mt-8">
            <h1 className="text-lg lg:text-xl font-light tracking-tight text-white">LOCKBOX SERIES</h1>
            <div className="h-px w-10 bg-gradient-to-r from-white/30 to-transparent" />
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 leading-relaxed max-w-[14rem]">
              Hardware design archive · proprietary ecosystem
            </p>
          </div>

          <div role="tablist" aria-orientation="vertical" aria-label="Archive index" className="flex flex-col gap-0.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-neutral-600 mb-3 px-1">
              Archive index
            </span>
            {TABS.map((tab, i) => {
              const selected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveTab(tab.id)}
                  className={`sidebar-nav-tab rounded-lg px-3 py-3.5 lg:px-4 lg:py-4 text-left ${selected ? 'active' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 w-7 shrink-0 text-right font-mono text-[10px] tabular-nums text-neutral-600 lg:text-neutral-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0 flex-1 pr-2">
                      <span className="block text-[13px] lg:text-sm font-light tracking-wide text-white/90">
                        {tab.title}
                      </span>
                      <span className="mt-1 hidden lg:block text-[10px] font-mono uppercase tracking-wider text-neutral-600 leading-snug">
                        {tab.deskHint}
                      </span>
                    </div>
                    {selected && (
                      <motion.div
                        layoutId="proprietary-tab-active"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500 shadow-[0_0_12px_rgba(20,184,166,0.45)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        aria-hidden
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-auto p-8 border-t border-white/5 hidden lg:block">
          <div className="flex items-center gap-4 text-[9px] font-mono uppercase tracking-widest text-neutral-600">
            <span className="w-2 h-2 bg-emerald-500/50 rounded-full animate-pulse" />
            Secure Terminal Connected
          </div>
        </div>
      </aside>

      <main className="relative min-h-screen min-w-0 flex-1 overflow-x-hidden">
        <section className="relative min-h-[28vh] lg:min-h-[36vh] flex flex-col justify-end px-6 md:px-12 lg:pl-12 lg:pr-16 xl:pl-16 xl:pr-24 pb-10 lg:pb-14 border-b border-white/10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
          <div className="max-w-6xl xl:max-w-[88rem] w-full relative z-10">
            <motion.h2
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light tracking-tight text-white"
            >
              {activeTabTitle}
            </motion.h2>
          </div>
        </section>

        <section className="w-full min-w-0 overflow-x-hidden px-6 py-14 md:px-12 lg:py-20 lg:pl-12 lg:pr-16 xl:pl-16 xl:pr-24">
          <div className="mx-auto max-w-6xl min-w-0 lg:mx-0 xl:max-w-[88rem]">
            <AnimatePresence mode="wait">
              <ArchiveContent tabId={activeTab} />
            </AnimatePresence>
          </div>
        </section>
      </main>
    </div>
  );
}
