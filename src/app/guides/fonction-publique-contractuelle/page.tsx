import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Fonction Publique Contractuelle au Maroc : Statut et Droits',
  description: 'Tout comprendre sur le recrutement contractuel dans la fonction publique marocaine : statut, droits, salaire, différences avec la titularisation et avenir.',
  alternates: { canonical: '/guides/fonction-publique-contractuelle/' },
};

const faqs = [
  {
    question: 'Quelle est la différence entre un fonctionnaire titulaire et un contractuel ?',
    answer: 'Le fonctionnaire titulaire bénéficie d\'un emploi permanent après titularisation (stage probatoire). Il est régi par le statut général de la fonction publique et ne peut être licencié que dans des cas exceptionnels. Le contractuel est recruté par contrat à durée déterminée (CDD) ou indéterminée (CDI), avec des droits plus limités. Le contractuel ne bénéficie pas de la même sécurité d\'emploi ni des mêmes perspectives de carrière.',
  },
  {
    question: 'Les contractuels de la fonction publique cotisent-ils pour la retraite ?',
    answer: 'Oui, les contractuels cotisent au RCAR (Régime Collectif d\'Allocation de Retraite) et non à la CMR (Caisse Marocaine des Retraites) réservée aux titulaires. La cotisation RCAR est d\'environ 6% du salaire brut pour le salarié et 6% pour l\'employeur. Les contractuels bénéficient aussi de l\'AMO (Assurance Maladie Obligatoire).',
  },
  {
    question: 'Un contractuel peut-il devenir fonctionnaire titulaire ?',
    answer: 'Oui, un contractuel peut passer les concours de la fonction publique au même titre que tout citoyen remplissant les conditions. Son expérience de contractuel est un atout mais ne lui donne pas de priorité d\'accès. Certains ministères ont mis en place des concours internes réservés aux contractuels ayant accumulé suffisamment d\'ancienneté.',
  },
  {
    question: 'Les enseignants contractuels ont-ils le même salaire que les titulaires ?',
    answer: 'Les enseignants contractuels perçoivent un salaire comparable au traitement de base des titulaires de même échelle, mais sans certaines primes et indemnités spécifiques aux titulaires. En pratique, l\'écart de rémunération est de 10 à 20% en défaveur des contractuels. Cependant, les récentes réformes tendent à harmoniser les conditions.',
  },
  {
    question: 'Le contrat peut-il être rompu unilatéralement par l\'administration ?',
    answer: 'Oui, contrairement aux titulaires, les contractuels peuvent voir leur contrat non renouvelé à l\'échéance, ou résilié pour motif disciplinaire, insuffisance professionnelle ou suppression de poste. Un préavis et des indemnités de fin de contrat sont prévus dans certains cas. Le cadre juridique du licenciement est fixé par le décret régissant les agents contractuels.',
  },
];

