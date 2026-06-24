import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Culture Générale Concours Fonction Publique Maroc 2026',
  description: 'Guide de révision en culture générale pour les concours de la fonction publique marocaine : institutions, géographie, histoire et actualité nationale.',
  alternates: { canonical: '/guides/culture-generale-concours/' },
};

const faqs = [
  {
    question: 'Quels sont les thèmes de culture générale les plus fréquents au concours ?',
    answer: 'Les thèmes les plus fréquents sont : les institutions marocaines (Constitution, Parlement, gouvernement), la géographie du Maroc (régions, villes principales, ressources naturelles), l\'histoire du Maroc moderne (indépendance, réformes), l\'actualité nationale et internationale, les organisations internationales dont le Maroc est membre, et les grandes dates et événements marquants du Royaume.',
  },
  {
    question: 'Combien de temps consacrer à la culture générale dans sa préparation ?',
    answer: 'La culture générale doit représenter environ 30% de votre temps de préparation, soit environ 1 heure par jour sur 3 mois. Lisez la presse quotidienne (Le Matin, L\'Économiste, Médias24), suivez les journaux télévisés et révisez régulièrement vos fiches thématiques. La culture générale se construit dans la durée et ne peut pas être révisée à la dernière minute.',
  },
  {
    question: 'Faut-il connaître l\'actualité internationale pour le concours ?',
    answer: 'Oui, certains QCM incluent des questions d\'actualité internationale. Concentrez-vous sur les sujets qui concernent le Maroc : relations avec l\'Union Européenne, coopération africaine, position du Maroc dans les organisations internationales (ONU, UA, Ligue Arabe), accords commerciaux et événements sportifs majeurs organisés au Maroc.',
  },
  {
    question: 'Comment mémoriser efficacement les données de culture générale ?',
    answer: 'Utilisez des techniques de mémorisation active : créez des fiches synthétiques, utilisez des cartes mentales (mind maps), testez-vous régulièrement avec des QCM, et associez les informations à des images ou des histoires. La répétition espacée (revoir les fiches à intervalles croissants) est la méthode la plus efficace pour la mémoire à long terme.',
  },
  {
    question: 'Les questions de culture générale sont-elles éliminatoires ?',
    answer: 'Non, il n\'y a généralement pas de note éliminatoire pour la culture générale seule. Cependant, les questions de culture générale représentent souvent 30 à 50% du QCM total, ce qui en fait une part significative de la note finale. Un candidat qui néglige la culture générale se prive de points facilement accessibles avec une bonne préparation.',
  },
];

