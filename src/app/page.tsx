import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildFAQSchema, buildBreadcrumbSchema } from '@/lib/seo';
import { concoursExamples } from '@/data/concours-types';
import { ministeres } from '@/data/ministeres';

export const metadata: Metadata = {
  title: 'Emploi Public au Maroc : Concours et Offres 2025',
  description: 'Emploi public au Maroc : concours de la fonction publique, offres, grille de salaires et generateur de CV gratuit. Reussissez votre carriere.',
  alternates: { canonical: '/' },
};

const faqs = [
  {
    question: 'Comment postuler a un emploi dans la fonction publique au Maroc ?',
    answer: 'Pour postuler a un emploi public au Maroc, vous devez surveiller les avis de concours publies au Bulletin Officiel et sur les sites des ministeres. Ensuite, vous constituez un dossier de candidature comprenant une demande manuscrite, votre CV, des copies certifiees de vos diplomes, votre CIN et des photos d\'identite. Le dossier doit etre depose avant la date limite indiquee dans l\'avis.',
  },
  {
    question: 'Quels diplomes sont requis pour la fonction publique marocaine ?',
    answer: 'Les diplomes requis varient selon l\'echelle de recrutement. L\'echelle 7 necessite le baccalaureat, l\'echelle 9 exige une licence (Bac+3), l\'echelle 10 demande un master ou diplome d\'ingenieur (Bac+5), et l\'echelle 11 requiert un master ou doctorat. Certains postes techniques exigent des diplomes specifiques (medecine, ingenierie, etc.).',
  },
  {
    question: 'Quel est le salaire d\'un fonctionnaire au Maroc ?',
    answer: 'Le salaire net d\'un fonctionnaire marocain varie de 2 700 DH pour l\'echelle 1 a plus de 18 000 DH pour les hauts fonctionnaires (hors echelle). Un cadre a l\'echelle 10 debute a environ 6 300 DH net, tandis qu\'un cadre superieur a l\'echelle 11 demarre a environ 7 650 DH net. Les salaires progressent avec les echelons et l\'anciennete.',
  },
  {
    question: 'Quelles sont les etapes d\'un concours de la fonction publique au Maroc ?',
    answer: 'Un concours de la fonction publique comprend 6 etapes : (1) Publication de l\'avis au Bulletin Officiel, (2) Depot du dossier de candidature, (3) Epreuve ecrite (QCM et redaction), (4) Epreuve orale devant un jury, (5) Publication des resultats, (6) Stage probatoire de 1 a 2 ans avant titularisation.',
  },
  {
    question: 'Comment utiliser le generateur de CV pour la fonction publique ?',
    answer: 'Notre generateur de CV gratuit vous guide etape par etape : renseignez vos informations personnelles, experiences, formations, competences et langues. Choisissez parmi 3 modeles professionnels (Classique, Moderne, Professionnel) et telechargez votre CV au format PDF via la fonction d\'impression du navigateur. Vos donnees sont sauvegardees localement.',
  },
];

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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Emploi Public au Maroc : Concours, Offres et Outils
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed">
              {siteConfig.tagline}. Trouvez les derniers concours, consultez la grille des salaires et creez votre CV professionnel gratuitement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/concours/" className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors text-lg">
                Voir les concours
              </Link>
              <Link href="/generateur-cv/" className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-400 transition-colors border border-primary-400 text-lg">
                Creer mon CV gratuit
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
              <div className="text-sm text-gray-600 mt-1">Ministeres et organismes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">{concoursExamples.length}+</div>
              <div className="text-sm text-gray-600 mt-1">Concours references</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">{totalPostes.toLocaleString('fr-FR')}</div>
              <div className="text-sm text-gray-600 mt-1">Postes ouverts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">3</div>
              <div className="text-sm text-gray-600 mt-1">Modeles de CV gratuits</div>
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
          <p className="section-subtitle text-center">Tout ce dont vous avez besoin pour reussir dans la fonction publique</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Link href="/generateur-cv/" className="card p-8 text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Generateur de CV</h3>
              <p className="text-sm text-gray-600">Creez un CV professionnel gratuitement avec nos 3 modeles optimises pour la fonction publique.</p>
            </Link>
            <Link href="/salaires-fonction-publique/" className="card p-8 text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Grille des salaires</h3>
              <p className="text-sm text-gray-600">Consultez les salaires de la fonction publique par echelle, grade et echelon. De l&apos;echelle 1 a hors echelle.</p>
            </Link>
            <Link href="/ministeres/" className="card p-8 text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Par ministere</h3>
              <p className="text-sm text-gray-600">Explorez les {ministeres.length} ministeres et organismes publics. Decouvrez leurs concours et postes disponibles.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* How to succeed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-title">Comment reussir un concours de la fonction publique</h2>
        <p className="section-subtitle">Guide complet des etapes et conseils pour decrocher un poste dans l&apos;administration publique marocaine</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              step: '1',
              title: 'Surveillez les annonces',
              desc: 'Consultez regulierement le Bulletin Officiel, les sites des ministeres et notre plateforme pour ne manquer aucun concours.',
            },
            {
              step: '2',
              title: 'Preparez votre dossier',
              desc: 'Rassemblez tous les documents necessaires : diplomes, CIN, photos, CV. Utilisez notre generateur de CV pour un dossier professionnel.',
            },
            {
              step: '3',
              title: 'Revisez strategiquement',
              desc: 'Concentrez-vous sur la culture generale, les connaissances de la specialite et les techniques de redaction administrative.',
            },
            {
              step: '4',
              title: 'Reussissez l\'ecrit',
              desc: 'Maitrisez le QCM, la note de synthese et la dissertation. Gerez bien votre temps et soignez la presentation.',
            },
            {
              step: '5',
              title: 'Preparez l\'oral',
              desc: 'Travaillez votre presentation, vos connaissances du poste et du ministere. Montrez votre motivation pour le service public.',
            },
            {
              step: '6',
              title: 'Reussissez le stage',
              desc: 'Pendant le stage probatoire (1-2 ans), montrez votre engagement et vos competences pour etre titularise.',
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
          <h2 className="section-title text-center">Questions frequentes</h2>
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
            L&apos;emploi public au Maroc represente l&apos;un des secteurs les plus recherches par les diplomes marocains. Avec plus de 800 000 fonctionnaires repartis dans les differents ministeres, etablissements publics et collectivites territoriales, la fonction publique marocaine est le premier employeur du pays. Chaque annee, des milliers de concours sont organises pour recruter de nouveaux agents dans des domaines aussi varies que l&apos;education, la sante, la justice, les finances et l&apos;administration territoriale.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Le systeme de la fonction publique au Maroc</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            La fonction publique marocaine est regie par le Dahir n 1-58-008 du 24 fevrier 1958 portant statut general de la fonction publique, ainsi que par de nombreux statuts particuliers propres a chaque corps de fonctionnaires. Le systeme est organise en echelles de remuneration allant de l&apos;echelle 1 (personnel d&apos;execution) a l&apos;echelle 11 (cadres superieurs), avec une categorie hors echelle pour les hauts fonctionnaires. Chaque echelle comprend plusieurs echelons, et la progression de carriere se fait a l&apos;anciennete ou au merite, par le biais de concours internes ou d&apos;examens professionnels.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Les concours de la fonction publique</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le concours est la voie principale d&apos;acces a la fonction publique au Maroc. Il garantit l&apos;egalite des chances entre les candidats et assure le recrutement des profils les plus competents. Les concours sont organises par les ministeres et les etablissements publics, et les avis sont publies au Bulletin Officiel ainsi que sur les sites web des institutions concernees. Le processus comprend generalement une epreuve ecrite (QCM et redaction) suivie d&apos;une epreuve orale pour les candidats admissibles.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pour reussir un concours de la fonction publique, il est essentiel de bien se preparer. La preparation doit couvrir les connaissances generales (culture generale, actualite marocaine, droit administratif), les connaissances de la specialite (selon le poste vise) et les techniques de redaction administrative. Les candidats doivent egalement maitriser la gestion du temps pendant les epreuves et soigner la presentation de leurs copies.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Les principaux employeurs publics</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le Ministere de l&apos;Education Nationale est de loin le plus grand employeur public au Maroc, avec environ 300 000 fonctionnaires. Il organise chaque annee des concours massifs pour recruter des professeurs dans toutes les disciplines. Le Ministere de la Sante, avec ses 55 000 fonctionnaires, recrute regulierement des medecins, infirmiers et pharmaciens. Les Forces Armees Royales emploient environ 200 000 personnes, tandis que les collectivites territoriales comptent pres de 150 000 agents.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            D&apos;autres ministeres importants incluent le Ministere de l&apos;Interieur (45 000 fonctionnaires), le Ministere des Finances (25 000), le Ministere de la Justice (18 000) et le Ministere de l&apos;Agriculture (15 000). Chacun de ces ministeres offre des carrieres variees et des perspectives d&apos;evolution interessantes pour les candidats motives.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Les salaires de la fonction publique</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les salaires dans la fonction publique marocaine sont determines par l&apos;echelle de remuneration et l&apos;echelon du fonctionnaire. Un agent d&apos;execution a l&apos;echelle 1 percoit un salaire net d&apos;environ 2 700 DH par mois, tandis qu&apos;un cadre a l&apos;echelle 10 debute a environ 6 300 DH net. Les cadres superieurs a l&apos;echelle 11 commencent a environ 7 650 DH net, et les hauts fonctionnaires (hors echelle) peuvent percevoir plus de 18 000 DH net. A ces salaires de base s&apos;ajoutent diverses primes et indemnites : indemnite de residence, indemnite de fonction, allocations familiales, etc.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Les avantages de la fonction publique</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Au-dela du salaire, la fonction publique offre de nombreux avantages : la securite de l&apos;emploi (titularisation apres le stage probatoire), une couverture medicale complete (AMO), une retraite confortable (CMR ou RCAR), des conges payes genereux (30 jours par an), des primes et indemnites variees, ainsi que des possibilites de promotion interne. De plus, les fonctionnaires beneficient d&apos;un equilibre vie professionnelle / vie personnelle generalement favorable, avec des horaires reguliers et la possibilite de mutations geographiques.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Le generateur de CV : votre outil gratuit</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pour maximiser vos chances de reussite, nous mettons a votre disposition un generateur de CV professionnel entierement gratuit. Cet outil vous guide pas a pas dans la creation de votre CV, depuis vos informations personnelles jusqu&apos;a vos competences et langues. Vous pouvez choisir parmi trois modeles professionnels (Classique, Moderne et Professionnel) specialement concus pour les candidatures dans la fonction publique. Vos donnees sont sauvegardees localement dans votre navigateur, et vous pouvez telecharger votre CV au format PDF a tout moment.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Reformes et modernisation</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le Maroc a engage plusieurs reformes pour moderniser sa fonction publique. La digitalisation des services, la simplification des procedures administratives, la deconcentration et la regionalisation avancee sont autant de chantiers qui transforment l&apos;administration publique marocaine. Ces reformes creent de nouvelles opportunites d&apos;emploi, notamment dans les domaines du numerique, de la gestion de projet et de la communication. La plateforme emploipublic.ma accompagne cette transformation en offrant aux candidats les outils et informations necessaires pour reussir leur integration dans la fonction publique.
          </p>

          <p className="text-sm text-gray-500 mt-8 italic">
            Publie par {siteConfig.author.name} ({siteConfig.author.title}) — Derniere mise a jour : 2025
          </p>
        </article>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Pret a lancer votre carriere dans la fonction publique ?</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">Creez votre CV professionnel gratuitement et consultez les concours ouverts des maintenant.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generateur-cv/" className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors text-lg">
              Creer mon CV
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
