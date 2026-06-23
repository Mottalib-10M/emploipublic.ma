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
    nom: 'Ministere de l\'Education Nationale, du Prescolaire et des Sports',
    nomCourt: 'Education Nationale',
    description: 'Le Ministere de l\'Education Nationale est le plus grand employeur de la fonction publique marocaine. Il gere l\'ensemble du systeme educatif, des ecoles primaires aux lycees, en passant par la formation des enseignants et la politique educative nationale. Chaque annee, il organise des concours massifs pour recruter des enseignants dans toutes les disciplines, des cadres administratifs et du personnel de soutien.',
    effectif: '~300,000 fonctionnaires',
    departements: ['Enseignement primaire', 'Enseignement secondaire collegial', 'Enseignement secondaire qualifiant', 'Formation des cadres', 'Planification et statistiques', 'Affaires juridiques'],
    echelles: 'Echelle 9 a Hors echelle',
    typeConcours: ['Enseignants du primaire', 'Enseignants du secondaire collegial', 'Enseignants du secondaire qualifiant', 'Cadres administratifs', 'Inspecteurs pedagogiques', 'Conseillers en orientation'],
    siteOfficiel: 'https://www.men.gov.ma',
  },
  {
    slug: 'sante',
    nom: 'Ministere de la Sante et de la Protection Sociale',
    nomCourt: 'Sante',
    description: 'Le Ministere de la Sante gere le systeme de sante publique au Maroc, incluant les hopitaux publics, les centres de sante et les programmes de sante publique. Il recrute regulierement des medecins, infirmiers, pharmaciens et cadres administratifs a travers des concours specifiques au secteur de la sante.',
    effectif: '~55,000 fonctionnaires',
    departements: ['Hopitaux publics', 'Sante publique et prevention', 'Medicaments et pharmacie', 'Ressources humaines', 'Equipements et maintenance', 'Epidemiologie'],
    echelles: 'Echelle 10 a Hors echelle',
    typeConcours: ['Medecins specialistes', 'Medecins generalistes', 'Infirmiers polyvalents', 'Pharmaciens', 'Techniciens de sante', 'Cadres administratifs'],
    siteOfficiel: 'https://www.sante.gov.ma',
  },
  {
    slug: 'interieur',
    nom: 'Ministere de l\'Interieur',
    nomCourt: 'Interieur',
    description: 'Le Ministere de l\'Interieur est charge de l\'administration territoriale, de la securite interieure et de la gestion des collectivites territoriales. Il supervise les walis, gouverneurs et cadres de l\'administration territoriale. Les concours concernent principalement les cadres administratifs, les agents d\'autorite et le personnel technique.',
    effectif: '~45,000 fonctionnaires',
    departements: ['Administration territoriale', 'Collectivites territoriales', 'Surete nationale', 'Protection civile', 'Affaires juridiques', 'Migration et surveillance des frontieres'],
    echelles: 'Echelle 7 a Hors echelle',
    typeConcours: ['Cadres administratifs', 'Agents d\'autorite', 'Techniciens informatiques', 'Redacteurs', 'Ingenieurs'],
    siteOfficiel: 'https://www.interieur.gov.ma',
  },
  {
    slug: 'justice',
    nom: 'Ministere de la Justice',
    nomCourt: 'Justice',
    description: 'Le Ministere de la Justice est responsable de l\'organisation judiciaire, de la formation des magistrats et de la modernisation du systeme judiciaire marocain. Il recrute des greffiers, redacteurs judiciaires, cadres administratifs et personnel technique pour les tribunaux et cours d\'appel du Royaume.',
    effectif: '~18,000 fonctionnaires',
    departements: ['Tribunaux de premiere instance', 'Cours d\'appel', 'Greffe', 'Etudes et cooperation', 'Affaires penales', 'Modernisation et informatique'],
    echelles: 'Echelle 8 a Hors echelle',
    typeConcours: ['Greffiers', 'Redacteurs judiciaires', 'Secretaires de greffe', 'Cadres administratifs', 'Informaticiens'],
    siteOfficiel: 'https://www.justice.gov.ma',
  },
  {
    slug: 'finances',
    nom: 'Ministere de l\'Economie et des Finances',
    nomCourt: 'Finances',
    description: 'Le Ministere des Finances gere les finances publiques, la politique fiscale, les douanes et la tresorerie generale du Royaume. Il offre des carrieres attractives pour les economistes, comptables, inspecteurs des finances et cadres superieurs. Les concours sont tres competitifs et offrent parmi les meilleures remunerations de la fonction publique.',
    effectif: '~25,000 fonctionnaires',
    departements: ['Direction Generale des Impots', 'Administration des Douanes', 'Tresorerie Generale du Royaume', 'Direction du Budget', 'Direction des Entreprises Publiques', 'Inspection Generale des Finances'],
    echelles: 'Echelle 10 a Hors echelle',
    typeConcours: ['Inspecteurs des impots', 'Inspecteurs des douanes', 'Cadres financiers', 'Comptables publics', 'Economistes', 'Auditeurs'],
    siteOfficiel: 'https://www.finances.gov.ma',
  },
  {
    slug: 'agriculture',
    nom: 'Ministere de l\'Agriculture, de la Peche Maritime, du Developpement Rural et des Eaux et Forets',
    nomCourt: 'Agriculture',
    description: 'Le Ministere de l\'Agriculture couvre un large spectre d\'activites : agriculture, peche, developpement rural et gestion des eaux et forets. Il recrute des ingenieurs agronomes, techniciens agricoles, veterinaires et cadres pour la gestion des programmes de developpement agricole, notamment le Plan Maroc Vert et Generation Green.',
    effectif: '~15,000 fonctionnaires',
    departements: ['Agriculture et elevage', 'Peche maritime', 'Eaux et forets', 'Developpement rural', 'Recherche agronomique', 'Offices regionaux de mise en valeur agricole'],
    echelles: 'Echelle 9 a Hors echelle',
    typeConcours: ['Ingenieurs agronomes', 'Techniciens agricoles', 'Veterinaires', 'Cadres administratifs', 'Techniciens des eaux et forets'],
    siteOfficiel: 'https://www.agriculture.gov.ma',
  },
  {
    slug: 'equipement-transports',
    nom: 'Ministere de l\'Equipement et de l\'Eau',
    nomCourt: 'Equipement et Transports',
    description: 'Le Ministere de l\'Equipement et de l\'Eau est responsable des infrastructures routieres, portuaires et hydrauliques du Maroc. Il recrute principalement des ingenieurs (genie civil, hydraulique), des techniciens et des cadres pour la gestion des grands projets d\'infrastructure du Royaume.',
    effectif: '~12,000 fonctionnaires',
    departements: ['Routes et autoroutes', 'Ports et domaine maritime', 'Eau et assainissement', 'Meteorologie nationale', 'Constructions publiques', 'Transport routier'],
    echelles: 'Echelle 9 a Hors echelle',
    typeConcours: ['Ingenieurs genie civil', 'Ingenieurs hydrauliques', 'Techniciens topographes', 'Cadres administratifs', 'Dessinateurs'],
    siteOfficiel: 'https://www.equipement.gov.ma',
  },
  {
    slug: 'industrie-commerce',
    nom: 'Ministere de l\'Industrie et du Commerce',
    nomCourt: 'Industrie et Commerce',
    description: 'Le Ministere de l\'Industrie et du Commerce pilote la politique industrielle et commerciale du Maroc. Il intervient dans la regulation du commerce, la propriete industrielle, la normalisation et la promotion de l\'investissement industriel. Les recrutements concernent des economistes, ingenieurs, cadres commerciaux et juristes.',
    effectif: '~5,000 fonctionnaires',
    departements: ['Industrie', 'Commerce interieur', 'Commerce exterieur', 'OMPIC (Propriete industrielle)', 'Qualite et normalisation', 'Zones industrielles'],
    echelles: 'Echelle 10 a Hors echelle',
    typeConcours: ['Cadres economistes', 'Ingenieurs industriels', 'Juristes', 'Cadres commerciaux'],
    siteOfficiel: 'https://www.mcinet.gov.ma',
  },
  {
    slug: 'emploi',
    nom: 'Ministere de l\'Inclusion Economique, de la Petite Entreprise, de l\'Emploi et des Competences',
    nomCourt: 'Emploi',
    description: 'Le Ministere de l\'Emploi est en charge de la politique de l\'emploi, du droit du travail, de la protection sociale et de la formation professionnelle. Il gere egalement l\'ANAPEC (Agence Nationale de Promotion de l\'Emploi et des Competences) et recrute des inspecteurs du travail, des cadres RH et des conseillers en emploi.',
    effectif: '~8,000 fonctionnaires',
    departements: ['Travail et relations professionnelles', 'Emploi', 'Protection sociale', 'Formation professionnelle', 'ANAPEC', 'Inspection du travail'],
    echelles: 'Echelle 10 a Hors echelle',
    typeConcours: ['Inspecteurs du travail', 'Conseillers en emploi', 'Cadres administratifs', 'Statisticiens'],
    siteOfficiel: 'https://www.emploi.gov.ma',
  },
  {
    slug: 'forces-armees-royales',
    nom: 'Forces Armees Royales (FAR)',
    nomCourt: 'Forces Armees Royales',
    description: 'Les Forces Armees Royales regroupent l\'Armee de Terre, la Marine Royale, les Forces Royales Air et la Gendarmerie Royale. Elles offrent des carrieres variees : officiers, sous-officiers et militaires du rang dans differentes specialites (infanterie, genie, transmissions, sante militaire, etc.).',
    effectif: '~200,000 militaires',
    departements: ['Armee de Terre', 'Marine Royale', 'Forces Royales Air', 'Gendarmerie Royale', 'Sante militaire', 'Genie militaire'],
    echelles: 'Grades militaires specifiques',
    typeConcours: ['Officiers', 'Sous-officiers', 'Soldats professionnels', 'Gendarmes', 'Medecins militaires', 'Ingenieurs militaires'],
    siteOfficiel: 'https://www.far.ma',
  },
  {
    slug: 'oncf',
    nom: 'Office National des Chemins de Fer (ONCF)',
    nomCourt: 'ONCF',
    description: 'L\'ONCF est l\'operateur historique du transport ferroviaire au Maroc, incluant le reseau de trains classiques et la Ligne a Grande Vitesse (LGV Al Boraq). L\'ONCF recrute des ingenieurs, techniciens de maintenance, conducteurs de trains, cadres commerciaux et personnel d\'exploitation pour assurer le fonctionnement du reseau ferroviaire.',
    effectif: '~8,000 employes',
    departements: ['Exploitation ferroviaire', 'Maintenance et materiel roulant', 'Infrastructure et voie', 'Commercial et marketing', 'Securite ferroviaire', 'LGV Al Boraq'],
    echelles: 'Grille salariale specifique ONCF',
    typeConcours: ['Ingenieurs ferroviaires', 'Techniciens de maintenance', 'Conducteurs de trains', 'Cadres commerciaux', 'Agents d\'exploitation'],
    siteOfficiel: 'https://www.oncf.ma',
  },
  {
    slug: 'collectivites-territoriales',
    nom: 'Collectivites Territoriales',
    nomCourt: 'Collectivites Territoriales',
    description: 'Les Collectivites Territoriales (regions, prefectures, provinces et communes) constituent un employeur majeur de la fonction publique marocaine. Elles gerent les services publics locaux : urbanisme, etat civil, voirie, espaces verts, action sociale. Les concours sont organises au niveau local et offrent des postes varies.',
    effectif: '~150,000 fonctionnaires',
    departements: ['Urbanisme et construction', 'Etat civil', 'Voirie et espaces verts', 'Action sociale', 'Budget et comptabilite', 'Services techniques'],
    echelles: 'Echelle 1 a Hors echelle',
    typeConcours: ['Techniciens', 'Redacteurs', 'Cadres administratifs', 'Ingenieurs', 'Architectes', 'Agents d\'execution'],
    siteOfficiel: 'https://www.collectivites-territoriales.gov.ma',
  },
];

export function getMinistereBySlug(slug: string): Ministere | undefined {
  return ministeres.find((m) => m.slug === slug);
}
