export interface Ministere {
  slug: string;
  nom: string;
  nomCourt: string;
  description: string;
  effectif: string;
  departements: string[];
  echelles: string;
  typeConcours: string[];
  siteOfficiel: string;
}

export const ministeres: Ministere[] = [
  {
    slug: 'education-nationale',
    nom: 'Ministère de l\'Éducation Nationale, du Préscolaire et des Sports',
    nomCourt: 'Éducation Nationale',
    description: 'Le Ministère de l\'Éducation Nationale est le plus grand employeur de la fonction publique marocaine. Il gère l\'ensemble du système éducatif, des écoles primaires aux lycées, en passant par la formation des enseignants et la politique éducative nationale. Chaque année, il organise des concours massifs pour recruter des enseignants dans toutes les disciplines, des cadres administratifs et du personnel de soutien.',
    effectif: '~300,000 fonctionnaires',
    departements: ['Enseignement primaire', 'Enseignement secondaire collégial', 'Enseignement secondaire qualifiant', 'Formation des cadres', 'Planification et statistiques', 'Affaires juridiques'],
    echelles: 'Échelle 9 à Hors échelle',
    typeConcours: ['Enseignants du primaire', 'Enseignants du secondaire collégial', 'Enseignants du secondaire qualifiant', 'Cadres administratifs', 'Inspecteurs pédagogiques', 'Conseillers en orientation'],
    siteOfficiel: 'https://www.men.gov.ma',
  },
  {
    slug: 'sante',
    nom: 'Ministère de la Santé et de la Protection Sociale',
    nomCourt: 'Santé',
    description: 'Le Ministère de la Santé gère le système de santé publique au Maroc, incluant les hôpitaux publics, les centres de santé et les programmes de santé publique. Il recrute régulièrement des médecins, infirmiers, pharmaciens et cadres administratifs à travers des concours spécifiques au secteur de la santé.',
    effectif: '~55,000 fonctionnaires',
    departements: ['Hôpitaux publics', 'Santé publique et prévention', 'Médicaments et pharmacie', 'Ressources humaines', 'Équipements et maintenance', 'Épidémiologie'],
    echelles: 'Échelle 10 à Hors échelle',
    typeConcours: ['Médecins spécialistes', 'Médecins généralistes', 'Infirmiers polyvalents', 'Pharmaciens', 'Techniciens de santé', 'Cadres administratifs'],
    siteOfficiel: 'https://www.sante.gov.ma',
  },
  {
    slug: 'interieur',
    nom: 'Ministère de l\'Intérieur',
    nomCourt: 'Intérieur',
    description: 'Le Ministère de l\'Intérieur est chargé de l\'administration territoriale, de la sécurité intérieure et de la gestion des collectivités territoriales. Il supervise les walis, gouverneurs et cadres de l\'administration territoriale. Les concours concernent principalement les cadres administratifs, les agents d\'autorité et le personnel technique.',
    effectif: '~45,000 fonctionnaires',
    departements: ['Administration territoriale', 'Collectivités territoriales', 'Sûreté nationale', 'Protection civile', 'Affaires juridiques', 'Migration et surveillance des frontières'],
    echelles: 'Échelle 7 à Hors échelle',
    typeConcours: ['Cadres administratifs', 'Agents d\'autorité', 'Techniciens informatiques', 'Rédacteurs', 'Ingénieurs'],
    siteOfficiel: 'https://www.interieur.gov.ma',
  },
  {
    slug: 'justice',
    nom: 'Ministère de la Justice',
    nomCourt: 'Justice',
    description: 'Le Ministère de la Justice est responsable de l\'organisation judiciaire, de la formation des magistrats et de la modernisation du système judiciaire marocain. Il recrute des greffiers, rédacteurs judiciaires, cadres administratifs et personnel technique pour les tribunaux et cours d\'appel du Royaume.',
    effectif: '~18,000 fonctionnaires',
    departements: ['Tribunaux de première instance', 'Cours d\'appel', 'Greffe', 'Études et coopération', 'Affaires pénales', 'Modernisation et informatique'],
    echelles: 'Échelle 8 à Hors échelle',
    typeConcours: ['Greffiers', 'Rédacteurs judiciaires', 'Secrétaires de greffe', 'Cadres administratifs', 'Informaticiens'],
    siteOfficiel: 'https://www.justice.gov.ma',
  },
  {
    slug: 'finances',
    nom: 'Ministère de l\'Économie et des Finances',
    nomCourt: 'Finances',
    description: 'Le Ministère des Finances gère les finances publiques, la politique fiscale, les douanes et la trésorerie générale du Royaume. Il offre des carrières attractives pour les économistes, comptables, inspecteurs des finances et cadres supérieurs. Les concours sont très compétitifs et offrent parmi les meilleures rémunérations de la fonction publique.',
    effectif: '~25,000 fonctionnaires',
    departements: ['Direction Générale des Impôts', 'Administration des Douanes', 'Trésorerie Générale du Royaume', 'Direction du Budget', 'Direction des Entreprises Publiques', 'Inspection Générale des Finances'],
    echelles: 'Échelle 10 à Hors échelle',
    typeConcours: ['Inspecteurs des impôts', 'Inspecteurs des douanes', 'Cadres financiers', 'Comptables publics', 'Économistes', 'Auditeurs'],
    siteOfficiel: 'https://www.finances.gov.ma',
  },
  {
    slug: 'agriculture',
    nom: 'Ministère de l\'Agriculture, de la Pêche Maritime, du Développement Rural et des Eaux et Forêts',
    nomCourt: 'Agriculture',
    description: 'Le Ministère de l\'Agriculture couvre un large spectre d\'activités : agriculture, pêche, développement rural et gestion des eaux et forêts. Il recrute des ingénieurs agronomes, techniciens agricoles, vétérinaires et cadres pour la gestion des programmes de développement agricole, notamment le Plan Maroc Vert et Génération Green.',
    effectif: '~15,000 fonctionnaires',
    departements: ['Agriculture et élevage', 'Pêche maritime', 'Eaux et forêts', 'Développement rural', 'Recherche agronomique', 'Offices régionaux de mise en valeur agricole'],
    echelles: 'Échelle 9 à Hors échelle',
    typeConcours: ['Ingénieurs agronomes', 'Techniciens agricoles', 'Vétérinaires', 'Cadres administratifs', 'Techniciens des eaux et forêts'],
    siteOfficiel: 'https://www.agriculture.gov.ma',
  },
  {
    slug: 'equipement-transports',
    nom: 'Ministère de l\'Équipement et de l\'Eau',
    nomCourt: 'Équipement et Transports',
    description: 'Le Ministère de l\'Équipement et de l\'Eau est responsable des infrastructures routières, portuaires et hydrauliques du Maroc. Il recrute principalement des ingénieurs (génie civil, hydraulique), des techniciens et des cadres pour la gestion des grands projets d\'infrastructure du Royaume.',
    effectif: '~12,000 fonctionnaires',
    departements: ['Routes et autoroutes', 'Ports et domaine maritime', 'Eau et assainissement', 'Météorologie nationale', 'Constructions publiques', 'Transport routier'],
    echelles: 'Échelle 9 à Hors échelle',
    typeConcours: ['Ingénieurs génie civil', 'Ingénieurs hydrauliques', 'Techniciens topographes', 'Cadres administratifs', 'Dessinateurs'],
    siteOfficiel: 'https://www.equipement.gov.ma',
  },
  {
    slug: 'industrie-commerce',
    nom: 'Ministère de l\'Industrie et du Commerce',
    nomCourt: 'Industrie et Commerce',
    description: 'Le Ministère de l\'Industrie et du Commerce pilote la politique industrielle et commerciale du Maroc. Il intervient dans la régulation du commerce, la propriété industrielle, la normalisation et la promotion de l\'investissement industriel. Les recrutements concernent des économistes, ingénieurs, cadres commerciaux et juristes.',
    effectif: '~5,000 fonctionnaires',
    departements: ['Industrie', 'Commerce intérieur', 'Commerce extérieur', 'OMPIC (Propriété industrielle)', 'Qualité et normalisation', 'Zones industrielles'],
    echelles: 'Échelle 10 à Hors échelle',
    typeConcours: ['Cadres économistes', 'Ingénieurs industriels', 'Juristes', 'Cadres commerciaux'],
    siteOfficiel: 'https://www.mcinet.gov.ma',
  },
  {
    slug: 'emploi',
    nom: 'Ministère de l\'Inclusion Économique, de la Petite Entreprise, de l\'Emploi et des Compétences',
    nomCourt: 'Emploi',
    description: 'Le Ministère de l\'Emploi est en charge de la politique de l\'emploi, du droit du travail, de la protection sociale et de la formation professionnelle. Il gère également l\'ANAPEC (Agence Nationale de Promotion de l\'Emploi et des Compétences) et recrute des inspecteurs du travail, des cadres RH et des conseillers en emploi.',
    effectif: '~8,000 fonctionnaires',
    departements: ['Travail et relations professionnelles', 'Emploi', 'Protection sociale', 'Formation professionnelle', 'ANAPEC', 'Inspection du travail'],
    echelles: 'Échelle 10 à Hors échelle',
    typeConcours: ['Inspecteurs du travail', 'Conseillers en emploi', 'Cadres administratifs', 'Statisticiens'],
    siteOfficiel: 'https://www.emploi.gov.ma',
  },
  {
    slug: 'forces-armees-royales',
    nom: 'Forces Armées Royales (FAR)',
    nomCourt: 'Forces Armées Royales',
    description: 'Les Forces Armées Royales regroupent l\'Armée de Terre, la Marine Royale, les Forces Royales Air et la Gendarmerie Royale. Elles offrent des carrières variées : officiers, sous-officiers et militaires du rang dans différentes spécialités (infanterie, génie, transmissions, santé militaire, etc.).',
    effectif: '~200,000 militaires',
    departements: ['Armée de Terre', 'Marine Royale', 'Forces Royales Air', 'Gendarmerie Royale', 'Santé militaire', 'Génie militaire'],
    echelles: 'Grades militaires spécifiques',
    typeConcours: ['Officiers', 'Sous-officiers', 'Soldats professionnels', 'Gendarmes', 'Médecins militaires', 'Ingénieurs militaires'],
    siteOfficiel: 'https://www.far.ma',
  },
  {
    slug: 'oncf',
    nom: 'Office National des Chemins de Fer (ONCF)',
    nomCourt: 'ONCF',
    description: 'L\'ONCF est l\'opérateur historique du transport ferroviaire au Maroc, incluant le réseau de trains classiques et la Ligne à Grande Vitesse (LGV Al Boraq). L\'ONCF recrute des ingénieurs, techniciens de maintenance, conducteurs de trains, cadres commerciaux et personnel d\'exploitation pour assurer le fonctionnement du réseau ferroviaire.',
    effectif: '~8,000 employés',
    departements: ['Exploitation ferroviaire', 'Maintenance et matériel roulant', 'Infrastructure et voie', 'Commercial et marketing', 'Sécurité ferroviaire', 'LGV Al Boraq'],
    echelles: 'Grille salariale spécifique ONCF',
    typeConcours: ['Ingénieurs ferroviaires', 'Techniciens de maintenance', 'Conducteurs de trains', 'Cadres commerciaux', 'Agents d\'exploitation'],
    siteOfficiel: 'https://www.oncf.ma',
  },
  {
    slug: 'collectivites-territoriales',
    nom: 'Collectivités Territoriales',
    nomCourt: 'Collectivités Territoriales',
    description: 'Les Collectivités Territoriales (régions, préfectures, provinces et communes) constituent un employeur majeur de la fonction publique marocaine. Elles gèrent les services publics locaux : urbanisme, état civil, voirie, espaces verts, action sociale. Les concours sont organisés au niveau local et offrent des postes variés.',
    effectif: '~150,000 fonctionnaires',
    departements: ['Urbanisme et construction', 'État civil', 'Voirie et espaces verts', 'Action sociale', 'Budget et comptabilité', 'Services techniques'],
    echelles: 'Échelle 1 à Hors échelle',
    typeConcours: ['Techniciens', 'Rédacteurs', 'Cadres administratifs', 'Ingénieurs', 'Architectes', 'Agents d\'exécution'],
    siteOfficiel: 'https://www.collectivites-territoriales.gov.ma',
  },
];

export function getMinistereBySlug(slug: string): Ministere | undefined {
  return ministeres.find((m) => m.slug === slug);
}
