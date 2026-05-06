import '@testing-library/jest-dom/vitest';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

type Mutable<T> = { -readonly [K in keyof T]: T[K] };

if (typeof window !== 'undefined') {
  const w = window as unknown as Mutable<Window & typeof globalThis>;

  if (!w.matchMedia) {
    w.matchMedia = (query: string) =>
      ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }) as unknown as MediaQueryList;
  }

  // motion/react's `whileInView` viewport feature relies on IntersectionObserver,
  // which jsdom does not implement. Stub it so render tests don't crash.
  if (!('IntersectionObserver' in w)) {
    class StubIntersectionObserver {
      root: Element | Document | null = null;
      rootMargin = '';
      thresholds: ReadonlyArray<number> = [];
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
      takeRecords() {
        return [] as IntersectionObserverEntry[];
      }
    }
    w.IntersectionObserver = StubIntersectionObserver as unknown as typeof IntersectionObserver;
  }

  if (!('ResizeObserver' in w)) {
    class StubResizeObserver {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    }
    (w as unknown as { ResizeObserver: typeof ResizeObserver }).ResizeObserver =
      StubResizeObserver as unknown as typeof ResizeObserver;
  }
}
