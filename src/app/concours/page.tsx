import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';
import { concoursProcess } from '@/data/concours-types';
import ListeConcours from '@/components/concours/ListeConcours';

export const metadata: Metadata = {
  title: 'Concours Fonction Publique Maroc 2026 : liste et calendrier',
  description: 'Liste complète des concours de la fonction publique au Maroc 2026. Filtrez par ministère, région et échelle. Dates limites et nombre de postes disponibles.',
  alternates: { canonical: '/concours/' },
};

export default function ConcoursPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Concours', url: `${siteConfig.url}/concours/` },
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
            Concours de la Fonction Publique au Maroc
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Retrouvez tous les concours ouverts et à venir dans les ministères et organismes publics marocains. Filtrez par ministère, région et échelle.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Concours</span>
        </nav>
        <ListeConcours />

        {/* Concours Process */}
        <section className="mt-16">
          <h2 className="section-title">Les étapes d&apos;un concours de la fonction publique</h2>
          <p className="section-subtitle">Comprendre le processus de recrutement pour mieux s&apos;y préparer</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {concoursProcess.map((etape) => (
              <div key={etape.etape} className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {etape.etape}
                  </div>
                  <h3 className="font-semibold text-gray-900">{etape.titre}</h3>
                </div>
                <p className="text-sm text-gray-600">{etape.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Content */}
        <section className="mt-16">
          <article className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tout savoir sur les concours de la fonction publique au Maroc</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les concours de la fonction publique au Maroc constituent la voie principale d&apos;accès aux postes de l&apos;administration publique. Organisés par les différents ministères et établissements publics, ces concours garantissent une sélection transparente et méritocratique des candidats. Le processus de recrutement est encadré par le statut général de la fonction publique et les statuts particuliers de chaque corps de fonctionnaires.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chaque année, des centaines de concours sont publiés au Bulletin Officiel et sur les sites web des ministères. Les postes proposés couvrent un large éventail de spécialités : enseignement, santé, droit, génie civil, informatique, agriculture, finances, et bien d&apos;autres domaines. Les conditions d&apos;accès varient selon l&apos;échelle de recrutement, allant du baccalauréat pour l&apos;échelle 7 au doctorat pour certains postes de l&apos;échelle 11 et hors échelle.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour maximiser vos chances de réussite, il est recommandé de commencer la préparation plusieurs mois à l&apos;avance. Les épreuves écrites testent généralement la culture générale, les connaissances spécifiques à la spécialité et les capacités de rédaction. L&apos;épreuve orale, quant à elle, évalue la motivation du candidat, sa connaissance du poste et du ministère, ainsi que ses aptitudes relationnelles. Une bonne préparation aux deux types d&apos;épreuves est indispensable pour décrocher un poste dans la fonction publique.
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
