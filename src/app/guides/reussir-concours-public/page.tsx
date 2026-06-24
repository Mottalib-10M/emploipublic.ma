import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Comment Réussir un Concours de la Fonction Publique',
  description: 'Guide complet pour réussir un concours de la fonction publique au Maroc : préparation stratégique, épreuves écrites et orales, conseils et erreurs à éviter.',
  alternates: { canonical: '/guides/reussir-concours-public/' },
};

export default function GuideReussirConcours() {
  const articleSchema = buildArticleSchema({
    title: 'Comment Réussir un Concours de la Fonction Publique au Maroc',
    description: 'Guide complet pour réussir un concours de la fonction publique au Maroc.',
    url: `${siteConfig.url}/guides/reussir-concours-public/`,
    datePublished: '2025-01-15',
    dateModified: '2026-01-15',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Guides', url: `${siteConfig.url}/guides/reussir-concours-public/` },
    { name: 'Réussir un concours', url: `${siteConfig.url}/guides/reussir-concours-public/` },
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
            Comment Réussir un Concours de la Fonction Publique au Maroc
          </h1>
          <p className="text-primary-100">Par {siteConfig.author.name} ({siteConfig.author.title}), janvier 2026</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 prose prose-gray max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Décrocher un poste dans la fonction publique marocaine est l&apos;objectif de milliers de diplômés chaque année. Les concours sont la voie principale d&apos;accès à ces postes convoités, et la compétition est souvent rude. Ce guide complet vous donne toutes les clés pour maximiser vos chances de réussite, de la préparation initiale à la titularisation finale.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Comprendre le système des concours</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Avant de vous lancer dans la préparation, il est essentiel de comprendre comment fonctionne le système de recrutement de la fonction publique au Maroc. Les concours sont organisés par les ministères et établissements publics en fonction de leurs besoins en ressources humaines. Chaque concours est défini par un arrêté ministériel qui précise les conditions d&apos;accès, le programme des épreuves et le nombre de postes à pourvoir.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les conditions d&apos;accès varient selon l&apos;échelle de recrutement. Pour l&apos;échelle 7, le baccalauréat est généralement requis. L&apos;échelle 9 exige une licence (Bac+3). L&apos;échelle 10 demande un master ou un diplôme d&apos;ingénieur (Bac+5). L&apos;échelle 11 est réservée aux titulaires de masters spécialisés, de doctorats ou de diplômes de grandes écoles. Par ailleurs, certains concours imposent un âge limite (souvent 40 ou 45 ans) et la nationalité marocaine.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Trouver les concours ouverts</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La première étape pour réussir un concours est d&apos;être informé à temps. Les avis de concours sont publiés dans le Bulletin Officiel du Royaume du Maroc et sur les sites web des ministères concernés. Consultez régulièrement les sources suivantes pour ne manquer aucune opportunité :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Le Bulletin Officiel en ligne (www.sgg.gov.ma)</li>
          <li>Les sites web des ministères et établissements publics</li>
          <li>Les portails d&apos;emploi public comme emploipublic.ma</li>
          <li>Les réseaux sociaux officiels des institutions</li>
          <li>Les annonces dans les journaux nationaux</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Constituer un dossier de candidature impeccable</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le dossier de candidature est votre première impression auprès de l&apos;administration. Il doit être complet, bien organisé et professionnel. Voici les documents généralement demandés :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Demande manuscrite</strong> adressée au ministre ou au directeur de l&apos;institution</li>
          <li><strong>Curriculum Vitae</strong> détaillé et actualisé (utilisez notre <Link href="/generateur-cv/" className="text-primary-600 hover:text-primary-700">générateur de CV gratuit</Link>)</li>
          <li><strong>Copies certifiées conformes</strong> de tous vos diplômes</li>
          <li><strong>Copie de la CIN</strong> (Carte d&apos;Identité Nationale)</li>
          <li><strong>Photos d&apos;identité</strong> récentes (format passeport)</li>
          <li><strong>Attestation d&apos;équivalence</strong> pour les diplômes étrangers (le cas échéant)</li>
          <li><strong>Attestations de travail</strong> pour justifier de l&apos;expérience professionnelle</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Se préparer à l&apos;épreuve écrite</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;épreuve écrite est généralement l&apos;étape la plus sélective du concours. Elle comprend habituellement un QCM (questionnaire à choix multiples) et une épreuve de rédaction. Voici comment bien se préparer à chaque type d&apos;épreuve :
        </p>
        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Le QCM</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le QCM porte généralement sur la culture générale, les connaissances de la spécialité et parfois l&apos;actualité nationale et internationale. Pour bien vous préparer, révisez les thèmes suivants : l&apos;organisation administrative du Maroc, les institutions constitutionnelles, l&apos;actualité politique et économique, le droit administratif, et les connaissances spécifiques au poste visé. Entraînez-vous avec des annales de concours antérieurs si disponibles, et chronométrez-vous pour maîtriser la gestion du temps.
        </p>
        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">La rédaction</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;épreuve de rédaction peut prendre la forme d&apos;une note de synthèse, d&apos;une dissertation ou d&apos;un commentaire de texte. Pour exceller, travaillez votre capacité d&apos;analyse, votre plan de rédaction (introduction, développement structuré, conclusion) et votre expression écrite. Entraînez-vous à rédiger dans un style administratif clair, concis et rigoureux. Soignez votre écriture, votre orthographe et la présentation de votre copie.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Réussir l&apos;épreuve orale</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Si vous êtes admissible après l&apos;écrit, vous passerez un entretien oral devant un jury composé généralement de 2 à 4 membres. L&apos;oral dure entre 15 et 30 minutes et porte sur votre parcours, vos connaissances du poste et du ministère, et votre motivation. Voici les conseils essentiels :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Préparez une présentation de vous-même (2-3 minutes) structurée et convaincante</li>
          <li>Renseignez-vous en profondeur sur le ministère, ses missions et ses projets</li>
          <li>Préparez des réponses aux questions classiques : pourquoi la fonction publique ? Pourquoi ce ministère ? Quelles sont vos qualités/défauts ?</li>
          <li>Habillez-vous de manière professionnelle et soignée</li>
          <li>Arrivez 15 minutes en avance et restez calme</li>
          <li>Parlez clairement, avec assurance mais sans arrogance</li>
          <li>Montrez votre motivation sincère pour le service public</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Le stage probatoire : la dernière étape</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Une fois admis au concours, vous serez nommé fonctionnaire stagiaire pour une période de 1 à 2 ans. Pendant ce stage probatoire, vous serez évalué sur vos compétences professionnelles, votre comportement et votre capacité d&apos;adaptation. Pour être titularisé, vous devrez obtenir une évaluation positive de votre hiérarchie. Prenez cette période très au sérieux : montrez votre engagement, votre ponctualité, votre esprit d&apos;équipe et votre volonté d&apos;apprendre.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Erreurs à éviter</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Ne pas lire attentivement l&apos;avis de concours (conditions, documents, dates)</li>
          <li>Déposer un dossier incomplet ou mal organisé</li>
          <li>Sous-estimer la préparation à l&apos;écrit</li>
          <li>Ne pas s&apos;entraîner aux conditions réelles (temps, stress)</li>
          <li>Arriver en retard le jour de l&apos;épreuve</li>
          <li>Négliger la présentation de la copie écrite</li>
          <li>Ne pas se renseigner sur le ministère avant l&apos;oral</li>
          <li>Montrer un manque de motivation pour le service public</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Réussir un concours de la fonction publique au Maroc demande de la méthode, de la persévérance et une préparation rigoureuse. En suivant les conseils de ce guide, en vous préparant systématiquement et en restant motivé, vous maximiserez vos chances de décrocher le poste de vos rêves dans l&apos;administration publique marocaine. N&apos;oubliez pas de consulter régulièrement les avis de concours sur notre plateforme et d&apos;utiliser notre générateur de CV gratuit pour constituer un dossier de candidature impeccable.
        </p>

        <div className="mt-10 p-6 bg-primary-50 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-2">Outils recommandés</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/generateur-cv/" className="btn-primary text-sm">Créer mon CV</Link>
            <Link href="/concours/" className="btn-secondary text-sm">Voir les concours</Link>
            <Link href="/salaires-fonction-publique/" className="btn-secondary text-sm">Grille des salaires</Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8 italic">
          Par {siteConfig.author.name} ({siteConfig.author.title}), publié le 15 janvier 2026
        </p>
      </article>
    </>
  );
}
