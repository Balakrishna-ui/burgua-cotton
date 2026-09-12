import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartContext';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { ScrollRevealProvider } from '@/components/layout/ScrollRevealProvider';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://burgulacotton.com'),
  title: {
    default: 'Burgula Cotton | In Cotton We Trust',
    template: '%s | Burgula Cotton',
  },
  description:
    'Handloom cotton, rooted in Telangana. From cotton to yarn to cloth. Contemporary handloom fabric house and decentralised unbaled yarn revival.',
  keywords: [
    'Burgula Cotton',
    'Telangana handloom',
    'unbaled cotton yarn',
    'Kapas aur Kora',
    'decentralised cotton spinning',
    'handloom textiles India',
    'sustainable cotton fabric',
    'B2B cotton fabric supplier',
  ],
  authors: [{ name: 'Burgula Cotton' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://burgulacotton.com',
    siteName: 'Burgula Cotton',
    title: 'Burgula Cotton | In Cotton We Trust',
    description: 'Handloom cotton, rooted in Telangana. From cotton to yarn to cloth.',
    images: [
      {
        url: '/images/hero-cotton-harvest.jpg',
        width: 1200,
        height: 630,
        alt: 'Burgula Cotton Handloom Textile House',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <CartDrawer />
          <ScrollRevealProvider />
        </CartProvider>
      </body>
    </html>
  );
}
