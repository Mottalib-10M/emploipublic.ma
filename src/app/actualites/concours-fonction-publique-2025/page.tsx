import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Concours Fonction Publique 2025 : Calendrier, Salaires et Nouveaux Postes',
  description: 'Calendrier complet des concours de la fonction publique au Maroc en 2025, reforme de la grille des salaires, creation de nouveaux postes et digitalisation du recrutement.',
  alternates: { canonical: '/actualites/concours-fonction-publique-2025/' },
};

const faqData = [
  { question: 'Combien de postes sont ouverts dans la fonction publique en 2025 ?', answer: 'La loi de finances 2025 prevoit la creation de 29 840 postes budgetaires dans la fonction publique marocaine, en hausse de 12% par rapport a 2024. Les secteurs prioritaires sont l\'education nationale (9 000 postes), la sante (5 500 postes), l\'interieur (4 200 postes) et la justice (2 800 postes).' },
  { question: 'Quand ont lieu les concours de la fonction publique en 2025 ?', answer: 'Les concours se deroulent principalement en deux vagues : la premiere entre mars et juin 2025, et la seconde entre septembre et decembre 2025. Chaque ministere publie son calendrier specifique. Les inscriptions ouvrent generalement 30 a 45 jours avant la date du concours.' },
  { question: 'Quelle est la nouvelle grille des salaires de la fonction publique en 2025 ?', answer: 'La reforme 2025 prevoit une revalorisation de 1 000 DH/mois pour les echelles 7 a 9 et de 1 500 DH/mois pour les echelles 10 et 11. Le salaire net minimum d\'un fonctionnaire echelle 7 passe a environ 5 200 DH/mois. Les indemnites de logement et de transport ont egalement ete revalorisees.' },
  { question: 'Comment s\'inscrire a un concours de la fonction publique en 2025 ?', answer: 'L\'inscription se fait desormais majoritairement en ligne via le portail emploi-public.ma ou les sites web des ministeres. Le dossier comprend : demande manuscrite, CV, copies des diplomes, copie CIN, photos d\'identite et attestation d\'equivalence pour les diplomes etrangers.' },
  { question: 'Quels sont les concours les plus demandes en 2025 ?', answer: 'Les concours les plus demandes sont : enseignant du secondaire (education nationale), medecin de sante publique, ingenieur d\'Etat, administrateur au ministere de l\'Interieur et cadre financier au ministere des Finances. Le ratio candidats/postes varie de 15:1 pour les postes techniques a 50:1 pour les postes administratifs generaux.' },
];

