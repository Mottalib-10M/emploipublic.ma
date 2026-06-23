import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';
import GrilleMinisteres from '@/components/emploi/GrilleMinisteres';

export const metadata: Metadata = {
  title: 'Ministères et Organismes Publics au Maroc',
  description: 'Découvrez les ministères et organismes publics marocains : concours, postes, effectifs et types de recrutement par institution.',
  alternates: { canonical: '/ministeres/' },
};

export default function MinisteresPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Ministères', url: `${siteConfig.url}/ministeres/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Ministères et Organismes Publics au Maroc
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Explorez les principaux employeurs de la fonction publique marocaine. Découvrez leurs concours, effectifs et types de recrutement.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <GrilleMinisteres />

        <section className="mt-16">
          <article className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Les employeurs de la fonction publique marocaine</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La fonction publique marocaine est composée de plusieurs types d&apos;employeurs : les ministères, les établissements publics, les collectivités territoriales et les forces armées. Chaque institution a ses propres procédures de recrutement, ses échelles de rémunération et ses perspectives de carrière. Le choix de l&apos;institution dépend de vos qualifications, de vos aspirations professionnelles et de la région où vous souhaitez exercer.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les ministères sont les principaux employeurs de l&apos;administration centrale. Ils recrutent par voie de concours externes (ouverts aux candidats externes) et de concours internes (réservés aux fonctionnaires en poste). Les établissements publics, comme l&apos;ONCF, l&apos;ONEE ou les offices régionaux, ont leurs propres grilles salariales souvent plus avantageuses que celles de la fonction publique classique. Les collectivités territoriales offrent des postes de proximité avec des missions variées au service des citoyens.
            </p>
            <p className="text-sm text-gray-500 mt-6 italic">
              Par {siteConfig.author.name} ({siteConfig.author.title})
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
