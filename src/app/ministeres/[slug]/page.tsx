import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';
import { ministeres, getMinistereBySlug } from '@/data/ministeres';
import { concoursExamples } from '@/data/concours-types';

export function generateStaticParams() {
  return ministeres.map((m) => ({ slug: m.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ministere = getMinistereBySlug(slug);
  if (!ministere) return {};
  return {
    title: `${ministere.nomCourt} : Concours et Emploi Public au Maroc`,
    description: `Concours et emploi au ${ministere.nomCourt}. ${ministere.effectif}, départements, types de concours et échelles salariales.`,
    alternates: { canonical: `/ministeres/${slug}/` },
  };
}

export default async function MinisterePage({ params }: Props) {
  const { slug } = await params;
  const ministere = getMinistereBySlug(slug);
  if (!ministere) notFound();

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Ministères', url: `${siteConfig.url}/ministeres/` },
    { name: ministere.nomCourt, url: `${siteConfig.url}/ministeres/${slug}/` },
  ]);

  const relatedConcours = concoursExamples.filter((c) => c.ministereSlug === slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="text-sm text-primary-200 mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/ministeres/" className="hover:text-white">Ministères</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{ministere.nomCourt}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{ministere.nom}</h1>
          <p className="text-primary-100 text-lg">{ministere.effectif}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Présentation</h2>
              <p className="text-gray-700 leading-relaxed">{ministere.description}</p>
            </div>

            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Départements et directions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ministere.departements.map((dep) => (
                  <div key={dep} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                    {dep}
                  </div>
                ))}
              </div>
            </div>

            {relatedConcours.length > 0 && (
              <div className="card p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Concours récents et à venir</h2>
                <div className="space-y-4">
                  {relatedConcours.map((c) => (
                    <div key={c.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          c.statut === 'ouvert' ? 'bg-green-100 text-green-800' :
                          c.statut === 'a_venir' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {c.statut === 'ouvert' ? 'Ouvert' : c.statut === 'a_venir' ? 'À venir' : 'Fermé'}
                        </span>
                        <span className="text-xs text-gray-500">{c.echelle}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900">{c.titre}</h3>
                      <p className="text-sm text-gray-600 mt-1">{c.description}</p>
                      <div className="flex gap-4 text-xs text-gray-500 mt-2">
                        <span>{c.nombrePostes} postes</span>
                        <span>{c.region}</span>
                        <span>Limite : {c.dateLimite}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-3">Informations clés</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-500">Effectif</dt>
                  <dd className="font-medium text-gray-900">{ministere.effectif}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Échelles de recrutement</dt>
                  <dd className="font-medium text-gray-900">{ministere.echelles}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Site officiel</dt>
                  <dd>
                    <a href={ministere.siteOfficiel} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      {ministere.siteOfficiel.replace('https://', '')}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-3">Types de concours</h3>
              <ul className="space-y-2">
                {ministere.typeConcours.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 bg-primary-50">
              <h3 className="font-bold text-gray-900 mb-2">Préparez votre candidature</h3>
              <p className="text-sm text-gray-600 mb-4">
                Créez un CV professionnel gratuit pour postuler aux concours du {ministere.nomCourt}.
              </p>
              <Link href="/generateur-cv/" className="btn-primary text-sm w-full justify-center">
                Créer mon CV
              </Link>
            </div>
          </div>
        </div>


        {/* Related resources */}
        <section className="mt-8 p-6 bg-primary-50 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-4">Ressources utiles</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/concours/" className="btn-secondary text-sm">Tous les concours</Link>
            <Link href="/salaires-fonction-publique/" className="btn-secondary text-sm">Grille des salaires</Link>
            <Link href="/guides/reussir-concours-public/" className="btn-secondary text-sm">Guide concours</Link>
            <Link href="/guides/dossier-candidature-concours/" className="btn-secondary text-sm">Dossier candidature</Link>
            <Link href="/generateur-cv/" className="btn-primary text-sm">Créer mon CV</Link>
          </div>
        </section>

        <p className="text-sm text-gray-500 mt-12 italic">
          Par {siteConfig.author.name} ({siteConfig.author.title})
        </p>
      </div>
    </>
  );
}