export default function ConcoursFonctionPublique2025Page() {
  const articleSchema = buildArticleSchema({
    title: 'Concours de la fonction publique 2025 : calendrier, reforme des salaires et nouveaux postes',
    description: 'Calendrier complet des concours 2025, reforme salariale et nouveaux postes dans la fonction publique marocaine.',
    url: `${siteConfig.url}/actualites/concours-fonction-publique-2025/`,
    datePublished: '2025-06-25',
    dateModified: '2025-06-25',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Actualites', url: `${siteConfig.url}/actualites/` },
    { name: 'Concours fonction publique 2025', url: `${siteConfig.url}/actualites/concours-fonction-publique-2025/` },
  ]);
  const faqSchema = buildFAQSchema(faqData);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-primary-200 mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/actualites/" className="hover:text-white">Actualites</Link>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Concours de la Fonction Publique 2025 : Calendrier, Reforme des Salaires et Nouveaux Postes
          </h1>
          <p className="text-primary-100">Par {siteConfig.author.name} ({siteConfig.author.title}), juin 2025</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 prose prose-gray max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          L&apos;annee 2025 s&apos;annonce exceptionnelle pour les candidats a la fonction publique marocaine. Avec pres de 30 000 postes budgetaires crees, une reforme salariale attendue depuis des annees et la digitalisation croissante des processus de recrutement, le paysage de l&apos;emploi public se transforme en profondeur. Voici tout ce qu&apos;il faut savoir pour saisir les opportunites.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Calendrier des concours 2025 : 29 840 postes a pourvoir</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La loi de finances 2025 prevoit la creation de 29 840 postes budgetaires, en hausse de 12% par rapport aux 26 600 postes de 2024. Cette augmentation traduit la volonte du gouvernement de renforcer les services publics dans les secteurs prioritaires et de repondre aux besoins croissants de la population.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Repartition par secteur</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les postes se repartissent comme suit entre les principaux ministeres et institutions :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Education nationale :</strong> 9 000 postes (enseignants du primaire, secondaire collegial et qualifiant, cadres administratifs)</li>
          <li><strong>Sante et protection sociale :</strong> 5 500 postes (medecins, infirmiers, techniciens de sante, pharmaciens)</li>
          <li><strong>Interieur :</strong> 4 200 postes (agents d&apos;autorite, cadres administratifs, techniciens)</li>
          <li><strong>Justice :</strong> 2 800 postes (greffiers, secretaires judiciaires, cadres de l&apos;administration penitentiaire)</li>
          <li><strong>Finances :</strong> 1 800 postes (inspecteurs des impots, agents douaniers, cadres du Tresor)</li>
          <li><strong>Agriculture :</strong> 1 200 postes (ingenieurs agronomes, techniciens, veterinaires)</li>
          <li><strong>Equipement et eau :</strong> 1 100 postes (ingenieurs, techniciens en genie civil et hydraulique)</li>
          <li><strong>Autres ministeres et institutions :</strong> 4 240 postes</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Calendrier previsionnel</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les concours de 2025 se deroulent en deux grandes vagues :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Premiere vague (mars - juin 2025) :</strong> concours de l&apos;education nationale, de la sante, de la justice et de l&apos;interieur. Les inscriptions ont debute en fevrier pour la plupart.</li>
          <li><strong>Deuxieme vague (septembre - decembre 2025) :</strong> concours des finances, de l&apos;agriculture, de l&apos;equipement et des autres ministeres. Les avis seront publies a partir de juillet 2025.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Conseil :</strong> consultez regulierement notre page <Link href="/concours/" className="text-primary-600 hover:text-primary-700">concours ouverts</Link> pour ne manquer aucun avis de concours. Vous y trouverez les dates, les conditions d&apos;acces et les liens d&apos;inscription pour chaque concours.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Reforme de la grille des salaires : des augmentations significatives</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le dialogue social entre le gouvernement et les syndicats a abouti a un accord historique sur la revalorisation des salaires de la fonction publique. Cette reforme, mise en oeuvre progressivement a partir de janvier 2025, concerne l&apos;ensemble des echelles et marque l&apos;augmentation la plus importante depuis 2011.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Augmentations par echelle</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Echelles 7 a 9 :</strong> augmentation de 1 000 DH/mois brut, repartie en deux tranches (500 DH en janvier 2025, 500 DH en juillet 2025)</li>
          <li><strong>Echelles 10 et 11 :</strong> augmentation de 1 500 DH/mois brut, en deux tranches de 750 DH</li>
          <li><strong>Echelles hors echelle :</strong> augmentation forfaitaire de 2 000 DH/mois</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Nouveaux salaires nets indicatifs (apres reforme)</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Echelle 7, echelon 1 :</strong> environ 5 200 DH/mois net (contre 4 400 DH avant reforme)</li>
          <li><strong>Echelle 9, echelon 1 :</strong> environ 6 800 DH/mois net (contre 5 900 DH)</li>
          <li><strong>Echelle 10, echelon 1 :</strong> environ 8 500 DH/mois net (contre 7 200 DH)</li>
          <li><strong>Echelle 11, echelon 1 :</strong> environ 10 200 DH/mois net (contre 8 900 DH)</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pour consulter les grilles completes par echelle et echelon, utilisez notre <Link href="/salaires-fonction-publique/" className="text-primary-600 hover:text-primary-700">grille des salaires de la fonction publique</Link>.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Revalorisation des indemnites</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          En plus des augmentations de salaire de base, plusieurs indemnites ont ete revalorisees :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Indemnite de logement :</strong> augmentation de 300 DH/mois pour toutes les echelles</li>
          <li><strong>Indemnite de transport :</strong> portee a 500 DH/mois (contre 350 DH)</li>
          <li><strong>Indemnite de risque :</strong> revalorisation de 20% pour les corps concernes (police, protection civile, sante)</li>
          <li><strong>Indemnite de responsabilite :</strong> creation d&apos;une nouvelle indemnite pour les chefs de service et chefs de division</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Digitalisation du recrutement : vers des concours modernises</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le gouvernement a lance un vaste chantier de modernisation des processus de recrutement dans la fonction publique. Plusieurs innovations sont deployees en 2025 pour rendre les concours plus transparents, plus accessibles et plus efficaces.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Inscription en ligne generalisee</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Depuis janvier 2025, l&apos;inscription aux concours de la fonction publique est entierement dematerialisee pour la majorite des ministeres. Le portail emploi-public.ma centralise les inscriptions et permet aux candidats de :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Creer un compte unique pour toutes les candidatures</li>
          <li>Deposer leur dossier de candidature en ligne (CV, diplomes, CIN)</li>
          <li>Suivre l&apos;avancement de leur candidature en temps reel</li>
          <li>Recevoir des notifications par SMS et email pour les convocations</li>
          <li>Telecharger leur convocation aux epreuves</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Epreuves numeriques</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Certains ministeres experimentent les epreuves sur tablette pour les QCM, ce qui permet une correction automatisee et une publication plus rapide des resultats. Le ministere des Finances et le ministere de l&apos;Industrie sont les premiers a adopter ce format pour leurs concours 2025.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Publication transparente des resultats</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Une nouvelle circulaire impose la publication des resultats en ligne dans un delai de 15 jours apres les epreuves. Les candidats peuvent consulter leurs notes detaillees et exercer un droit de recours en ligne en cas de contestation.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Nouveaux profils recherches : les metiers d&apos;avenir</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La fonction publique marocaine diversifie ses recrutements pour repondre aux enjeux de la transformation numerique et du developpement durable. En 2025, de nouveaux profils sont particulierement recherches :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Ingenieurs en informatique et cybersecurite :</strong> pour accompagner la digitalisation des services publics et securiser les systemes d&apos;information</li>
          <li><strong>Data scientists et analystes de donnees :</strong> pour exploiter les donnees publiques et ameliorer la prise de decision</li>
          <li><strong>Ingenieurs en energies renouvelables :</strong> dans le cadre de la strategie energetique nationale</li>
          <li><strong>Urbanistes et amenageurs :</strong> pour accompagner les grands chantiers d&apos;infrastructure</li>
          <li><strong>Specialistes en e-government :</strong> pour developper les services publics en ligne</li>
          <li><strong>Medecins specialistes :</strong> particulierement en zones rurales et dans les specialites deficitaires</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Conseils pour les candidats en 2025</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Face a l&apos;augmentation du nombre de postes et a la modernisation des concours, voici nos recommandations pour maximiser vos chances :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Anticipez votre preparation :</strong> commencez au moins 3 mois avant la date du concours. Consultez notre <Link href="/guides/reussir-concours-public/" className="text-primary-600 hover:text-primary-700">guide pour reussir un concours</Link>.</li>
          <li><strong>Preparez votre dossier en avance :</strong> rassemblez tous les documents necessaires et creez votre CV professionnel avec notre <Link href="/generateur-cv/" className="text-primary-600 hover:text-primary-700">generateur de CV gratuit</Link>.</li>
          <li><strong>Ciblez les bons concours :</strong> analysez le ratio candidats/postes et privilegiez les concours ou la competition est moins forte, notamment dans les secteurs techniques.</li>
          <li><strong>Maitrisez les epreuves numeriques :</strong> familiarisez-vous avec les QCM sur tablette si votre concours utilise ce format.</li>
          <li><strong>Restez informe :</strong> suivez les annonces sur notre page <Link href="/concours/" className="text-primary-600 hover:text-primary-700">concours ouverts</Link> et inscrivez-vous des l&apos;ouverture des inscriptions.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Perspectives pour 2026</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le gouvernement a annonce plusieurs mesures prevues pour 2026 :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Poursuite de la reforme salariale avec une deuxieme tranche d&apos;augmentation</li>
          <li>Generalisation des concours numeriques a l&apos;ensemble des ministeres</li>
          <li>Creation d&apos;une plateforme unique de concours de la fonction publique</li>
          <li>Mise en place d&apos;un systeme de mobilite inter-ministerielle facilite</li>
          <li>Renforcement de la formation continue pour les fonctionnaires en poste</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;annee 2025 represente une opportunite historique pour integrer la fonction publique marocaine. Avec pres de 30 000 postes crees, des salaires en hausse significative et des processus de recrutement modernises, le secteur public redevient attractif pour les diplomes marocains. Preparez-vous des maintenant pour saisir ces opportunites et construire une carriere stable et valorisante au service de l&apos;interet general.
        </p>

        {/* FAQ */}
        <div className="mt-12 not-prose">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Questions frequentes</h2>
          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-gray-900 hover:text-primary-600 transition-colors flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-10 p-6 bg-primary-50 rounded-xl not-prose">
          <h3 className="font-bold text-gray-900 mb-2">Outils recommandes</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/concours/" className="btn-primary text-sm">Voir les concours</Link>
            <Link href="/generateur-cv/" className="btn-secondary text-sm">Creer mon CV</Link>
            <Link href="/salaires-fonction-publique/" className="btn-secondary text-sm">Grille des salaires</Link>
          </div>
        </div>

        {/* Sources */}
        <div className="mt-10 border-t border-gray-200 pt-6 not-prose">
          <h2 className="text-sm font-bold text-gray-900 mb-3">Sources</h2>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>Loi de finances 2025 - Postes budgetaires crees (<a href="https://www.finances.gov.ma" className="underline hover:text-primary-600" rel="noopener noreferrer" target="_blank">finances.gov.ma</a>)</li>
            <li>Ministere de la Transition Numerique et de la Reforme de l&apos;Administration - Circulaire sur la digitalisation des concours</li>
            <li>Accord du dialogue social 2024-2025 - Revalorisation salariale de la fonction publique</li>
            <li>Haut-Commissariat au Plan - Statistiques de l&apos;emploi public</li>
          </ul>
        </div>

        <p className="text-sm text-gray-500 mt-8 italic">
          Par {siteConfig.author.name} ({siteConfig.author.title}), publie le 25 juin 2025
        </p>
      </article>
    </>
  );
}
