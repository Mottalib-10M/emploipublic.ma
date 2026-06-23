import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';
import { concoursProcess } from '@/data/concours-types';
import ListeConcours from '@/components/concours/ListeConcours';

export const metadata: Metadata = {
  title: 'Concours de la Fonction Publique au Maroc 2025',
  description: 'Liste des concours de la fonction publique au Maroc 2025. Trouvez les concours ouverts par ministere, region et echelle.',
  alternates: { canonical: '/concours/' },
};

export default function ConcoursPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Concours', url: `${siteConfig.url}/concours/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Concours de la Fonction Publique au Maroc
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Retrouvez tous les concours ouverts et a venir dans les ministeres et organismes publics marocains. Filtrez par ministere, region et echelle.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ListeConcours />

        {/* Concours Process */}
        <section className="mt-16">
          <h2 className="section-title">Les etapes d&apos;un concours de la fonction publique</h2>
          <p className="section-subtitle">Comprendre le processus de recrutement pour mieux s&apos;y preparer</p>
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

        {/* SEO Content */}
        <section className="mt-16">
          <article className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tout savoir sur les concours de la fonction publique au Maroc</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les concours de la fonction publique au Maroc constituent la voie principale d&apos;acces aux postes de l&apos;administration publique. Organises par les differents ministeres et etablissements publics, ces concours garantissent une selection transparente et meritocratique des candidats. Le processus de recrutement est encadre par le statut general de la fonction publique et les statuts particuliers de chaque corps de fonctionnaires.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chaque annee, des centaines de concours sont publies au Bulletin Officiel et sur les sites web des ministeres. Les postes proposes couvrent un large eventail de specialites : enseignement, sante, droit, genie civil, informatique, agriculture, finances, et bien d&apos;autres domaines. Les conditions d&apos;acces varient selon l&apos;echelle de recrutement, allant du baccalaureat pour l&apos;echelle 7 au doctorat pour certains postes de l&apos;echelle 11 et hors echelle.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour maximiser vos chances de reussite, il est recommande de commencer la preparation plusieurs mois a l&apos;avance. Les epreuves ecrites testent generalement la culture generale, les connaissances specifiques a la specialite et les capacites de redaction. L&apos;epreuve orale, quant a elle, evalue la motivation du candidat, sa connaissance du poste et du ministere, ainsi que ses aptitudes relationnelles. Une bonne preparation aux deux types d&apos;epreuves est indispensable pour decrocher un poste dans la fonction publique.
            </p>
            <p className="text-sm text-gray-500 mt-6 italic">
              Par {siteConfig.author.name} ({siteConfig.author.title})
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
