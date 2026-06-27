import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Notre Méthodologie : Sources Officielles et Grilles Salariales',
  description: 'Méthodologie d\'Emploi Public Maroc : sources fonction publique, grilles indiciaires, Loi organique, et processus de vérification des données salariales.',
  alternates: { canonical: '/methodologie/' },
};

export default function MethodologiePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Notre Méthodologie', url: `${siteConfig.url}/methodologie/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Notre Méthodologie</h1>
          <p className="text-primary-100 text-lg">Transparence, rigueur et sources officielles</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Notre Méthodologie</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <p>
            <strong>Emploi Public Maroc</strong> est une plateforme d&apos;information dédiée à la fonction publique marocaine. Nous fournissons des données sur les concours, les grilles de salaires, les ministères et les carrières dans l&apos;administration. Cette page explique en détail nos sources de données, nos méthodes de calcul, et notre processus de vérification afin que vous puissiez évaluer la fiabilité de nos informations en toute transparence.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sources de données officielles</h2>

          <p>
            Toutes les informations publiées sur Emploi Public Maroc proviennent de sources officielles marocaines. Nous ne nous appuyons jamais sur des sources non vérifiées, des rumeurs ou des estimations approximatives. Voici le détail de nos sources principales.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Textes législatifs et réglementaires</h3>

          <p>
            Le cadre juridique de la fonction publique marocaine constitue le socle de toutes nos informations. Nous référençons directement les textes suivants :
          </p>

          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Dahir n 1-58-008 portant Statut Général de la Fonction Publique :</strong> Ce texte fondateur régit l&apos;ensemble des fonctionnaires de l&apos;État. Nous y référençons les conditions de recrutement, les droits et obligations des fonctionnaires, les régimes disciplinaires, et les règles d&apos;avancement.</li>
            <li><strong>Loi organique n 130-13 relative à la Loi de Finances :</strong> Cette loi organique définit le cadre budgétaire dans lequel s&apos;inscrivent les rémunérations de la fonction publique. Nous l&apos;utilisons pour comprendre la structure des postes budgétaires et les enveloppes de recrutement.</li>
            <li><strong>Loi de Finances annuelle :</strong> Chaque Loi de Finances fixe le nombre de postes budgétaires ouverts au recrutement pour l&apos;année en cours. Nous suivons ces publications au Bulletin Officiel pour mettre à jour notre base de données des concours.</li>
            <li><strong>Statuts particuliers :</strong> Chaque corps de fonctionnaires dispose d&apos;un statut particulier qui définit les échelles, grades, et conditions d&apos;avancement spécifiques. Nous référençons ces statuts pour les grilles de salaires par corps (enseignants, administrateurs, techniciens, ingénieurs, médecins, etc.).</li>
            <li><strong>Décrets et arrêtés relatifs aux indemnités :</strong> Les indemnités complémentaires (indemnité de résidence, indemnité de fonction, indemnités spécifiques à certains corps) sont fixées par décret ou arrêté. Nous documentons ces textes pour nos calculs de rémunération.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Grilles indiciaires officielles</h3>

          <p>
            Les grilles indiciaires constituent la base de calcul des salaires dans la fonction publique marocaine. Chaque fonctionnaire est classé dans une échelle (1 à hors-échelle) et un échelon qui détermine son indice de rémunération. Nos sources pour ces grilles sont :
          </p>

          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Bulletin Officiel :</strong> Les grilles indiciaires et leurs revalorisations sont publiées au Bulletin Officiel du Royaume du Maroc. Chaque modification de la valeur du point d&apos;indice ou de la structure des grilles est tracée à partir de cette source.</li>
            <li><strong>Ministère de l&apos;Économie et des Finances :</strong> Les circulaires du Ministère relatives aux rémunérations publiques fournissent les barèmes actualisés des traitements de base et des indemnités.</li>
            <li><strong>Ministère de la Transition Numérique et de la Réforme de l&apos;Administration :</strong> Ce ministère pilote la modernisation de la fonction publique et publie des données sur les effectifs, les recrutements et les réformes statutaires.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Données sur les concours</h3>

          <p>
            Les informations sur les concours de la fonction publique proviennent des sources suivantes :
          </p>

          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Portails officiels des ministères :</strong> Chaque ministère publie les avis de concours sur son site web officiel. Nous collectons ces avis et les centralisons sur notre plateforme.</li>
            <li><strong>Bulletin Officiel :</strong> Les arrêtés d&apos;ouverture de concours sont publiés au Bulletin Officiel, ce qui constitue la source la plus formelle.</li>
            <li><strong>Portail emploi-public.ma :</strong> Le portail gouvernemental des concours de la fonction publique est une source que nous consultons régulièrement pour vérifier les dates, conditions et postes ouverts.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Méthodologie de calcul des salaires</h2>

          <p>
            La grille des salaires présentée sur Emploi Public Maroc repose sur la formule officielle de calcul de la rémunération dans la fonction publique marocaine. Cette formule décompose le salaire en plusieurs composantes :
          </p>

          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Traitement de base :</strong> Calculé en multipliant l&apos;indice correspondant à l&apos;échelle et l&apos;échelon du fonctionnaire par la valeur du point d&apos;indice. La valeur du point d&apos;indice est fixée par décret et révisée périodiquement dans le cadre du dialogue social.</li>
            <li><strong>Indemnité de résidence :</strong> Un pourcentage du traitement de base qui varie selon la zone géographique d&apos;affectation (zone A, B ou C). Nous appliquons les taux en vigueur pour chaque zone.</li>
            <li><strong>Indemnités complémentaires :</strong> Les indemnités spécifiques à chaque corps (indemnité d&apos;encadrement, indemnité de technicité, indemnité de risque, etc.) sont ajoutées selon les barèmes fixés par les textes réglementaires propres à chaque statut particulier.</li>
            <li><strong>Retenues obligatoires :</strong> Les cotisations salariales (CMR pour la retraite, AMO pour l&apos;assurance maladie, IR pour l&apos;impôt sur le revenu) sont déduites selon les taux en vigueur. L&apos;IR est calculé selon le barème progressif de la DGI après déduction des cotisations sociales.</li>
            <li><strong>Salaire net :</strong> Le résultat final après déduction de toutes les retenues obligatoires du salaire brut.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Fiches ministères</h2>

          <p>
            Les fiches descriptives de chaque ministère et organisme public sont compilées à partir des organigrammes officiels publiés sur les sites web des ministères, des décrets d&apos;attribution et d&apos;organisation, et des données budgétaires de la Loi de Finances. Chaque fiche inclut les missions du ministère, son organisation, les corps de fonctionnaires qui y sont rattachés, et les concours typiquement organisés.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Générateur de CV</h2>

          <p>
            Notre générateur de CV est un outil gratuit conçu pour aider les candidats à la fonction publique à produire des CV professionnels. Les modèles proposés intègrent les bonnes pratiques de candidature dans le secteur public marocain : format structuré, mention des diplômes et formations, expérience professionnelle chronologique, et compétences linguistiques. L&apos;outil fonctionne entièrement dans votre navigateur et aucune donnée personnelle n&apos;est transmise à nos serveurs.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Processus de vérification</h2>

          <p>
            La fiabilité de nos informations repose sur un processus de vérification structuré :
          </p>

          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Vérification à la source :</strong> Chaque information est vérifiée contre le texte officiel (Bulletin Officiel, publication ministérielle, grille indiciaire) avant publication sur notre site.</li>
            <li><strong>Recoupement :</strong> Les données salariales sont recoupées entre les grilles indiciaires officielles, les circulaires du Ministère des Finances, et les informations disponibles auprès des syndicats de la fonction publique.</li>
            <li><strong>Suivi du Bulletin Officiel :</strong> Nous effectuons une veille régulière du Bulletin Officiel pour détecter toute modification des grilles indiciaires, des statuts particuliers ou des conditions de concours.</li>
            <li><strong>Mises à jour lors du dialogue social :</strong> Les accords issus du dialogue social (revalorisations salariales, création de nouvelles indemnités, modification des conditions d&apos;avancement) sont intégrés dès leur officialisation.</li>
            <li><strong>Retour des utilisateurs :</strong> Nous encourageons les fonctionnaires et candidats à signaler toute erreur ou incohérence. Chaque signalement est vérifié et corrigé dans les plus brefs délais.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Calendrier de mise à jour</h2>

          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Concours :</strong> Mis à jour en continu au fur et à mesure de la publication des avis de concours par les ministères.</li>
            <li><strong>Grilles de salaires :</strong> Mises à jour lors de chaque revalorisation officielle (modification du point d&apos;indice, nouveau statut particulier, accord social).</li>
            <li><strong>Fiches ministères :</strong> Revues annuellement ou lors de remaniements ministériels qui modifient les attributions.</li>
            <li><strong>Guides :</strong> Revus semestriellement pour s&apos;assurer que les conseils et procédures restent actuels.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limites et avertissements</h2>

          <p>
            Malgré notre engagement envers la précision, les limitations suivantes s&apos;appliquent :
          </p>

          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Caractère informatif :</strong> Les informations publiées sur Emploi Public Maroc ont une vocation strictement informative. Elles ne remplacent pas les publications officielles du Bulletin Officiel ni les communications des ministères.</li>
            <li><strong>Salaires indicatifs :</strong> Les salaires présentés sont des estimations basées sur les grilles indiciaires officielles. Le salaire réel peut varier en fonction des indemnités spécifiques, des situations familiales, et des régimes fiscaux particuliers.</li>
            <li><strong>Délai de mise à jour :</strong> Un délai peut exister entre la publication d&apos;un texte officiel et sa prise en compte sur notre site. Pour les décisions importantes (inscription à un concours, vérification d&apos;éligibilité), nous recommandons toujours de consulter la source officielle.</li>
            <li><strong>Spécificités des établissements publics :</strong> Les établissements et entreprises publics (ONCF, OCP, RAM, etc.) disposent de leurs propres grilles salariales et conditions d&apos;emploi qui peuvent différer du Statut Général de la Fonction Publique.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Indépendance</h2>

          <p>
            <strong>Emploi Public Maroc</strong> est une plateforme indépendante. Nous ne sommes affiliés à aucun ministère, aucun syndicat, ni aucun organisme de préparation aux concours. Nos informations sont produites de manière indépendante et nos recommandations sont fondées exclusivement sur les données officielles disponibles.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>

          <p>
            Pour toute question relative à notre méthodologie ou pour signaler une erreur :
          </p>
          <p className="text-primary-600 font-semibold">
            <a href={`mailto:${siteConfig.contact}`}>{siteConfig.contact}</a>
          </p>
        </article>

        <div className="mt-10 p-6 bg-primary-50 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-2">Explorez nos outils</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/salaires-fonction-publique/" className="btn-primary text-sm">Grille des salaires</Link>
            <Link href="/concours/" className="btn-secondary text-sm">Concours</Link>
            <Link href="/generateur-cv/" className="btn-secondary text-sm">Générateur de CV</Link>
          </div>
        </div>
      </div>
    </>
  );
}
