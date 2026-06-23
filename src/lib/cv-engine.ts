export interface Experience {
  poste: string;
  entreprise: string;
  ville: string;
  dateDebut: string;
  dateFin: string;
  enCours: boolean;
  description: string;
}

export interface Formation {
  diplome: string;
  etablissement: string;
  ville: string;
  annee: string;
  mention?: string;
}

export interface Langue {
  langue: string;
  niveau: 'Debutant' | 'Intermediaire' | 'Avance' | 'Courant' | 'Langue maternelle';
}

export interface CVData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  adresse: string;
  ville: string;
  dateNaissance: string;
  nationalite: string;
  situationFamiliale: string;
  photo?: string;
  objectif: string;
  experiences: Experience[];
  formations: Formation[];
  competences: string[];
  langues: Langue[];
  certifications: string[];
  centresInteret: string[];
}

export const emptyCVData: CVData = {
  prenom: '',
  nom: '',
  email: '',
  telephone: '',
  adresse: '',
  ville: '',
  dateNaissance: '',
  nationalite: 'Marocaine',
  situationFamiliale: '',
  objectif: '',
  experiences: [],
  formations: [],
  competences: [],
  langues: [{ langue: 'Arabe', niveau: 'Langue maternelle' }],
  certifications: [],
  centresInteret: [],
};

export const niveauxLangue: Langue['niveau'][] = [
  'Debutant',
  'Intermediaire',
  'Avance',
  'Courant',
  'Langue maternelle',
];

export const competencesSuggestions = [
  'Microsoft Office',
  'Excel avance',
  'Word',
  'PowerPoint',
  'Gestion de projet',
  'Comptabilite',
  'Droit administratif',
  'Redaction administrative',
  'Communication',
  'Travail en equipe',
  'Leadership',
  'Organisation',
  'Gestion du temps',
  'Analyse de donnees',
  'Informatique',
  'Base de donnees',
  'Gestion budgetaire',
  'Planification',
  'Negociation',
  'Service public',
  'Accueil du public',
  'Archivage',
  'Bureautique',
  'SAP',
  'Audit',
  'Controle de gestion',
  'Ressources humaines',
  'Formation',
  'Encadrement',
  'Recherche',
];

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatDescription(desc: string): string {
  return desc
    .split('\n')
    .filter((l) => l.trim())
    .map((l) => `<li>${escapeHtml(l.trim())}</li>`)
    .join('');
}

function renderNiveauBar(niveau: Langue['niveau']): string {
  const levels: Record<Langue['niveau'], number> = {
    'Debutant': 1,
    'Intermediaire': 2,
    'Avance': 3,
    'Courant': 4,
    'Langue maternelle': 5,
  };
  const n = levels[niveau] || 1;
  let dots = '';
  for (let i = 1; i <= 5; i++) {
    dots += `<span style="display:inline-block;width:12px;height:12px;border-radius:50%;margin-right:3px;background:${i <= n ? '#7C3AED' : '#e5e7eb'}"></span>`;
  }
  return dots;
}

