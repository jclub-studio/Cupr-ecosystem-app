import { RouteSkeleton } from '@/components/RouteSkeleton';
import { WEB_TABS } from '@/content/tabs';

export default function Loading() {
  return <RouteSkeleton navItemCount={WEB_TABS.length} />;
}
