import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/lib/config';
import { buildOrganizationSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    default: 'Emploi Public au Maroc : Concours et Offres 2025',
    template: '%s | Emploi Public Maroc',
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Emploi Public au Maroc : Concours et Offres 2025',
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emploi Public au Maroc : Concours et Offres 2025',
    description: siteConfig.description,
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
