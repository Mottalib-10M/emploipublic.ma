import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildFAQSchema, buildBreadcrumbSchema } from '@/lib/seo';
import { concoursExamples } from '@/data/concours-types';
import { ministeres } from '@/data/ministeres';

export const metadata: Metadata = {
  title: 'Emploi Public au Maroc : Concours, Offres et Outils 2026',
  description: 'Emploi public au Maroc : concours de la fonction publique, offres par ministère, grille des salaires et générateur de CV gratuit. Réussissez votre carrière.',
  alternates: { canonical: '/' },
};

const faqs = [
  {
    question: 'Comment postuler à un emploi dans la fonction publique au Maroc ?',
    answer: 'Pour postuler à un emploi public au Maroc, vous devez surveiller les avis de concours publiés au Bulletin Officiel et sur les sites des ministères. Ensuite, vous constituez un dossier de candidature comprenant une demande manuscrite, votre CV, des copies certifiées de vos diplômes, votre CIN et des photos d\'identité. Le dossier doit être déposé avant la date limite indiquée dans l\'avis.',
  },
  {
    question: 'Quels diplômes sont requis pour la fonction publique marocaine ?',
    answer: 'Les diplômes requis varient selon l\'échelle de recrutement. L\'échelle 7 nécessite le baccalauréat, l\'échelle 9 exige une licence (Bac+3), l\'échelle 10 demande un master ou diplôme d\'ingénieur (Bac+5), et l\'échelle 11 requiert un master ou doctorat. Certains postes techniques exigent des diplômes spécifiques (médecine, ingénierie, etc.).',
  },
  {
    question: 'Quel est le salaire d\'un fonctionnaire au Maroc ?',
    answer: 'Le salaire net d\'un fonctionnaire marocain varie de 2 700 DH pour l\'échelle 1 à plus de 18 000 DH pour les hauts fonctionnaires (hors échelle). Un cadre à l\'échelle 10 débute à environ 6 300 DH net, tandis qu\'un cadre supérieur à l\'échelle 11 démarre à environ 7 650 DH net. Les salaires progressent avec les échelons et l\'ancienneté.',
  },
  {
    question: 'Quelles sont les étapes d\'un concours de la fonction publique au Maroc ?',
    answer: 'Un concours de la fonction publique comprend 6 étapes : (1) Publication de l\'avis au Bulletin Officiel, (2) Dépôt du dossier de candidature, (3) Épreuve écrite (QCM et rédaction), (4) Épreuve orale devant un jury, (5) Publication des résultats, (6) Stage probatoire de 1 à 2 ans avant titularisation.',
  },
  {
    question: 'Comment utiliser le générateur de CV pour la fonction publique ?',
    answer: 'Notre générateur de CV gratuit vous guide étape par étape : renseignez vos informations personnelles, expériences, formations, compétences et langues. Choisissez parmi 3 modèles professionnels (Classique, Moderne, Professionnel) et téléchargez votre CV au format PDF via la fonction d\'impression du navigateur. Vos données sont sauvegardées localement.',
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mottalib Radif",
  "jobTitle": "Personal Finance Expert",
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "INSEAD"
  },
  "url": "https://emploipublic.ma/a-propos/"
};

