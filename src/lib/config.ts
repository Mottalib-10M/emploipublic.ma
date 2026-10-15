export const siteConfig = {
  name: 'Emploi Public Maroc',
  domain: 'emploipublic.ma',
  url: 'https://emploipublic.ma',
  tagline: 'Concours, offres d\'emploi et outils pour la fonction publique au Maroc',
  description: 'Emploi Public au Maroc : concours de la fonction publique, offres d\'emploi, grille de salaires, et générateur de CV gratuit. Tout pour réussir votre carrière dans la fonction publique marocaine.',
  author: {
    name: 'Radif Partners',
    title: 'Éditeur de calculateurs et de guides pratiques',
    email: 'contact@emploipublic.ma',
  },
  contact: 'contact@emploipublic.ma',
  // Date réelle de la dernière mise à jour des données (dernier commit de src/data), affichée en
  // toutes lettres en pied de page (RECETTE §8.4).
  lastUpdated: '2026-07-05',
  brand: {
    primary: '#7C3AED',
    primaryLight: '#8B5CF6',
    primaryDark: '#6D28D9',
  },
  social: {
    twitter: '',
    linkedin: '',
  },
  nav: [
    { label: 'Concours', href: '/concours/' },
    { label: 'Ministères', href: '/ministeres/' },
    { label: 'Générateur CV', href: '/generateur-cv/' },
    { label: 'Guides', href: '/guides/' },
    { label: 'Salaires', href: '/salaires-fonction-publique/' },
  ],
} as const;
