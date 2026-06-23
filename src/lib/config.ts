export const siteConfig = {
  name: 'Emploi Public Maroc',
  domain: 'emploipublic.ma',
  url: 'https://emploipublic.ma',
  tagline: 'Concours, offres d\'emploi et outils pour la fonction publique au Maroc',
  description: 'Emploi Public au Maroc : concours de la fonction publique, offres d\'emploi, grille de salaires, et generateur de CV gratuit. Tout pour reussir votre carriere dans la fonction publique marocaine.',
  author: {
    name: 'Mottalib Radif',
    title: 'MBA INSEAD',
    email: 'contact@emploipublic.ma',
  },
  contact: 'contact@emploipublic.ma',
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
    { label: 'Ministeres', href: '/ministeres/' },
    { label: 'Generateur CV', href: '/generateur-cv/' },
    { label: 'Guides', href: '/guides/reussir-concours-public/' },
    { label: 'Salaires', href: '/salaires-fonction-publique/' },
  ],
} as const;
