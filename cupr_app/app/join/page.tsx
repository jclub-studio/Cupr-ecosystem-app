import type { Metadata } from 'next';
import { metadataFor } from '../seo';
import View from './view';

export const metadata: Metadata = metadataFor('join');

export default function Page() {
  return <View />;
}
