'use client';

export const CANVA_APACHE_EMBED_SRC =
  'https://www.canva.com/design/DAHIv90k8-I/h8SkSvncP5dMIaI6Ctlu3Q/watch?embed';
export const CANVA_APACHE_WATCH_URL =
  'https://www.canva.com/design/DAHIv90k8-I/h8SkSvncP5dMIaI6Ctlu3Q/watch?utm_content=DAHIv90k8-I&utm_campaign=designshare&utm_medium=embeds&utm_source=link';

function EmbedFrame() {
  return (
    <div
      className="relative mb-[0.9em] mt-[1.6em] w-full overflow-hidden rounded-lg shadow-[0_2px_8px_0_rgba(63,69,81,0.16)] [padding-top:79.8898%] [will-change:transform]"
      style={{ height: 0, paddingBottom: 0 }}
    >
      <iframe
        loading="lazy"
        title="Apache 110 (OG) — Canva design"
        src={CANVA_APACHE_EMBED_SRC}
        allowFullScreen
        allow="fullscreen"
        className="absolute left-0 top-0 m-0 h-full w-full border-0 p-0"
      />
    </div>
  );
}

function Attribution() {
  return (
    <p className="text-sm font-light text-neutral-500">
      <a
        href={CANVA_APACHE_WATCH_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-500/90 underline-offset-2 hover:text-teal-400 hover:underline"
      >
        Design
      </a>{' '}
      by Jack Cooper
    </p>
  );
}

type Apache110CanvaEmbedProps = {
  /** `archive`: Patent archive panel with 360° copy. `player`: iframe + attribution only (e.g. Vantage Intro). */
  variant?: 'archive' | 'player';
};

export function Apache110CanvaEmbed({ variant = 'archive' }: Apache110CanvaEmbedProps) {
  if (variant === 'player') {
    return (
      <div className="w-full">
        <EmbedFrame />
        <Attribution />
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-neutral-950/70 p-6">
      <p className="mb-2 text-[10px] font-mono uppercase tracking-[0.28em] text-neutral-500">360° Anatomy</p>
      <p className="mb-4 text-sm font-light leading-relaxed text-white/55">
        Use fullscreen in the player controls to expand.
      </p>
      <EmbedFrame />
      <Attribution />
    </div>
  );
}
