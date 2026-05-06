/**
 * Route-level Suspense skeleton matching the sidebar + hero + tab-body shell
 * used by `/web`, `/cms`, `/data`, and `/budbook`. Rendered from each route's
 * `loading.tsx` while the client view chunk + content components stream in.
 */
export function RouteSkeleton({ navItemCount = 5 }: { navItemCount?: number }) {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen" aria-busy="true" aria-label="Loading">
      <aside className="w-72 flex-shrink-0 border-r border-white/10 bg-black sticky top-20 z-10 self-start">
        <div className="p-8 space-y-8 animate-pulse">
          <div className="h-3 w-24 rounded bg-white/10" />
          <div className="flex flex-col space-y-2">
            {Array.from({ length: navItemCount }).map((_, i) => (
              <div key={i} className="h-10 rounded bg-white/[0.06]" />
            ))}
          </div>
        </div>
      </aside>

      <main className="flex-1 w-full bg-black">
        <section className="relative min-h-[40vh] flex flex-col justify-center px-6 md:px-12 border-b border-white/10">
          <div className="max-w-7xl w-full space-y-8 mt-16 animate-pulse">
            <div className="h-12 w-2/3 rounded bg-white/10" />
          </div>
        </section>
        <section className="py-24 px-6 md:px-12 w-full">
          <div className="max-w-7xl mx-auto space-y-8 animate-pulse">
            <div className="h-6 w-1/2 rounded bg-white/10" />
            <div className="h-4 w-3/4 rounded bg-white/[0.06]" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-48 rounded-2xl bg-white/[0.04]" />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
