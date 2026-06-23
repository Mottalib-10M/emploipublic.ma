import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Salaires Fonction Publique Maroc : Guide Complet',
  description: 'Guide complet des salaires de la fonction publique au Maroc. Echelles, grades, primes, indemnites et evolution de carriere detailles.',
  alternates: { canonical: '/guides/salaires-fonction-publique-maroc/' },
};

export default function GuideSalaires() {
  const articleSchema = buildArticleSchema({
    title: 'Guide Complet des Salaires de la Fonction Publique au Maroc',
    description: 'Tout savoir sur les salaires dans la fonction publique marocaine.',
    url: `${siteConfig.url}/guides/salaires-fonction-publique-maroc/`,
    datePublished: '2025-02-01',
    dateModified: '2025-02-01',
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
          <p className="text-primary-100">Par {siteConfig.author.name} ({siteConfig.author.title}) — Fevrier 2025</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 prose prose-gray max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Le salaire est l&apos;un des criteres les plus importants pour les candidats a la fonction publique marocaine. Comprendre le systeme de remuneration, les echelles, les primes et les perspectives d&apos;evolution salariale est essentiel pour faire des choix de carriere eclaires. Ce guide detaille vous explique tout ce que vous devez savoir sur les salaires des fonctionnaires au Maroc.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Le systeme de remuneration</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La remuneration des fonctionnaires marocains est composee de plusieurs elements : le traitement de base (determine par l&apos;indice et l&apos;echelle), les indemnites et primes, et les allocations familiales. Le traitement de base est calcule en multipliant la valeur du point indiciaire par l&apos;indice du fonctionnaire. Cet indice est determine par l&apos;echelle, le grade et l&apos;echelon du fonctionnaire.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les echelles de remuneration en detail</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Echelles 1 a 6 : Personnel d&apos;execution</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les echelles 1 a 6 correspondent au personnel d&apos;execution de la fonction publique. Les postes concernes incluent les agents de nettoyage, gardiens, agents de bureau, adjoints administratifs et secretaires. Le niveau de diplome requis va de &quot;sans diplome&quot; pour l&apos;echelle 1 au baccalaureat pour l&apos;echelle 6. Les salaires nets dans cette tranche vont de 2 700 DH (echelle 1, echelon 1) a environ 4 572 DH (echelle 6, echelon 5). Ces postes offrent une stabilite d&apos;emploi mais des perspectives d&apos;evolution limitees sans concours interne.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Echelles 7 a 9 : Personnel de maitrise</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les echelles 7 a 9 regroupent le personnel de maitrise : redacteurs, techniciens, infirmiers, professeurs du primaire et administrateurs adjoints. Le niveau requis va du baccalaureat (echelle 7) a la licence Bac+3 (echelle 9). Les salaires nets vont de 4 050 DH (echelle 7, echelon 1) a environ 6 300 DH (echelle 9, echelon 5). C&apos;est une tranche intermediaire qui offre de bonnes perspectives d&apos;evolution vers les echelles superieures par concours interne ou examen professionnel.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Echelle 10 : Cadres</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;echelle 10 est celle des cadres de la fonction publique : administrateurs, professeurs du secondaire, ingenieurs d&apos;Etat, medecins generalistes. Le niveau requis est generalement un Bac+4 ou Bac+5 (master, diplome d&apos;ingenieur). Le salaire net de depart est d&apos;environ 6 300 DH et peut atteindre 8 280 DH a l&apos;echelon maximum. Avec les primes et indemnites, la remuneration totale peut depasser 10 000 DH pour les echelons eleves.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Echelle 11 : Cadres superieurs</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;echelle 11 regroupe les cadres superieurs : administrateurs principaux, professeurs de l&apos;enseignement superieur, inspecteurs, medecins specialistes. Le niveau requis est un Bac+5 minimum (master, doctorat, grandes ecoles). Le salaire net debute a environ 7 650 DH et peut atteindre 9 900 DH a l&apos;echelon maximum. Avec les primes, la remuneration peut largement depasser 12 000 DH.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Hors echelle : Hauts fonctionnaires</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          La categorie hors echelle concerne les postes de direction et de haute responsabilite : directeurs centraux, secretaires generaux, walis, gouverneurs, ambassadeurs, presidents d&apos;universites. Le salaire net demarre a environ 10 800 DH et peut atteindre 18 000 DH ou plus. Ces postes s&apos;accompagnent souvent d&apos;avantages supplementaires : logement de fonction, voiture de service, indemnites de representation.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les primes et indemnites</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Au-dela du traitement de base, les fonctionnaires percoivent plusieurs primes et indemnites qui peuvent representer une part significative de la remuneration totale :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Indemnite de residence</strong> : variable selon la ville d&apos;affectation (10% a 25% du traitement de base)</li>
          <li><strong>Indemnite de fonction</strong> : liee au poste occupe et aux responsabilites</li>
          <li><strong>Allocations familiales</strong> : 300 DH par enfant pour les 3 premiers, 36 DH au-dela</li>
          <li><strong>Prime d&apos;anciennete</strong> : 5% du traitement de base tous les 2 ans (plafonee a 25%)</li>
          <li><strong>Indemnite d&apos;encadrement</strong> : pour les postes de responsabilite</li>
          <li><strong>Indemnites specifiques</strong> : enseignement, risque, astreinte, selon le corps</li>
          <li><strong>13eme mois</strong> : certains etablissements publics accordent un 13eme mois</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les retenues sur salaire</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le salaire brut est soumis a plusieurs retenues obligatoires qui reduisent le montant net percu :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>CMR (Caisse Marocaine des Retraites)</strong> : environ 10% du traitement de base pour la retraite</li>
          <li><strong>AMO (Assurance Maladie Obligatoire)</strong> : environ 2,5% du salaire brut</li>
          <li><strong>Impot sur le Revenu (IR)</strong> : progressif selon les tranches de revenus (0% a 38%)</li>
          <li><strong>Cotisation mutuelle</strong> : variable selon la mutuelle choisie</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          En pratique, le salaire net represente generalement entre 85% et 90% du salaire brut, selon la situation familiale et le nombre de personnes a charge. Les personnes mariees et les parents beneficient de deductions fiscales qui augmentent leur salaire net.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">L&apos;evolution de carriere et de salaire</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La carriere d&apos;un fonctionnaire marocain evolue a travers deux mecanismes principaux :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>L&apos;avancement d&apos;echelon</strong> : automatique a l&apos;anciennete (tous les 2 a 4 ans selon le rythme) ou au choix (merite). Chaque echelon superieur correspond a un indice plus eleve et donc un salaire plus important.</li>
          <li><strong>L&apos;avancement de grade</strong> : par concours interne ou examen professionnel. Il permet de passer d&apos;une echelle a une echelle superieure, avec un saut de remuneration significatif.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un fonctionnaire motive et performant peut ainsi voir son salaire doubler ou tripler au cours de sa carriere, en combinant les avancements d&apos;echelons et les promotions de grade. Les concours internes et examens professionnels sont des opportunites regulieres de progression.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Comparaison avec le secteur prive</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Par rapport au secteur prive, les salaires de la fonction publique au Maroc sont generalement competitifs pour les niveaux d&apos;entree et intermediaires. Pour les postes de direction, le secteur prive offre souvent des remunerations superieures. Cependant, la fonction publique compense par d&apos;autres avantages : securite de l&apos;emploi garantie, retraite genereuse (CMR), couverture medicale complete (AMO), conges payes genereux (30 jours/an), et un equilibre vie professionnelle / vie personnelle souvent meilleur. Ces avantages non salariaux representent une valeur significative qui doit etre prise en compte dans la comparaison.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les salaires de la fonction publique marocaine, bien que parfois percus comme modestes, offrent une remuneration globale attractive lorsqu&apos;on prend en compte l&apos;ensemble des avantages : primes, securite d&apos;emploi, retraite, couverture medicale et qualite de vie. La progression de carriere permet une augmentation reguliere des revenus, et les postes de responsabilite offrent des remunerations tres confortables. Pour une vue detaillee des salaires par echelle et echelon, consultez notre <Link href="/salaires-fonction-publique/" className="text-primary-600 hover:text-primary-700">grille des salaires</Link>.
        </p>

        <div className="mt-10 p-6 bg-primary-50 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-2">Ressources utiles</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/salaires-fonction-publique/" className="btn-primary text-sm">Grille des salaires</Link>
            <Link href="/concours/" className="btn-secondary text-sm">Concours ouverts</Link>
            <Link href="/generateur-cv/" className="btn-secondary text-sm">Creer mon CV</Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8 italic">
          Par {siteConfig.author.name} ({siteConfig.author.title}) — Publie le 1er fevrier 2025
        </p>
      </article>
    </>
  );
}