export function generateCVClassique(data: CVData): string {
  return `
<div style="font-family:Georgia,'Times New Roman',serif;color:#1a1a1a;max-width:800px;margin:0 auto;padding:30px;line-height:1.5">
  <div style="text-align:center;border-bottom:3px solid #7C3AED;padding-bottom:20px;margin-bottom:20px">
    <h1 style="font-size:28px;margin:0;color:#1a1a1a;letter-spacing:1px">${escapeHtml(data.prenom)} ${escapeHtml(data.nom).toUpperCase()}</h1>
    ${data.objectif ? `<p style="font-size:14px;color:#555;margin:8px 0 0;font-style:italic">${escapeHtml(data.objectif)}</p>` : ''}
    <div style="margin-top:10px;font-size:13px;color:#444">
      ${[data.adresse, data.ville].filter(Boolean).join(', ')}
      ${data.telephone ? ` | ${escapeHtml(data.telephone)}` : ''}
      ${data.email ? ` | ${escapeHtml(data.email)}` : ''}
    </div>
    <div style="font-size:13px;color:#444;margin-top:4px">
      ${data.dateNaissance ? `Ne(e) le ${escapeHtml(data.dateNaissance)}` : ''}
      ${data.nationalite ? ` | ${escapeHtml(data.nationalite)}` : ''}
      ${data.situationFamiliale ? ` | ${escapeHtml(data.situationFamiliale)}` : ''}
    </div>
  </div>

  ${data.experiences.length > 0 ? `
  <div style="margin-bottom:20px">
    <h2 class="cv-section-title" style="font-size:16px;text-transform:uppercase;color:#7C3AED;border-bottom:2px solid #7C3AED;padding-bottom:4px;margin-bottom:12px;letter-spacing:1px">Experience Professionnelle</h2>
    ${data.experiences.map(exp => `
    <div style="margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;align-items:baseline">
        <strong style="font-size:14px">${escapeHtml(exp.poste)}</strong>
        <span style="font-size:12px;color:#666">${escapeHtml(exp.dateDebut)} - ${exp.enCours ? 'Present' : escapeHtml(exp.dateFin)}</span>
      </div>
      <div style="font-size:13px;color:#555;font-style:italic">${escapeHtml(exp.entreprise)}${exp.ville ? `, ${escapeHtml(exp.ville)}` : ''}</div>
      ${exp.description ? `<ul style="margin:6px 0 0;padding-left:18px;font-size:13px">${formatDescription(exp.description)}</ul>` : ''}
    </div>`).join('')}
  </div>` : ''}

  ${data.formations.length > 0 ? `
  <div style="margin-bottom:20px">
    <h2 class="cv-section-title" style="font-size:16px;text-transform:uppercase;color:#7C3AED;border-bottom:2px solid #7C3AED;padding-bottom:4px;margin-bottom:12px;letter-spacing:1px">Formation</h2>
    ${data.formations.map(f => `
    <div style="margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;align-items:baseline">
        <strong style="font-size:14px">${escapeHtml(f.diplome)}</strong>
        <span style="font-size:12px;color:#666">${escapeHtml(f.annee)}</span>
      </div>
      <div style="font-size:13px;color:#555;font-style:italic">${escapeHtml(f.etablissement)}${f.ville ? `, ${escapeHtml(f.ville)}` : ''}${f.mention ? ` — ${escapeHtml(f.mention)}` : ''}</div>
    </div>`).join('')}
  </div>` : ''}

  ${data.competences.length > 0 ? `
  <div style="margin-bottom:20px">
    <h2 class="cv-section-title" style="font-size:16px;text-transform:uppercase;color:#7C3AED;border-bottom:2px solid #7C3AED;padding-bottom:4px;margin-bottom:12px;letter-spacing:1px">Competences</h2>
    <p style="font-size:13px">${data.competences.map(c => escapeHtml(c)).join(' &bull; ')}</p>
  </div>` : ''}

  ${data.langues.length > 0 ? `
  <div style="margin-bottom:20px">
    <h2 class="cv-section-title" style="font-size:16px;text-transform:uppercase;color:#7C3AED;border-bottom:2px solid #7C3AED;padding-bottom:4px;margin-bottom:12px;letter-spacing:1px">Langues</h2>
    ${data.langues.map(l => `
    <div style="display:flex;align-items:center;margin-bottom:6px;font-size:13px">
      <span style="width:140px">${escapeHtml(l.langue)}</span>
      <span style="color:#666">${escapeHtml(l.niveau)}</span>
    </div>`).join('')}
  </div>` : ''}

  ${data.certifications.length > 0 ? `
  <div style="margin-bottom:20px">
    <h2 class="cv-section-title" style="font-size:16px;text-transform:uppercase;color:#7C3AED;border-bottom:2px solid #7C3AED;padding-bottom:4px;margin-bottom:12px;letter-spacing:1px">Certifications</h2>
    <ul style="padding-left:18px;font-size:13px">${data.certifications.map(c => `<li>${escapeHtml(c)}</li>`).join('')}</ul>
  </div>` : ''}

  ${data.centresInteret.length > 0 ? `
  <div style="margin-bottom:20px">
    <h2 class="cv-section-title" style="font-size:16px;text-transform:uppercase;color:#7C3AED;border-bottom:2px solid #7C3AED;padding-bottom:4px;margin-bottom:12px;letter-spacing:1px">Centres d'Interet</h2>
    <p style="font-size:13px">${data.centresInteret.map(c => escapeHtml(c)).join(' &bull; ')}</p>
  </div>` : ''}
</div>`;
}