export default function HomePage() {
  const faqSchema = buildFAQSchema(faqs);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
  ]);

  const openConcours = concoursExamples.filter((c) => c.statut === 'ouvert').slice(0, 4);
  const totalPostes = concoursExamples.reduce((sum, c) => sum + c.nombrePostes, 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Emploi Public au Maroc : Concours, Offres et Outils
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed">
              {siteConfig.tagline}. Trouvez les derniers concours, consultez la grille des salaires et créez votre CV professionnel gratuitement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/concours/" className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors text-lg">
                Voir les concours
              </Link>
              <Link href="/generateur-cv/" className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-400 transition-colors border border-primary-400 text-lg">
                Créer mon CV gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600">{ministeres.length}</div>
              <div className="text-sm text-gray-600 mt-1">Ministères et organismes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">{concoursExamples.length}+</div>
              <div className="text-sm text-gray-600 mt-1">Concours référencés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">{totalPostes.toLocaleString('fr-FR')}</div>
              <div className="text-sm text-gray-600 mt-1">Postes ouverts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">3</div>
              <div className="text-sm text-gray-600 mt-1">Modèles de CV gratuits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Concours */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-title">Concours ouverts</h2>
            <p className="section-subtitle">Les derniers concours de la fonction publique au Maroc</p>
          </div>
          <Link href="/concours/" className="btn-secondary text-sm hidden sm:inline-flex">
            Voir tout
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openConcours.map((c) => (
            <div key={c.id} className="card p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-100 text-green-800">
                  Ouvert
                </span>
                <span className="text-xs text-gray-500">{c.echelle}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{c.titre}</h3>
              <p className="text-sm text-primary-600 font-medium mb-2">{c.ministere}</p>
              <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-3">
                <span>{c.nombrePostes} postes</span>
                <span>{c.region}</span>
                <span>Limite : {c.dateLimite}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 sm:hidden">
          <Link href="/concours/" className="btn-primary">
            Voir tous les concours
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Outils et ressources</h2>
          <p className="section-subtitle text-center">Tout ce dont vous avez besoin pour réussir dans la fonction publique</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Link href="/generateur-cv/" className="card p-8 text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Générateur de CV</h3>
              <p className="text-sm text-gray-600">Créez un CV professionnel gratuitement avec nos 3 modèles optimisés pour la fonction publique.</p>
            </Link>
            <Link href="/salaires-fonction-publique/" className="card p-8 text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Grille des salaires</h3>
              <p className="text-sm text-gray-600">Consultez les salaires de la fonction publique par échelle, grade et échelon. De l&apos;échelle 1 à hors échelle.</p>
            </Link>
            <Link href="/ministeres/" className="card p-8 text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Par ministère</h3>
              <p className="text-sm text-gray-600">Explorez les {ministeres.length} ministères et organismes publics. Découvrez leurs concours et postes disponibles.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* How to succeed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-title">Comment réussir un concours de la fonction publique</h2>
        <p className="section-subtitle">Guide complet des étapes et conseils pour décrocher un poste dans l&apos;administration publique marocaine</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              step: '1',
              title: 'Surveillez les annonces',
              desc: 'Consultez régulièrement le Bulletin Officiel, les sites des ministères et notre plateforme pour ne manquer aucun concours.',
            },
            {
              step: '2',
              title: 'Préparez votre dossier',
              desc: 'Rassemblez tous les documents nécessaires : diplômes, CIN, photos, CV. Utilisez notre générateur de CV pour un dossier professionnel.',
            },
            {
              step: '3',
              title: 'Révisez stratégiquement',
              desc: 'Concentrez-vous sur la culture générale, les connaissances de la spécialité et les techniques de rédaction administrative.',
            },
            {
              step: '4',
              title: 'Réussissez l\'écrit',
              desc: 'Maîtrisez le QCM, la note de synthèse et la dissertation. Gérez bien votre temps et soignez la présentation.',
            },
            {
              step: '5',
              title: 'Préparez l\'oral',
              desc: 'Travaillez votre présentation, vos connaissances du poste et du ministère. Montrez votre motivation pour le service public.',
            },
            {
              step: '6',
              title: 'Réussissez le stage',
              desc: 'Pendant le stage probatoire (1-2 ans), montrez votre engagement et vos compétences pour être titularisé.',
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/guides/reussir-concours-public/" className="btn-primary">
            Lire le guide complet
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Questions fréquentes</h2>
          <p className="section-subtitle text-center">Tout ce que vous devez savoir sur l&apos;emploi public au Maroc</p>
          <div className="space-y-4 mt-8">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-lg">
                <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 hover:text-primary-600 transition-colors list-none flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Emploi Public au Maroc : Guide Complet de la Fonction Publique</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            L&apos;emploi public au Maroc représente l&apos;un des secteurs les plus recherchés par les diplômés marocains. Avec plus de 800 000 fonctionnaires répartis dans les différents ministères, établissements publics et collectivités territoriales, la fonction publique marocaine est le premier employeur du pays. Chaque année, des milliers de concours sont organisés pour recruter de nouveaux agents dans des domaines aussi variés que l&apos;éducation, la santé, la justice, les finances et l&apos;administration territoriale.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Le système de la fonction publique au Maroc</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            La fonction publique marocaine est régie par le Dahir n 1-58-008 du 24 février 1958 portant statut général de la fonction publique, ainsi que par de nombreux statuts particuliers propres à chaque corps de fonctionnaires. Le système est organisé en échelles de rémunération allant de l&apos;échelle 1 (personnel d&apos;exécution) à l&apos;échelle 11 (cadres supérieurs), avec une catégorie hors échelle pour les hauts fonctionnaires. Chaque échelle comprend plusieurs échelons, et la progression de carrière se fait à l&apos;ancienneté ou au mérite, par le biais de concours internes ou d&apos;examens professionnels.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Les concours de la fonction publique</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le concours est la voie principale d&apos;accès à la fonction publique au Maroc. Il garantit l&apos;égalité des chances entre les candidats et assure le recrutement des profils les plus compétents. Les concours sont organisés par les ministères et les établissements publics, et les avis sont publiés au Bulletin Officiel ainsi que sur les sites web des institutions concernées. Le processus comprend généralement une épreuve écrite (QCM et rédaction) suivie d&apos;une épreuve orale pour les candidats admissibles.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pour réussir un concours de la fonction publique, il est essentiel de bien se préparer. La préparation doit couvrir les connaissances générales (culture générale, actualité marocaine, droit administratif), les connaissances de la spécialité (selon le poste visé) et les techniques de rédaction administrative. Les candidats doivent également maîtriser la gestion du temps pendant les épreuves et soigner la présentation de leurs copies.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Les principaux employeurs publics</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le Ministère de l&apos;Éducation Nationale est de loin le plus grand employeur public au Maroc, avec environ 300 000 fonctionnaires. Il organise chaque année des concours massifs pour recruter des professeurs dans toutes les disciplines. Le Ministère de la Santé, avec ses 55 000 fonctionnaires, recrute régulièrement des médecins, infirmiers et pharmaciens. Les Forces Armées Royales emploient environ 200 000 personnes, tandis que les collectivités territoriales comptent près de 150 000 agents.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            D&apos;autres ministères importants incluent le Ministère de l&apos;Intérieur (45 000 fonctionnaires), le Ministère des Finances (25 000), le Ministère de la Justice (18 000) et le Ministère de l&apos;Agriculture (15 000). Chacun de ces ministères offre des carrières variées et des perspectives d&apos;évolution intéressantes pour les candidats motivés.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Les salaires de la fonction publique</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les salaires dans la fonction publique marocaine sont déterminés par l&apos;échelle de rémunération et l&apos;échelon du fonctionnaire. Un agent d&apos;exécution à l&apos;échelle 1 perçoit un salaire net d&apos;environ 2 700 DH par mois, tandis qu&apos;un cadre à l&apos;échelle 10 débute à environ 6 300 DH net. Les cadres supérieurs à l&apos;échelle 11 commencent à environ 7 650 DH net, et les hauts fonctionnaires (hors échelle) peuvent percevoir plus de 18 000 DH net. À ces salaires de base s&apos;ajoutent diverses primes et indemnités : indemnité de résidence, indemnité de fonction, allocations familiales, etc.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Les avantages de la fonction publique</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Au-delà du salaire, la fonction publique offre de nombreux avantages : la sécurité de l&apos;emploi (titularisation après le stage probatoire), une couverture médicale complète (AMO), une retraite confortable (CMR ou RCAR), des congés payés généreux (30 jours par an), des primes et indemnités variées, ainsi que des possibilités de promotion interne. De plus, les fonctionnaires bénéficient d&apos;un équilibre vie professionnelle / vie personnelle généralement favorable, avec des horaires réguliers et la possibilité de mutations géographiques.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Le générateur de CV : votre outil gratuit</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pour maximiser vos chances de réussite, nous mettons à votre disposition un générateur de CV professionnel entièrement gratuit. Cet outil vous guide pas à pas dans la création de votre CV, depuis vos informations personnelles jusqu&apos;à vos compétences et langues. Vous pouvez choisir parmi trois modèles professionnels (Classique, Moderne et Professionnel) spécialement conçus pour les candidatures dans la fonction publique. Vos données sont sauvegardées localement dans votre navigateur, et vous pouvez télécharger votre CV au format PDF à tout moment.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Réformes et modernisation</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le Maroc a engagé plusieurs réformes pour moderniser sa fonction publique. La digitalisation des services, la simplification des procédures administratives, la déconcentration et la régionalisation avancée sont autant de chantiers qui transforment l&apos;administration publique marocaine. Ces réformes créent de nouvelles opportunités d&apos;emploi, notamment dans les domaines du numérique, de la gestion de projet et de la communication. La plateforme emploipublic.ma accompagne cette transformation en offrant aux candidats les outils et informations nécessaires pour réussir leur intégration dans la fonction publique.
          </p>

          <p className="text-sm text-gray-500 mt-8 italic">
            Publié par {siteConfig.author.name} ({siteConfig.author.title}), dernière mise à jour : 2026
          </p>
        </article>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Prêt à lancer votre carrière dans la fonction publique ?</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">Créez votre CV professionnel gratuitement et consultez les concours ouverts dès maintenant.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generateur-cv/" className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors text-lg">
              Créer mon CV
            </Link>
            <Link href="/concours/" className="inline-flex items-center justify-center px-8 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-400 transition-colors border border-primary-400 text-lg">
              Voir les concours
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
