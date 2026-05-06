'use client';

import { CuprosIntroTabPanel } from '@/components/CuprosIntroTabPanel';
import PlatformContent from '@/components/PlatformContent';
import AIStudioContent from '@/components/AIStudioContent';
import PrintMediaContent from '@/components/PrintMediaContent';
import SocialContent from '@/components/SocialContent';
import AdCampaignsContent from '@/components/AdCampaignsContent';
import ComplianceContent from '@/components/ComplianceContent';
import { TabbedSidebarLayout } from '@/components/TabbedSidebarLayout';
import { CMS_EYEBROW, CMS_TABS } from '@/content/tabs';

function renderContent(tabId: string) {
  switch (tabId) {
    case 'cupros-intro':
      return <CuprosIntroTabPanel />;
    case 'platform':
      return <PlatformContent />;
    case 'generative-ai':
      return <AIStudioContent />;
    case 'social-content':
      return <SocialContent />;
    case 'digital-ads':
      return <AdCampaignsContent />;
    case 'print-media':
      return <PrintMediaContent />;
    case 'compliance':
      return <ComplianceContent />;
    default:
      return (
        <div className="flex flex-col items-center justify-center p-24 border border-dashed border-white/10 rounded-2xl bg-neutral-950/50 w-full max-w-5xl">
          <h2 className="text-4xl">{CMS_TABS.find(t => t.id === tabId)?.title}</h2>
          <span className="font-mono text-sm uppercase tracking-widest text-neutral-500">
            Coming Soon
          </span>
        </div>
      );
  }
}

export default function CMSPage() {
  return <TabbedSidebarLayout eyebrow={CMS_EYEBROW} tabs={CMS_TABS} renderContent={renderContent} />;
}
