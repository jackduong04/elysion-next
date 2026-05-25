// Node modules
import type { Metadata } from 'next';
import { Playfair_Display, Work_Sans } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

// Components
import './globals.css';
import { ConditionalNavBar } from './components/navbar/ConditionalNavBar';
import { ConditionalContactForm } from './components/forms/ConditionalContactForm';
import { ConditionalFooter } from './components/footer/ConditionalFooter';

const displayFont = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
});

const bodyFont = Work_Sans({
  variable: '--font-body',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Elysion Landscaping | Timeless Garden Design',
    template: '%s | Elysion Landscaping',
  },
  description:
    'Elysion Landscaping crafts nostalgic, timeless landscapes for modern outdoor living in Auckland. Specialising in landscape design, gardening, and commercial services.',
  keywords: [
    'landscaping auckland',
    'garden design',
    'landscape architecture',
    'modern gardening',
    'commercial landscaping nz',
    'elysion landscaping',
  ],
  authors: [{ name: 'Elysion Landscaping' }],
  creator: 'Elysion Landscaping',
  metadataBase: new URL('https://elysion.co.nz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://elysion.co.nz',
    siteName: 'Elysion Landscaping',
    title: 'Elysion Landscaping | Timeless Garden Design',
    description:
      'Nostalgic landscape design and modern outdoor living. We craft living sanctuaries that bridge the gap between human comfort and wild beauty.',
    images: [
      {
        url: '/images/og-image.webp', // Need to make sure this exists or suggest creating it
        width: 1200,
        height: 630,
        alt: 'Elysion Landscaping - Timeless Garden Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elysion Landscaping | Timeless Garden Design',
    description:
      'Nostalgic landscape design and modern outdoor living in Auckland.',
    images: ['/images/og-image.webp'],
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
      <GoogleTagManager gtmId="GTM-KMQRPMK2" />
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        <ConditionalNavBar />
        {children}
        <ConditionalFooter />
        <ConditionalContactForm />
      </body>
    </html>
  );
}