export default function GuideFonctionPubliqueContractuelle() {
  const articleSchema = buildArticleSchema({
    title: 'La Fonction Publique Contractuelle au Maroc : Statut, Droits et Perspectives',
    description: 'Guide complet sur le recrutement contractuel dans la fonction publique marocaine.',
    url: `${siteConfig.url}/guides/fonction-publique-contractuelle/`,
    datePublished: '2026-03-15',
    dateModified: '2026-06-15',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Guides', url: `${siteConfig.url}/guides/` },
    { name: 'Fonction publique contractuelle', url: `${siteConfig.url}/guides/fonction-publique-contractuelle/` },
  ]);
  const faqSchema = buildFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="text-sm text-primary-200 mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/guides/" className="hover:text-white">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Fonction publique contractuelle</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            La Fonction Publique Contractuelle au Maroc : Statut et Droits
          </h1>
          <p className="text-primary-100">Par {siteConfig.author.name} ({siteConfig.author.title}), 2026</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 prose prose-gray max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Depuis 2016, le Maroc a massivement recours au recrutement contractuel dans la fonction publique, notamment dans l&apos;éducation nationale. Ce mode de recrutement, qui coexiste avec le concours traditionnel menant à la titularisation, suscite de nombreuses questions et débats. Ce guide fait le point sur le statut, les droits, les obligations et les perspectives des agents contractuels de la fonction publique marocaine.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Le cadre juridique du recrutement contractuel</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le recrutement contractuel dans la fonction publique marocaine est encadré par le Dahir n° 1-58-008 (statut général), le décret n° 2-15-770 relatif aux conditions et modalités de recrutement par contrat dans les administrations publiques, et les circulaires ministérielles spécifiques à chaque secteur. Le contrat est conclu entre l&apos;agent et l&apos;administration pour une durée déterminée (généralement 1 an renouvelable) ou indéterminée. Le contrat précise la mission, la rémunération, les droits et les obligations de chaque partie.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les secteurs concernés par le recrutement contractuel</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le secteur de l&apos;éducation nationale est de loin le plus gros recruteur de contractuels. Depuis 2016, les Académies Régionales d&apos;Éducation et de Formation (AREF) recrutent directement des enseignants par contrat, contournant le concours national traditionnel. Ce mode de recrutement s&apos;est étendu à d&apos;autres secteurs : santé (infirmiers, techniciens), collectivités territoriales (agents techniques), et certains établissements publics. Le nombre de contractuels dans la fonction publique marocaine est estimé à plus de 150 000 agents.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Droits et avantages des contractuels</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les agents contractuels bénéficient de plusieurs droits et avantages, même s&apos;ils sont moins étendus que ceux des titulaires :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Rémunération</strong> : salaire aligné sur la grille indiciaire de la fonction publique selon l&apos;échelle correspondante</li>
          <li><strong>Couverture sociale</strong> : affiliation à l&apos;AMO (Assurance Maladie Obligatoire) et au RCAR (retraite)</li>
          <li><strong>Congés</strong> : congés annuels, congés de maladie, congé de maternité selon le Code du travail</li>
          <li><strong>Formation</strong> : accès aux programmes de formation continue de l&apos;administration</li>
          <li><strong>Allocations familiales</strong> : au même titre que les titulaires</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les différences avec les titulaires</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les principales différences entre contractuels et titulaires portent sur la sécurité de l&apos;emploi, la progression de carrière et certaines primes. Les titulaires bénéficient d&apos;un emploi garanti à vie après titularisation, d&apos;un avancement d&apos;échelon automatique, de la possibilité de promotion par concours interne, de la cotisation CMR (plus avantageuse que le RCAR) et de certaines primes réservées aux titulaires. Les contractuels, en revanche, peuvent voir leur contrat non renouvelé et n&apos;ont pas accès aux mêmes mécanismes de promotion.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Le mouvement de protestation des contractuels</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Depuis 2018, les enseignants contractuels (ou &quot;enseignants des AREF&quot;) mènent un mouvement de protestation pour demander leur intégration dans la fonction publique avec le statut de titulaire. Leurs revendications portent sur l&apos;égalité de traitement avec les titulaires, la sécurité de l&apos;emploi, l&apos;accès aux mêmes primes et indemnités, et la possibilité d&apos;avancement de carrière. Le gouvernement a pris plusieurs mesures pour répondre à ces demandes, notamment l&apos;amélioration des conditions contractuelles et la mise en place de passerelles vers la titularisation.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Les perspectives d&apos;avenir</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le recrutement contractuel semble s&apos;inscrire durablement dans le paysage de la fonction publique marocaine. Plusieurs réformes sont en cours ou envisagées pour améliorer le statut des contractuels : harmonisation progressive des conditions de travail avec les titulaires, mise en place de concours d&apos;intégration, amélioration de la protection sociale, et reconnaissance de l&apos;ancienneté contractuelle pour les promotions futures. La tendance est à un rapprochement progressif des deux statuts, même si des différences subsistent.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conseils pour les candidats au recrutement contractuel</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Lisez attentivement le contrat avant de signer et n&apos;hésitez pas à demander des clarifications</li>
          <li>Informez-vous sur vos droits et obligations auprès des syndicats ou des associations de contractuels</li>
          <li>Continuez à préparer les concours de la fonction publique pour viser la titularisation</li>
          <li>Accumulez de l&apos;expérience et des formations qui valoriseront votre profil</li>
          <li>Conservez tous les documents relatifs à votre contrat et à votre activité</li>
        </ul>

        {/* FAQs */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Questions fréquentes</h2>
        <div className="space-y-4 not-prose">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-gray-200 rounded-lg">
              <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 hover:text-primary-600 transition-colors list-none flex items-center justify-between">
                {faq.question}
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</div>
            </details>
          ))}
        </div>

        <div className="mt-10 p-6 bg-primary-50 rounded-xl not-prose">
          <h3 className="font-bold text-gray-900 mb-2">Ressources utiles</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/salaires-fonction-publique/" className="btn-secondary text-sm">Grille des salaires</Link>
            <Link href="/concours/" className="btn-secondary text-sm">Concours ouverts</Link>
            <Link href="/guides/reussir-concours-public/" className="btn-secondary text-sm">Préparer le concours</Link>
            <Link href="/generateur-cv/" className="btn-primary text-sm">Créer mon CV</Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8 italic">
          Par {siteConfig.author.name} ({siteConfig.author.title}), 2026
        </p>
      </article>
    </>
  );
}
