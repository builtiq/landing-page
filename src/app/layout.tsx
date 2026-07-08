import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { CursorFollower } from '@/components/CursorFollower';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.builtiq.org'),
  title: 'BUILTIQ — Intelligence layer for your building',
  description:
    "BUILTIQ connects to your building's existing systems and turns their data into clear answers in real time: what's happening, where the problem is, where energy is leaking.",
  keywords: [
    'building intelligence',
    'building operations',
    'building data',
    'BMS',
    'HVAC',
    'energy',
    'facility management',
    'anomaly detection',
    'Oskars Zvingulis',
    'Builtiq',
  ],
  authors: [{ name: 'BUILTIQ' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BUILTIQ — Intelligence layer for your building',
    description: 'Turn your building data into understandable answers.',
    url: '/',
    siteName: 'BUILTIQ',
    type: 'website',
    images: [
      {
        url: '/logo-large.png',
        width: 1200,
        height: 630,
        alt: 'BUILTIQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BUILTIQ — Intelligence layer for your building',
    description: 'Turn your building data into understandable answers.',
    images: ['/logo-large.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full`}>
      <body className="min-h-full antialiased">
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
