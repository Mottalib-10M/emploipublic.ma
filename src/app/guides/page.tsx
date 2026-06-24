import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Guides Fonction Publique Maroc : Concours et Carrière 2026',
  description: 'Guides pratiques pour réussir dans la fonction publique au Maroc : concours, entretien oral, CV, salaires, épreuves écrites et dossier de candidature.',
  alternates: { canonical: '/guides/' },
};

const guides = [
  {
    title: 'Réussir un Concours de la Fonction Publique',
    description: 'Guide complet : préparation stratégique, épreuves écrites et orales, conseils pratiques et erreurs à éviter pour décrocher un poste.',
    href: '/guides/reussir-concours-public/',
    category: 'Préparation',
    icon: '📋',
  },
  {
    title: 'Préparer l\'Entretien Oral du Concours',
    description: 'Les 10 questions les plus fréquentes, conseils de présentation, gestion du stress et erreurs fatales à éviter devant le jury.',
    href: '/guides/preparer-entretien-oral/',
    category: 'Oral',
    icon: '🎤',
  },
  {
    title: 'Lettre de Motivation Fonction Publique',
    description: 'Structure idéale, modèle complet, règles d\'or et erreurs courantes pour rédiger une lettre qui convaincra le jury.',
    href: '/guides/lettre-motivation-fonction-publique/',
    category: 'Candidature',
    icon: '✉️',
  },
  {
    title: 'Guide des Salaires de la Fonction Publique',
    description: 'Tout savoir sur les salaires : échelles 1 à 11, primes, indemnités, retenues, évolution de carrière et comparaison avec le privé.',
    href: '/guides/salaires-fonction-publique-maroc/',
    category: 'Rémunération',
    icon: '💰',
  },
  {
    title: 'QCM Droit Administratif : Révisions Concours',
    description: 'Préparez l\'épreuve de droit administratif : thèmes récurrents, méthode de révision et exemples de questions pour le concours.',
    href: '/guides/qcm-droit-administratif/',
    category: 'Préparation',
    icon: '⚖️',
  },
  {
    title: 'Culture Générale : Révisions pour Concours',
    description: 'Guide de révision en culture générale pour les concours de la fonction publique marocaine : institutions, actualité, géographie.',
    href: '/guides/culture-generale-concours/',
    category: 'Préparation',
    icon: '🌍',
  },
  {
    title: 'Réussir l\'Épreuve Écrite du Concours',
    description: 'Méthodologie complète pour les épreuves écrites : QCM, dissertation, note de synthèse. Gestion du temps et rédaction efficace.',
    href: '/guides/epreuve-ecrite-concours/',
    category: 'Écrit',
    icon: '📝',
  },
  {
    title: 'Constituer son Dossier de Candidature',
    description: 'Liste des pièces requises, conseils de présentation, erreurs à éviter et modèle de demande manuscrite pour le concours.',
    href: '/guides/dossier-candidature-concours/',
    category: 'Candidature',
    icon: '📂',
  },
  {
    title: 'Fonction Publique Contractuelle au Maroc',
    description: 'Tout comprendre sur le recrutement contractuel : statut, droits, différences avec la titularisation et perspectives d\'évolution.',
    href: '/guides/fonction-publique-contractuelle/',
    category: 'Statut',
    icon: '📄',
  },
];

export default function GuidesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Guides', url: `${siteConfig.url}/guides/` },
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
            Guides Pratiques pour la Fonction Publique au Maroc
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Tous nos guides et conseils pour réussir les concours, préparer votre candidature et comprendre la fonction publique marocaine.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav aria-label="Fil d'Ariane" className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Guides</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="card p-6 group hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl" role="img" aria-hidden="true">{guide.icon}</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-700">
                  {guide.category}
                </span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {guide.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">{guide.description}</p>
              <span className="inline-flex items-center text-sm text-primary-600 font-medium mt-4 group-hover:gap-2 transition-all">
                Lire le guide
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Préparer sa carrière dans la fonction publique marocaine</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La fonction publique au Maroc offre des opportunités de carrière stables et valorisantes pour les diplômés de toutes les filières. Que vous visiez un poste d&apos;enseignant, de médecin, d&apos;ingénieur, d&apos;administrateur ou de technicien, une préparation méthodique est la clé de la réussite aux concours. Nos guides couvrent chaque étape du parcours, de la découverte des concours disponibles à la titularisation après le stage probatoire.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              La préparation aux concours de la fonction publique demande organisation et persévérance. Il faut compter en moyenne trois à six mois de travail régulier pour être prêt. Les épreuves écrites évaluent à la fois la culture générale, les connaissances spécifiques au poste et les capacités rédactionnelles. L&apos;épreuve orale, souvent décisive, teste la motivation, la connaissance du ministère visé et l&apos;aptitude à s&apos;exprimer avec clarté devant un jury.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Au-delà de la réussite au concours, comprendre le fonctionnement de la fonction publique est essentiel pour construire une carrière épanouissante. Nos guides vous éclairent sur les grilles de salaires, les primes et indemnités, les mécanismes de promotion, le statut des contractuels et les droits et obligations des fonctionnaires. Cette connaissance vous permettra de faire des choix éclairés et de tirer le meilleur parti de votre carrière dans l&apos;administration publique marocaine.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              N&apos;hésitez pas à consulter notre <Link href="/generateur-cv/" className="text-primary-600 hover:text-primary-700">générateur de CV gratuit</Link> pour créer un dossier de candidature professionnel, et à explorer les <Link href="/concours/" className="text-primary-600 hover:text-primary-700">concours ouverts</Link> pour trouver les opportunités qui correspondent à votre profil. La <Link href="/salaires-fonction-publique/" className="text-primary-600 hover:text-primary-700">grille des salaires</Link> vous aidera à estimer votre future rémunération selon l&apos;échelle et l&apos;échelon.
            </p>
            <p className="text-sm text-gray-500 mt-8 italic">
              Par {siteConfig.author.name} ({siteConfig.author.title}), mise à jour : 2026
            </p>
          </article>
        </section>

        {/* Related links */}
        <section className="mt-12 p-6 bg-primary-50 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-4">Ressources complémentaires</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/concours/" className="btn-primary text-sm">Concours ouverts</Link>
            <Link href="/generateur-cv/" className="btn-secondary text-sm">Créer mon CV</Link>
            <Link href="/salaires-fonction-publique/" className="btn-secondary text-sm">Grille des salaires</Link>
            <Link href="/ministeres/" className="btn-secondary text-sm">Les ministères</Link>
          </div>
        </section>
      </div>
    </>
  );
}
