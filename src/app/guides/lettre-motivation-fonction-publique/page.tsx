import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Lettre de Motivation Fonction Publique Maroc : Guide 2026',
  description: 'Comment rédiger une lettre de motivation pour un concours de la fonction publique au Maroc. Structure idéale, modèle complet et erreurs courantes à éviter.',
  alternates: { canonical: '/guides/lettre-motivation-fonction-publique/' },
};

export default function GuideLettreMotivation() {
  const articleSchema = buildArticleSchema({
    title: 'Rédiger une Lettre de Motivation pour la Fonction Publique au Maroc',
    description: 'Guide complet pour rédiger une lettre de motivation convaincante pour la fonction publique.',
    url: `${siteConfig.url}/guides/lettre-motivation-fonction-publique/`,
    datePublished: '2025-01-25',
    dateModified: '2026-01-25',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Guides', url: `${siteConfig.url}/guides/reussir-concours-public/` },
    { name: 'Lettre de motivation', url: `${siteConfig.url}/guides/lettre-motivation-fonction-publique/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="text-sm text-primary-200 mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Guide</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Rédiger une Lettre de Motivation pour la Fonction Publique au Maroc
          </h1>
          <p className="text-primary-100">Par {siteConfig.author.name} ({siteConfig.author.title}), janvier 2026</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 prose prose-gray max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          La lettre de motivation (ou demande manuscrite) est un élément incontournable de votre dossier de candidature à un concours de la fonction publique au Maroc. Contrairement au secteur privé, la fonction publique marocaine conserve la tradition de la demande manuscrite adressée au ministre ou au directeur de l&apos;institution. Ce guide vous explique comment rédiger une lettre percutante qui renforcera votre candidature.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les spécificités de la lettre pour la fonction publique</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La lettre de motivation pour un concours public a des spécificités propres qui la distinguent de celle du secteur privé. Elle est généralement manuscrite (sauf indication contraire dans l&apos;avis de concours), adressée à une autorité précise (le ministre, le directeur général, le président) et doit respecter un formalisme administratif rigoureux. Elle doit exprimer clairement votre intérêt pour le poste, vos qualifications et votre motivation pour le service public.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">La structure idéale</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">En-tête</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          En haut à droite : votre prénom, nom, adresse complète, téléphone et email. En haut à gauche : le lieu et la date. En dessous à droite : le destinataire (&quot;À Monsieur le Ministre de...&quot; ou &quot;À Monsieur le Directeur de...&quot;). Puis l&apos;objet : &quot;Objet : Candidature au concours de recrutement de [intitulé du poste] - échelle [numéro]&quot;.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Introduction (1 paragraphe)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Indiquez comment vous avez eu connaissance du concours (Bulletin Officiel, site web du ministère) et présentez brièvement votre profil. Par exemple : &quot;Titulaire d&apos;un Master en [spécialité] de l&apos;Université [nom], j&apos;ai l&apos;honneur de vous soumettre ma candidature au concours de recrutement de [poste] publié au Bulletin Officiel du [date].&quot;
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Parcours et compétences (2-3 paragraphes)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Détaillez votre parcours académique et professionnel en mettant en avant les éléments les plus pertinents pour le poste. Reliez chaque expérience ou formation à une compétence utile pour les fonctions visées. Par exemple, si vous postulez au Ministère des Finances, insistez sur vos compétences en comptabilité, analyse financière ou droit fiscal. Si vous visez l&apos;Éducation Nationale, mettez en avant vos expériences d&apos;enseignement ou de formation.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Motivation pour le service public (1-2 paragraphes)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          C&apos;est la partie la plus importante de votre lettre. Exprimez clairement pourquoi vous souhaitez intégrer la fonction publique et ce ministère en particulier. Parlez de votre engagement pour l&apos;intérêt général, votre volonté de contribuer au développement du Maroc, votre adhésion aux valeurs du service public (égalité, continuité, neutralité, intégrité). Montrez que vous connaissez les missions du ministère et ses projets actuels.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Conclusion</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Réaffirmez votre motivation et votre disponibilité. Terminez par une formule de politesse administrative appropriée : &quot;Dans l&apos;attente d&apos;une suite favorable, je vous prie d&apos;agréer, Monsieur le Ministre, l&apos;expression de ma haute considération.&quot; Signez en bas à droite.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Exemple de lettre de motivation</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-sm text-gray-700 leading-relaxed mb-6 font-mono">
          <p className="mb-4 text-right">Mohammed EL ALAOUI<br/>123 Rue Hassan II, Rabat<br/>06 12 34 56 78<br/>m.elalaoui@email.com</p>
          <p className="mb-4 text-right">Rabat, le 15 janvier 2026</p>
          <p className="mb-4">À Monsieur le Ministre de l&apos;Économie et des Finances</p>
          <p className="mb-4">Objet : Candidature au concours de recrutement de cadres financiers - Échelle 10</p>
          <p className="mb-4">Monsieur le Ministre,</p>
          <p className="mb-4">
            Titulaire d&apos;un Master en Finance et Comptabilité de l&apos;Université Mohammed V de Rabat, j&apos;ai l&apos;honneur de vous soumettre ma candidature au concours de recrutement de cadres financiers (échelle 10), publié au Bulletin Officiel du 10 janvier 2026.
          </p>
          <p className="mb-4">
            Au cours de mes études, j&apos;ai acquis de solides compétences en analyse financière, comptabilité publique, droit fiscal marocain et gestion budgétaire. Mon stage de fin d&apos;études, effectué à la Trésorerie Générale du Royaume, m&apos;a permis de découvrir le fonctionnement des finances publiques et de contribuer à un projet d&apos;amélioration des procédures de contrôle comptable.
          </p>
          <p className="mb-4">
            Motivé par les valeurs du service public et convaincu de l&apos;importance de la bonne gouvernance financière pour le développement du Maroc, je souhaite mettre mes compétences au service de votre ministère. Je suis particulièrement intéressé par les projets de modernisation de l&apos;administration fiscale et de digitalisation des services financiers que votre ministère conduit actuellement.
          </p>
          <p className="mb-4">
            Rigoureux, méthodique et doté d&apos;un fort esprit d&apos;équipe, je suis convaincu que mon profil correspond aux exigences du poste. Je suis disponible immédiatement et prêt à m&apos;investir pleinement dans les missions qui me seront confiées.
          </p>
          <p className="mb-4">
            Dans l&apos;attente d&apos;une suite favorable à ma candidature, je vous prie d&apos;agréer, Monsieur le Ministre, l&apos;expression de ma haute considération.
          </p>
          <p className="text-right">Mohammed EL ALAOUI<br/>[Signature]</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les 10 règles d&apos;or</h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Manuscrite et soignée</strong> : écrivez lisiblement sur du papier blanc, sans ratures</li>
          <li><strong>Personnalisée</strong> : adaptez chaque lettre au ministère et au poste visé</li>
          <li><strong>Structurée</strong> : respectez le plan classique (introduction, parcours, motivation, conclusion)</li>
          <li><strong>Concise</strong> : une page maximum, allez à l&apos;essentiel</li>
          <li><strong>Spécifique</strong> : mentionnez des projets concrets du ministère pour montrer votre intérêt</li>
          <li><strong>Professionnelle</strong> : utilisez un registre de langue soutenu, pas familier</li>
          <li><strong>Sans fautes</strong> : relisez plusieurs fois et faites relire par un tiers</li>
          <li><strong>Positive</strong> : mettez en avant vos qualités sans dénigrer d&apos;autres employeurs</li>
          <li><strong>Honnête</strong> : ne mentez jamais sur vos diplômes ou expériences</li>
          <li><strong>Motivée</strong> : montrez un engagement sincère pour le service public</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Erreurs courantes à éviter</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Utiliser une lettre générique non adaptée au ministère</li>
          <li>Faire des fautes d&apos;orthographe ou de grammaire</li>
          <li>Écrire plus d&apos;une page</li>
          <li>Ne pas mentionner la référence du concours</li>
          <li>Se concentrer uniquement sur soi sans parler du ministère</li>
          <li>Utiliser un ton trop familier ou trop pompeux</li>
          <li>Oublier la formule de politesse finale</li>
          <li>Ne pas signer la lettre</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La lettre de motivation est votre carte de visite auprès de l&apos;administration. Bien rédigée, elle renforce votre dossier de candidature et témoigne de votre sérieux et de votre motivation. Prenez le temps de la rédiger soigneusement, de la personnaliser pour chaque concours et de la relire attentivement avant de l&apos;envoyer. Associée à un CV professionnel, une lettre de motivation percutante est un atout majeur pour réussir votre entrée dans la fonction publique.
        </p>

        <div className="mt-10 p-6 bg-primary-50 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-2">Complétez votre dossier</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/generateur-cv/" className="btn-primary text-sm">Créer mon CV</Link>
            <Link href="/guides/reussir-concours-public/" className="btn-secondary text-sm">Guide concours</Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8 italic">
          Par {siteConfig.author.name} ({siteConfig.author.title}), publié le 25 janvier 2026
        </p>
      </article>
    </>
  );
}
