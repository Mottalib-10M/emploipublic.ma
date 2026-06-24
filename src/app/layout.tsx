import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/lib/config';
import { buildOrganizationSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    default: 'Emploi Public au Maroc : Concours, Offres et Outils 2026',
    template: '%s | Emploi Public Maroc',
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  authors: [{ name: 'Mottalib Radif' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Emploi Public au Maroc : Concours, Offres et Outils 2026',
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emploi Public au Maroc : Concours, Offres et Outils 2026',
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'GOOGLE_VERIFICATION_CODE',
    other: { 'msvalidate.01': 'BING_VERIFICATION_CODE' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = buildOrganizationSchema();

  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#7C3AED" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-blue-600 focus:rounded focus:shadow-lg">
          Aller au contenu
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
