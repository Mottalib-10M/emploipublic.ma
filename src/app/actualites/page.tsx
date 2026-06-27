import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Actualites Fonction Publique Maroc 2025 : Concours, Salaires et Reformes',
  description: 'Suivez l\'actualite de la fonction publique au Maroc : calendrier des concours 2025, reforme de la grille des salaires, nouveaux postes et recrutements en cours.',
  alternates: { canonical: '/actualites/' },
};

const articles = [
  {
    title: 'Concours de la fonction publique 2025 : calendrier, reforme des salaires et nouveaux postes',
    description: 'Calendrier complet des concours 2025, reforme de la grille salariale, creation de nouveaux postes et digitalisation du recrutement dans la fonction publique marocaine.',
    href: '/actualites/concours-fonction-publique-2025/',
    category: 'Concours',
    date: '25 juin 2025',
  },
];

export default function ActualitesHubPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Actualites', url: `${siteConfig.url}/actualites/` },
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
            Actualites de la Fonction Publique au Maroc
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Suivez les dernieres actualites : concours ouverts, reformes salariales, nouveaux recrutements
            et evolutions de la fonction publique marocaine.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav aria-label="Fil d'Ariane" className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Actualites</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.href} href={article.href} className="card p-6 group hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-700">
                  {article.category}
                </span>
                <span className="text-xs text-gray-400">{article.date}</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">{article.description}</p>
              <span className="inline-flex items-center text-sm text-primary-600 font-medium mt-4 group-hover:gap-2 transition-all">
                Lire l&apos;article
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* SEO Content */}
        <section className="mt-16">
          <article className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi suivre l&apos;actualite de la fonction publique ?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La fonction publique marocaine est en constante evolution. Chaque annee, des milliers de postes sont ouverts au recrutement par concours dans les differents ministeres et etablissements publics. Suivre l&apos;actualite vous permet de ne manquer aucune opportunite et de vous preparer en avance pour les concours a venir.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Au-dela des concours, les reformes de la grille salariale, les evolutions statutaires, les changements dans les conditions de travail et les nouvelles politiques de recrutement impactent directement les fonctionnaires en poste et les candidats potentiels. Nos articles d&apos;actualite analysent ces changements et vous expliquent leur impact concret sur votre carriere ou votre candidature.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Consultez egalement nos <Link href="/guides/" className="text-primary-600 hover:text-primary-700">guides pratiques</Link> pour preparer vos concours, notre <Link href="/generateur-cv/" className="text-primary-600 hover:text-primary-700">generateur de CV gratuit</Link> pour constituer votre dossier, et la <Link href="/salaires-fonction-publique/" className="text-primary-600 hover:text-primary-700">grille des salaires</Link> pour estimer votre remuneration.
            </p>
            <p className="text-sm text-gray-500 mt-8 italic">
              Par {siteConfig.author.name} ({siteConfig.author.title}), mise a jour : 2025
            </p>
          </article>
        </section>

        {/* Related links */}
        <section className="mt-12 p-6 bg-primary-50 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-4">Ressources complementaires</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/concours/" className="btn-primary text-sm">Concours ouverts</Link>
            <Link href="/generateur-cv/" className="btn-secondary text-sm">Creer mon CV</Link>
            <Link href="/salaires-fonction-publique/" className="btn-secondary text-sm">Grille des salaires</Link>
            <Link href="/guides/" className="btn-secondary text-sm">Guides pratiques</Link>
          </div>
        </section>
      </div>
    </>
  );
}
