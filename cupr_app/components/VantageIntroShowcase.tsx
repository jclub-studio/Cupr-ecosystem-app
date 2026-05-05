'use client';

import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import Image, { type StaticImageData } from 'next/image';
import { Maximize2, X } from 'lucide-react';

/** Swap these files in `public/vantage/` with your in-app screenshots (same names, or change paths here). */
export const VANTAGE_CUPRO_UI_SRC = '/CUPROSUI.png';
/** BudBook session UI — file in `public/budbook-session-user-interface.png`. */
export const VANTAGE_BUDBOOK_UI_SRC = '/budbook-session-user-interface.png';

const APACHE_LOCKBOX_MOCKUP_GIF = '/videos/Lockbox-Mockup.gif';
const CUPROS_LOGO_SRC = '/Cuproslogo.png';
const LOCKBOX_APACHE110_LOGO_SRC = '/videos/Lockbox%20(2).png';
const BUDBOOK_LOGO_SRC = '/budbooklogo.png';

function CuprosWordmark({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="font-normal">CŪ</span>
      <span className="font-bold">PROs</span>
    </span>
  );
}

function ScreenshotImage({
  src,
  alt,
  className,
  sizes,
  priority,
}: {
  src: string | StaticImageData;
  alt: string;
  className: string;
  sizes: string;
  priority?: boolean;
}) {
  if (typeof src === 'object') {
    return (
      <Image
        src={src}
        alt={alt}
        className={className}
        sizes={sizes}
        priority={priority}
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element -- string URLs are served from /public
    <img src={src} alt={alt} className={className} loading="eager" decoding="async" />
  );
}

function AppUiScreenshotModal({
  imageSrc,
  alt,
  hint,
}: {
  imageSrc: string | StaticImageData;
  alt: string;
  hint?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
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
  }, [open, close]);

  return (
    <>
      <div className="mt-8 space-y-3">
        {hint ? (
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">{hint}</p>
        ) : null}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setOpen(true)}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setOpen(true);
            }
          }}
          className="group relative cursor-zoom-in rounded-xl border border-white/15 bg-black/40 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.55)] outline-none ring-teal-900/0 transition-[box-shadow,ring] focus-visible:ring-2 focus-visible:ring-teal-600/50"
        >
          <div className="overflow-hidden rounded-lg border border-white/10 bg-neutral-950 min-h-[200px] flex items-center justify-center">
            <ScreenshotImage
              src={imageSrc}
              alt={alt}
              className="h-auto w-full max-h-[min(52vh,480px)] object-contain object-top"
              sizes="(max-width: 768px) 100vw, min(100vw, 896px)"
              priority
            />
          </div>
          <div className="pointer-events-none absolute right-5 top-5 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-white/80 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 className="h-3 w-3" aria-hidden />
            Expand
          </div>
        </div>
      </div>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {open && (
                <motion.div
                  key="ui-shot-lightbox"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Screenshot viewer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
                >
                  <button
                    type="button"
                    className="absolute inset-0 bg-black/90 backdrop-blur-md"
                    onClick={close}
                    aria-label="Close screenshot"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: 6 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="relative z-10 max-h-[min(92vh,900px)] max-w-[min(96vw,1400px)] overflow-auto rounded-xl border border-white/15 bg-[#0c0c0c] shadow-2xl"
                  >
                    <div className="flex items-center justify-end gap-2 border-b border-white/10 px-3 py-2">
                      <button
                        type="button"
                        onClick={close}
                        className="rounded-lg p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
                        aria-label="Close"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="p-2 sm:p-4">
                      <ScreenshotImage
                        src={imageSrc}
                        alt={alt}
                        className="h-auto max-h-[min(85vh,820px)] w-full object-contain"
                        sizes="(max-width: 1400px) 96vw, 1400px"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  );
}

function ShowcaseProductModal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className="rounded-2xl border border-white/15 bg-neutral-950/75 p-6 shadow-[0_2px_28px_rgba(0,0,0,0.55)] backdrop-blur-sm md:p-8"
    >
      {children}
    </motion.article>
  );
}

