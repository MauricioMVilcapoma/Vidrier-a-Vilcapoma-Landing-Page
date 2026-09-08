import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const siteTitle =
  'Vidriería - Aluminios & Marquería “Vilcapoma” | Breña, Lima';
const siteDescription =
  'Vidriería y marquería en Breña, Lima: trabajos en vidrio, aluminio, espejos, mamparas, ventanas y enmarcados a medida con 30 años de experiencia.';

export const metadata: Metadata = {
  metadataBase: new URL('https://vidrieria-vilcapoma.fresh-gleam-5307.chatgpt.site'),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    'vidriería',
    'vidrieria',
    'marquería',
    'marqueria',
    'trabajos en vidrio',
    'aluminio',
    'enmarcados',
    'Breña',
    'Lima',
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    locale: 'es_PE',
    images: [
      {
        url: '/assets/local-960.webp',
        width: 557,
        height: 412,
        alt: 'Fachada de Vidriería - Aluminios & Marquería “Vilcapoma” en Breña, Lima',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/assets/local-960.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
