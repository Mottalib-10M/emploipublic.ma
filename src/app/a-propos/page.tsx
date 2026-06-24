import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'À Propos : notre mission et notre équipe éditoriale',
  description: 'Découvrez la mission d\'Emploi Public Maroc, notre équipe éditoriale et notre engagement pour aider les candidats marocains à intégrer la fonction publique.',
  alternates: { canonical: '/a-propos/' },
};

export default function AProposPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'À propos', url: `${siteConfig.url}/a-propos/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">À Propos</h1>
          <p className="text-primary-100 text-lg">{siteConfig.tagline}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">À Propos</span>
        </nav>
        <article className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Emploi Public Maroc</strong> (emploipublic.ma) est une plateforme d&apos;information et d&apos;outils dédiée aux candidats à la fonction publique marocaine. Notre mission est de démocratiser l&apos;accès à l&apos;information sur les concours publics, les salaires et les carrières dans l&apos;administration marocaine.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nous croyons que chaque citoyen marocain mérite un accès égal et transparent aux opportunités d&apos;emploi public. C&apos;est pourquoi nous mettons à disposition :
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Une base de données des concours de la fonction publique</li>
            <li>Un générateur de CV professionnel entièrement gratuit</li>
            <li>Une grille détaillée des salaires par échelle et échelon</li>
            <li>Des guides pratiques pour réussir les concours et entretiens</li>
            <li>Des fiches détaillées sur chaque ministère et organisme public</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">L&apos;équipe</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Emploi Public Maroc est fondé et dirigé par <strong>{siteConfig.author.name}</strong>, titulaire d&apos;un {siteConfig.author.title}. Fort de son expérience dans le conseil en stratégie et sa connaissance du marché de l&apos;emploi marocain, il a créé cette plateforme pour combler un manque d&apos;information structurée sur la fonction publique au Maroc.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Nous contacter</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pour toute question, suggestion ou partenariat, n&apos;hésitez pas à nous écrire à :
          </p>
          <p className="text-primary-600 font-semibold text-lg mb-4">
            <a href={`mailto:${siteConfig.contact}`}>{siteConfig.contact}</a>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Avertissement</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les informations publiées sur emploipublic.ma sont fournies à titre indicatif et ne remplacent pas les publications officielles du Bulletin Officiel ou des sites web des ministères. Nous nous efforçons de maintenir les données à jour, mais nous recommandons toujours de vérifier les informations auprès des sources officielles avant de constituer un dossier de candidature.
          </p>
        </article>

        <div className="mt-10 p-6 bg-primary-50 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-2">Explorez nos outils</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/generateur-cv/" className="btn-primary text-sm">Générateur de CV</Link>
            <Link href="/concours/" className="btn-secondary text-sm">Concours</Link>
            <Link href="/salaires-fonction-publique/" className="btn-secondary text-sm">Grille des salaires</Link>
          </div>
        </div>
      </div>
    </>
  );
}
