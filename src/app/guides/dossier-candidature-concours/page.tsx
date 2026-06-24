import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Dossier Candidature Concours Fonction Publique Maroc 2026',
  description: 'Guide complet du dossier de candidature pour les concours de la fonction publique au Maroc : pièces requises, modèle de demande et erreurs à éviter.',
  alternates: { canonical: '/guides/dossier-candidature-concours/' },
};

const faqs = [
  {
    question: 'Quelles sont les pièces obligatoires du dossier de candidature ?',
    answer: 'Les pièces généralement requises sont : une demande manuscrite adressée au ministre ou directeur, un CV détaillé, des copies certifiées conformes de vos diplômes, une copie de la CIN recto-verso, 4 photos d\'identité récentes (format passeport), une attestation d\'inscription ou de position vis-à-vis du service militaire (le cas échéant), et un timbre fiscal. Certains concours demandent des pièces supplémentaires spécifiques.',
  },
  {
    question: 'La demande doit-elle être manuscrite ou peut-elle être tapée ?',
    answer: 'La tradition administrative marocaine exige une demande manuscrite (écrite à la main). Cependant, certains concours récents acceptent les demandes dactylographiées, surtout lorsque l\'inscription se fait en ligne. Vérifiez toujours l\'avis de concours pour connaître les modalités exactes. En cas de doute, optez pour la version manuscrite.',
  },
  {
    question: 'Comment certifier conforme les copies de diplômes ?',
    answer: 'La certification conforme se fait auprès des autorités locales : commune, arrondissement ou annexe administrative. Présentez l\'original du diplôme et une photocopie claire. L\'agent administratif appose un cachet de conformité et une signature. Le service est gratuit. Prévoyez plusieurs copies certifiées car vous pourriez postuler à plusieurs concours.',
  },
  {
    question: 'Peut-on envoyer le dossier par courrier ou faut-il le déposer en personne ?',
    answer: 'Les deux options sont généralement possibles. Le dépôt direct garantit la réception et vous obtenez un récépissé. L\'envoi par courrier recommandé avec accusé de réception est accepté mais assurez-vous d\'envoyer le dossier bien avant la date limite pour tenir compte des délais postaux. De plus en plus de ministères proposent aussi l\'inscription en ligne.',
  },
  {
    question: 'Que faire si le dossier est incomplet après la date limite ?',
    answer: 'Un dossier incomplet est généralement rejeté sans recours possible. C\'est pourquoi il est crucial de vérifier méticuleusement chaque pièce avant l\'envoi. Si vous réalisez qu\'il manque un document après l\'envoi, contactez immédiatement le service des concours du ministère par téléphone et par email pour demander un délai de régularisation. Certains ministères accordent un délai supplémentaire, d\'autres non.',
  },
];

