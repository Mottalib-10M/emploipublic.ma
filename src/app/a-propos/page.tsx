import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'A Propos - Emploi Public Maroc',
  description: 'A propos d\'Emploi Public Maroc : notre mission, notre equipe et notre engagement pour aider les Marocains a integrer la fonction publique.',
  alternates: { canonical: '/a-propos/' },
};

export default function AProposPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'A propos', url: `${siteConfig.url}/a-propos/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">A Propos</h1>
          <p className="text-primary-100 text-lg">{siteConfig.tagline}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Emploi Public Maroc</strong> (emploipublic.ma) est une plateforme d&apos;information et d&apos;outils dediee aux candidats a la fonction publique marocaine. Notre mission est de democratiser l&apos;acces a l&apos;information sur les concours publics, les salaires et les carrieres dans l&apos;administration marocaine.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nous croyons que chaque citoyen marocain merite un acces egal et transparent aux opportunites d&apos;emploi public. C&apos;est pourquoi nous mettons a disposition :
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Une base de donnees des concours de la fonction publique</li>
            <li>Un generateur de CV professionnel entierement gratuit</li>
            <li>Une grille detaillee des salaires par echelle et echelon</li>
            <li>Des guides pratiques pour reussir les concours et entretiens</li>
            <li>Des fiches detaillees sur chaque ministere et organisme public</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">L&apos;equipe</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Emploi Public Maroc est fonde et dirige par <strong>{siteConfig.author.name}</strong>, titulaire d&apos;un {siteConfig.author.title}. Fort de son experience dans le conseil en strategie et sa connaissance du marche de l&apos;emploi marocain, il a cree cette plateforme pour combler un manque d&apos;information structuree sur la fonction publique au Maroc.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Nous contacter</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pour toute question, suggestion ou partenariat, n&apos;hesitez pas a nous ecrire a :
          </p>
          <p className="text-primary-600 font-semibold text-lg mb-4">
            <a href={`mailto:${siteConfig.contact}`}>{siteConfig.contact}</a>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Avertissement</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les informations publiees sur emploipublic.ma sont fournies a titre indicatif et ne remplacent pas les publications officielles du Bulletin Officiel ou des sites web des ministeres. Nous nous efforcons de maintenir les donnees a jour, mais nous recommandons toujours de verifier les informations aupres des sources officielles avant de constituer un dossier de candidature.
          </p>
        </article>

        <div className="mt-10 p-6 bg-primary-50 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-2">Explorez nos outils</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/generateur-cv/" className="btn-primary text-sm">Generateur de CV</Link>
            <Link href="/concours/" className="btn-secondary text-sm">Concours</Link>
            <Link href="/salaires-fonction-publique/" className="btn-secondary text-sm">Grille des salaires</Link>
          </div>
        </div>
      </div>
    </>
  );
}
