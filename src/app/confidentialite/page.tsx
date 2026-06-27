import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - Emploi Public Maroc',
  description: 'Politique de confidentialité d\'emploipublic.ma : zéro collecte de données personnelles, générateur de CV 100% côté navigateur, zéro cookie de pistage.',
  alternates: { canonical: '/confidentialite/' },
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Confidentialité', url: `${siteConfig.url}/confidentialite/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Politique de confidentialité</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav aria-label="Fil d'Ariane" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Confidentialité</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Chez <strong>Emploi Public Maroc</strong> (emploipublic.ma), la protection de votre vie privée est une priorité. Cette page décrit en détail comment nous traitons vos données lorsque vous utilisez notre site, notre générateur de CV et nos outils.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Principe fondamental : aucune collecte de données personnelles</h2>

          <p className="text-gray-700 leading-relaxed mb-4">Emploi Public Maroc ne collecte, ne stocke et ne transmet aucune donnée personnelle à des serveurs distants. Ce principe s&apos;applique à l&apos;ensemble de nos services :</p>

          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Générateur de CV :</strong> toutes les informations saisies (nom, expérience, formation, compétences) sont traitées et stockées exclusivement dans le localStorage de votre navigateur. Aucune donnée n&apos;est envoyée à nos serveurs.</li>
            <li><strong>Grille des salaires :</strong> la consultation des salaires ne nécessite aucune inscription et ne génère aucune collecte de données.</li>
            <li><strong>Annonces de concours :</strong> la navigation dans les concours est anonyme et ne requiert aucune donnée personnelle.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Stockage local (localStorage)</h2>

          <p className="text-gray-700 leading-relaxed mb-4">Le générateur de CV utilise le localStorage de votre navigateur pour sauvegarder votre progression entre les sessions. Il est important de comprendre que :</p>

          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Ces données sont stockées uniquement sur votre appareil.</li>
            <li>Elles ne sont jamais envoyées à nos serveurs ni à des tiers.</li>
            <li>Vous pouvez les supprimer à tout moment en vidant les données de site de votre navigateur.</li>
            <li>Le changement de navigateur ou d&apos;appareil ne transfère pas ces données.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Emploi Public Maroc n&apos;utilise aucun cookie de suivi publicitaire ou de pistage commercial. Le site peut utiliser des cookies techniques strictement nécessaires au bon fonctionnement du site. Ces cookies ne contiennent aucune information personnelle identifiable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Outils d&apos;analyse</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Le site peut utiliser des outils d&apos;analyse d&apos;audience anonymes pour comprendre l&apos;utilisation du site et améliorer l&apos;expérience utilisateur. Ces outils collectent des données agrégées et anonymisées (pages visitées, durée de visite, type d&apos;appareil) sans permettre l&apos;identification d&apos;un utilisateur individuel.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Liens externes</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Notre site contient des liens vers des sites tiers (ministères, établissements publics, Bulletin Officiel, etc.). Nous n&apos;avons aucun contrôle sur les politiques de confidentialité de ces sites externes et vous encourageons à les consulter directement.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Droits des utilisateurs</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Puisque nous ne collectons aucune donnée personnelle sur nos serveurs, il n&apos;y a aucune donnée à consulter, modifier ou supprimer de notre côté. Pour les données stockées localement dans votre navigateur (localStorage du générateur de CV), vous pouvez les supprimer à tout moment via les paramètres de votre navigateur.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Modifications de cette politique</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Nous nous réservons le droit de mettre à jour cette politique de confidentialité. Toute modification sera publiée sur cette page avec la date de mise à jour.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Pour toute question relative à cette politique de confidentialité, vous pouvez nous écrire à : <a href={`mailto:${siteConfig.contact}`} className="text-primary-600">{siteConfig.contact}</a>.
          </p>

          <p className="text-sm text-gray-500 mt-8 italic">Dernière mise à jour : juin 2026</p>
        </article>
      </div>
    </>
  );
}
