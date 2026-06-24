import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo';
import { concoursProcess } from '@/data/concours-types';
import ListeConcours from '@/components/concours/ListeConcours';

export const metadata: Metadata = {
  title: 'Concours Fonction Publique Maroc 2026 : Liste et Calendrier',
  description: 'Liste complète des concours de la fonction publique au Maroc 2026. Filtrez par ministère, région et échelle. Dates limites et nombre de postes disponibles.',
  alternates: { canonical: '/concours/' },
};

const concoursFaqs = [
  {
    question: 'Où trouver les avis de concours de la fonction publique au Maroc ?',
    answer: 'Les avis de concours sont publiés au Bulletin Officiel du Royaume du Maroc, sur les sites web des ministères concernés, sur le portail emploi-public.ma du gouvernement et sur notre plateforme emploipublic.ma qui centralise toutes les annonces. Il est recommandé de consulter ces sources régulièrement pour ne manquer aucune opportunité.',
  },
  {
    question: 'Quels documents faut-il pour s\'inscrire à un concours public ?',
    answer: 'Le dossier de candidature comprend généralement : une demande manuscrite adressée au ministre ou directeur, un CV détaillé, des copies certifiées conformes de vos diplômes, une copie de la CIN, des photos d\'identité récentes, une attestation d\'équivalence de diplôme (si diplôme étranger), et parfois un certificat médical. Les pièces exactes sont précisées dans l\'avis de concours.',
  },
  {
    question: 'Combien de temps dure la préparation d\'un concours de la fonction publique ?',
    answer: 'Une préparation sérieuse nécessite en moyenne 3 à 6 mois. Cela inclut la révision des matières de culture générale (droit administratif, actualité marocaine), la préparation aux épreuves de la spécialité, et l\'entraînement aux techniques de rédaction administrative. Les candidats les mieux préparés commencent dès l\'annonce préliminaire du concours.',
  },
  {
    question: 'Peut-on passer plusieurs concours de la fonction publique en même temps ?',
    answer: 'Oui, il est tout à fait possible et même recommandé de s\'inscrire à plusieurs concours simultanément, à condition de remplir les conditions requises pour chacun (diplôme, âge, spécialité). Cela augmente vos chances d\'être recruté. Veillez cependant à ce que les dates des épreuves ne se chevauchent pas, car vous ne pourrez pas être présent dans deux centres d\'examen le même jour.',
  },
  {
    question: 'Quelle est la limite d\'âge pour passer un concours de la fonction publique au Maroc ?',
    answer: 'La limite d\'âge générale est fixée à 45 ans pour la plupart des concours de la fonction publique marocaine. Toutefois, certains corps ont des limites spécifiques (par exemple 30 ans pour les forces de l\'ordre). Des dérogations existent pour les fonctionnaires en poste qui passent des concours internes. La limite d\'âge exacte est toujours précisée dans l\'avis de concours.',
  },
];

export default function ConcoursPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Concours', url: `${siteConfig.url}/concours/` },
  ]);
  const faqSchema = buildFAQSchema(concoursFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Concours de la Fonction Publique au Maroc
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Retrouvez tous les concours ouverts et à venir dans les ministères et organismes publics marocains. Filtrez par ministère, région et échelle.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav aria-label="Fil d'Ariane" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Concours</span>
        </nav>
        <ListeConcours />

        {/* Concours Process */}
        <section className="mt-16">
          <h2 className="section-title">Les étapes d&apos;un concours de la fonction publique</h2>
          <p className="section-subtitle">Comprendre le processus de recrutement pour mieux s&apos;y préparer</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {concoursProcess.map((etape) => (
              <div key={etape.etape} className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {etape.etape}
                  </div>
                  <h3 className="font-semibold text-gray-900">{etape.titre}</h3>
                </div>
                <p className="text-sm text-gray-600">{etape.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Content - Expanded to 1500+ chars */}
        <section className="mt-16">
          <article className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tout savoir sur les concours de la fonction publique au Maroc</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les concours de la fonction publique au Maroc constituent la voie principale d&apos;accès aux postes de l&apos;administration publique. Organisés par les différents ministères et établissements publics, ces concours garantissent une sélection transparente et méritocratique des candidats. Le processus de recrutement est encadré par le statut général de la fonction publique et les statuts particuliers de chaque corps de fonctionnaires.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chaque année, des centaines de concours sont publiés au Bulletin Officiel et sur les sites web des ministères. Les postes proposés couvrent un large éventail de spécialités : enseignement, santé, droit, génie civil, informatique, agriculture, finances, et bien d&apos;autres domaines. Les conditions d&apos;accès varient selon l&apos;échelle de recrutement, allant du baccalauréat pour l&apos;échelle 7 au doctorat pour certains postes de l&apos;échelle 11 et hors échelle.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour maximiser vos chances de réussite, il est recommandé de commencer la préparation plusieurs mois à l&apos;avance. Les épreuves écrites testent généralement la culture générale, les connaissances spécifiques à la spécialité et les capacités de rédaction. L&apos;épreuve orale, quant à elle, évalue la motivation du candidat, sa connaissance du poste et du ministère, ainsi que ses aptitudes relationnelles. Une bonne préparation aux deux types d&apos;épreuves est indispensable pour décrocher un poste dans la fonction publique.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le calendrier des concours varie d&apos;un ministère à l&apos;autre, mais la majorité des avis sont publiés entre septembre et mars. Le Ministère de l&apos;Éducation Nationale, plus grand recruteur, lance généralement ses concours d&apos;enseignement entre novembre et janvier. Les ministères techniques (Équipement, Agriculture, Industrie) ouvrent souvent leurs concours au printemps. Pour ne rater aucune opportunité, nous vous conseillons de consulter notre page régulièrement et de filtrer les concours selon votre profil, votre région et votre spécialité.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le jour de l&apos;examen, présentez-vous avec votre convocation et votre CIN originale. Arrivez au moins 30 minutes en avance pour éviter tout stress. Lisez attentivement les sujets avant de rédiger, gérez votre temps de manière équilibrée entre les différentes questions et soignez la présentation de votre copie. Un CV professionnel préparé à l&apos;avance via notre générateur de CV gratuit complétera votre dossier de candidature et démontrera votre sérieux auprès du jury.
            </p>
            <p className="text-sm text-gray-500 mt-6 italic">
              Par {siteConfig.author.name} ({siteConfig.author.title})
            </p>
          </article>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="section-title">Questions fréquentes sur les concours</h2>
          <div className="space-y-4 mt-8 max-w-3xl">
            {concoursFaqs.map((faq, i) => (
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
    </>
  );
}
