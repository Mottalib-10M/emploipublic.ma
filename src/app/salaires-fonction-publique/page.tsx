import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo';
import GrilleSalaires from '@/components/salaires/GrilleSalaires';

export const metadata: Metadata = {
  title: 'Salaires Fonction Publique Maroc 2026 : Grille par Échelle',
  description: 'Grille complète des salaires de la fonction publique au Maroc 2026. Salaires nets et bruts par échelle, grade et échelon, de 3 000 DH à plus de 20 000 DH.',
  alternates: { canonical: '/salaires-fonction-publique/' },
};

const salairesFaqs = [
  {
    question: 'Quel est le salaire de départ d\'un fonctionnaire échelle 10 au Maroc ?',
    answer: 'Un fonctionnaire recruté à l\'échelle 10 (cadre, titulaire d\'un master ou diplôme d\'ingénieur) débute avec un salaire net d\'environ 6 300 DH par mois. Ce montant inclut le traitement de base, l\'indemnité de résidence et les indemnités complémentaires. Le salaire progresse avec l\'ancienneté et les avancements d\'échelon, pouvant atteindre 10 000 DH net en fin de carrière.',
  },
  {
    question: 'Comment sont calculés les salaires de la fonction publique marocaine ?',
    answer: 'Le salaire d\'un fonctionnaire marocain est calculé à partir de l\'indice de traitement (déterminé par l\'échelle et l\'échelon) multiplié par la valeur du point indiciaire. À ce traitement de base s\'ajoutent l\'indemnité de résidence (variable selon la ville), les allocations familiales (300 DH par enfant pour les 3 premiers), la prime d\'ancienneté et les indemnités spécifiques au corps. Les retenues obligatoires (CMR, AMO, IR, mutuelle) représentent environ 10 à 15 % du brut.',
  },
  {
    question: 'Quelle est la différence de salaire entre les échelles 9, 10 et 11 ?',
    answer: 'L\'échelle 9 (licence Bac+3) offre un salaire net de départ d\'environ 5 200 DH. L\'échelle 10 (master Bac+5) démarre à environ 6 300 DH net. L\'échelle 11 (cadre supérieur) commence à environ 7 650 DH net. L\'écart se creuse avec l\'ancienneté : en fin de carrière, un fonctionnaire échelle 11 peut percevoir plus de 15 000 DH net grâce aux primes et avancements successifs.',
  },
  {
    question: 'Les fonctionnaires marocains reçoivent-ils un 13e mois ou des primes ?',
    answer: 'Il n\'existe pas de 13e mois dans la fonction publique marocaine. Cependant, les fonctionnaires perçoivent diverses primes et indemnités qui complètent le salaire de base : indemnité de résidence, indemnité de fonction, indemnité de technicité, prime de rendement, et parfois des primes spécifiques au corps (indemnité d\'enseignement, de risque, de permanence, etc.). Ces primes peuvent représenter 20 à 40 % du salaire total.',
  },
  {
    question: 'Comment évolue le salaire d\'un fonctionnaire au cours de sa carrière ?',
    answer: 'Le salaire évolue principalement par l\'avancement d\'échelon (tous les 2 à 4 ans selon le rythme rapide, moyen ou lent) et par la promotion de grade ou d\'échelle. Un fonctionnaire échelle 10 peut être promu échelle 11 par concours interne ou examen professionnel. La prime d\'ancienneté augmente aussi progressivement : 5 % après 2 ans, 10 % après 5 ans, jusqu\'à 25 % après 25 ans de service. En moyenne, le salaire double entre le début et la fin de carrière.',
  },
];

export default function SalairesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Salaires Fonction Publique', url: `${siteConfig.url}/salaires-fonction-publique/` },
  ]);
  const faqSchema = buildFAQSchema(salairesFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
        <nav aria-label="Fil d'Ariane" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Salaires Fonction Publique</span>
        </nav>
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
              Grille indicative. Par {siteConfig.author.name} ({siteConfig.author.title}), mise à jour : 2026
            </p>
          </article>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="section-title">Questions fréquentes sur les salaires</h2>
          <div className="space-y-4 mt-8 max-w-3xl">
            {salairesFaqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-lg">
                <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 hover:text-primary-600 transition-colors list-none flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