export function generateCVModerne(data: CVData): string {
  return `
<div style="font-family:'Segoe UI',system-ui,sans-serif;color:#1a1a1a;max-width:800px;margin:0 auto;display:flex;min-height:100%;line-height:1.5">
  <div style="width:260px;background:#7C3AED;color:#fff;padding:28px 20px;flex-shrink:0">
    <div style="text-align:center;margin-bottom:24px">
      <div style="width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,0.2);margin:0 auto 12px;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:bold">${escapeHtml(data.prenom.charAt(0))}${escapeHtml(data.nom.charAt(0))}</div>
      <h1 style="font-size:20px;margin:0;font-weight:700">${escapeHtml(data.prenom)}<br/>${escapeHtml(data.nom).toUpperCase()}</h1>
    </div>

    <div style="margin-bottom:20px">
      <h3 style="font-size:12px;text-transform:uppercase;letter-spacing:2px;border-bottom:1px solid rgba(255,255,255,0.3);padding-bottom:4px;margin-bottom:8px">Contact</h3>
      <div style="font-size:12px;line-height:1.8">
        ${data.email ? `<div>${escapeHtml(data.email)}</div>` : ''}
        ${data.telephone ? `<div>${escapeHtml(data.telephone)}</div>` : ''}
        ${data.ville ? `<div>${escapeHtml(data.ville)}</div>` : ''}
      </div>
    </div>

    <div style="margin-bottom:20px">
      <h3 style="font-size:12px;text-transform:uppercase;letter-spacing:2px;border-bottom:1px solid rgba(255,255,255,0.3);padding-bottom:4px;margin-bottom:8px">Informations</h3>
      <div style="font-size:12px;line-height:1.8">
        ${data.dateNaissance ? `<div>Naissance : ${escapeHtml(data.dateNaissance)}</div>` : ''}
        ${data.nationalite ? `<div>${escapeHtml(data.nationalite)}</div>` : ''}
        ${data.situationFamiliale ? `<div>${escapeHtml(data.situationFamiliale)}</div>` : ''}
      </div>
    </div>

    ${data.competences.length > 0 ? `
    <div style="margin-bottom:20px">
      <h3 style="font-size:12px;text-transform:uppercase;letter-spacing:2px;border-bottom:1px solid rgba(255,255,255,0.3);padding-bottom:4px;margin-bottom:8px">Competences</h3>
      <div style="font-size:12px">${data.competences.map(c => `<div style="background:rgba(255,255,255,0.15);border-radius:4px;padding:3px 8px;margin-bottom:4px;display:inline-block;margin-right:4px">${escapeHtml(c)}</div>`).join('')}</div>
    </div>` : ''}

    ${data.langues.length > 0 ? `
    <div style="margin-bottom:20px">
      <h3 style="font-size:12px;text-transform:uppercase;letter-spacing:2px;border-bottom:1px solid rgba(255,255,255,0.3);padding-bottom:4px;margin-bottom:8px">Langues</h3>
      ${data.langues.map(l => `
      <div style="margin-bottom:8px;font-size:12px">
        <div>${escapeHtml(l.langue)}</div>
        <div style="opacity:0.8;font-size:11px">${escapeHtml(l.niveau)}</div>
      </div>`).join('')}
    </div>` : ''}

    ${data.centresInteret.length > 0 ? `
    <div>
      <h3 style="font-size:12px;text-transform:uppercase;letter-spacing:2px;border-bottom:1px solid rgba(255,255,255,0.3);padding-bottom:4px;margin-bottom:8px">Centres d'Interet</h3>
      <div style="font-size:12px">${data.centresInteret.map(c => escapeHtml(c)).join(' &bull; ')}</div>
    </div>` : ''}
  </div>

  <div style="flex:1;padding:28px 24px">
    ${data.objectif ? `
    <div style="margin-bottom:22px">
      <h2 style="font-size:15px;text-transform:uppercase;color:#7C3AED;letter-spacing:1px;border-bottom:2px solid #7C3AED;padding-bottom:4px;margin-bottom:10px">Profil</h2>
      <p style="font-size:13px;color:#444">${escapeHtml(data.objectif)}</p>
    </div>` : ''}

    ${data.experiences.length > 0 ? `
    <div style="margin-bottom:22px">
      <h2 class="cv-section-title" style="font-size:15px;text-transform:uppercase;color:#7C3AED;letter-spacing:1px;border-bottom:2px solid #7C3AED;padding-bottom:4px;margin-bottom:10px">Experience Professionnelle</h2>
      ${data.experiences.map(exp => `
      <div style="margin-bottom:14px;padding-left:14px;border-left:3px solid #e5e7eb">
        <div style="font-weight:700;font-size:14px;color:#1a1a1a">${escapeHtml(exp.poste)}</div>
        <div style="font-size:12px;color:#7C3AED;font-weight:600">${escapeHtml(exp.entreprise)}${exp.ville ? ` — ${escapeHtml(exp.ville)}` : ''}</div>
        <div style="font-size:11px;color:#888;margin-bottom:4px">${escapeHtml(exp.dateDebut)} - ${exp.enCours ? 'Present' : escapeHtml(exp.dateFin)}</div>
        ${exp.description ? `<ul style="margin:4px 0 0;padding-left:16px;font-size:12px;color:#444">${formatDescription(exp.description)}</ul>` : ''}
      </div>`).join('')}
    </div>` : ''}

    ${data.formations.length > 0 ? `
    <div style="margin-bottom:22px">
      <h2 class="cv-section-title" style="font-size:15px;text-transform:uppercase;color:#7C3AED;letter-spacing:1px;border-bottom:2px solid #7C3AED;padding-bottom:4px;margin-bottom:10px">Formation</h2>
      ${data.formations.map(f => `
      <div style="margin-bottom:10px;padding-left:14px;border-left:3px solid #e5e7eb">
        <div style="font-weight:700;font-size:14px">${escapeHtml(f.diplome)}</div>
        <div style="font-size:12px;color:#7C3AED;font-weight:600">${escapeHtml(f.etablissement)}${f.ville ? ` — ${escapeHtml(f.ville)}` : ''}</div>
        <div style="font-size:11px;color:#888">${escapeHtml(f.annee)}${f.mention ? ` — ${escapeHtml(f.mention)}` : ''}</div>
      </div>`).join('')}
    </div>` : ''}

    ${data.certifications.length > 0 ? `
    <div style="margin-bottom:22px">
      <h2 class="cv-section-title" style="font-size:15px;text-transform:uppercase;color:#7C3AED;letter-spacing:1px;border-bottom:2px solid #7C3AED;padding-bottom:4px;margin-bottom:10px">Certifications</h2>
      <ul style="padding-left:16px;font-size:12px">${data.certifications.map(c => `<li>${escapeHtml(c)}</li>`).join('')}</ul>
    </div>` : ''}
  </div>
</div>`;
}