export function VantageIntroShowcase() {
  return (
    <section className="w-full pb-12 pt-12 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="mx-auto max-w-7xl space-y-10 md:space-y-12"
      >
        <div className="max-w-3xl space-y-5 px-6">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-neutral-500">The CŪPR ecosystem</span>
          <h1 className="text-4xl font-light leading-tight tracking-tighter text-white md:text-5xl">
            Highlights at a glance
          </h1>
          <p className="text-lg font-light leading-relaxed text-neutral-400">
            CŪPR pairs flagship hardware with operator-grade software and staff enablement—together they compound trust,
            retention, and reach. Below are three lenses into how that value stacks: the B2B SaaS spine for partners,
            origin-grade industrial design, and BudBook&apos;s learning layer for the sales floor.
          </p>
        </div>

        <div className="flex flex-col gap-8 px-6 md:gap-10">
          {/* 1 — CŪPROs */}
          <ShowcaseProductModal delay={0.05}>
            <h2 className="flex flex-col gap-3 border-0 p-0">
              {/* Logo asset includes wordmark + tagline; explicit subtitle for section context */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CUPROS_LOGO_SRC}
                alt="cūPROS — Customer Understanding. Process Optimization. Solutions."
                className="h-auto w-full max-w-md object-contain object-left md:max-w-lg"
                loading="eager"
                decoding="async"
              />
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-neutral-500">
                Compliance-native SaaS
              </span>
            </h2>
            <div className="mt-4 space-y-4 text-sm font-light leading-relaxed text-neutral-400 md:text-base">
              <p>
                <CuprosWordmark className="text-white/90" /> is a compliance-native SaaS platform for dispensaries and
                smoke shops to manage their websites, ecommerce, listings, marketing, and customer data in one place.
              </p>
              <p>
                It connects live business systems like POS, inventory, and digital profiles to keep menus, hours, content,
                and campaigns accurate across every channel.
              </p>
              <p>
                The platform uses AI-assisted workflows to generate and update websites, publish content, support
                campaigns, and streamline day-to-day operations.
              </p>
              <p>
                Built as a multi-tenant SaaS application, it supports single-store operators, multi-location brands, and
                role-based team collaboration at scale.
              </p>
              <p>
                <CuprosWordmark className="text-white/90" /> helps retailers turn operational data into discoverability,
                conversion, and measurable growth through one unified digital presence.
              </p>
            </div>
            <AppUiScreenshotModal
              imageSrc={VANTAGE_CUPRO_UI_SRC}
              alt="CŪPROs dashboard — Network Overview with omnichannel KPIs, compliance preflight, location status, and AI-driven growth actions"
              hint="In-app UI"
            />
          </ShowcaseProductModal>

          {/* 2 — Apache 110 (OG) */}
          <ShowcaseProductModal delay={0.1}>
            <div className="flex flex-col gap-6">
              <h2 className="flex flex-col items-end gap-3 border-0 p-0 text-right">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LOCKBOX_APACHE110_LOGO_SRC}
                  alt="Lockbox: Apache 110"
                  className="-mr-6 h-auto w-full max-w-2xl object-contain object-right md:-mr-8 md:max-w-3xl"
                  loading="eager"
                  decoding="async"
                />
              </h2>

              <div className="max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-black shadow-[0_2px_28px_rgba(0,0,0,0.55)]">
                {/* Animated GIF — next/image not suitable */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={APACHE_LOCKBOX_MOCKUP_GIF}
                  alt="Apache 110 Lockbox — 360° product mockup rotating on black"
                  className="h-auto w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <p className="text-sm font-light leading-relaxed text-neutral-400 md:text-base">
                The series-origin blueprint: a 360° anatomy walkthrough of the hardware lineage that grounds CŪPR&apos;s
                industrial story—form, airflow, and precision as a single narrative.
              </p>
            </div>
          </ShowcaseProductModal>

          {/* 3 — BudBook */}
          <ShowcaseProductModal delay={0.15}>
            <h2 className="flex flex-col gap-3 border-0 p-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BUDBOOK_LOGO_SRC}
                alt="BudBook"
                className="h-auto w-full max-w-md object-contain object-left md:max-w-lg"
                loading="eager"
                decoding="async"
              />
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-neutral-500">
                Training &amp; enablement
              </span>
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-neutral-400 md:text-base">
              BudBook turns live menus, SOPs, and compliance context into personalized training—so budtenders learn what you
              actually sell and how you operate. It closes the gap between inventory systems and floor-ready knowledge,
              keeping staff sharp without pulling them off the sales floor for generic LMS friction.
            </p>
            <AppUiScreenshotModal
              imageSrc={VANTAGE_BUDBOOK_UI_SRC}
              alt="BudBook in-app interface screenshot"
              hint="In-app UI"
            />
          </ShowcaseProductModal>
        </div>

        <p className="mx-auto max-w-3xl border-t border-white/10 px-6 pt-10 text-sm font-light leading-relaxed text-neutral-500">
          Hardware IP, recurring SaaS, and BudBook-enabled teams interlock: each pillar strengthens the others, deepening
          capability and participation across the full CŪPR ecosystem.
        </p>
      </motion.div>
    </section>
  );
}
