import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { buildWebApplicationSchema, buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Generateur de CV Gratuit - Fonction Publique Maroc',
  description: 'Creez votre CV professionnel gratuitement pour la fonction publique marocaine. 3 modeles, export PDF, sauvegarde automatique.',
  alternates: { canonical: '/generateur-cv/' },
};

export default function GenerateurCVLayout({ children }: { children: React.ReactNode }) {
  const webAppSchema = buildWebApplicationSchema();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Generateur de CV', url: `${siteConfig.url}/generateur-cv/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
