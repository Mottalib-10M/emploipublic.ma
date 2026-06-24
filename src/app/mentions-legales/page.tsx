import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Mentions Légales et Confidentialité – Emploi Public Maroc',
  description: 'Mentions légales du site emploipublic.ma : éditeur, hébergement, propriété intellectuelle, protection des données personnelles et conditions d\'utilisation.',
  alternates: { canonical: '/mentions-legales/' },
};

export default function MentionsLegalesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Mentions légales', url: `${siteConfig.url}/mentions-legales/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Mentions Légales</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav aria-label="Fil d'Ariane" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Mentions Légales</span>
        </nav>
        <article className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Éditeur du site</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le site web emploipublic.ma est édité par {siteConfig.author.name}.<br />
            Email : <a href={`mailto:${siteConfig.contact}`} className="text-primary-600">{siteConfig.contact}</a>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hébergement</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le site est hébergé par GitHub Pages, un service de GitHub, Inc.<br />
            Adresse : 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Propriété intellectuelle</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            L&apos;ensemble du contenu du site emploipublic.ma (textes, images, logos, outils) est protégé par le droit d&apos;auteur. Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite, sauf dans le cadre du droit de citation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Données personnelles</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le générateur de CV fonctionne entièrement côté client (dans votre navigateur). Aucune donnée personnelle saisie dans le générateur de CV n&apos;est transmise à nos serveurs. Les données sont stockées localement dans le localStorage de votre navigateur et ne sont accessibles que par vous.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le site peut utiliser des cookies techniques nécessaires au bon fonctionnement du site. Aucun cookie de pistage ou publicitaire n&apos;est utilisé.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation de responsabilité</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les informations publiées sur emploipublic.ma sont fournies à titre purement indicatif. Elles ne constituent en aucun cas un document officiel et ne sauraient se substituer aux publications du Bulletin Officiel du Royaume du Maroc ou aux sites web officiels des ministères et établissements publics.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            L&apos;éditeur s&apos;efforce de maintenir les informations à jour et exactes, mais ne peut garantir l&apos;exhaustivité ou l&apos;exactitude des données présentées. Les utilisateurs sont invités à vérifier toute information auprès des sources officielles avant de prendre des décisions sur cette base.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les grilles de salaires présentées sont des estimations indicatives et peuvent ne pas refléter exactement la rémunération réelle, qui dépend de nombreux facteurs individuels (primes, indemnités, situation familiale, etc.).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Liens externes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le site peut contenir des liens vers des sites web externes (ministères, établissements publics, etc.). L&apos;éditeur n&apos;est pas responsable du contenu de ces sites externes ni de leurs pratiques en matière de protection des données.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pour toute question relative aux mentions légales ou au fonctionnement du site, vous pouvez nous contacter à : <a href={`mailto:${siteConfig.contact}`} className="text-primary-600">{siteConfig.contact}</a>
          </p>

          <p className="text-sm text-gray-500 mt-8 italic">
            Dernière mise à jour : Janvier 2026
          </p>
        </article>
      </div>
    </>
  );
}
