import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Comment Reussir un Concours de la Fonction Publique',
  description: 'Guide complet pour reussir un concours de la fonction publique au Maroc. Preparation, epreuves, conseils et strategies.',
  alternates: { canonical: '/guides/reussir-concours-public/' },
};

export default function GuideReussirConcours() {
  const articleSchema = buildArticleSchema({
    title: 'Comment Reussir un Concours de la Fonction Publique au Maroc',
    description: 'Guide complet pour reussir un concours de la fonction publique au Maroc.',
    url: `${siteConfig.url}/guides/reussir-concours-public/`,
    datePublished: '2025-01-15',
    dateModified: '2025-01-15',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Guides', url: `${siteConfig.url}/guides/reussir-concours-public/` },
    { name: 'Reussir un concours', url: `${siteConfig.url}/guides/reussir-concours-public/` },
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
            Comment Reussir un Concours de la Fonction Publique au Maroc
          </h1>
          <p className="text-primary-100">Par {siteConfig.author.name} ({siteConfig.author.title}) — Janvier 2025</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 prose prose-gray max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Decrocher un poste dans la fonction publique marocaine est l&apos;objectif de milliers de diplomes chaque annee. Les concours sont la voie principale d&apos;acces a ces postes convoites, et la competition est souvent rude. Ce guide complet vous donne toutes les cles pour maximiser vos chances de reussite, de la preparation initiale a la titularisation finale.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Comprendre le systeme des concours</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Avant de vous lancer dans la preparation, il est essentiel de comprendre comment fonctionne le systeme de recrutement de la fonction publique au Maroc. Les concours sont organises par les ministeres et etablissements publics en fonction de leurs besoins en ressources humaines. Chaque concours est defini par un arrete ministeriel qui precise les conditions d&apos;acces, le programme des epreuves et le nombre de postes a pourvoir.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les conditions d&apos;acces varient selon l&apos;echelle de recrutement. Pour l&apos;echelle 7, le baccalaureat est generalement requis. L&apos;echelle 9 exige une licence (Bac+3). L&apos;echelle 10 demande un master ou un diplome d&apos;ingenieur (Bac+5). L&apos;echelle 11 est reservee aux titulaires de masters specialises, de doctorats ou de diplomes de grandes ecoles. Par ailleurs, certains concours imposent un age limite (souvent 40 ou 45 ans) et la nationalite marocaine.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Trouver les concours ouverts</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La premiere etape pour reussir un concours est d&apos;etre informe a temps. Les avis de concours sont publies dans le Bulletin Officiel du Royaume du Maroc et sur les sites web des ministeres concernees. Consultez regulierement les sources suivantes pour ne manquer aucune opportunite :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Le Bulletin Officiel en ligne (www.sgg.gov.ma)</li>
          <li>Les sites web des ministeres et etablissements publics</li>
          <li>Les portails d&apos;emploi public comme emploipublic.ma</li>
          <li>Les reseaux sociaux officiels des institutions</li>
          <li>Les annonces dans les journaux nationaux</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Constituer un dossier de candidature impeccable</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le dossier de candidature est votre premiere impression aupres de l&apos;administration. Il doit etre complet, bien organise et professionnel. Voici les documents generalement demandes :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Demande manuscrite</strong> adressee au ministre ou au directeur de l&apos;institution</li>
          <li><strong>Curriculum Vitae</strong> detaille et actualise (utilisez notre <Link href="/generateur-cv/" className="text-primary-600 hover:text-primary-700">generateur de CV gratuit</Link>)</li>
          <li><strong>Copies certifiees conformes</strong> de tous vos diplomes</li>
          <li><strong>Copie de la CIN</strong> (Carte d&apos;Identite Nationale)</li>
          <li><strong>Photos d&apos;identite</strong> recentes (format passeport)</li>
          <li><strong>Attestation d&apos;equivalence</strong> pour les diplomes etrangers (le cas echeant)</li>
          <li><strong>Attestations de travail</strong> pour justifier de l&apos;experience professionnelle</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Se preparer a l&apos;epreuve ecrite</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;epreuve ecrite est generalement l&apos;etape la plus selective du concours. Elle comprend habituellement un QCM (questionnaire a choix multiples) et une epreuve de redaction. Voici comment bien se preparer a chaque type d&apos;epreuve :
        </p>
        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Le QCM</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le QCM porte generalement sur la culture generale, les connaissances de la specialite et parfois l&apos;actualite nationale et internationale. Pour bien vous preparer, revisez les themes suivants : l&apos;organisation administrative du Maroc, les institutions constitutionnelles, l&apos;actualite politique et economique, le droit administratif, et les connaissances specifiques au poste vise. Entrainez-vous avec des annales de concours anterieurs si disponibles, et chronometrez-vous pour maitriser la gestion du temps.
        </p>
        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">La redaction</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;epreuve de redaction peut prendre la forme d&apos;une note de synthese, d&apos;une dissertation ou d&apos;un commentaire de texte. Pour exceller, travaillez votre capacite d&apos;analyse, votre plan de redaction (introduction, developpement structure, conclusion) et votre expression ecrite. Entrainez-vous a rediger dans un style administratif clair, concis et rigoureux. Soignez votre ecriture, votre orthographe et la presentation de votre copie.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Reussir l&apos;epreuve orale</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Si vous etes admissible apres l&apos;ecrit, vous passerez un entretien oral devant un jury compose generalement de 2 a 4 membres. L&apos;oral dure entre 15 et 30 minutes et porte sur votre parcours, vos connaissances du poste et du ministere, et votre motivation. Voici les conseils essentiels :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Preparez une presentation de vous-meme (2-3 minutes) structuree et convaincante</li>
          <li>Renseignez-vous en profondeur sur le ministere, ses missions et ses projets</li>
          <li>Preparez des reponses aux questions classiques : pourquoi la fonction publique ? Pourquoi ce ministere ? Quelles sont vos qualites/defauts ?</li>
          <li>Habillez-vous de maniere professionnelle et soignee</li>
          <li>Arrivez 15 minutes en avance et restez calme</li>
          <li>Parlez clairement, avec assurance mais sans arrogance</li>
          <li>Montrez votre motivation sincere pour le service public</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Le stage probatoire : la derniere etape</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Une fois admis au concours, vous serez nomme fonctionnaire stagiaire pour une periode de 1 a 2 ans. Pendant ce stage probatoire, vous serez evalue sur vos competences professionnelles, votre comportement et votre capacite d&apos;adaptation. Pour etre titularise, vous devrez obtenir une evaluation positive de votre hierarchie. Prenez cette periode tres au serieux : montrez votre engagement, votre ponctualite, votre esprit d&apos;equipe et votre volonte d&apos;apprendre.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Erreurs a eviter</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Ne pas lire attentivement l&apos;avis de concours (conditions, documents, dates)</li>
          <li>Deposer un dossier incomplet ou mal organise</li>
          <li>Sous-estimer la preparation a l&apos;ecrit</li>
          <li>Ne pas s&apos;entrainer aux conditions reelles (temps, stress)</li>
          <li>Arriver en retard le jour de l&apos;epreuve</li>
          <li>Negliger la presentation de la copie ecrite</li>
          <li>Ne pas se renseigner sur le ministere avant l&apos;oral</li>
          <li>Montrer un manque de motivation pour le service public</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Reussir un concours de la fonction publique au Maroc demande de la methode, de la perseverance et une preparation rigoureuse. En suivant les conseils de ce guide, en vous preparant systematiquement et en restant motive, vous maximiserez vos chances de decrocher le poste de vos reves dans l&apos;administration publique marocaine. N&apos;oubliez pas de consulter regulierement les avis de concours sur notre plateforme et d&apos;utiliser notre generateur de CV gratuit pour constituer un dossier de candidature impeccable.
        </p>

        <div className="mt-10 p-6 bg-primary-50 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-2">Outils recommandes</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/generateur-cv/" className="btn-primary text-sm">Creer mon CV</Link>
            <Link href="/concours/" className="btn-secondary text-sm">Voir les concours</Link>
            <Link href="/salaires-fonction-publique/" className="btn-secondary text-sm">Grille des salaires</Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8 italic">
          Par {siteConfig.author.name} ({siteConfig.author.title}) — Publie le 15 janvier 2025
        </p>
      </article>
    </>
  );
}
