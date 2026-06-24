import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'QCM Droit Administratif Concours Fonction Publique Maroc',
  description: 'Préparez le QCM de droit administratif du concours de la fonction publique au Maroc : thèmes clés, méthode de révision et conseils pour réussir.',
  alternates: { canonical: '/guides/qcm-droit-administratif/' },
};

const faqs = [
  {
    question: 'Quels sont les thèmes principaux du QCM de droit administratif au concours ?',
    answer: 'Les thèmes principaux sont : l\'organisation administrative du Maroc (administration centrale et territoriale), le statut général de la fonction publique, les actes administratifs unilatéraux, les contrats administratifs et marchés publics, le contentieux administratif, les libertés publiques et les collectivités territoriales. La Constitution de 2011 et la régionalisation avancée sont systématiquement abordées.',
  },
  {
    question: 'Combien de questions de droit administratif y a-t-il dans le QCM ?',
    answer: 'Le nombre varie selon le concours, mais généralement le QCM comprend entre 15 et 30 questions de droit administratif sur un total de 40 à 60 questions. Pour les concours juridiques (administrateur, greffier), cette proportion peut être plus élevée. Les questions portent sur la connaissance des textes de loi et leur application.',
  },
  {
    question: 'Quels ouvrages consulter pour préparer le QCM de droit administratif ?',
    answer: 'Les ouvrages recommandés sont : le manuel de droit administratif marocain de Mohammed Amine Benabdallah, le précis de droit de la fonction publique de Ahmed Bouachik, et la Constitution annotée du Maroc. Consultez également les textes officiels sur le site du SGG (Secrétariat Général du Gouvernement) et les annales des concours précédents si disponibles.',
  },
  {
    question: 'Les questions sont-elles pièges dans le QCM de droit administratif ?',
    answer: 'Certaines questions peuvent être formulées de manière subtile, avec des réponses très proches ou des doubles négations. Les pièges courants incluent les dates de promulgation des lois, les articles précis de la Constitution, les exceptions aux règles générales et les nuances entre concepts proches (décentralisation vs déconcentration, par exemple). Lisez chaque question attentivement.',
  },
  {
    question: 'Comment gérer le temps pendant l\'épreuve de QCM ?',
    answer: 'Comptez en moyenne 1 à 1,5 minute par question. Commencez par répondre aux questions dont vous êtes certain, puis revenez aux questions difficiles. Ne restez jamais bloqué plus de 2 minutes sur une question. Si vous hésitez entre deux réponses, faites confiance à votre première intuition. Gardez 5 minutes à la fin pour vérifier vos réponses.',
  },
];

