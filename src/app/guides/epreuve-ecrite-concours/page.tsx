import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Épreuve Écrite Concours Fonction Publique : Méthodologie',
  description: 'Méthodologie complète pour réussir les épreuves écrites des concours de la fonction publique au Maroc : QCM, dissertation, note de synthèse et gestion du temps.',
  alternates: { canonical: '/guides/epreuve-ecrite-concours/' },
};

const faqs = [
  {
    question: 'Comment est notée l\'épreuve écrite du concours de la fonction publique ?',
    answer: 'L\'épreuve écrite est généralement notée sur 20 ou sur 40 selon le concours. Le QCM est noté automatiquement (1 point par bonne réponse, 0 pour absence de réponse, parfois -0,25 pour mauvaise réponse). La dissertation ou note de synthèse est notée par un jury sur la qualité de l\'analyse, la structure, l\'expression et la présentation. Une note éliminatoire peut être fixée (souvent 5/20).',
  },
  {
    question: 'Quelle est la durée habituelle de l\'épreuve écrite ?',
    answer: 'L\'épreuve écrite dure généralement entre 3 et 4 heures selon le concours et le nombre d\'épreuves. Pour un QCM seul, comptez 1h30 à 2h. Pour un QCM + rédaction, comptez 3h à 4h. La durée exacte est précisée dans l\'avis de concours et rappelée sur le sujet le jour de l\'épreuve.',
  },
  {
    question: 'Peut-on utiliser un dictionnaire pendant l\'épreuve écrite ?',
    answer: 'Non, aucun document n\'est autorisé pendant l\'épreuve écrite, sauf mention contraire dans l\'avis de concours. Seul le matériel de base est permis : stylos, crayons, règle, gomme. Les calculatrices sont parfois autorisées pour les épreuves scientifiques. Les téléphones portables doivent être éteints et rangés.',
  },
  {
    question: 'Comment structurer une note de synthèse pour le concours ?',
    answer: 'La note de synthèse suit un plan en 3 parties : introduction (contexte, problématique, annonce du plan), développement (2 ou 3 parties thématiques avec sous-parties), conclusion (synthèse des idées principales et ouverture). Elle doit faire 3 à 5 pages manuscrites et respecter un style administratif objectif et factuel, sans opinions personnelles.',
  },
  {
    question: 'Faut-il répondre à toutes les questions du QCM même si on n\'est pas sûr ?',
    answer: 'Cela dépend du barème. Si les mauvaises réponses ne sont pas pénalisées (pas de points négatifs), répondez à toutes les questions. Si le barème prévoit des points négatifs (-0,25 ou -0,5 par mauvaise réponse), ne répondez que si vous pouvez éliminer au moins 2 propositions sur 4. Le barème est généralement indiqué sur le sujet.',
  },
];

