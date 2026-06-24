import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo';
import { echelles, type EchelleData } from '@/data/echelles';

export function generateStaticParams() {
  return echelles.map((e) => ({ num: String(e.echelle).toLowerCase() }));
}

type Props = {
  params: Promise<{ num: string }>;
};

function getEchelleByNum(num: string): EchelleData | undefined {
  return echelles.find((e) => String(e.echelle).toLowerCase() === num.toLowerCase());
}

function getEchelleLabel(e: EchelleData): string {
  return e.echelle === 'HE' ? 'Hors Échelle' : `Échelle ${e.echelle}`;
}

function getEchelleSlug(e: EchelleData): string {
  return String(e.echelle).toLowerCase();
}

interface EchelleFaq {
  question: string;
  answer: string;
}

function getFaqs(e: EchelleData): EchelleFaq[] {
  const label = getEchelleLabel(e);
  const first = e.echelons[0];
  const last = e.echelons[e.echelons.length - 1];
  return [
    {
      question: `Quel est le salaire net de départ en ${label} ?`,
      answer: `Le salaire net de départ en ${label} (échelon 1) est de ${first.salaireNet.toLocaleString('fr-FR')} DH par mois. Ce montant correspond à l'indice ${first.indice} et inclut le traitement de base et les indemnités standard. Des primes supplémentaires peuvent s'ajouter selon le poste et le ministère.`,
    },
    {
      question: `Quel diplôme faut-il pour accéder à l'${label} ?`,
      answer: `L'${label} correspond au grade "${e.grade}" dans la catégorie "${e.categorie}". ${e.description} Les conditions exactes de diplôme sont précisées dans chaque avis de concours publié au Bulletin Officiel.`,
    },
    {
      question: `Combien de temps faut-il pour atteindre le dernier échelon de l'${label} ?`,
      answer: `L'${label} comprend ${e.echelons.length} échelons. L'avancement d'échelon se fait tous les 2 à 4 ans selon le rythme (rapide, moyen ou lent). Il faut donc entre ${(e.echelons.length - 1) * 2} et ${(e.echelons.length - 1) * 4} ans pour atteindre le dernier échelon (salaire net de ${last.salaireNet.toLocaleString('fr-FR')} DH).`,
    },
    {
      question: `Comment passer de l'${label} à l'échelle supérieure ?`,
      answer: `La promotion vers l'échelle supérieure se fait par concours interne, examen professionnel ou au choix (ancienneté et mérite). Le fonctionnaire doit remplir les conditions d'ancienneté et parfois de diplôme requises. La promotion s'accompagne d'un reclassement dans la nouvelle échelle avec conservation de l'ancienneté acquise.`,
    },
    {
      question: `Les primes sont-elles incluses dans les salaires affichés pour l'${label} ?`,
      answer: `Les salaires affichés sont des estimations incluant le traitement de base et les indemnités standard (résidence, complémentaire). Les primes spécifiques (technicité, encadrement, rendement, risque) ne sont pas incluses et varient selon le poste, le ministère et les responsabilités. Elles peuvent représenter 10% à 40% du salaire de base.`,
    },
  ];
}

