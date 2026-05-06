'use client';

import { useEffect, useState } from 'react';
import { CuprosIntroShowcase } from '@/components/CuprosIntroShowcase';

function CuprosIntroSkeleton() {
  return (
    <section className="w-full pb-12 pt-12 md:pt-20" aria-busy="true" aria-label="Loading CŪPROs intro showcase">
      <div className="mx-auto max-w-7xl animate-pulse space-y-8 px-6">
        <div className="max-w-3xl space-y-4">
          <div className="h-3 w-40 rounded bg-white/10" />
          <div className="h-10 max-w-md rounded bg-white/10" />
          <div className="h-24 rounded bg-white/10" />
        </div>
        <div className="h-56 rounded-2xl bg-white/[0.06]" />
        <div className="h-56 rounded-2xl bg-white/[0.06]" />
        <div className="h-56 rounded-2xl bg-white/[0.06]" />
      </div>
    </section>
  );
}

/**
 * CMS `/cms` first tab only: mounts {@link CuprosIntroShowcase} after mount so SSR markup matches the skeleton,
 * then swaps in the interactive showcase. Avoids useSyncExternalStore with a noop subscriber (invalid store contract).
 */
export function CuprosIntroTabPanel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) {
    return <CuprosIntroSkeleton />;
  }

  return <CuprosIntroShowcase />;
}
