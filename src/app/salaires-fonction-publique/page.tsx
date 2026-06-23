import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';
import GrilleSalaires from '@/components/salaires/GrilleSalaires';

export const metadata: Metadata = {
  title: 'Salaires Fonction Publique Maroc : Grille 2026',
  description: 'Grille des salaires de la fonction publique au Maroc 2026. Salaires par échelle, grade et échelon. De 3 000 DH à 20 000 DH.',
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
            Consultez les salaires bruts et nets estimés par échelle, grade et échelon. Grille mise à jour pour 2026.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <GrilleSalaires />

        {/* Explanation */}
        <section className="mt-16">
          <article className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comprendre les salaires de la fonction publique marocaine</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Le système des échelles</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              La rémunération dans la fonction publique marocaine est organisée en échelles de traitement, allant de l&apos;échelle 1 à l&apos;échelle 11, avec une catégorie hors échelle pour les hauts fonctionnaires. Chaque échelle correspond à un niveau de diplôme et de responsabilité : les échelles 1 à 6 concernent le personnel d&apos;exécution, les échelles 7 à 9 le personnel de maîtrise, l&apos;échelle 10 les cadres, et l&apos;échelle 11 les cadres supérieurs.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Les grades et échelons</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Au sein de chaque échelle, le fonctionnaire progresse à travers des échelons. Cette progression se fait à l&apos;ancienneté (avancement automatique) ou au choix (avancement au mérite). Chaque échelon correspond à un indice de traitement qui détermine le salaire de base. L&apos;avancement d&apos;échelon se fait généralement tous les 2 à 4 ans, selon le rythme d&apos;avancement (rapide, moyen ou lent).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Les primes et indemnités</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              En plus du salaire de base, les fonctionnaires marocains perçoivent différentes primes et indemnités : indemnité de résidence (variable selon la ville d&apos;affectation), indemnité de fonction, allocations familiales (300 DH par enfant pour les 3 premiers, 36 DH pour les suivants), prime d&apos;ancienneté, et parfois des indemnités spécifiques au corps d&apos;appartenance (indemnité d&apos;enseignement, indemnité de risque, etc.).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Les retenues obligatoires</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le salaire brut est soumis à plusieurs retenues obligatoires : la cotisation à la Caisse Marocaine des Retraites (CMR) ou au RCAR, la cotisation à l&apos;Assurance Maladie Obligatoire (AMO), l&apos;Impôt sur le Revenu (IR) et la Mutuelle. Le salaire net représente généralement entre 85% et 90% du salaire brut, selon la situation familiale et le nombre de personnes à charge.
            </p>

            <p className="text-sm text-gray-500 mt-8 italic">
              Grille indicative. Par {siteConfig.author.name} ({siteConfig.author.title}) — Mise à jour : 2026
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
