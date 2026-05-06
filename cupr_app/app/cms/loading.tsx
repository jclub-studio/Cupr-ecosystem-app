import { RouteSkeleton } from '@/components/RouteSkeleton';
import { CMS_TABS } from '@/content/tabs';

export default function Loading() {
  return <RouteSkeleton navItemCount={CMS_TABS.length} />;
}
