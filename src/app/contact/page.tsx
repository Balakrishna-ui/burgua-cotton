import type { Metadata } from 'next';
import { GetInTouchClient } from '../get-in-touch/GetInTouchClient';

export const metadata: Metadata = {
  title: 'Contact Us | Burgula Cotton Trust',
  description:
    'Reach out to Burgula Cotton Trust for partnerships, sourcing, research, collaborations or general enquiries. Let’s work for a stronger tomorrow.',
};

export default function ContactPage() {
  return <GetInTouchClient />;
}
