import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Salaires Fonction Publique Maroc : Guide Complet',
  description: 'Guide complet des salaires de la fonction publique au Maroc. Échelles, grades, primes, indemnités et évolution de carrière détaillés.',
  alternates: { canonical: '/guides/salaires-fonction-publique-maroc/' },
};

export default function GuideSalaires() {
  const articleSchema = buildArticleSchema({
    title: 'Guide Complet des Salaires de la Fonction Publique au Maroc',
    description: 'Tout savoir sur les salaires dans la fonction publique marocaine.',
    url: `${siteConfig.url}/guides/salaires-fonction-publique-maroc/`,
    datePublished: '2025-02-01',
    dateModified: '2026-02-01',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Guides', url: `${siteConfig.url}/guides/reussir-concours-public/` },
    { name: 'Guide des salaires', url: `${siteConfig.url}/guides/salaires-fonction-publique-maroc/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-primary-200 mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Guide</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Guide Complet des Salaires de la Fonction Publique au Maroc
          </h1>
          <p className="text-primary-100">Par {siteConfig.author.name} ({siteConfig.author.title}) — Février 2026</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 prose prose-gray max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Le salaire est l&apos;un des critères les plus importants pour les candidats à la fonction publique marocaine. Comprendre le système de rémunération, les échelles, les primes et les perspectives d&apos;évolution salariale est essentiel pour faire des choix de carrière éclairés. Ce guide détaillé vous explique tout ce que vous devez savoir sur les salaires des fonctionnaires au Maroc.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Le système de rémunération</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La rémunération des fonctionnaires marocains est composée de plusieurs éléments : le traitement de base (déterminé par l&apos;indice et l&apos;échelle), les indemnités et primes, et les allocations familiales. Le traitement de base est calculé en multipliant la valeur du point indiciaire par l&apos;indice du fonctionnaire. Cet indice est déterminé par l&apos;échelle, le grade et l&apos;échelon du fonctionnaire.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les échelles de rémunération en détail</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Échelles 1 à 6 : Personnel d&apos;exécution</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les échelles 1 à 6 correspondent au personnel d&apos;exécution de la fonction publique. Les postes concernés incluent les agents de nettoyage, gardiens, agents de bureau, adjoints administratifs et secrétaires. Le niveau de diplôme requis va de &quot;sans diplôme&quot; pour l&apos;échelle 1 au baccalauréat pour l&apos;échelle 6. Les salaires nets dans cette tranche vont de 2 700 DH (échelle 1, échelon 1) à environ 4 572 DH (échelle 6, échelon 5). Ces postes offrent une stabilité d&apos;emploi mais des perspectives d&apos;évolution limitées sans concours interne.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Échelles 7 à 9 : Personnel de maîtrise</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les échelles 7 à 9 regroupent le personnel de maîtrise : rédacteurs, techniciens, infirmiers, professeurs du primaire et administrateurs adjoints. Le niveau requis va du baccalauréat (échelle 7) à la licence Bac+3 (échelle 9). Les salaires nets vont de 4 050 DH (échelle 7, échelon 1) à environ 6 300 DH (échelle 9, échelon 5). C&apos;est une tranche intermédiaire qui offre de bonnes perspectives d&apos;évolution vers les échelles supérieures par concours interne ou examen professionnel.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Échelle 10 : Cadres</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;échelle 10 est celle des cadres de la fonction publique : administrateurs, professeurs du secondaire, ingénieurs d&apos;État, médecins généralistes. Le niveau requis est généralement un Bac+4 ou Bac+5 (master, diplôme d&apos;ingénieur). Le salaire net de départ est d&apos;environ 6 300 DH et peut atteindre 8 280 DH à l&apos;échelon maximum. Avec les primes et indemnités, la rémunération totale peut dépasser 10 000 DH pour les échelons élevés.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Échelle 11 : Cadres supérieurs</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;échelle 11 regroupe les cadres supérieurs : administrateurs principaux, professeurs de l&apos;enseignement supérieur, inspecteurs, médecins spécialistes. Le niveau requis est un Bac+5 minimum (master, doctorat, grandes écoles). Le salaire net débute à environ 7 650 DH et peut atteindre 9 900 DH à l&apos;échelon maximum. Avec les primes, la rémunération peut largement dépasser 12 000 DH.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Hors échelle : Hauts fonctionnaires</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          La catégorie hors échelle concerne les postes de direction et de haute responsabilité : directeurs centraux, secrétaires généraux, walis, gouverneurs, ambassadeurs, présidents d&apos;universités. Le salaire net démarre à environ 10 800 DH et peut atteindre 18 000 DH ou plus. Ces postes s&apos;accompagnent souvent d&apos;avantages supplémentaires : logement de fonction, voiture de service, indemnités de représentation.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les primes et indemnités</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Au-delà du traitement de base, les fonctionnaires perçoivent plusieurs primes et indemnités qui peuvent représenter une part significative de la rémunération totale :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Indemnité de résidence</strong> : variable selon la ville d&apos;affectation (10% à 25% du traitement de base)</li>
          <li><strong>Indemnité de fonction</strong> : liée au poste occupé et aux responsabilités</li>
          <li><strong>Allocations familiales</strong> : 300 DH par enfant pour les 3 premiers, 36 DH au-delà</li>
          <li><strong>Prime d&apos;ancienneté</strong> : 5% du traitement de base tous les 2 ans (plafonnée à 25%)</li>
          <li><strong>Indemnité d&apos;encadrement</strong> : pour les postes de responsabilité</li>
          <li><strong>Indemnités spécifiques</strong> : enseignement, risque, astreinte, selon le corps</li>
          <li><strong>13ème mois</strong> : certains établissements publics accordent un 13ème mois</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les retenues sur salaire</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le salaire brut est soumis à plusieurs retenues obligatoires qui réduisent le montant net perçu :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>CMR (Caisse Marocaine des Retraites)</strong> : environ 10% du traitement de base pour la retraite</li>
          <li><strong>AMO (Assurance Maladie Obligatoire)</strong> : environ 2,5% du salaire brut</li>
          <li><strong>Impôt sur le Revenu (IR)</strong> : progressif selon les tranches de revenus (0% à 38%)</li>
          <li><strong>Cotisation mutuelle</strong> : variable selon la mutuelle choisie</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          En pratique, le salaire net représente généralement entre 85% et 90% du salaire brut, selon la situation familiale et le nombre de personnes à charge. Les personnes mariées et les parents bénéficient de déductions fiscales qui augmentent leur salaire net.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">L&apos;évolution de carrière et de salaire</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La carrière d&apos;un fonctionnaire marocain évolue à travers deux mécanismes principaux :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>L&apos;avancement d&apos;échelon</strong> : automatique à l&apos;ancienneté (tous les 2 à 4 ans selon le rythme) ou au choix (mérite). Chaque échelon supérieur correspond à un indice plus élevé et donc un salaire plus important.</li>
          <li><strong>L&apos;avancement de grade</strong> : par concours interne ou examen professionnel. Il permet de passer d&apos;une échelle à une échelle supérieure, avec un saut de rémunération significatif.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un fonctionnaire motivé et performant peut ainsi voir son salaire doubler ou tripler au cours de sa carrière, en combinant les avancements d&apos;échelons et les promotions de grade. Les concours internes et examens professionnels sont des opportunités régulières de progression.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Comparaison avec le secteur privé</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Par rapport au secteur privé, les salaires de la fonction publique au Maroc sont généralement compétitifs pour les niveaux d&apos;entrée et intermédiaires. Pour les postes de direction, le secteur privé offre souvent des rémunérations supérieures. Cependant, la fonction publique compense par d&apos;autres avantages : sécurité de l&apos;emploi garantie, retraite généreuse (CMR), couverture médicale complète (AMO), congés payés généreux (30 jours/an), et un équilibre vie professionnelle / vie personnelle souvent meilleur. Ces avantages non salariaux représentent une valeur significative qui doit être prise en compte dans la comparaison.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les salaires de la fonction publique marocaine, bien que parfois perçus comme modestes, offrent une rémunération globale attractive lorsqu&apos;on prend en compte l&apos;ensemble des avantages : primes, sécurité d&apos;emploi, retraite, couverture médicale et qualité de vie. La progression de carrière permet une augmentation régulière des revenus, et les postes de responsabilité offrent des rémunérations très confortables. Pour une vue détaillée des salaires par échelle et échelon, consultez notre <Link href="/salaires-fonction-publique/" className="text-primary-600 hover:text-primary-700">grille des salaires</Link>.
        </p>

        <div className="mt-10 p-6 bg-primary-50 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-2">Ressources utiles</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/salaires-fonction-publique/" className="btn-primary text-sm">Grille des salaires</Link>
            <Link href="/concours/" className="btn-secondary text-sm">Concours ouverts</Link>
            <Link href="/generateur-cv/" className="btn-secondary text-sm">Créer mon CV</Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8 italic">
          Par {siteConfig.author.name} ({siteConfig.author.title}) — Publié le 1er février 2026
        </p>
      </article>
    </>
  );
}
