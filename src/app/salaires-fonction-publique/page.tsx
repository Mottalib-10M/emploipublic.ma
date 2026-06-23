import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';
import GrilleSalaires from '@/components/salaires/GrilleSalaires';

export const metadata: Metadata = {
  title: 'Salaires Fonction Publique Maroc : Grille 2025',
  description: 'Grille des salaires de la fonction publique au Maroc 2025. Salaires par echelle, grade et echelon. De 3 000 DH a 20 000 DH.',
  alternates: { canonical: '/salaires-fonction-publique/' },
};

export default function SalairesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Salaires Fonction Publique', url: `${siteConfig.url}/salaires-fonction-publique/` },
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
            Grille des Salaires de la Fonction Publique au Maroc
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Consultez les salaires bruts et nets estimes par echelle, grade et echelon. Grille mise a jour pour 2025.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <GrilleSalaires />

        {/* Explanation */}
        <section className="mt-16">
          <article className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comprendre les salaires de la fonction publique marocaine</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Le systeme des echelles</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              La remuneration dans la fonction publique marocaine est organisee en echelles de traitement, allant de l&apos;echelle 1 a l&apos;echelle 11, avec une categorie hors echelle pour les hauts fonctionnaires. Chaque echelle correspond a un niveau de diplome et de responsabilite : les echelles 1 a 6 concernent le personnel d&apos;execution, les echelles 7 a 9 le personnel de maitrise, l&apos;echelle 10 les cadres, et l&apos;echelle 11 les cadres superieurs.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Les grades et echelons</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Au sein de chaque echelle, le fonctionnaire progresse a travers des echelons. Cette progression se fait a l&apos;anciennete (avancement automatique) ou au choix (avancement au merite). Chaque echelon correspond a un indice de traitement qui determine le salaire de base. L&apos;avancement d&apos;echelon se fait generalement tous les 2 a 4 ans, selon le rythme d&apos;avancement (rapide, moyen ou lent).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Les primes et indemnites</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              En plus du salaire de base, les fonctionnaires marocains percoivent differentes primes et indemnites : indemnite de residence (variable selon la ville d&apos;affectation), indemnite de fonction, allocations familiales (300 DH par enfant pour les 3 premiers, 36 DH pour les suivants), prime d&apos;anciennete, et parfois des indemnites specifiques au corps d&apos;appartenance (indemnite d&apos;enseignement, indemnite de risque, etc.).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Les retenues obligatoires</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le salaire brut est soumis a plusieurs retenues obligatoires : la cotisation a la Caisse Marocaine des Retraites (CMR) ou au RCAR, la cotisation a l&apos;Assurance Maladie Obligatoire (AMO), l&apos;Impot sur le Revenu (IR) et la Mutuelle. Le salaire net represente generalement entre 85% et 90% du salaire brut, selon la situation familiale et le nombre de personnes a charge.
            </p>

            <p className="text-sm text-gray-500 mt-8 italic">
              Grille indicative. Par {siteConfig.author.name} ({siteConfig.author.title}) — Mise a jour : 2025
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