export default function GuideEpreuveEcrite() {
  const articleSchema = buildArticleSchema({
    title: 'Réussir l\'Épreuve Écrite du Concours de la Fonction Publique',
    description: 'Méthodologie pour les épreuves écrites des concours publics au Maroc.',
    url: `${siteConfig.url}/guides/epreuve-ecrite-concours/`,
    datePublished: '2026-02-15',
    dateModified: '2026-06-15',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Guides', url: `${siteConfig.url}/guides/` },
    { name: 'Épreuve écrite', url: `${siteConfig.url}/guides/epreuve-ecrite-concours/` },
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
            <span className="text-white">Épreuve écrite</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Réussir l&apos;Épreuve Écrite du Concours de la Fonction Publique
          </h1>
          <p className="text-primary-100">Par {siteConfig.author.name} ({siteConfig.author.title}), 2026</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 prose prose-gray max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          L&apos;épreuve écrite est l&apos;étape la plus sélective des concours de la fonction publique au Maroc. C&apos;est elle qui détermine votre admissibilité à l&apos;oral. Elle peut prendre la forme d&apos;un QCM, d&apos;une dissertation, d&apos;une note de synthèse ou d&apos;une combinaison de ces formats. Ce guide vous donne la méthodologie complète pour chaque type d&apos;épreuve.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Maîtriser le QCM</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le QCM (questionnaire à choix multiples) est le format le plus courant dans les concours de la fonction publique. Il couvre généralement trois domaines : la culture générale, les connaissances spécifiques à la spécialité et le droit administratif. Chaque question propose 3 à 5 réponses possibles, dont une seule est correcte. La stratégie gagnante consiste à procéder par élimination : écartez d&apos;abord les réponses manifestement fausses, puis choisissez parmi les restantes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pour vous entraîner efficacement, constituez une banque de QCM à partir des annales disponibles et des exercices en ligne. Chronométrez-vous systématiquement (environ 1 minute par question) pour acquérir le bon rythme. Analysez vos erreurs pour identifier vos lacunes et les combler. Variez les sources pour vous exposer à différents styles de questions. La régularité de l&apos;entraînement est plus importante que l&apos;intensité : mieux vaut 30 minutes de QCM par jour pendant 3 mois qu&apos;une semaine intensive avant l&apos;examen.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Réussir la dissertation</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La dissertation est une épreuve de réflexion et d&apos;analyse. Le sujet porte généralement sur une question d&apos;actualité, une problématique de la fonction publique ou un thème lié au domaine du concours. Pour réussir, suivez cette méthode en quatre étapes :
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Analyse du sujet (15 min)</strong> : Lisez le sujet deux fois, soulignez les mots clés, identifiez la problématique et les limites du sujet. Notez les idées qui vous viennent spontanément.</li>
          <li><strong>Construction du plan (20 min)</strong> : Organisez vos idées en 2 ou 3 grandes parties, chacune avec 2 à 3 sous-parties. Assurez-vous que le plan répond clairement à la problématique.</li>
          <li><strong>Rédaction (2h)</strong> : Rédigez une introduction accrochante (contexte, problématique, annonce du plan), un développement structuré avec des transitions, et une conclusion synthétique avec ouverture.</li>
          <li><strong>Relecture (15 min)</strong> : Corrigez l&apos;orthographe, la grammaire et la ponctuation. Vérifiez la cohérence de votre argumentation et la clarté de votre expression.</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Rédiger une note de synthèse</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La note de synthèse est un exercice spécifique qui consiste à résumer et organiser les informations extraites d&apos;un dossier documentaire. Contrairement à la dissertation, elle ne demande pas d&apos;opinions personnelles mais une capacité à structurer et hiérarchiser l&apos;information. Le dossier comprend généralement 5 à 15 documents (textes de loi, articles de presse, rapports, statistiques).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La méthode recommandée est la suivante : lecture rapide de tous les documents pour identifier les thèmes principaux (30 min), lecture approfondie avec prise de notes et identification des idées clés (45 min), construction du plan thématique (15 min), rédaction de la synthèse en style administratif objectif (1h30), et relecture finale (15 min). La note de synthèse ne doit pas dépasser 4 à 5 pages manuscrites et doit citer les sources documentaires.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Gestion du temps et de la copie</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La gestion du temps est un facteur déterminant de réussite. Avant de commencer, lisez la totalité du sujet et répartissez le temps disponible entre les différentes épreuves. Pour un examen de 3 heures avec QCM et rédaction, consacrez environ 1 heure au QCM et 2 heures à la rédaction. Soignez votre écriture, utilisez des paragraphes aérés, numérotez vos pages et utilisez des titres visibles pour structurer votre copie. Une copie bien présentée fait meilleure impression sur le correcteur.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Le jour de l&apos;examen : checklist</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Convocation et CIN originale (documents obligatoires)</li>
          <li>Stylos bleus ou noirs (au moins 2 de rechange)</li>
          <li>Crayon à papier, gomme et règle pour le QCM</li>
          <li>Montre (les téléphones sont interdits)</li>
          <li>Bouteille d&apos;eau et en-cas léger</li>
          <li>Arriver 30 minutes avant l&apos;heure convoquée</li>
          <li>Repérer la salle la veille si possible</li>
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
            <Link href="/guides/culture-generale-concours/" className="btn-secondary text-sm">Culture générale</Link>
            <Link href="/guides/preparer-entretien-oral/" className="btn-secondary text-sm">Épreuve orale</Link>
            <Link href="/generateur-cv/" className="btn-primary text-sm">Créer mon CV</Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8 italic">
          Par {siteConfig.author.name} ({siteConfig.author.title}), 2026
        </p>
      </article>
    </>
  );
}
