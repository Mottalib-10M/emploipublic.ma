import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Glossaire Fonction Publique Maroc : Termes et Clés',
  description: "Glossaire de la fonction publique au Maroc : définitions des termes administratifs, concours, grades, échelles salariales et carrière. Guide pratique.",
  alternates: { canonical: '/glossaire/' },
};

const letters = ['A', 'C', 'D', 'E', 'F', 'G', 'I', 'M', 'N', 'P', 'R', 'S', 'T'];

export default function GlossairePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Glossaire', url: `${siteConfig.url}/glossaire/` },
  ]);

  const definedTermSetSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Glossaire Fonction Publique Maroc',
    description: 'Termes et définitions relatifs à la fonction publique et à l\'emploi public au Maroc.',
    inLanguage: 'fr',
    url: `${siteConfig.url}/glossaire/`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }} />

      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Glossaire Fonction Publique Maroc</h1>
          <p className="text-primary-100 text-lg">Tous les termes de la fonction publique marocaine expliqués simplement.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Glossaire</span>
        </nav>

        {/* Navigation A-Z */}
        <nav aria-label="Navigation alphabétique" className="mb-10 flex flex-wrap gap-2">
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#${letter}`}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-50 text-sm font-semibold text-primary-800 hover:bg-primary-600 hover:text-white transition-colors"
            >
              {letter}
            </a>
          ))}
        </nav>

        {/* Glossaire */}
        <div className="space-y-10">

          {/* A */}
          <section id="A">
            <h2 className="text-2xl font-bold text-primary-700 mb-4 border-b border-gray-200 pb-2">A</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-gray-900">Administration publique</dt>
                <dd className="text-gray-600 mt-1">Ensemble des services de l&apos;État, des collectivités territoriales et des établissements publics chargés de mettre en oeuvre les politiques publiques et d&apos;assurer les services aux citoyens.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Avancement</dt>
                <dd className="text-gray-600 mt-1">Progression de la carrière d&apos;un fonctionnaire, qui peut être un avancement d&apos;échelon (ancienneté), de grade (tableau d&apos;avancement ou examen professionnel) ou d&apos;échelle. L&apos;avancement détermine l&apos;évolution de la rémunération.</dd>
              </div>
            </dl>
          </section>

          {/* C */}
          <section id="C">
            <h2 className="text-2xl font-bold text-primary-700 mb-4 border-b border-gray-200 pb-2">C</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-gray-900">CMR (Caisse Marocaine des Retraites)</dt>
                <dd className="text-gray-600 mt-1">Organisme public gérant le régime de pension civile des fonctionnaires de l&apos;État et des collectivités territoriales. La CMR verse les pensions de retraite et d&apos;invalidité aux fonctionnaires titulaires.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">CNOPS (Caisse Nationale des Organismes de Prévoyance Sociale)</dt>
                <dd className="text-gray-600 mt-1">Organisme gérant l&apos;assurance maladie obligatoire (AMO) des fonctionnaires et agents publics. La CNOPS assure le remboursement des frais de santé et la couverture médicale des fonctionnaires et de leurs ayants droit.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Collectivité territoriale</dt>
                <dd className="text-gray-600 mt-1">Entité administrative décentralisée (région, préfecture, province, commune) dotée de la personnalité juridique et de l&apos;autonomie financière. Les collectivités territoriales recrutent leur propre personnel.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Concours</dt>
                <dd className="text-gray-600 mt-1">Procédure de sélection par épreuves (écrites et/ou orales) permettant le recrutement dans la fonction publique. L&apos;accès aux emplois publics se fait principalement par concours. Consultez les <Link href="/concours/" className="text-primary-600 hover:underline">concours en cours</Link> et nos <Link href="/guides/reussir-concours-public/" className="text-primary-600 hover:underline">conseils pour réussir</Link>.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Contractuel</dt>
                <dd className="text-gray-600 mt-1">Agent public recruté par contrat à durée déterminée ou indéterminée, distinct du fonctionnaire titulaire. Les contractuels sont soumis à un régime juridique spécifique et ne bénéficient pas de la titularisation automatique. Voir notre <Link href="/guides/fonction-publique-contractuelle/" className="text-primary-600 hover:underline">guide sur les contractuels</Link>.</dd>
              </div>
            </dl>
          </section>

          {/* D */}
          <section id="D">
            <h2 className="text-2xl font-bold text-primary-700 mb-4 border-b border-gray-200 pb-2">D</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-gray-900">Détachement</dt>
                <dd className="text-gray-600 mt-1">Position administrative dans laquelle un fonctionnaire est placé hors de son corps d&apos;origine pour exercer dans un autre corps ou une autre administration, tout en conservant ses droits à l&apos;avancement et à la retraite.</dd>
              </div>
            </dl>
          </section>

          {/* E */}
          <section id="E">
            <h2 className="text-2xl font-bold text-primary-700 mb-4 border-b border-gray-200 pb-2">E</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-gray-900">Échelon</dt>
                <dd className="text-gray-600 mt-1">Subdivision du grade correspondant à un niveau de rémunération. L&apos;avancement d&apos;échelon se fait en fonction de l&apos;ancienneté et de la note administrative. Consultez la <Link href="/salaires-fonction-publique/" className="text-primary-600 hover:underline">grille des salaires</Link> pour voir les correspondances.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Échelle salariale</dt>
                <dd className="text-gray-600 mt-1">Classification hiérarchique des emplois publics au Maroc (échelle 1 à 11 et hors échelle). Chaque échelle correspond à un niveau de recrutement et à une grille indiciaire de rémunération. Voir la <Link href="/salaires-fonction-publique/" className="text-primary-600 hover:underline">grille détaillée des salaires</Link>.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Établissement public</dt>
                <dd className="text-gray-600 mt-1">Personne morale de droit public dotée de l&apos;autonomie financière, créée pour gérer un service public (universités, hôpitaux, offices). Le personnel peut être soumis au statut général ou à des statuts particuliers.</dd>
              </div>
            </dl>
          </section>

          {/* F */}
          <section id="F">
            <h2 className="text-2xl font-bold text-primary-700 mb-4 border-b border-gray-200 pb-2">F</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-gray-900">Fonction publique</dt>
                <dd className="text-gray-600 mt-1">Ensemble des agents travaillant pour l&apos;État, les collectivités territoriales et les établissements publics au Maroc. La fonction publique est régie par le Dahir n° 1-58-008 portant Statut Général de la Fonction Publique.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Fonctionnaire</dt>
                <dd className="text-gray-600 mt-1">Agent public nommé dans un emploi permanent et titularisé dans un grade de la hiérarchie administrative. Le fonctionnaire bénéficie de la sécurité de l&apos;emploi et est soumis au Statut Général de la Fonction Publique.</dd>
              </div>
            </dl>
          </section>

          {/* G */}
          <section id="G">
            <h2 className="text-2xl font-bold text-primary-700 mb-4 border-b border-gray-200 pb-2">G</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-gray-900">Grade</dt>
                <dd className="text-gray-600 mt-1">Titre conférant à son titulaire le droit d&apos;occuper un ensemble d&apos;emplois. Le grade détermine la position hiérarchique du fonctionnaire et le niveau de responsabilités qu&apos;il peut exercer.</dd>
              </div>
            </dl>
          </section>

          {/* I */}
          <section id="I">
            <h2 className="text-2xl font-bold text-primary-700 mb-4 border-b border-gray-200 pb-2">I</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-gray-900">Indemnité de fonction</dt>
                <dd className="text-gray-600 mt-1">Complément de rémunération lié à l&apos;exercice de certaines fonctions ou responsabilités particulières (direction, encadrement, responsabilité spéciale). Son montant varie selon le poste occupé.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Indemnité de résidence</dt>
                <dd className="text-gray-600 mt-1">Complément de rémunération versé aux fonctionnaires en fonction de leur lieu d&apos;affectation, destiné à compenser les différences de coût de la vie entre les zones géographiques.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Indemnités</dt>
                <dd className="text-gray-600 mt-1">Compléments de rémunération versés aux fonctionnaires en plus du traitement de base. Elles comprennent l&apos;indemnité de résidence, l&apos;indemnité de fonction, les primes de rendement et d&apos;autres allocations spécifiques.</dd>
              </div>
            </dl>
          </section>

          {/* M */}
          <section id="M">
            <h2 className="text-2xl font-bold text-primary-700 mb-4 border-b border-gray-200 pb-2">M</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-gray-900">Ministère</dt>
                <dd className="text-gray-600 mt-1">Administration centrale de l&apos;État dirigée par un ministre, chargée de mettre en oeuvre les politiques publiques dans un domaine spécifique. Consultez la liste des <Link href="/ministeres/" className="text-primary-600 hover:underline">ministères au Maroc</Link>.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Mise en disponibilité</dt>
                <dd className="text-gray-600 mt-1">Position administrative dans laquelle le fonctionnaire est placé temporairement hors de son administration, cessant de bénéficier de sa rémunération et de ses droits à l&apos;avancement. Elle peut être accordée pour raisons personnelles ou familiales.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Mobilité</dt>
                <dd className="text-gray-600 mt-1">Possibilité pour un fonctionnaire de changer de poste, de service, d&apos;administration ou de localité géographique au cours de sa carrière. La mobilité peut être volontaire ou décidée par l&apos;administration.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Mutuelle</dt>
                <dd className="text-gray-600 mt-1">Organisme de prévoyance complémentaire auquel adhèrent les fonctionnaires pour améliorer leur couverture santé au-delà des remboursements de la CNOPS. L&apos;adhésion est généralement volontaire.</dd>
              </div>
            </dl>
          </section>

          {/* N */}
          <section id="N">
            <h2 className="text-2xl font-bold text-primary-700 mb-4 border-b border-gray-200 pb-2">N</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-gray-900">Note administrative</dt>
                <dd className="text-gray-600 mt-1">Évaluation annuelle du fonctionnaire par sa hiérarchie, notée sur 20. La note administrative influence le rythme d&apos;avancement d&apos;échelon (avancement rapide, moyen ou lent) et conditionne certaines promotions.</dd>
              </div>
            </dl>
          </section>

          {/* P */}
          <section id="P">
            <h2 className="text-2xl font-bold text-primary-700 mb-4 border-b border-gray-200 pb-2">P</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-gray-900">Pension civile</dt>
                <dd className="text-gray-600 mt-1">Pension de retraite versée par la CMR aux fonctionnaires civils ayant accompli au moins 21 ans de service. Le montant est calculé en fonction du dernier traitement et de la durée de cotisation.</dd>
              </div>
            </dl>
          </section>

          {/* R */}
          <section id="R">
            <h2 className="text-2xl font-bold text-primary-700 mb-4 border-b border-gray-200 pb-2">R</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-gray-900">RCAR (Régime Collectif d&apos;Allocation de Retraite)</dt>
                <dd className="text-gray-600 mt-1">Régime de retraite géré par la CDG (Caisse de Dépôt et de Gestion) couvrant les agents des établissements publics soumis au contrôle financier de l&apos;État et non affiliés à la CMR.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Retraite anticipée</dt>
                <dd className="text-gray-600 mt-1">Possibilité pour un fonctionnaire de partir à la retraite avant l&apos;âge légal (63 ans), sous certaines conditions d&apos;ancienneté. La pension est alors calculée au prorata des années de service effectuées.</dd>
              </div>
            </dl>
          </section>

          {/* S */}
          <section id="S">
            <h2 className="text-2xl font-bold text-primary-700 mb-4 border-b border-gray-200 pb-2">S</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-gray-900">Stage</dt>
                <dd className="text-gray-600 mt-1">Période probatoire que doit accomplir un fonctionnaire nouvellement recruté avant d&apos;être titularisé dans son grade. La durée du stage est généralement d&apos;un à deux ans selon le corps et le grade.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Statut général</dt>
                <dd className="text-gray-600 mt-1">Texte législatif (Dahir n° 1-58-008) fixant les droits et obligations des fonctionnaires marocains. Il définit les règles de recrutement, de carrière, de rémunération et de discipline applicables à l&apos;ensemble de la fonction publique.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Statut particulier</dt>
                <dd className="text-gray-600 mt-1">Texte réglementaire propre à un corps ou un cadre d&apos;emplois (enseignants, médecins, ingénieurs), fixant les conditions spécifiques de recrutement, de carrière et de rémunération en complément du Statut Général.</dd>
              </div>
            </dl>
          </section>

          {/* T */}
          <section id="T">
            <h2 className="text-2xl font-bold text-primary-700 mb-4 border-b border-gray-200 pb-2">T</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-gray-900">Tableau d&apos;avancement</dt>
                <dd className="text-gray-600 mt-1">Liste annuelle des fonctionnaires proposés pour un avancement de grade, établie par l&apos;administration sur la base de l&apos;ancienneté, de la note administrative et de l&apos;appréciation hiérarchique.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Titularisation</dt>
                <dd className="text-gray-600 mt-1">Acte administratif confirmant un fonctionnaire stagiaire dans son grade à l&apos;issue de la période de stage. La titularisation confère la qualité de fonctionnaire permanent avec tous les droits associés (sécurité de l&apos;emploi, pension).</dd>
              </div>
            </dl>
          </section>

        </div>

        {/* Liens utiles */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Outils et ressources</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/concours/" className="group rounded-lg border border-gray-200 p-4 hover:border-primary-500 hover:shadow-sm transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 text-sm">Concours en cours</h3>
              <p className="text-xs text-gray-500 mt-1">Retrouvez tous les concours ouverts</p>
            </Link>
            <Link href="/salaires-fonction-publique/" className="group rounded-lg border border-gray-200 p-4 hover:border-primary-500 hover:shadow-sm transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 text-sm">Grille des salaires</h3>
              <p className="text-xs text-gray-500 mt-1">Salaires par échelle et échelon</p>
            </Link>
            <Link href="/generateur-cv/" className="group rounded-lg border border-gray-200 p-4 hover:border-primary-500 hover:shadow-sm transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 text-sm">Générateur de CV</h3>
              <p className="text-xs text-gray-500 mt-1">Créez votre CV professionnel</p>
            </Link>
          </div>
        </section>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Créé par <span className="text-gray-700">{siteConfig.author.name}</span> ({siteConfig.author.title})
          </p>
        </div>
      </div>
    </>
  );
}
