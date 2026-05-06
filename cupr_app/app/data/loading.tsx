import { RouteSkeleton } from '@/components/RouteSkeleton';
import { DATA_TABS } from '@/content/tabs';

export default function Loading() {
  return <RouteSkeleton navItemCount={DATA_TABS.length} />;
}
