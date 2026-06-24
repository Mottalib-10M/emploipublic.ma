import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo';
import { professionsConcours, getProfessionBySlug } from '@/data/professions-concours';

export function generateStaticParams() {
  return professionsConcours.map((p) => ({ profession: p.slug }));
}

type Props = {
  params: Promise<{ profession: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { profession } = await params;
  const p = getProfessionBySlug(profession);
  if (!p) return {};
  const title = `Concours ${p.nom} Fonction Publique Maroc 2026`;
  const desc = `Concours ${p.nom.toLowerCase()} au Maroc : conditions, épreuves, salaire ${p.echelle} et conseils de préparation pour la fonction publique.`;
  return {
    title: title.length > 60 ? title.slice(0, 57) + '...' : title,
    description: desc.length > 160 ? desc.slice(0, 157) + '...' : desc,
    alternates: { canonical: `/concours/${profession}/` },
  };
}

export default async function ConcoursProfessionPage({ params }: Props) {
  const { profession } = await params;
  const p = getProfessionBySlug(profession);
  if (!p) notFound();

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Concours', url: `${siteConfig.url}/concours/` },
    { name: `Concours ${p.nom}`, url: `${siteConfig.url}/concours/${profession}/` },
  ]);
  const faqSchema = buildFAQSchema(p.faqs);

  const otherProfessions = professionsConcours.filter((x) => x.slug !== profession).slice(0, 6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="text-sm text-primary-200 mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/concours/" className="hover:text-white">Concours</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{p.nom}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Concours {p.nom} Fonction Publique Maroc 2026
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Tout savoir sur le concours de {p.nom.toLowerCase()} : conditions d&apos;accès, épreuves, préparation et salaire après recrutement.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key info card */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Informations clés du concours</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <dt className="text-gray-500 font-medium">Échelle de recrutement</dt>
                  <dd className="font-semibold text-gray-900 mt-1">{p.echelle}</dd>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <dt className="text-gray-500 font-medium">Catégorie</dt>
                  <dd className="font-semibold text-gray-900 mt-1">{p.categorie}</dd>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <dt className="text-gray-500 font-medium">Diplôme requis</dt>
                  <dd className="font-semibold text-gray-900 mt-1">{p.diplomeRequis}</dd>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <dt className="text-gray-500 font-medium">Salaire de départ</dt>
                  <dd className="font-semibold text-green-700 mt-1">{p.salaireDebut}</dd>
                </div>
              </dl>
            </div>

            {/* Conditions d'accès */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Conditions d&apos;accès au concours</h2>
              <p className="text-gray-700 leading-relaxed">{p.conditionsAcces}</p>
            </div>

            {/* Description du poste */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Le métier de {p.nom.toLowerCase()} dans la fonction publique</h2>
              <p className="text-gray-700 leading-relaxed">{p.descriptionPoste}</p>
            </div>

            {/* Épreuves */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contenu et format des épreuves</h2>
              <h3 className="font-semibold text-gray-900 mb-2">Contenu de l&apos;examen</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{p.contenuEpreuve}</p>
              <h3 className="font-semibold text-gray-900 mb-2">Format de l&apos;examen</h3>
              <p className="text-gray-700 leading-relaxed">{p.formatExamen}</p>
            </div>

            {/* SEO Editorial */}
            <article className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Comment préparer le concours de {p.nom.toLowerCase()}</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">{p.preparationConseil}</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La réussite au concours de {p.nom.toLowerCase()} dans la fonction publique marocaine exige une préparation sérieuse et méthodique. Commencez par bien analyser le programme officiel du concours, publié dans l&apos;avis au Bulletin Officiel. Identifiez les matières à coefficient élevé et concentrez vos efforts sur celles-ci en priorité. La préparation idéale s&apos;étale sur trois à six mois, avec un programme de révision régulier et structuré.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pour l&apos;épreuve écrite, entraînez-vous systématiquement aux QCM et aux exercices rédactionnels. Cherchez les annales des concours précédents et chronométrez-vous pour maîtriser la gestion du temps le jour J. La culture générale est souvent sous-estimée par les candidats : révisez les institutions marocaines, la Constitution de 2011, l&apos;actualité nationale et les grandes réformes en cours (régionalisation avancée, digitalisation, nouveau modèle de développement).
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  L&apos;épreuve orale est décisive. Préparez une présentation structurée de votre parcours et de votre motivation. Renseignez-vous en profondeur sur les ministères qui recrutent des {p.nomPluriel.toLowerCase()} ({p.ministeres.join(', ')}) : leurs missions, leurs projets en cours et leurs défis. Le jury apprécie les candidats informés et passionnés par le service public.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Salaire et évolution de carrière</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Après réussite au concours et titularisation, le {p.nom.toLowerCase()} de la fonction publique débute avec un salaire de {p.salaireDebut}. Ce montant évolue progressivement grâce aux avancements d&apos;échelon (tous les 2 à 4 ans) et aux promotions de grade. {p.salaireEvolution} Les fonctionnaires bénéficient également de la sécurité de l&apos;emploi, d&apos;une couverture médicale complète (AMO), d&apos;une retraite (CMR) et de congés payés généreux.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La carrière de {p.nom.toLowerCase()} dans la fonction publique offre des perspectives d&apos;évolution intéressantes. Les promotions internes, les concours professionnels et la formation continue permettent d&apos;accéder à des postes de responsabilité et à des échelles supérieures. L&apos;engagement, la performance et la formation sont les clés d&apos;une progression de carrière rapide et satisfaisante.
                </p>
              </div>
            </article>

            {/* FAQs */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Questions fréquentes sur le concours de {p.nom.toLowerCase()}</h2>
              <div className="space-y-4">
                {p.faqs.map((faq, i) => (
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
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-3">Ministères recruteurs</h3>
              <ul className="space-y-2">
                {p.ministeres.map((m) => (
                  <li key={m} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 bg-primary-50">
              <h3 className="font-bold text-gray-900 mb-2">Préparez votre candidature</h3>
              <p className="text-sm text-gray-600 mb-4">
                Créez un CV professionnel gratuit pour postuler au concours de {p.nom.toLowerCase()}.
              </p>
              <Link href="/generateur-cv/" className="btn-primary text-sm w-full justify-center">
                Créer mon CV
              </Link>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-3">Liens utiles</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/concours/" className="text-primary-600 hover:text-primary-700">Tous les concours ouverts</Link></li>
                <li><Link href="/salaires-fonction-publique/" className="text-primary-600 hover:text-primary-700">Grille des salaires</Link></li>
                <li><Link href={`/salaires-fonction-publique/echelle/${p.echelleNum}/`} className="text-primary-600 hover:text-primary-700">Détail échelle {p.echelleNum}</Link></li>
                <li><Link href="/ministeres/" className="text-primary-600 hover:text-primary-700">Liste des ministères</Link></li>
                <li><Link href="/guides/reussir-concours-public/" className="text-primary-600 hover:text-primary-700">Guide : réussir le concours</Link></li>
                <li><Link href="/guides/epreuve-ecrite-concours/" className="text-primary-600 hover:text-primary-700">Guide : épreuve écrite</Link></li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-3">Autres concours par métier</h3>
              <ul className="space-y-2 text-sm">
                {otherProfessions.map((op) => (
                  <li key={op.slug}>
                    <Link href={`/concours/${op.slug}/`} className="text-primary-600 hover:text-primary-700">
                      Concours {op.nom}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-12 italic">
          Par {siteConfig.author.name} ({siteConfig.author.title}), mise à jour : 2026
        </p>
      </div>
    </>
  );
}
