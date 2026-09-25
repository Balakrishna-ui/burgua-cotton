import type { Metadata } from 'next';
import { GetInTouchClient } from './GetInTouchClient';

export const metadata: Metadata = {
  title: 'Get in Touch | Burgula Cotton Trust',
  description:
    'Reach out to Burgula Cotton Trust for partnerships, sourcing, research, collaborations or general enquiries. Let’s work for a stronger tomorrow.',
};

export default function GetInTouchPage() {
  return <GetInTouchClient />;
}
