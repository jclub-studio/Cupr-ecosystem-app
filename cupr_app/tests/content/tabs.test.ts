import { describe, expect, it } from 'vitest';
import {
  WEB_TABS,
  CMS_TABS,
  DATA_TABS,
  BUDBOOK_TABS,
} from '@/content/tabs';

/**
 * Tab IDs are part of the public contract between `content/tabs.ts` and the
 * `view.tsx` switch statements that render each tab body. Renaming an ID here
 * silently breaks routing, so we lock the surface with snapshot-style assertions.
 */

describe('content/tabs ID contracts', () => {
  it('WEB_TABS exposes the four expected sections in order', () => {
    expect(WEB_TABS.map(t => t.id)).toEqual(['cms', 'ecommerce', 'integration', 'operational']);
  });

  it('CMS_TABS exposes the seven CMS sections', () => {
    expect(CMS_TABS.map(t => t.id)).toEqual([
      'cupros-intro',
      'platform',
      'generative-ai',
      'social-content',
      'digital-ads',
      'print-media',
      'compliance',
    ]);
  });

  it('DATA_TABS exposes proprietary, partner, third-party, and end-users', () => {
    expect(DATA_TABS.map(t => t.id)).toEqual(['proprietary', 'partner', 'third-party', 'end-users']);
  });

  it('BUDBOOK_TABS exposes intro, journal, social, shop, and pro', () => {
    expect(BUDBOOK_TABS.map(t => t.id)).toEqual(['intro', 'journal', 'social', 'shop', 'pro']);
  });

  it.each([
    ['WEB_TABS', WEB_TABS],
    ['CMS_TABS', CMS_TABS],
    ['DATA_TABS', DATA_TABS],
    ['BUDBOOK_TABS', BUDBOOK_TABS],
  ])('%s: every tab has a non-empty title', (_, tabs) => {
    for (const tab of tabs) {
      expect(tab.title.trim().length).toBeGreaterThan(0);
    }
  });
});