export default function GuideCultureGenerale() {
  const articleSchema = buildArticleSchema({
    title: 'Culture Générale : Guide de Révision pour les Concours de la Fonction Publique',
    description: 'Tout réviser en culture générale pour les concours publics au Maroc.',
    url: `${siteConfig.url}/guides/culture-generale-concours/`,
    datePublished: '2026-02-01',
    dateModified: '2026-06-01',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Guides', url: `${siteConfig.url}/guides/` },
    { name: 'Culture générale', url: `${siteConfig.url}/guides/culture-generale-concours/` },
  ]);
  const faqSchema = buildFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="text-sm text-primary-200 mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/guides/" className="hover:text-white">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Culture générale</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Culture Générale : Révisions pour les Concours de la Fonction Publique
          </h1>
          <p className="text-primary-100">Par {siteConfig.author.name} ({siteConfig.author.title}), 2026</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 prose prose-gray max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          La culture générale est une composante incontournable de tous les concours de la fonction publique au Maroc. Qu&apos;il s&apos;agisse d&apos;un concours d&apos;enseignant, d&apos;administrateur, de technicien ou d&apos;infirmier, le QCM comprend toujours une section dédiée à la culture générale. Ce guide vous propose un programme de révision structuré couvrant tous les thèmes récurrents.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Les institutions du Maroc</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La connaissance des institutions est fondamentale. Révisez les attributions du Roi (commandeur des croyants, chef de l&apos;État, garant de l&apos;indépendance), le rôle du Chef du Gouvernement (nommé par le Roi au sein du parti arrivé en tête des élections), la composition et les pouvoirs du Parlement bicaméral (Chambre des Représentants et Chambre des Conseillers), le pouvoir judiciaire indépendant, le Conseil Supérieur du Pouvoir Judiciaire, la Cour Constitutionnelle, la Cour des Comptes et les institutions de gouvernance prévues par la Constitution de 2011.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. La géographie du Maroc</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Maîtrisez les données géographiques essentielles du Royaume : les 12 régions et leurs capitales, les grandes villes et leur population, les chaînes de montagnes (Rif, Atlas), les cours d&apos;eau principaux (Oum Er-Rbia, Sebou, Moulouya), les plaines agricoles (Gharb, Chaouia, Doukkala), les ports majeurs (Tanger Med, Casablanca, Jorf Lasfar), les ressources naturelles (phosphates, agriculture, pêche) et les données climatiques. Le Maroc est le premier exportateur mondial de phosphates et son agriculture représente environ 12% du PIB.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. L&apos;histoire du Maroc moderne</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les questions d&apos;histoire portent généralement sur le Maroc contemporain. Connaissez les grandes dates : l&apos;indépendance (1956), le règne de Mohammed V puis de Hassan II, la Marche Verte (1975), l&apos;Instance Équité et Réconciliation (2004), l&apos;accession au trône de Mohammed VI (1999), les réformes constitutionnelles (2011), et les grands projets de développement (Plan Maroc Vert, INDH, Nouveau Modèle de Développement). Les événements sportifs majeurs (Coupe du Monde 2030) et culturels sont également des sujets fréquents.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. L&apos;économie marocaine</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Connaissez les indicateurs économiques clés : PIB (environ 140 milliards de dollars), taux de croissance, principaux secteurs économiques (agriculture, industrie, tourisme, services), principaux partenaires commerciaux (Union Européenne, États-Unis, Chine), zones franches et zones industrielles, stratégies sectorielles (Plan d&apos;Accélération Industrielle, Vision 2020 Tourisme) et les grands projets d&apos;infrastructure (LGV, port Tanger Med, Noor Ouarzazate). La politique monétaire de Bank Al-Maghrib et le système bancaire marocain sont aussi des sujets récurrents.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Le Maroc dans le monde</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le Maroc est membre de nombreuses organisations internationales : ONU, Union Africaine (retour en 2017), Ligue des États Arabes, Organisation de la Coopération Islamique, et statut avancé avec l&apos;Union Européenne. Connaissez les accords de libre-échange signés par le Maroc, sa politique africaine (investissements, coopération Sud-Sud) et sa position sur les grandes questions internationales. Le rôle du Maroc dans la lutte contre le terrorisme, les migrations et le changement climatique (COP22 à Marrakech en 2016) sont des thèmes importants.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Sciences, technologie et société</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les concours incluent parfois des questions sur les sciences et la technologie : les grandes découvertes scientifiques, les enjeux du numérique et de l&apos;intelligence artificielle, les questions environnementales (changement climatique, développement durable, énergies renouvelables), les enjeux de santé publique (pandémies, couverture médicale universelle) et les grandes questions de société (égalité des genres, jeunesse, éducation). Suivez l&apos;actualité scientifique et technologique du Maroc : stratégie numérique, projets d&apos;énergies renouvelables, universités et recherche.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Programme de révision en 8 semaines</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Semaine 1-2</strong> : Institutions et Constitution de 2011</li>
          <li><strong>Semaine 3</strong> : Géographie du Maroc et régionalisation</li>
          <li><strong>Semaine 4</strong> : Histoire contemporaine et grands événements</li>
          <li><strong>Semaine 5</strong> : Économie marocaine et indicateurs clés</li>
          <li><strong>Semaine 6</strong> : Relations internationales et organisations</li>
          <li><strong>Semaine 7</strong> : Sciences, technologie et enjeux de société</li>
          <li><strong>Semaine 8</strong> : Révisions générales et QCM d&apos;entraînement intensif</li>
        </ul>

        {/* FAQs */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Questions fréquentes</h2>
        <div className="space-y-4 not-prose">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-gray-200 rounded-lg">
              <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 hover:text-primary-600 transition-colors list-none flex items-center justify-between">
                {faq.question}
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</div>
            </details>
          ))}
        </div>

        <div className="mt-10 p-6 bg-primary-50 rounded-xl not-prose">
          <h3 className="font-bold text-gray-900 mb-2">Poursuivez votre préparation</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/guides/qcm-droit-administratif/" className="btn-secondary text-sm">QCM Droit administratif</Link>
            <Link href="/guides/epreuve-ecrite-concours/" className="btn-secondary text-sm">Épreuve écrite</Link>
            <Link href="/guides/reussir-concours-public/" className="btn-secondary text-sm">Guide complet</Link>
            <Link href="/concours/" className="btn-primary text-sm">Concours ouverts</Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8 italic">
          Par {siteConfig.author.name} ({siteConfig.author.title}), 2026
        </p>
      </article>
    </>
  );
}
