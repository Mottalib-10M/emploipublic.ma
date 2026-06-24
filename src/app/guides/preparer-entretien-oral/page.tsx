import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Préparer l\'Entretien Oral d\'un Concours de Fonction Publique',
  description: 'Guide détaillé pour préparer et réussir l\'épreuve orale d\'un concours de la fonction publique au Maroc. Questions fréquentes, conseils et erreurs à éviter.',
  alternates: { canonical: '/guides/preparer-entretien-oral/' },
};

export default function GuideEntretienOral() {
  const articleSchema = buildArticleSchema({
    title: 'Préparer l\'Entretien Oral du Concours de la Fonction Publique',
    description: 'Guide pour réussir l\'épreuve orale d\'un concours public au Maroc.',
    url: `${siteConfig.url}/guides/preparer-entretien-oral/`,
    datePublished: '2025-01-20',
    dateModified: '2026-01-20',
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
            <Link href="/guides/" className="hover:text-white">Guides</Link>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Préparer l&apos;Entretien Oral d&apos;un Concours de la Fonction Publique
          </h1>
          <p className="text-primary-100">Par {siteConfig.author.name} ({siteConfig.author.title}), janvier 2026</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 prose prose-gray max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          L&apos;épreuve orale est souvent l&apos;étape décisive d&apos;un concours de la fonction publique. Après avoir réussi l&apos;écrit, c&apos;est devant un jury que vous devez convaincre de votre motivation, de vos compétences et de votre aptitude à exercer les fonctions. Ce guide vous donne toutes les clés pour vous préparer efficacement et aborder l&apos;entretien avec confiance.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Comprendre l&apos;objectif de l&apos;entretien oral</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;entretien oral d&apos;un concours de la fonction publique n&apos;est pas un simple entretien d&apos;embauche. Il s&apos;agit d&apos;une épreuve formelle qui vise à évaluer plusieurs aspects de votre candidature : vos connaissances générales et spécialisées, votre compréhension des missions du ministère et du poste, votre motivation pour le service public, votre capacité d&apos;expression orale et votre aptitude à exercer les fonctions. Le jury est généralement composé de 2 à 4 membres : un président de jury, des représentants du ministère et parfois un spécialiste du domaine.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;entretien dure généralement entre 15 et 30 minutes. Il commence souvent par une présentation du candidat (2-3 minutes), suivie de questions sur le parcours, les connaissances et la motivation. Certains jurys peuvent également poser des questions d&apos;actualité ou des mises en situation professionnelle.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les 10 questions les plus fréquentes</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Voici les questions que vous avez le plus de chances de rencontrer lors de l&apos;oral, avec des conseils pour y répondre :
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">1. &quot;Présentez-vous&quot;</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          C&apos;est presque toujours la première question. Préparez une présentation structurée de 2-3 minutes qui couvre : votre identité, votre parcours académique, vos expériences professionnelles pertinentes, vos compétences clés et votre motivation pour le poste. Soyez concis et allez à l&apos;essentiel. Évitez de réciter votre CV mot pour mot ; mettez plutôt en avant les éléments les plus pertinents pour le concours.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">2. &quot;Pourquoi la fonction publique ?&quot;</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le jury veut évaluer votre motivation pour le service public. Parlez de votre engagement envers l&apos;intérêt général, votre volonté de contribuer au développement du pays, la stabilité de carrière, mais aussi les valeurs du service public : égalité, continuité, adaptabilité. Évitez de mentionner uniquement la sécurité de l&apos;emploi ou le salaire.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">3. &quot;Que savez-vous de notre ministère ?&quot;</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cette question est un test de préparation. Vous devez connaître les missions principales du ministère, son organigramme, ses grands projets en cours, ses chiffres clés (effectif, budget) et son site web. Consultez les dernières actualités du ministère dans les jours précédant l&apos;entretien. Mentionnez des projets spécifiques pour montrer votre intérêt sincère.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">4. &quot;Quelles sont vos qualités et vos défauts ?&quot;</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Question classique mais piège. Pour les qualités, choisissez 2-3 qualités pertinentes pour le poste et illustrez-les avec des exemples concrets. Pour les défauts, mentionnez un vrai défaut (pas un faux défaut déguisé en qualité) mais montrez que vous en êtes conscient et que vous travaillez dessus. Par exemple : &quot;J&apos;ai tendance à être perfectionniste, ce qui me pousse parfois à passer trop de temps sur les détails, mais j&apos;apprends à mieux gérer mes priorités.&quot;
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">5. &quot;Comment envisagez-vous votre carrière ?&quot;</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Montrez que vous vous projetez dans la fonction publique à long terme. Parlez de votre volonté d&apos;évoluer, de prendre des responsabilités, de vous former continuellement et de contribuer à la modernisation de l&apos;administration. Soyez ambitieux mais réaliste.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">6. &quot;Décrivez une situation difficile que vous avez gérée&quot;</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Utilisez la méthode STAR (Situation, Tâche, Action, Résultat) pour structurer votre réponse. Décrivez brièvement le contexte, ce qu&apos;on attendait de vous, les actions que vous avez prises et le résultat obtenu. Choisissez une situation qui met en valeur des qualités utiles pour le poste.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">7 à 10. Autres questions fréquentes</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>&quot;Que pensez-vous de la digitalisation de l&apos;administration ?&quot; : montrez votre ouverture à la modernisation et votre culture numérique.</li>
          <li>&quot;Comment travaillez-vous en équipe ?&quot; : donnez des exemples concrets de collaboration réussie.</li>
          <li>&quot;Que feriez-vous dans telle situation professionnelle ?&quot; : restez pragmatique, respectueux de la hiérarchie et orienté solutions.</li>
          <li>&quot;Avez-vous des questions ?&quot; : oui, toujours ! Préparez 2-3 questions pertinentes sur le poste, l&apos;équipe ou les projets du ministère.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conseils pratiques pour le jour J</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Tenue vestimentaire :</strong> costume ou tailleur sobre, couleurs neutres, pas d&apos;accessoires voyants</li>
          <li><strong>Ponctualité :</strong> arrivez 15-20 minutes en avance pour vous installer et vous calmer</li>
          <li><strong>Communication non verbale :</strong> regard franc, poignée de main ferme, posture droite, sourire naturel</li>
          <li><strong>Expression orale :</strong> parlez clairement, à un rythme modéré, évitez le jargon, structurez vos réponses</li>
          <li><strong>Gestion du stress :</strong> respirez profondément, prenez le temps de réfléchir avant de répondre, n&apos;hésitez pas à demander de répéter une question</li>
          <li><strong>Documents :</strong> apportez votre convocation, votre CIN, une copie de votre CV et vos diplômes originaux</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les erreurs fatales à l&apos;oral</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Arriver en retard ou sans les documents requis</li>
          <li>Ne pas connaître le ministère et ses missions</li>
          <li>Critiquer l&apos;administration ou les fonctionnaires</li>
          <li>Montrer un manque de motivation (&quot;c&apos;est pour la sécurité de l&apos;emploi&quot;)</li>
          <li>Être trop familier ou trop distant avec le jury</li>
          <li>Mentir sur son parcours ou ses compétences</li>
          <li>Ne pas avoir de questions à poser à la fin</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;entretien oral est une opportunité de montrer votre personnalité et votre motivation au-delà de ce que révèlent les épreuves écrites. Avec une préparation méthodique, une connaissance approfondie du ministère et du poste, et une attitude professionnelle et motivée, vous mettrez toutes les chances de votre côté. Rappelez-vous que le jury cherche avant tout des candidats compétents, motivés et capables de s&apos;intégrer dans l&apos;équipe et de servir l&apos;intérêt général.
        </p>

        <div className="mt-10 p-6 bg-primary-50 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-2">Poursuivez votre préparation</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/guides/reussir-concours-public/" className="btn-secondary text-sm">Guide complet concours</Link>
            <Link href="/guides/lettre-motivation-fonction-publique/" className="btn-secondary text-sm">Lettre de motivation</Link>
            <Link href="/generateur-cv/" className="btn-primary text-sm">Créer mon CV</Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8 italic">
          Par {siteConfig.author.name} ({siteConfig.author.title}), publié le 20 janvier 2026
        </p>
      </article>
    </>
  );
}
