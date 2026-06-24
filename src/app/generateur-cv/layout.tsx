import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { buildWebApplicationSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Générateur de CV Gratuit Fonction Publique Maroc 2026',
  description: 'Créez votre CV professionnel gratuitement pour la fonction publique marocaine. Trois modèles optimisés, export PDF instantané et sauvegarde automatique.',
  alternates: { canonical: '/generateur-cv/' },
};

const cvFaqs = [
  {
    question: 'Le générateur de CV est-il vraiment gratuit et sans inscription ?',
    answer: 'Oui, notre générateur de CV est 100 % gratuit et ne nécessite aucune inscription ni création de compte. Vous pouvez créer, personnaliser et télécharger votre CV au format PDF autant de fois que vous le souhaitez, sans aucune limitation ni filigrane.',
  },
  {
    question: 'Mes données personnelles sont-elles protégées dans le générateur de CV ?',
    answer: 'Absolument. Toutes vos données restent dans votre navigateur (localStorage). Aucune information personnelle n\'est envoyée à nos serveurs. Vos données sont sauvegardées localement pour que vous puissiez reprendre la création de votre CV plus tard, et vous pouvez les supprimer à tout moment en effaçant les données de votre navigateur.',
  },
  {
    question: 'Quels modèles de CV sont disponibles pour la fonction publique ?',
    answer: 'Nous proposons trois modèles professionnels adaptés à la fonction publique marocaine : le modèle Classique (sobre et traditionnel, idéal pour les ministères conservateurs), le modèle Moderne (design actuel avec une mise en page épurée) et le modèle Professionnel (accent sur les compétences et l\'expérience). Chaque modèle est optimisé pour l\'impression A4.',
  },
  {
    question: 'Comment télécharger mon CV en format PDF ?',
    answer: 'Une fois votre CV complété, cliquez sur le bouton "Imprimer / PDF" situé au-dessus de l\'aperçu. La boîte de dialogue d\'impression de votre navigateur s\'ouvrira. Sélectionnez "Enregistrer au format PDF" comme destination d\'impression. Le document sera généré au format A4, prêt à être joint à votre dossier de candidature.',
  },
  {
    question: 'Quelles sections doit contenir un CV pour un concours de la fonction publique ?',
    answer: 'Un CV pour la fonction publique marocaine doit inclure : vos informations personnelles complètes (état civil, adresse, téléphone, email), un objectif professionnel lié au poste visé, votre formation et diplômes avec mentions, vos expériences professionnelles détaillées, vos compétences techniques et informatiques, vos langues parlées (arabe, français, anglais, amazigh), et éventuellement vos centres d\'intérêt. Notre générateur vous guide à travers toutes ces sections.',
  },
];

export default function GenerateurCVLayout({ children }: { children: React.ReactNode }) {
  const webAppSchema = buildWebApplicationSchema();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Générateur de CV', url: `${siteConfig.url}/generateur-cv/` },
  ]);
  const faqSchema = buildFAQSchema(cvFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