export default function GuideDossierCandidature() {
  const articleSchema = buildArticleSchema({
    title: 'Constituer son Dossier de Candidature pour un Concours de la Fonction Publique',
    description: 'Guide pour préparer un dossier de candidature complet et professionnel.',
    url: `${siteConfig.url}/guides/dossier-candidature-concours/`,
    datePublished: '2026-03-01',
    dateModified: '2026-06-01',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Guides', url: `${siteConfig.url}/guides/` },
    { name: 'Dossier de candidature', url: `${siteConfig.url}/guides/dossier-candidature-concours/` },
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
            <span className="text-white">Dossier de candidature</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Constituer son Dossier de Candidature pour le Concours
          </h1>
          <p className="text-primary-100">Par {siteConfig.author.name} ({siteConfig.author.title}), 2026</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 prose prose-gray max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Le dossier de candidature est la première étape concrète pour participer à un concours de la fonction publique au Maroc. Un dossier complet, bien présenté et envoyé dans les délais est indispensable. Trop de candidats qualifiés voient leur candidature rejetée pour un document manquant ou une erreur de présentation. Ce guide vous aide à constituer un dossier irréprochable.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Liste complète des pièces à fournir</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Voici la liste standard des documents requis pour la plupart des concours de la fonction publique. Attention : chaque concours peut exiger des pièces supplémentaires spécifiques, toujours vérifier l&apos;avis de concours publié au Bulletin Officiel.
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-3">
          <li><strong>Demande manuscrite</strong> : adressée au ministre, directeur ou président de l&apos;institution. Elle mentionne le concours visé, votre identité complète et vos coordonnées. Rédigez-la sur papier blanc, sans ratures, avec une écriture lisible.</li>
          <li><strong>Curriculum Vitae</strong> : détaillé, actualisé et adapté au poste. Utilisez notre <Link href="/generateur-cv/" className="text-primary-600">générateur de CV gratuit</Link> pour créer un CV professionnel.</li>
          <li><strong>Copies certifiées conformes des diplômes</strong> : tous les diplômes pertinents, du baccalauréat au plus haut diplôme obtenu. La certification se fait à la commune ou à l&apos;arrondissement.</li>
          <li><strong>Copie de la CIN</strong> : recto et verso, certifiée conforme. Assurez-vous que votre CIN est en cours de validité.</li>
          <li><strong>Photos d&apos;identité</strong> : 4 photos récentes au format passeport, avec fond blanc.</li>
          <li><strong>Attestation d&apos;équivalence</strong> : obligatoire pour les diplômes obtenus à l&apos;étranger. Délivrée par le Ministère de l&apos;Enseignement Supérieur.</li>
          <li><strong>Attestations de travail</strong> : pour justifier de l&apos;expérience professionnelle si requise par le concours.</li>
          <li><strong>Timbre fiscal</strong> : souvent requis, de 20 ou 50 DH selon le concours.</li>
          <li><strong>Enveloppe timbrée</strong> : portant votre adresse, pour recevoir la convocation aux épreuves.</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Modèle de demande manuscrite</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-sm text-gray-700 leading-relaxed mb-6 font-mono">
          <p className="text-right mb-2">[Votre prénom et nom]</p>
          <p className="text-right mb-2">[Votre adresse complète]</p>
          <p className="text-right mb-2">[Votre téléphone]</p>
          <p className="text-right mb-4">[Votre email]</p>
          <p className="text-right mb-4">[Ville], le [date]</p>
          <p className="mb-4">À Monsieur le Ministre de [nom du ministère]</p>
          <p className="mb-4">Objet : Candidature au concours de recrutement de [intitulé du poste] - Échelle [numéro]</p>
          <p className="mb-4">Monsieur le Ministre,</p>
          <p className="mb-4">J&apos;ai l&apos;honneur de solliciter de votre haute bienveillance mon inscription au concours de recrutement de [poste], publié au Bulletin Officiel n° [numéro] du [date].</p>
          <p className="mb-4">Titulaire d&apos;un [diplôme] de [établissement], je remplis les conditions requises pour ce concours et je suis vivement intéressé(e) par les missions de votre ministère.</p>
          <p className="mb-4">Veuillez trouver ci-joint les pièces constitutives de mon dossier de candidature.</p>
          <p className="mb-4">Dans l&apos;attente d&apos;une suite favorable, je vous prie d&apos;agréer, Monsieur le Ministre, l&apos;expression de ma haute considération.</p>
          <p className="text-right">[Signature]</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conseils de présentation du dossier</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Utilisez une chemise cartonnée propre pour regrouper tous les documents</li>
          <li>Classez les pièces dans l&apos;ordre mentionné dans l&apos;avis de concours</li>
          <li>Inscrivez votre nom et le concours visé sur la chemise</li>
          <li>Vérifiez trois fois que toutes les pièces sont présentes avant l&apos;envoi</li>
          <li>Conservez une copie de chaque document envoyé</li>
          <li>Si envoi postal, utilisez le recommandé avec accusé de réception</li>
          <li>Envoyez le dossier au moins 5 jours avant la date limite</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les erreurs les plus courantes</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les erreurs suivantes entraînent le rejet automatique du dossier : oubli d&apos;un document obligatoire, copies non certifiées, CIN expirée, photos non conformes, demande adressée au mauvais ministère, dossier reçu après la date limite. D&apos;autres erreurs, bien que non éliminatoires, nuisent à votre image : dossier désordonné, CV mal formaté, fautes d&apos;orthographe dans la demande, documents froissés ou tachés. Un dossier soigné témoigne de votre sérieux et de votre professionnalisme.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">L&apos;inscription en ligne</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          De plus en plus de ministères proposent l&apos;inscription en ligne aux concours. Le processus nécessite généralement de créer un compte sur le site du ministère, de remplir un formulaire électronique et de télécharger les pièces justificatives en format PDF. Respectez les tailles maximales de fichiers et les formats demandés. Même après l&apos;inscription en ligne, vous devrez souvent confirmer votre candidature en envoyant le dossier physique par courrier.
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
          <h3 className="font-bold text-gray-900 mb-2">Complétez votre préparation</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/generateur-cv/" className="btn-primary text-sm">Créer mon CV</Link>
            <Link href="/guides/lettre-motivation-fonction-publique/" className="btn-secondary text-sm">Lettre de motivation</Link>
            <Link href="/guides/reussir-concours-public/" className="btn-secondary text-sm">Guide concours</Link>
            <Link href="/concours/" className="btn-secondary text-sm">Concours ouverts</Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8 italic">
          Par {siteConfig.author.name} ({siteConfig.author.title}), 2026
        </p>
      </article>
    </>
  );
}
