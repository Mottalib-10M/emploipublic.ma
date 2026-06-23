import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Lettre de Motivation Fonction Publique Maroc',
  description: 'Comment rediger une lettre de motivation pour un concours de la fonction publique au Maroc. Modele, structure et conseils pratiques.',
  alternates: { canonical: '/guides/lettre-motivation-fonction-publique/' },
};

export default function GuideLettreMotivation() {
  const articleSchema = buildArticleSchema({
    title: 'Rediger une Lettre de Motivation pour la Fonction Publique au Maroc',
    description: 'Guide complet pour rediger une lettre de motivation convaincante pour la fonction publique.',
    url: `${siteConfig.url}/guides/lettre-motivation-fonction-publique/`,
    datePublished: '2025-01-25',
    dateModified: '2025-01-25',
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
          <nav className="text-sm text-primary-200 mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Guide</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Rediger une Lettre de Motivation pour la Fonction Publique au Maroc
          </h1>
          <p className="text-primary-100">Par {siteConfig.author.name} ({siteConfig.author.title}) — Janvier 2025</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 prose prose-gray max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          La lettre de motivation (ou demande manuscrite) est un element incontournable de votre dossier de candidature a un concours de la fonction publique au Maroc. Contrairement au secteur prive, la fonction publique marocaine conserve la tradition de la demande manuscrite adressee au ministre ou au directeur de l&apos;institution. Ce guide vous explique comment rediger une lettre percutante qui renforcera votre candidature.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les specificites de la lettre pour la fonction publique</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La lettre de motivation pour un concours public a des specificites propres qui la distinguent de celle du secteur prive. Elle est generalement manuscrite (sauf indication contraire dans l&apos;avis de concours), adressee a une autorite precis (le ministre, le directeur general, le president) et doit respecter un formalisme administratif rigoureux. Elle doit exprimer clairement votre interet pour le poste, vos qualifications et votre motivation pour le service public.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">La structure ideale</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">En-tete</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          En haut a droite : votre prenom, nom, adresse complete, telephone et email. En haut a gauche : le lieu et la date. En dessous a droite : le destinataire (&quot;A Monsieur le Ministre de...&quot; ou &quot;A Monsieur le Directeur de...&quot;). Puis l&apos;objet : &quot;Objet : Candidature au concours de recrutement de [intitule du poste] - echelle [numero]&quot;.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Introduction (1 paragraphe)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Indiquez comment vous avez eu connaissance du concours (Bulletin Officiel, site web du ministere) et presentez brievement votre profil. Par exemple : &quot;Titulaire d&apos;un Master en [specialite] de l&apos;Universite [nom], j&apos;ai l&apos;honneur de vous soumettre ma candidature au concours de recrutement de [poste] publie au Bulletin Officiel du [date].&quot;
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Parcours et competences (2-3 paragraphes)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Detaillez votre parcours academique et professionnel en mettant en avant les elements les plus pertinents pour le poste. Reliez chaque experience ou formation a une competence utile pour les fonctions visees. Par exemple, si vous postulez au Ministere des Finances, insistez sur vos competences en comptabilite, analyse financiere ou droit fiscal. Si vous visez l&apos;Education Nationale, mettez en avant vos experiences d&apos;enseignement ou de formation.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Motivation pour le service public (1-2 paragraphes)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          C&apos;est la partie la plus importante de votre lettre. Exprimez clairement pourquoi vous souhaitez integrer la fonction publique et ce ministere en particulier. Parlez de votre engagement pour l&apos;interet general, votre volonte de contribuer au developpement du Maroc, votre adhesion aux valeurs du service public (egalite, continuite, neutralite, integrite). Montrez que vous connaissez les missions du ministere et ses projets actuels.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Conclusion</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Reaffirmez votre motivation et votre disponibilite. Terminez par une formule de politesse administrative appropriee : &quot;Dans l&apos;attente d&apos;une suite favorable, je vous prie d&apos;agreer, Monsieur le Ministre, l&apos;expression de ma haute consideration.&quot; Signez en bas a droite.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Exemple de lettre de motivation</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-sm text-gray-700 leading-relaxed mb-6 font-mono">
          <p className="mb-4 text-right">Mohammed EL ALAOUI<br/>123 Rue Hassan II, Rabat<br/>06 12 34 56 78<br/>m.elalaoui@email.com</p>
          <p className="mb-4 text-right">Rabat, le 15 janvier 2025</p>
          <p className="mb-4">A Monsieur le Ministre de l&apos;Economie et des Finances</p>
          <p className="mb-4">Objet : Candidature au concours de recrutement de cadres financiers - Echelle 10</p>
          <p className="mb-4">Monsieur le Ministre,</p>
          <p className="mb-4">
            Titulaire d&apos;un Master en Finance et Comptabilite de l&apos;Universite Mohammed V de Rabat, j&apos;ai l&apos;honneur de vous soumettre ma candidature au concours de recrutement de cadres financiers (echelle 10), publie au Bulletin Officiel du 10 janvier 2025.
          </p>
          <p className="mb-4">
            Au cours de mes etudes, j&apos;ai acquis de solides competences en analyse financiere, comptabilite publique, droit fiscal marocain et gestion budgetaire. Mon stage de fin d&apos;etudes, effectue a la Tresorerie Generale du Royaume, m&apos;a permis de decouvrir le fonctionnement des finances publiques et de contribuer a un projet d&apos;amelioration des procedures de controle comptable.
          </p>
          <p className="mb-4">
            Motive par les valeurs du service public et convaincu de l&apos;importance de la bonne gouvernance financiere pour le developpement du Maroc, je souhaite mettre mes competences au service de votre ministere. Je suis particulierement interesse par les projets de modernisation de l&apos;administration fiscale et de digitalisation des services financiers que votre ministere conduit actuellement.
          </p>
          <p className="mb-4">
            Rigoureux, methodique et dote d&apos;un fort esprit d&apos;equipe, je suis convaincu que mon profil correspond aux exigences du poste. Je suis disponible immediatement et pret a m&apos;investir pleinement dans les missions qui me seront confiees.
          </p>
          <p className="mb-4">
            Dans l&apos;attente d&apos;une suite favorable a ma candidature, je vous prie d&apos;agreer, Monsieur le Ministre, l&apos;expression de ma haute consideration.
          </p>
          <p className="text-right">Mohammed EL ALAOUI<br/>[Signature]</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les 10 regles d&apos;or</h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Manuscrite et soignee</strong> : ecrivez lisiblement sur du papier blanc, sans ratures</li>
          <li><strong>Personnalisee</strong> : adaptez chaque lettre au ministere et au poste vise</li>
          <li><strong>Structuree</strong> : respectez le plan classique (introduction, parcours, motivation, conclusion)</li>
          <li><strong>Concise</strong> : une page maximum, allez a l&apos;essentiel</li>
          <li><strong>Specifique</strong> : mentionnez des projets concrets du ministere pour montrer votre interet</li>
          <li><strong>Professionnelle</strong> : utilisez un registre de langue soutenu, pas familier</li>
          <li><strong>Sans fautes</strong> : relisez plusieurs fois et faites relire par un tiers</li>
          <li><strong>Positive</strong> : mettez en avant vos qualites sans denigrer d&apos;autres employeurs</li>
          <li><strong>Honnete</strong> : ne mentez jamais sur vos diplomes ou experiences</li>
          <li><strong>Motivee</strong> : montrez un engagement sincere pour le service public</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Erreurs courantes a eviter</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Utiliser une lettre generique non adaptee au ministere</li>
          <li>Faire des fautes d&apos;orthographe ou de grammaire</li>
          <li>Ecrire plus d&apos;une page</li>
          <li>Ne pas mentionner la reference du concours</li>
          <li>Se concentrer uniquement sur soi sans parler du ministere</li>
          <li>Utiliser un ton trop familier ou trop pompeux</li>
          <li>Oublier la formule de politesse finale</li>
          <li>Ne pas signer la lettre</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La lettre de motivation est votre carte de visite aupres de l&apos;administration. Bien redigee, elle renforce votre dossier de candidature et temoigne de votre serieux et de votre motivation. Prenez le temps de la rediger soigneusement, de la personnaliser pour chaque concours et de la relire attentivement avant de l&apos;envoyer. Associee a un CV professionnel, une lettre de motivation percutante est un atout majeur pour reussir votre entree dans la fonction publique.
        </p>

        <div className="mt-10 p-6 bg-primary-50 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-2">Completez votre dossier</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/generateur-cv/" className="btn-primary text-sm">Creer mon CV</Link>
            <Link href="/guides/reussir-concours-public/" className="btn-secondary text-sm">Guide concours</Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8 italic">
          Par {siteConfig.author.name} ({siteConfig.author.title}) — Publie le 25 janvier 2025
        </p>
      </article>
    </>
  );
}
