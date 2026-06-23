import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Preparer l\'Entretien Oral du Concours Public',
  description: 'Guide complet pour preparer et reussir l\'epreuve orale d\'un concours de la fonction publique au Maroc. Conseils, questions et erreurs.',
  alternates: { canonical: '/guides/preparer-entretien-oral/' },
};

export default function GuideEntretienOral() {
  const articleSchema = buildArticleSchema({
    title: 'Preparer l\'Entretien Oral du Concours de la Fonction Publique',
    description: 'Guide pour reussir l\'epreuve orale d\'un concours public au Maroc.',
    url: `${siteConfig.url}/guides/preparer-entretien-oral/`,
    datePublished: '2025-01-20',
    dateModified: '2025-01-20',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Guides', url: `${siteConfig.url}/guides/reussir-concours-public/` },
    { name: 'Entretien oral', url: `${siteConfig.url}/guides/preparer-entretien-oral/` },
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
            Preparer l&apos;Entretien Oral d&apos;un Concours de la Fonction Publique
          </h1>
          <p className="text-primary-100">Par {siteConfig.author.name} ({siteConfig.author.title}) — Janvier 2025</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 prose prose-gray max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          L&apos;epreuve orale est souvent l&apos;etape decisive d&apos;un concours de la fonction publique. Apres avoir reussi l&apos;ecrit, c&apos;est devant un jury que vous devez convaincre de votre motivation, de vos competences et de votre aptitude a exercer les fonctions. Ce guide vous donne toutes les cles pour vous preparer efficacement et aborder l&apos;entretien avec confiance.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Comprendre l&apos;objectif de l&apos;entretien oral</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;entretien oral d&apos;un concours de la fonction publique n&apos;est pas un simple entretien d&apos;embauche. Il s&apos;agit d&apos;une epreuve formelle qui vise a evaluer plusieurs aspects de votre candidature : vos connaissances generales et specialisees, votre comprehension des missions du ministere et du poste, votre motivation pour le service public, votre capacite d&apos;expression orale et votre aptitude a exercer les fonctions. Le jury est generalement compose de 2 a 4 membres : un president de jury, des representants du ministere et parfois un specialiste du domaine.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;entretien dure generalement entre 15 et 30 minutes. Il commence souvent par une presentation du candidat (2-3 minutes), suivie de questions sur le parcours, les connaissances et la motivation. Certains jurys peuvent egalement poser des questions d&apos;actualite ou des mises en situation professionnelle.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les 10 questions les plus frequentes</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Voici les questions que vous avez le plus de chances de rencontrer lors de l&apos;oral, avec des conseils pour y repondre :
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">1. &quot;Presentez-vous&quot;</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          C&apos;est presque toujours la premiere question. Preparez une presentation structuree de 2-3 minutes qui couvre : votre identite, votre parcours academique, vos experiences professionnelles pertinentes, vos competences cles et votre motivation pour le poste. Soyez concis et allez a l&apos;essentiel. Evitez de reciter votre CV mot pour mot ; mettez plutot en avant les elements les plus pertinents pour le concours.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">2. &quot;Pourquoi la fonction publique ?&quot;</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le jury veut evaluer votre motivation pour le service public. Parlez de votre engagement envers l&apos;interet general, votre volonte de contribuer au developpement du pays, la stabilite de carriere, mais aussi les valeurs du service public : egalite, continuite, adaptabilite. Evitez de mentionner uniquement la securite de l&apos;emploi ou le salaire.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">3. &quot;Que savez-vous de notre ministere ?&quot;</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cette question est un test de preparation. Vous devez connaitre les missions principales du ministere, son organigramme, ses grands projets en cours, ses chiffres cles (effectif, budget) et son site web. Consultez les dernieres actualites du ministere dans les jours precedant l&apos;entretien. Mentionnez des projets specifiques pour montrer votre interet sincere.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">4. &quot;Quelles sont vos qualites et vos defauts ?&quot;</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Question classique mais piege. Pour les qualites, choisissez 2-3 qualites pertinentes pour le poste et illustrez-les avec des exemples concrets. Pour les defauts, mentionnez un vrai defaut (pas un faux defaut deguise en qualite) mais montrez que vous en etes conscient et que vous travaillez dessus. Par exemple : &quot;J&apos;ai tendance a etre perfectionniste, ce qui me pousse parfois a passer trop de temps sur les details, mais j&apos;apprends a mieux gerer mes priorites.&quot;
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">5. &quot;Comment envisagez-vous votre carriere ?&quot;</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Montrez que vous vous projetez dans la fonction publique a long terme. Parlez de votre volonte d&apos;evoluer, de prendre des responsabilites, de vous former continuellement et de contribuer a la modernisation de l&apos;administration. Soyez ambitieux mais realiste.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">6. &quot;Decrivez une situation difficile que vous avez geree&quot;</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Utilisez la methode STAR (Situation, Tache, Action, Resultat) pour structurer votre reponse. Decrivez brievement le contexte, ce qu&apos;on attendait de vous, les actions que vous avez prises et le resultat obtenu. Choisissez une situation qui met en valeur des qualites utiles pour le poste.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">7 a 10. Autres questions frequentes</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>&quot;Que pensez-vous de la digitalisation de l&apos;administration ?&quot; — Montrez votre ouverture a la modernisation et votre culture numerique.</li>
          <li>&quot;Comment travaillez-vous en equipe ?&quot; — Donnez des exemples concrets de collaboration reussie.</li>
          <li>&quot;Que feriez-vous dans telle situation professionnelle ?&quot; — Restez pragmatique, respectueux de la hierarchie et oriente solutions.</li>
          <li>&quot;Avez-vous des questions ?&quot; — Oui, toujours ! Preparez 2-3 questions pertinentes sur le poste, l&apos;equipe ou les projets du ministere.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conseils pratiques pour le jour J</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Tenue vestimentaire :</strong> costume ou tailleur sobre, couleurs neutres, pas d&apos;accessoires voyants</li>
          <li><strong>Ponctualite :</strong> arrivez 15-20 minutes en avance pour vous installer et vous calmer</li>
          <li><strong>Communication non verbale :</strong> regard franc, poignee de main ferme, posture droite, sourire naturel</li>
          <li><strong>Expression orale :</strong> parlez clairement, a un rythme modere, evitez le jargon, structurez vos reponses</li>
          <li><strong>Gestion du stress :</strong> respirez profondement, prenez le temps de reflechir avant de repondre, n&apos;hesitez pas a demander de repeter une question</li>
          <li><strong>Documents :</strong> apportez votre convocation, votre CIN, une copie de votre CV et vos diplomes originaux</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les erreurs fatales a l&apos;oral</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Arriver en retard ou sans les documents requis</li>
          <li>Ne pas connaitre le ministere et ses missions</li>
          <li>Critiquer l&apos;administration ou les fonctionnaires</li>
          <li>Montrer un manque de motivation (&quot;c&apos;est pour la securite de l&apos;emploi&quot;)</li>
          <li>Etre trop familier ou trop distant avec le jury</li>
          <li>Mentir sur son parcours ou ses competences</li>
          <li>Ne pas avoir de questions a poser a la fin</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;entretien oral est une opportunite de montrer votre personnalite et votre motivation au-dela de ce que revelent les epreuves ecrites. Avec une preparation methodique, une connaissance approfondie du ministere et du poste, et une attitude professionnelle et motivee, vous mettrez toutes les chances de votre cote. Rappelez-vous que le jury cherche avant tout des candidats competents, motives et capables de s&apos;integrer dans l&apos;equipe et de servir l&apos;interet general.
        </p>

        <div className="mt-10 p-6 bg-primary-50 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-2">Poursuivez votre preparation</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/guides/reussir-concours-public/" className="btn-secondary text-sm">Guide complet concours</Link>
            <Link href="/guides/lettre-motivation-fonction-publique/" className="btn-secondary text-sm">Lettre de motivation</Link>
            <Link href="/generateur-cv/" className="btn-primary text-sm">Creer mon CV</Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8 italic">
          Par {siteConfig.author.name} ({siteConfig.author.title}) — Publie le 20 janvier 2025
        </p>
      </article>
    </>
  );
}
