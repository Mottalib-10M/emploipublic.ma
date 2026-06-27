import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contactez-nous - Emploi Public Maroc | Aide en 2026',
  description: 'Contactez Emploi Public Maroc pour vos questions sur les concours, salaires et carrières dans la fonction publique marocaine. Réponse sous 48h par email.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Contact', url: `${siteConfig.url}/contact/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Contactez-nous</h1>
          <p className="text-primary-100 text-lg">Une question ? Nous sommes à votre écoute.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Contact</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Vous avez une question sur les concours de la fonction publique, nos outils ou les informations publiées sur <strong>Emploi Public Maroc</strong> ? Notre équipe est à votre disposition pour vous aider. Vos retours nous permettent d&apos;améliorer continuellement la fiabilité et la pertinence de nos ressources.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Nous écrire par email</h2>

          <p className="text-gray-700 leading-relaxed mb-4">Le moyen le plus efficace de nous contacter est par email :</p>

          <p className="text-primary-600 font-semibold text-lg mb-4">
            <a href={`mailto:${siteConfig.contact}`}>{siteConfig.contact}</a>
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Nous nous efforçons de répondre à tous les messages dans un délai de <strong>48 heures ouvrables</strong>. Les demandes reçues le week-end ou les jours fériés seront traitées dès le jour ouvrable suivant.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quand nous contacter ?</h2>

          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Signalement d&apos;erreur :</strong> si vous constatez une erreur dans une annonce de concours, un salaire ou une information sur un ministère, merci de nous le signaler avec la source officielle de référence.</li>
            <li><strong>Suggestion d&apos;amélioration :</strong> si vous souhaitez voir de nouvelles fonctionnalités sur le générateur de CV, de nouveaux guides ou des informations sur un organisme public spécifique.</li>
            <li><strong>Question sur les salaires :</strong> si vous ne comprenez pas la grille de salaires affichée ou si vous avez besoin de clarification sur les échelons et indices.</li>
            <li><strong>Concours manquant :</strong> si un concours public récemment annoncé n&apos;apparaît pas encore sur notre site.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Questions fréquentes</h2>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Êtes-vous un site officiel du gouvernement ?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Non. Emploi Public Maroc est un site indépendant et informatif. Nous ne sommes pas affiliés à un ministère ou à un organisme public. Nos informations sont basées sur les publications officielles du Bulletin Officiel et des sites web ministériels, mais ne se substituent pas à ces sources. Pour les candidatures officielles, suivez les procédures indiquées dans les annonces du Bulletin Officiel.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Mes données sont-elles collectées dans le générateur de CV ?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Non. Le générateur de CV fonctionne entièrement dans votre navigateur. Aucune donnée personnelle saisie n&apos;est transmise à nos serveurs. Les données sont stockées localement dans le localStorage de votre navigateur. Consultez notre <Link href="/confidentialite/" className="text-primary-600">politique de confidentialité</Link> pour en savoir plus.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Pouvez-vous m&apos;aider à postuler à un concours ?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nous fournissons des guides détaillés sur la préparation aux concours et aux entretiens, mais nous ne traitons aucune candidature. Pour postuler, suivez les procédures officielles indiquées dans chaque annonce de concours (inscription en ligne, dépôt de dossier, etc.).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Avertissement</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Emploi Public Maroc ne fournit pas de conseils juridiques ou administratifs personnalisés. Les informations publiées sont à titre indicatif et ne se substituent pas aux publications officielles du Bulletin Officiel du Royaume du Maroc. Vérifiez toujours les informations auprès des sources officielles avant de constituer un dossier de candidature.
          </p>
        </article>

        <div className="mt-10 p-6 rounded-xl bg-primary-50 border border-primary-100">
          <p className="text-sm text-gray-700"><strong>Responsable éditorial :</strong> {siteConfig.author.name}, {siteConfig.author.title}</p>
          <p className="text-sm text-gray-700 mt-1"><strong>Email :</strong> <a href={`mailto:${siteConfig.contact}`} className="text-primary-600 hover:underline">{siteConfig.contact}</a></p>
        </div>
      </div>
    </>
  );
}
