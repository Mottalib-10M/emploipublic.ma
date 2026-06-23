import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Mentions Legales - Emploi Public Maroc',
  description: 'Mentions legales du site emploipublic.ma. Informations sur l\'editeur, l\'hebergement et les conditions d\'utilisation.',
  alternates: { canonical: '/mentions-legales/' },
};

export default function MentionsLegalesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Mentions legales', url: `${siteConfig.url}/mentions-legales/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Mentions Legales</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Editeur du site</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le site web emploipublic.ma est edite par {siteConfig.author.name}.<br />
            Email : <a href={`mailto:${siteConfig.contact}`} className="text-primary-600">{siteConfig.contact}</a>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hebergement</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le site est heberge par GitHub Pages, un service de GitHub, Inc.<br />
            Adresse : 88 Colin P Kelly Jr St, San Francisco, CA 94107, Etats-Unis
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Propriete intellectuelle</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            L&apos;ensemble du contenu du site emploipublic.ma (textes, images, logos, outils) est protege par le droit d&apos;auteur. Toute reproduction, distribution ou utilisation sans autorisation prealable est interdite, sauf dans le cadre du droit de citation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Donnees personnelles</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le generateur de CV fonctionne entierement cote client (dans votre navigateur). Aucune donnee personnelle saisie dans le generateur de CV n&apos;est transmise a nos serveurs. Les donnees sont stockees localement dans le localStorage de votre navigateur et ne sont accessibles que par vous.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le site peut utiliser des cookies techniques necessaires au bon fonctionnement du site. Aucun cookie de pistage ou publicitaire n&apos;est utilise.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation de responsabilite</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les informations publiees sur emploipublic.ma sont fournies a titre purement indicatif. Elles ne constituent en aucun cas un document officiel et ne sauraient se substituer aux publications du Bulletin Officiel du Royaume du Maroc ou aux sites web officiels des ministeres et etablissements publics.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            L&apos;editeur s&apos;efforce de maintenir les informations a jour et exactes, mais ne peut garantir l&apos;exhaustivite ou l&apos;exactitude des donnees presentees. Les utilisateurs sont invites a verifier toute information aupres des sources officielles avant de prendre des decisions sur cette base.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les grilles de salaires presentees sont des estimations indicatives et peuvent ne pas refleter exactement la remuneration reelle, qui depend de nombreux facteurs individuels (primes, indemnites, situation familiale, etc.).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Liens externes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le site peut contenir des liens vers des sites web externes (ministeres, etablissements publics, etc.). L&apos;editeur n&apos;est pas responsable du contenu de ces sites externes ni de leurs pratiques en matiere de protection des donnees.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pour toute question relative aux mentions legales ou au fonctionnement du site, vous pouvez nous contacter a : <a href={`mailto:${siteConfig.contact}`} className="text-primary-600">{siteConfig.contact}</a>
          </p>

          <p className="text-sm text-gray-500 mt-8 italic">
            Derniere mise a jour : Janvier 2025
          </p>
        </article>
      </div>
    </>
  );
}