export default function GuideQCMDroit() {
  const articleSchema = buildArticleSchema({
    title: 'QCM Droit Administratif : Réussir le Concours de la Fonction Publique',
    description: 'Guide de préparation au QCM de droit administratif pour les concours publics.',
    url: `${siteConfig.url}/guides/qcm-droit-administratif/`,
    datePublished: '2026-01-10',
    dateModified: '2026-06-10',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Guides', url: `${siteConfig.url}/guides/` },
    { name: 'QCM Droit administratif', url: `${siteConfig.url}/guides/qcm-droit-administratif/` },
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
            <span className="text-white">QCM Droit administratif</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            QCM Droit Administratif : Réussir le Concours de la Fonction Publique
          </h1>
          <p className="text-primary-100">Par {siteConfig.author.name} ({siteConfig.author.title}), 2026</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 prose prose-gray max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Le droit administratif est l&apos;une des matières les plus importantes et les plus redoutées des concours de la fonction publique au Maroc. Présent dans quasiment tous les QCM, il teste votre connaissance de l&apos;organisation administrative du Royaume, du statut de la fonction publique et des principes fondamentaux du droit public. Ce guide vous donne les clés pour maîtriser cette matière et maximiser vos points.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les grands thèmes à maîtriser</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">1. La Constitution de 2011</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          La Constitution du Royaume du Maroc adoptée par référendum le 1er juillet 2011 est le texte fondamental que tout candidat doit connaître. Concentrez-vous sur les dispositions relatives à l&apos;organisation des pouvoirs (Roi, Parlement, Gouvernement, pouvoir judiciaire), les droits fondamentaux (Titre II), les institutions de gouvernance (Conseil Économique, Social et Environnemental, Cour Constitutionnelle), et la régionalisation avancée (Titre IX). Mémorisez les articles clés : Article 1 (nature de l&apos;État), Article 19 (égalité homme-femme), Article 27 (droit d&apos;accès à l&apos;information), Article 154 (service public).
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">2. L&apos;organisation administrative</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Vous devez comprendre parfaitement la distinction entre centralisation et décentralisation, entre déconcentration et décentralisation. L&apos;administration centrale comprend les ministères et leurs directions. L&apos;administration territoriale est organisée autour des walis, gouverneurs, chefs de cercle et caïds. Les collectivités territoriales (régions, préfectures et provinces, communes) disposent de l&apos;autonomie administrative et financière. Maîtrisez les lois organiques relatives aux collectivités territoriales (111-14, 112-14, 113-14).
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">3. Le statut de la fonction publique</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le Dahir n° 1-58-008 du 24 février 1958 portant statut général de la fonction publique est un texte essentiel. Révisez les dispositions relatives au recrutement (conditions, concours), aux droits et obligations des fonctionnaires, aux positions statutaires (activité, détachement, disponibilité, mise sous les drapeaux), à la notation et à l&apos;avancement, à la discipline et aux sanctions, et à la cessation de fonctions. Les modifications récentes du statut sont souvent sujet de questions.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">4. Les actes administratifs</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Maîtrisez la théorie des actes administratifs unilatéraux : définition, classification (décision individuelle, réglementaire), conditions de légalité (compétence, forme, motif, but), régime d&apos;entrée en vigueur, exécution et retrait. Les contrats administratifs (marchés publics notamment) sont également un sujet récurrent. Connaissez le décret n° 2-22-431 relatif aux marchés publics et ses grandes dispositions.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">5. Le contentieux administratif</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le contentieux administratif est souvent présent dans les QCM : les tribunaux administratifs et les cours d&apos;appel administratives, le recours pour excès de pouvoir, le plein contentieux, les conditions de recevabilité des recours, les référés administratifs. Connaissez la loi 41-90 instituant les tribunaux administratifs et la loi 80-03 instituant les cours d&apos;appel administratives.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Méthode de révision efficace</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pour réussir le QCM de droit administratif, adoptez une méthode de révision structurée. Commencez par lire les textes de loi fondamentaux (Constitution, statut de la fonction publique, lois organiques). Ensuite, utilisez des fiches de révision synthétiques qui résument les points clés de chaque thème. Entraînez-vous régulièrement avec des QCM d&apos;entraînement en vous chronométrant pour simuler les conditions de l&apos;examen.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Planifiez vos révisions sur 2 à 3 mois minimum. Consacrez une semaine à chaque grand thème, puis alternez entre révisions et tests pratiques. Notez les questions que vous ratez pour cibler vos points faibles. Rejoignez des groupes de préparation en ligne où les candidats partagent des QCM et des annales. N&apos;hésitez pas à consulter la jurisprudence des tribunaux administratifs pour comprendre l&apos;application concrète des principes juridiques.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Exemples de questions types</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>&quot;Selon la Constitution de 2011, quelle institution est chargée de la protection des droits et libertés ?&quot; (Conseil National des Droits de l&apos;Homme, Article 161)</li>
          <li>&quot;Quelle est la durée du stage probatoire dans la fonction publique ?&quot; (1 à 2 ans selon le corps)</li>
          <li>&quot;Quel est le délai de recours pour excès de pouvoir devant le tribunal administratif ?&quot; (60 jours à compter de la publication ou notification de la décision)</li>
          <li>&quot;Combien de régions compte le Maroc depuis la régionalisation avancée ?&quot; (12 régions)</li>
          <li>&quot;Quelle autorité nomme les walis et gouverneurs au Maroc ?&quot; (Le Roi, sur proposition du Chef du Gouvernement, Article 49 de la Constitution)</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conseils pour le jour de l&apos;examen</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le jour de l&apos;examen, lisez chaque question deux fois avant de répondre. Méfiez-vous des formulations négatives et des réponses qui semblent trop évidentes. Si plusieurs réponses semblent correctes, cherchez celle qui est la plus précise ou la plus complète. En cas de doute absolu, ne laissez pas de question sans réponse si le barème ne pénalise pas les mauvaises réponses. Gérez votre temps en comptant environ une minute par question et gardez quelques minutes pour la relecture finale.
        </p>

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
            <Link href="/guides/culture-generale-concours/" className="btn-secondary text-sm">Culture générale</Link>
            <Link href="/guides/epreuve-ecrite-concours/" className="btn-secondary text-sm">Épreuve écrite</Link>
            <Link href="/guides/reussir-concours-public/" className="btn-secondary text-sm">Guide complet concours</Link>
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
