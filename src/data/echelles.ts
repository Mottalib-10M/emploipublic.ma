export interface EchelonDetail {
  echelon: number;
  indice: number;
  salaireBrut: number;
  salaireNet: number;
}

export interface EchelleData {
  echelle: number | string;
  grade: string;
  categorie: string;
  description: string;
  echelons: EchelonDetail[];
}

export const echelles: EchelleData[] = [
  {
    echelle: 1,
    grade: 'Agent d\'exécution',
    categorie: 'Personnel d\'exécution',
    description: 'Personnel d\'exécution sans diplôme ou avec niveau primaire. Postes : agents de nettoyage, gardiens, manœuvres.',
    echelons: [
      { echelon: 1, indice: 100, salaireBrut: 3000, salaireNet: 2700 },
      { echelon: 2, indice: 108, salaireBrut: 3100, salaireNet: 2790 },
      { echelon: 3, indice: 117, salaireBrut: 3200, salaireNet: 2880 },
      { echelon: 4, indice: 126, salaireBrut: 3300, salaireNet: 2970 },
      { echelon: 5, indice: 135, salaireBrut: 3400, salaireNet: 3060 },
    ],
  },
  {
    echelle: 2,
    grade: 'Agent d\'exécution qualifié',
    categorie: 'Personnel d\'exécution',
    description: 'Personnel d\'exécution qualifié avec certificat d\'études primaires. Postes : agents qualifiés, ouvriers spécialisés.',
    echelons: [
      { echelon: 1, indice: 109, salaireBrut: 3100, salaireNet: 2790 },
      { echelon: 2, indice: 119, salaireBrut: 3250, salaireNet: 2925 },
      { echelon: 3, indice: 130, salaireBrut: 3400, salaireNet: 3060 },
      { echelon: 4, indice: 141, salaireBrut: 3550, salaireNet: 3195 },
      { echelon: 5, indice: 153, salaireBrut: 3700, salaireNet: 3330 },
    ],
  },
  {
    echelle: 3,
    grade: 'Adjoint technique',
    categorie: 'Personnel d\'exécution',
    description: 'Niveau BEPC ou formation professionnelle de base. Postes : adjoints techniques, aides-soignants.',
    echelons: [
      { echelon: 1, indice: 129, salaireBrut: 3350, salaireNet: 3015 },
      { echelon: 2, indice: 141, salaireBrut: 3520, salaireNet: 3168 },
      { echelon: 3, indice: 153, salaireBrut: 3700, salaireNet: 3330 },
      { echelon: 4, indice: 166, salaireBrut: 3880, salaireNet: 3492 },
      { echelon: 5, indice: 180, salaireBrut: 4060, salaireNet: 3654 },
    ],
  },
  {
    echelle: 4,
    grade: 'Adjoint administratif',
    categorie: 'Personnel d\'exécution',
    description: 'Niveau brevet ou diplôme professionnel. Postes : adjoints administratifs, agents de bureau qualifiés.',
    echelons: [
      { echelon: 1, indice: 148, salaireBrut: 3600, salaireNet: 3240 },
      { echelon: 2, indice: 162, salaireBrut: 3780, salaireNet: 3402 },
      { echelon: 3, indice: 177, salaireBrut: 3970, salaireNet: 3573 },
      { echelon: 4, indice: 193, salaireBrut: 4170, salaireNet: 3753 },
      { echelon: 5, indice: 210, salaireBrut: 4380, salaireNet: 3942 },
    ],
  },
  {
    echelle: 5,
    grade: 'Adjoint administratif principal',
    categorie: 'Personnel d\'exécution',
    description: 'Niveau baccalauréat non requis mais expérience nécessaire. Postes : adjoints principaux, secrétaires.',
    echelons: [
      { echelon: 1, indice: 167, salaireBrut: 3850, salaireNet: 3465 },
      { echelon: 2, indice: 183, salaireBrut: 4050, salaireNet: 3645 },
      { echelon: 3, indice: 200, salaireBrut: 4260, salaireNet: 3834 },
      { echelon: 4, indice: 218, salaireBrut: 4480, salaireNet: 4032 },
      { echelon: 5, indice: 237, salaireBrut: 4710, salaireNet: 4239 },
    ],
  },
  {
    echelle: 6,
    grade: 'Rédacteur stagiaire',
    categorie: 'Personnel d\'exécution',
    description: 'Niveau baccalauréat. Postes : rédacteurs stagiaires, assistants administratifs, agents de saisie qualifiés.',
    echelons: [
      { echelon: 1, indice: 188, salaireBrut: 4100, salaireNet: 3690 },
      { echelon: 2, indice: 207, salaireBrut: 4330, salaireNet: 3897 },
      { echelon: 3, indice: 227, salaireBrut: 4570, salaireNet: 4113 },
      { echelon: 4, indice: 248, salaireBrut: 4820, salaireNet: 4338 },
      { echelon: 5, indice: 270, salaireBrut: 5080, salaireNet: 4572 },
    ],
  },
  {
    echelle: 7,
    grade: 'Rédacteur',
    categorie: 'Personnel de maîtrise',
    description: 'Niveau Bac+1 ou Bac avec concours. Postes : rédacteurs, techniciens, infirmiers auxiliaires.',
    echelons: [
      { echelon: 1, indice: 222, salaireBrut: 4500, salaireNet: 4050 },
      { echelon: 2, indice: 243, salaireBrut: 4750, salaireNet: 4275 },
      { echelon: 3, indice: 266, salaireBrut: 5020, salaireNet: 4518 },
      { echelon: 4, indice: 290, salaireBrut: 5300, salaireNet: 4770 },
      { echelon: 5, indice: 316, salaireBrut: 5600, salaireNet: 5040 },
    ],
  },
  {
    echelle: 8,
    grade: 'Rédacteur principal',
    categorie: 'Personnel de maîtrise',
    description: 'Niveau Bac+2 (DEUG, DUT, BTS). Postes : rédacteurs principaux, techniciens supérieurs, infirmiers diplômés.',
    echelons: [
      { echelon: 1, indice: 260, salaireBrut: 5000, salaireNet: 4500 },
      { echelon: 2, indice: 284, salaireBrut: 5280, salaireNet: 4752 },
      { echelon: 3, indice: 309, salaireBrut: 5580, salaireNet: 5022 },
      { echelon: 4, indice: 337, salaireBrut: 5900, salaireNet: 5310 },
      { echelon: 5, indice: 367, salaireBrut: 6250, salaireNet: 5625 },
    ],
  },
  {
    echelle: 9,
    grade: 'Administrateur adjoint',
    categorie: 'Personnel de maîtrise',
    description: 'Niveau Bac+3 (Licence). Postes : administrateurs adjoints, professeurs du primaire, techniciens spécialisés.',
    echelons: [
      { echelon: 1, indice: 309, salaireBrut: 5600, salaireNet: 5040 },
      { echelon: 2, indice: 337, salaireBrut: 5900, salaireNet: 5310 },
      { echelon: 3, indice: 367, salaireBrut: 6250, salaireNet: 5625 },
      { echelon: 4, indice: 400, salaireBrut: 6600, salaireNet: 5940 },
      { echelon: 5, indice: 436, salaireBrut: 7000, salaireNet: 6300 },
    ],
  },
  {
    echelle: 10,
    grade: 'Cadre / Administrateur',
    categorie: 'Cadres',
    description: 'Niveau Bac+4/5 (Master, diplôme d\'ingénieur). Postes : cadres, administrateurs, professeurs du secondaire, ingénieurs d\'État.',
    echelons: [
      { echelon: 1, indice: 382, salaireBrut: 7000, salaireNet: 6300 },
      { echelon: 2, indice: 416, salaireBrut: 7400, salaireNet: 6660 },
      { echelon: 3, indice: 453, salaireBrut: 7850, salaireNet: 7065 },
      { echelon: 4, indice: 494, salaireBrut: 8350, salaireNet: 7515 },
      { echelon: 5, indice: 538, salaireBrut: 8900, salaireNet: 8010 },
      { echelon: 6, indice: 564, salaireBrut: 9200, salaireNet: 8280 },
    ],
  },
  {
    echelle: 11,
    grade: 'Cadre supérieur / Administrateur principal',
    categorie: 'Cadres supérieurs',
    description: 'Niveau Bac+5 et plus (Doctorat, grandes écoles). Postes : cadres supérieurs, professeurs de l\'enseignement supérieur, inspecteurs, médecins spécialistes.',
    echelons: [
      { echelon: 1, indice: 509, salaireBrut: 8500, salaireNet: 7650 },
      { echelon: 2, indice: 542, salaireBrut: 8900, salaireNet: 8010 },
      { echelon: 3, indice: 578, salaireBrut: 9350, salaireNet: 8415 },
      { echelon: 4, indice: 618, salaireBrut: 9850, salaireNet: 8865 },
      { echelon: 5, indice: 660, salaireBrut: 10400, salaireNet: 9360 },
      { echelon: 6, indice: 704, salaireBrut: 11000, salaireNet: 9900 },
    ],
  },
  {
    echelle: 'HE',
    grade: 'Haut fonctionnaire / Hors échelle',
    categorie: 'Hauts fonctionnaires',
    description: 'Postes de direction et de responsabilité. Directeurs, secrétaires généraux, walis, ambassadeurs, présidents d\'universités.',
    echelons: [
      { echelon: 1, indice: 704, salaireBrut: 12000, salaireNet: 10800 },
      { echelon: 2, indice: 746, salaireBrut: 13500, salaireNet: 12150 },
      { echelon: 3, indice: 779, salaireBrut: 15000, salaireNet: 13500 },
      { echelon: 4, indice: 812, salaireBrut: 17000, salaireNet: 15300 },
      { echelon: 5, indice: 840, salaireBrut: 20000, salaireNet: 18000 },
    ],
  },
];
