'use client';

import IntegrationContent from '@/components/IntegrationContent';
import CMSContent from '@/components/CMSContent';
import EcommerceContent from '@/components/EcommerceContent';
import OperationalIntegrationContent from '@/components/OperationalIntegrationContent';
import { TabbedSidebarLayout } from '@/components/TabbedSidebarLayout';
import { WEB_EYEBROW, WEB_TABS } from '@/content/tabs';

function renderContent(tabId: string) {
  switch (tabId) {
    case 'cms':
      return <CMSContent />;
    case 'ecommerce':
      return <EcommerceContent />;
    case 'integration':
      return <IntegrationContent />;
    case 'operational':
      return <OperationalIntegrationContent />;
    default:
      return null;
  }
}

export default function WebPage() {
  return <TabbedSidebarLayout eyebrow={WEB_EYEBROW} tabs={WEB_TABS} renderContent={renderContent} />;
}
