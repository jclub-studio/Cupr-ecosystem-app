import { RouteSkeleton } from '@/components/RouteSkeleton';
import { BUDBOOK_TABS } from '@/content/tabs';

export default function Loading() {
  return <RouteSkeleton navItemCount={BUDBOOK_TABS.length} />;
}
