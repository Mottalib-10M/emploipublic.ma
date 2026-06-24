import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';
import GrilleMinisteres from '@/components/emploi/GrilleMinisteres';

export const metadata: Metadata = {
  title: 'Ministères et Organismes Publics au Maroc : Annuaire Complet',
  description: 'Annuaire des ministères et organismes publics marocains. Retrouvez concours ouverts, effectifs, postes disponibles et types de recrutement par institution.',
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
        <nav aria-label="Fil d'Ariane" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Ministères</span>
        </nav>
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
            <p className="text-gray-700 leading-relaxed mb-4">
              Le Ministère de l&apos;Éducation Nationale domine le paysage avec environ 300 000 fonctionnaires, ce qui en fait le plus grand employeur public du Maroc. Il recrute massivement chaque année des enseignants du primaire, du secondaire collégial et du secondaire qualifiant, ainsi que des cadres administratifs et des inspecteurs pédagogiques. Le Ministère de la Santé, avec ses 55 000 agents, est le deuxième recruteur et organise des concours réguliers pour les médecins, infirmiers, pharmaciens et techniciens de santé.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour identifier le ministère ou l&apos;organisme qui correspond le mieux à votre profil, prenez en compte le diplôme exigé (baccalauréat, licence, master, doctorat), les échelles de recrutement proposées, les spécialités recherchées, les perspectives d&apos;avancement et la localisation géographique des postes. Consultez les fiches détaillées de chaque institution ci-dessus pour accéder à ces informations et retrouver les concours ouverts.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les établissements publics à caractère administratif (EPA) et les établissements publics à caractère industriel et commercial (EPIC) offrent souvent des conditions salariales supérieures à celles de la fonction publique classique. L&apos;ONCF, l&apos;ONEE, l&apos;OCP et d&apos;autres grands organismes disposent de grilles de rémunération attractives et de programmes de formation continue pour leurs employés. Ces institutions représentent une alternative intéressante pour les candidats qui recherchent une rémunération compétitive tout en servant l&apos;intérêt public.
            </p>
            <p className="text-sm text-gray-500 mt-6 italic">
              Par {siteConfig.author.name} ({siteConfig.author.title})
            </p>
          </article>
        </section>

        {/* Related resources */}
        <section className="mt-12 p-6 bg-primary-50 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-4">Pages liées</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/concours/" className="btn-secondary text-sm">Concours ouverts</Link>
            <Link href="/salaires-fonction-publique/" className="btn-secondary text-sm">Grille des salaires</Link>
            <Link href="/guides/" className="btn-secondary text-sm">Tous les guides</Link>
            <Link href="/guides/dossier-candidature-concours/" className="btn-secondary text-sm">Dossier candidature</Link>
            <Link href="/generateur-cv/" className="btn-primary text-sm">Créer mon CV</Link>
          </div>
        </section>
      </div>
    </>
  );
}
