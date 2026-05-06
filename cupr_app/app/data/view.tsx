'use client';

import ProprietaryDataContent from '@/components/ProprietaryDataContent';
import PartnerDataContent from '@/components/PartnerDataContent';
import ThirdPartyDataContent from '@/components/ThirdPartyDataContent';
import EndUsersDataContent from '@/components/EndUsersDataContent';
import { TabbedSidebarLayout } from '@/components/TabbedSidebarLayout';
import { DATA_EYEBROW, DATA_TABS } from '@/content/tabs';

function renderContent(tabId: string) {
  switch (tabId) {
    case 'proprietary':
      return <ProprietaryDataContent />;
    case 'partner':
      return <PartnerDataContent />;
    case 'third-party':
      return <ThirdPartyDataContent />;
    case 'end-users':
      return <EndUsersDataContent />;
    default:
      return null;
  }
}

export default function DataInsightsPage() {
  return <TabbedSidebarLayout eyebrow={DATA_EYEBROW} tabs={DATA_TABS} renderContent={renderContent} />;
}