export function generateCVProfessionnel(data: CVData): string {
  return `
<div style="font-family:system-ui,sans-serif;color:#1a1a1a;max-width:800px;margin:0 auto;padding:30px;line-height:1.5">
  <div style="background:linear-gradient(135deg,#7C3AED 0%,#4c1d95 100%);color:#fff;padding:28px 30px;border-radius:8px;margin-bottom:24px">
    <h1 style="font-size:26px;margin:0;font-weight:800">${escapeHtml(data.prenom)} ${escapeHtml(data.nom).toUpperCase()}</h1>
    ${data.objectif ? `<p style="margin:8px 0 0;font-size:14px;opacity:0.9">${escapeHtml(data.objectif)}</p>` : ''}
    <div style="display:flex;flex-wrap:wrap;gap:16px;margin-top:14px;font-size:12px;opacity:0.9">
      ${data.email ? `<span>${escapeHtml(data.email)}</span>` : ''}
      ${data.telephone ? `<span>${escapeHtml(data.telephone)}</span>` : ''}
      ${data.ville ? `<span>${escapeHtml(data.ville)}</span>` : ''}
      ${data.dateNaissance ? `<span>Ne(e) le ${escapeHtml(data.dateNaissance)}</span>` : ''}
    </div>
  </div>

  <div style="display:flex;gap:24px">
    <div style="flex:1">
      ${data.experiences.length > 0 ? `
      <div style="margin-bottom:22px">
        <h2 class="cv-section-title" style="font-size:15px;font-weight:800;text-transform:uppercase;color:#7C3AED;padding-bottom:6px;border-bottom:3px solid #7C3AED;margin-bottom:12px;letter-spacing:1px">Experience Professionnelle</h2>
        ${data.experiences.map(exp => `
        <div style="margin-bottom:16px">
          <div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap">
            <span style="font-weight:700;font-size:14px">${escapeHtml(exp.poste)}</span>
            <span style="font-size:11px;color:#7C3AED;font-weight:600;background:#f5f3ff;padding:2px 8px;border-radius:4px">${escapeHtml(exp.dateDebut)} - ${exp.enCours ? 'Present' : escapeHtml(exp.dateFin)}</span>
          </div>
          <div style="font-size:13px;color:#555;margin-top:2px">${escapeHtml(exp.entreprise)}${exp.ville ? `, ${escapeHtml(exp.ville)}` : ''}</div>
          ${exp.description ? `<ul style="margin:6px 0 0;padding-left:16px;font-size:12px;color:#444">${formatDescription(exp.description)}</ul>` : ''}
        </div>`).join('')}
      </div>` : ''}

      ${data.formations.length > 0 ? `
      <div style="margin-bottom:22px">
        <h2 class="cv-section-title" style="font-size:15px;font-weight:800;text-transform:uppercase;color:#7C3AED;padding-bottom:6px;border-bottom:3px solid #7C3AED;margin-bottom:12px;letter-spacing:1px">Formation</h2>
        ${data.formations.map(f => `
        <div style="margin-bottom:10px">
          <div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap">
            <span style="font-weight:700;font-size:14px">${escapeHtml(f.diplome)}</span>
            <span style="font-size:11px;color:#7C3AED;font-weight:600;background:#f5f3ff;padding:2px 8px;border-radius:4px">${escapeHtml(f.annee)}</span>
          </div>
          <div style="font-size:13px;color:#555">${escapeHtml(f.etablissement)}${f.ville ? `, ${escapeHtml(f.ville)}` : ''}${f.mention ? ` — ${escapeHtml(f.mention)}` : ''}</div>
        </div>`).join('')}
      </div>` : ''}
    </div>

    <div style="width:220px;flex-shrink:0">
      ${data.competences.length > 0 ? `
      <div style="margin-bottom:22px">
        <h2 class="cv-section-title" style="font-size:15px;font-weight:800;text-transform:uppercase;color:#7C3AED;padding-bottom:6px;border-bottom:3px solid #7C3AED;margin-bottom:12px;letter-spacing:1px">Competences</h2>
        <div style="display:flex;flex-wrap:wrap;gap:4px">${data.competences.map(c => `<span style="background:#f5f3ff;color:#7C3AED;font-size:11px;padding:3px 10px;border-radius:20px;font-weight:500">${escapeHtml(c)}</span>`).join('')}</div>
      </div>` : ''}

      ${data.langues.length > 0 ? `
      <div style="margin-bottom:22px">
        <h2 class="cv-section-title" style="font-size:15px;font-weight:800;text-transform:uppercase;color:#7C3AED;padding-bottom:6px;border-bottom:3px solid #7C3AED;margin-bottom:12px;letter-spacing:1px">Langues</h2>
        ${data.langues.map(l => `
        <div style="margin-bottom:8px">
          <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:2px">
            <span style="font-weight:600">${escapeHtml(l.langue)}</span>
          </div>
          <div>${renderNiveauBar(l.niveau)}</div>
          <div style="font-size:10px;color:#888">${escapeHtml(l.niveau)}</div>
        </div>`).join('')}
      </div>` : ''}

      ${data.certifications.length > 0 ? `
      <div style="margin-bottom:22px">
        <h2 class="cv-section-title" style="font-size:15px;font-weight:800;text-transform:uppercase;color:#7C3AED;padding-bottom:6px;border-bottom:3px solid #7C3AED;margin-bottom:12px;letter-spacing:1px">Certifications</h2>
        <ul style="padding-left:14px;font-size:12px">${data.certifications.map(c => `<li style="margin-bottom:4px">${escapeHtml(c)}</li>`).join('')}</ul>
      </div>` : ''}

      ${data.centresInteret.length > 0 ? `
      <div style="margin-bottom:22px">
        <h2 class="cv-section-title" style="font-size:15px;font-weight:800;text-transform:uppercase;color:#7C3AED;padding-bottom:6px;border-bottom:3px solid #7C3AED;margin-bottom:12px;letter-spacing:1px">Centres d'Interet</h2>
        <p style="font-size:12px">${data.centresInteret.map(c => escapeHtml(c)).join(' &bull; ')}</p>
      </div>` : ''}
    </div>
  </div>
</div>`;
}