function getEditorial(e: EchelleData): { postes: string; avantages: string; progression: string } {
  const num = e.echelle;
  if (num === 'HE') {
    return {
      postes: 'La catégorie Hors Échelle regroupe les postes de haute responsabilité dans l\'administration marocaine : directeurs centraux, secrétaires généraux de ministères, walis, gouverneurs, ambassadeurs, présidents d\'universités et recteurs. Ces postes sont pourvus par nomination royale (dahir) ou par décision du chef de gouvernement. L\'accès à la catégorie hors échelle requiert généralement une longue expérience dans les échelles supérieures (10-11) et des compétences managériales reconnues.',
      avantages: 'Les hauts fonctionnaires hors échelle bénéficient d\'avantages exceptionnels en plus de leur salaire : logement de fonction, voiture de service avec chauffeur, indemnités de représentation, personnel de maison, budget de fonctionnement et parfois des avantages diplomatiques. La rémunération totale peut dépasser 30 000 DH par mois lorsqu\'on intègre l\'ensemble de ces avantages.',
      progression: 'La progression en hors échelle se fait essentiellement par nomination à des postes de responsabilité croissante. Un directeur peut devenir secrétaire général, puis wali ou ambassadeur. La carrière à ce niveau dépend fortement des compétences managériales, du réseau professionnel et de la confiance des autorités supérieures.',
    };
  }
  if (typeof num === 'number' && num <= 3) {
    return {
      postes: `L'échelle ${num} correspond au personnel d'exécution de la fonction publique. Les postes typiques incluent : ${e.description.split('.').slice(-1)[0].trim() || e.description}. Ces fonctionnaires constituent la base opérationnelle de l'administration marocaine et assurent le fonctionnement quotidien des services publics. Leur travail, bien que souvent peu visible, est indispensable au bon fonctionnement de l'État.`,
      avantages: `Malgré un salaire modeste, les fonctionnaires de l'échelle ${num} bénéficient de la sécurité de l'emploi à vie après titularisation, d'une couverture médicale AMO, d'une retraite CMR, d'allocations familiales (300 DH par enfant) et de 30 jours de congés payés par an. Ces avantages sont significatifs comparés à des emplois similaires dans le secteur privé.`,
      progression: `Les fonctionnaires de l'échelle ${num} peuvent progresser par avancement d'échelon automatique et par concours internes vers les échelles supérieures. Avec de la motivation et parfois une reprise d'études, il est possible d'atteindre les échelles 5, 6 et au-delà. La formation continue proposée par l'administration peut faciliter cette progression.`,
    };
  }
  if (typeof num === 'number' && num <= 6) {
    return {
      postes: `L'échelle ${num} correspond au personnel d'exécution qualifié et aux assistants. Les postes typiques incluent : ${e.description.split('.').slice(-1)[0].trim() || e.description}. Ces fonctionnaires jouent un rôle clé dans la gestion administrative quotidienne et constituent l'interface entre le public et les services de l'administration.`,
      avantages: `Les fonctionnaires de l'échelle ${num} bénéficient de tous les avantages statutaires : sécurité de l'emploi, AMO, retraite CMR, allocations familiales, prime d'ancienneté progressive et 30 jours de congés annuels. L'indemnité de résidence et les primes de rendement complètent la rémunération de base.`,
      progression: `La progression depuis l'échelle ${num} est encourageante. Les concours internes et examens professionnels permettent d'accéder aux échelles supérieures (7, 8, 9). Les fonctionnaires titulaires d'un baccalauréat ou qui l'obtiennent en cours de carrière peuvent viser les échelles de maîtrise. La formation continue et l'ancienneté facilitent ces promotions.`,
    };
  }
  if (typeof num === 'number' && num <= 9) {
    return {
      postes: `L'échelle ${num} regroupe le personnel de maîtrise de la fonction publique. ${e.description} Ces postes nécessitent une expertise technique ou administrative et une autonomie dans l'exécution des tâches. Les fonctionnaires de cette échelle encadrent souvent des agents des échelles inférieures.`,
      avantages: `Les fonctionnaires de l'échelle ${num} bénéficient d'une rémunération intermédiaire attractive avec les avantages classiques (sécurité de l'emploi, AMO, CMR, allocations familiales). Ils perçoivent également des indemnités de technicité pour les postes techniques et des primes de rendement. L'équilibre vie professionnelle/vie personnelle est généralement bon.`,
      progression: `L'échelle ${num} offre de bonnes perspectives de promotion vers les échelles de cadres (10-11). Les concours internes, les examens professionnels et l'obtention de diplômes supérieurs (licence, master) sont les principales voies de promotion. Un fonctionnaire motivé peut espérer atteindre l'échelle 10 en 5 à 10 ans.`,
    };
  }
  return {
    postes: `L'échelle ${num} correspond aux cadres${num === 11 ? ' supérieurs' : ''} de la fonction publique. ${e.description} Ces postes impliquent des responsabilités importantes : encadrement d'équipes, gestion de projets, prise de décision et représentation de l'administration.`,
    avantages: `Les cadres de l'échelle ${num} bénéficient d'une rémunération attractive complétée par des primes d'encadrement, de technicité et de rendement. La couverture sociale est complète (AMO, CMR, mutuelle) et les perspectives de carrière sont excellentes. L'indemnité de fonction augmente significativement la rémunération pour les postes de responsabilité.`,
    progression: `Les cadres de l'échelle ${num} peuvent accéder à des postes de chef de service, chef de division, directeur et éventuellement à la catégorie hors échelle. La promotion se fait par ancienneté, mérite et nomination. Les concours internes et la formation continue accélèrent la progression. L'accès aux postes de direction nécessite généralement 10 à 20 ans d'expérience.`,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { num } = await params;
  const e = getEchelleByNum(num);
  if (!e) return {};
  const label = e.echelle === 'HE' ? 'Hors Echelle' : `Echelle ${e.echelle}`;
  const title = `${label} Fonction Publique Maroc : salaire et echelons`;
  const desc = `Grille salariale ${label.toLowerCase()} de la fonction publique au Maroc. Salaire net de ${e.echelons[0].salaireNet.toLocaleString('fr-FR')} à ${e.echelons[e.echelons.length - 1].salaireNet.toLocaleString('fr-FR')} DH. Grade ${e.grade}.`;
  return {
    title: title.length > 60 ? title.slice(0, 57) + '...' : title,
    description: desc.length > 160 ? desc.slice(0, 157) + '...' : desc,
    alternates: { canonical: `/salaires-fonction-publique/echelle/${num}/` },
  };
}

export default async function EchellePage({ params }: Props) {
  const { num } = await params;
  const e = getEchelleByNum(num);
  if (!e) notFound();

  const label = getEchelleLabel(e);
  const faqs = getFaqs(e);
  const editorial = getEditorial(e);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Salaires Fonction Publique', url: `${siteConfig.url}/salaires-fonction-publique/` },
    { name: label, url: `${siteConfig.url}/salaires-fonction-publique/echelle/${num}/` },
  ]);
  const faqSchema = buildFAQSchema(faqs);

  const otherEchelles = echelles.filter((x) => x.echelle !== e.echelle);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="text-sm text-primary-200 mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/salaires-fonction-publique/" className="hover:text-white">Salaires</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{label}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            {label} Fonction Publique Maroc : Salaire et Échelons
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Grade : {e.grade} | Catégorie : {e.categorie} | Salaire net : {e.echelons[0].salaireNet.toLocaleString('fr-FR')} DH à {e.echelons[e.echelons.length - 1].salaireNet.toLocaleString('fr-FR')} DH
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Description de l&apos;{label}</h2>
              <p className="text-gray-700 leading-relaxed">{e.description}</p>
            </div>

            {/* Echelon grid */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Grille des échelons - {label}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Échelon</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-700">Indice</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-700">Salaire brut</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-700">Salaire net</th>
                    </tr>
                  </thead>
                  <tbody>
                    {e.echelons.map((ec) => (
                      <tr key={ec.echelon} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">Échelon {ec.echelon}</td>
                        <td className="px-4 py-3 text-right text-gray-600">{ec.indice}</td>
                        <td className="px-4 py-3 text-right text-gray-600">{ec.salaireBrut.toLocaleString('fr-FR')} DH</td>
                        <td className="px-4 py-3 text-right font-semibold text-green-700">{ec.salaireNet.toLocaleString('fr-FR')} DH</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4 italic">
                Montants indicatifs. Les salaires réels peuvent varier selon les primes, indemnités et situation familiale.
              </p>
            </div>

            {/* Editorial */}
            <article className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Postes et métiers de l&apos;{label}</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">{editorial.postes}</p>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Avantages et rémunération globale</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{editorial.avantages}</p>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Progression de carrière</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{editorial.progression}</p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Pour consulter la grille complète de toutes les échelles, visitez notre page <Link href="/salaires-fonction-publique/" className="text-primary-600 hover:text-primary-700">Salaires de la Fonction Publique</Link>. Vous pouvez également explorer les <Link href="/concours/" className="text-primary-600 hover:text-primary-700">concours ouverts</Link> correspondant à cette échelle de recrutement et utiliser notre <Link href="/generateur-cv/" className="text-primary-600 hover:text-primary-700">générateur de CV gratuit</Link> pour préparer votre candidature.
                </p>
              </div>
            </article>

            {/* FAQs */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Questions fréquentes sur l&apos;{label}</h2>
              <div className="space-y-4">
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
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-3">Résumé {label}</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-500">Grade</dt>
                  <dd className="font-medium text-gray-900">{e.grade}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Catégorie</dt>
                  <dd className="font-medium text-gray-900">{e.categorie}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Nombre d&apos;échelons</dt>
                  <dd className="font-medium text-gray-900">{e.echelons.length}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Salaire net min</dt>
                  <dd className="font-medium text-green-700">{e.echelons[0].salaireNet.toLocaleString('fr-FR')} DH</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Salaire net max</dt>
                  <dd className="font-medium text-green-700">{e.echelons[e.echelons.length - 1].salaireNet.toLocaleString('fr-FR')} DH</dd>
                </div>
              </dl>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-3">Autres échelles</h3>
              <ul className="space-y-2 text-sm">
                {otherEchelles.map((oe) => (
                  <li key={getEchelleSlug(oe)}>
                    <Link href={`/salaires-fonction-publique/echelle/${getEchelleSlug(oe)}/`} className="text-primary-600 hover:text-primary-700 flex justify-between">
                      <span>{getEchelleLabel(oe)}</span>
                      <span className="text-gray-500">{oe.echelons[0].salaireNet.toLocaleString('fr-FR')} DH</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-3">Liens utiles</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/salaires-fonction-publique/" className="text-primary-600 hover:text-primary-700">Grille complète des salaires</Link></li>
                <li><Link href="/concours/" className="text-primary-600 hover:text-primary-700">Concours ouverts</Link></li>
                <li><Link href="/generateur-cv/" className="text-primary-600 hover:text-primary-700">Créer mon CV</Link></li>
                <li><Link href="/ministeres/" className="text-primary-600 hover:text-primary-700">Les ministères</Link></li>
                <li><Link href="/guides/salaires-fonction-publique-maroc/" className="text-primary-600 hover:text-primary-700">Guide des salaires</Link></li>
              </ul>
            </div>

            <div className="card p-6 bg-primary-50">
              <h3 className="font-bold text-gray-900 mb-2">Préparez votre candidature</h3>
              <p className="text-sm text-gray-600 mb-4">
                Créez un CV adapté à votre concours de recrutement.
              </p>
              <Link href="/generateur-cv/" className="btn-primary text-sm w-full justify-center">
                Créer mon CV gratuit
              </Link>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-12 italic">
          Grille indicative. Par {siteConfig.author.name} ({siteConfig.author.title}), mise à jour : 2026
        </p>
      </div>
    </>
  );
}
