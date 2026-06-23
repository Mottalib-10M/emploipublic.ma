'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  CVData,
  Experience,
  Formation,
  Langue,
  emptyCVData,
  niveauxLangue,
  competencesSuggestions,
} from '@/lib/cv-engine';

interface FormulaireCVProps {
  cvData: CVData;
  onChange: (data: CVData) => void;
}

const STEPS = [
  'Informations personnelles',
  'Experiences',
  'Formations',
  'Competences',
  'Langues',
  'Certifications & Loisirs',
  'Apercu',
];

const LOCAL_STORAGE_KEY = 'emploipublic_cv_data';

export default function FormulaireCV({ cvData, onChange }: FormulaireCVProps) {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [competenceInput, setCompetenceInput] = useState('');
  const [certificationInput, setCertificationInput] = useState('');
  const [interetInput, setInteretInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        onChange({ ...emptyCVData, ...parsed });
      }
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Save to localStorage on change
  const saveToStorage = useCallback((data: CVData) => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore
    }
  }, []);

  const update = (partial: Partial<CVData>) => {
    const newData = { ...cvData, ...partial };
    onChange(newData);
    saveToStorage(newData);
  };

  const validateStep = (): boolean => {
    const errs: Record<string, string> = {};

    if (step === 0) {
      if (!cvData.prenom.trim()) errs.prenom = 'Le prenom est requis';
      if (!cvData.nom.trim()) errs.nom = 'Le nom est requis';
      if (cvData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cvData.email)) {
        errs.email = 'Email invalide';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(Math.min(step + 1, STEPS.length - 1));
      setErrors({});
    }
  };

  const prevStep = () => {
    setStep(Math.max(step - 1, 0));
    setErrors({});
  };

  // Experience helpers
  const addExperience = () => {
    update({
      experiences: [
        ...cvData.experiences,
        { poste: '', entreprise: '', ville: '', dateDebut: '', dateFin: '', enCours: false, description: '' },
      ],
    });
  };

  const updateExperience = (index: number, partial: Partial<Experience>) => {
    const exps = [...cvData.experiences];
    exps[index] = { ...exps[index], ...partial };
    update({ experiences: exps });
  };

  const removeExperience = (index: number) => {
    update({ experiences: cvData.experiences.filter((_, i) => i !== index) });
  };

  // Formation helpers
  const addFormation = () => {
    update({
      formations: [
        ...cvData.formations,
        { diplome: '', etablissement: '', ville: '', annee: '', mention: '' },
      ],
    });
  };

  const updateFormation = (index: number, partial: Partial<Formation>) => {
    const forms = [...cvData.formations];
    forms[index] = { ...forms[index], ...partial };
    update({ formations: forms });
  };

  const removeFormation = (index: number) => {
    update({ formations: cvData.formations.filter((_, i) => i !== index) });
  };

  // Langue helpers
  const addLangue = () => {
    update({
      langues: [...cvData.langues, { langue: '', niveau: 'Intermediaire' }],
    });
  };

  const updateLangue = (index: number, partial: Partial<Langue>) => {
    const langs = [...cvData.langues];
    langs[index] = { ...langs[index], ...partial };
    update({ langues: langs });
  };

  const removeLangue = (index: number) => {
    update({ langues: cvData.langues.filter((_, i) => i !== index) });
  };

  // Competence helpers
  const addCompetence = (comp: string) => {
    const trimmed = comp.trim();
    if (trimmed && !cvData.competences.includes(trimmed)) {
      update({ competences: [...cvData.competences, trimmed] });
    }
    setCompetenceInput('');
    setShowSuggestions(false);
  };

  const removeCompetence = (index: number) => {
    update({ competences: cvData.competences.filter((_, i) => i !== index) });
  };

  const filteredSuggestions = competencesSuggestions.filter(
    (s) =>
      s.toLowerCase().includes(competenceInput.toLowerCase()) &&
      !cvData.competences.includes(s)
  );

  // Certification helpers
  const addCertification = () => {
    const trimmed = certificationInput.trim();
    if (trimmed && !cvData.certifications.includes(trimmed)) {
      update({ certifications: [...cvData.certifications, trimmed] });
    }
    setCertificationInput('');
  };

  const removeCertification = (index: number) => {
    update({ certifications: cvData.certifications.filter((_, i) => i !== index) });
  };

  // Interet helpers
  const addInteret = () => {
    const trimmed = interetInput.trim();
    if (trimmed && !cvData.centresInteret.includes(trimmed)) {
      update({ centresInteret: [...cvData.centresInteret, trimmed] });
    }
    setInteretInput('');
  };

  const removeInteret = (index: number) => {
    update({ centresInteret: cvData.centresInteret.filter((_, i) => i !== index) });
  };

  const resetForm = () => {
    if (confirm('Voulez-vous vraiment effacer toutes les donnees du CV ?')) {
      onChange(emptyCVData);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      setStep(0);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      {/* Progress bar */}
      <div className="px-6 pt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Etape {step + 1} sur {STEPS.length}
          </span>
          <span className="text-sm text-gray-500">{STEPS[step]}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
        <div className="flex gap-1 mt-3 overflow-x-auto pb-2">
          {STEPS.map((s, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={`text-xs px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
                i === step
                  ? 'bg-primary-600 text-white'
                  : i < step
                  ? 'bg-primary-100 text-primary-700'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {/* Step 0: Personal Info */}
        {step === 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations personnelles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="label-field">Prenom *</label>
                <input
                  type="text"
                  className={`input-field ${errors.prenom ? 'border-red-500' : ''}`}
                  value={cvData.prenom}
                  onChange={(e) => update({ prenom: e.target.value })}
                  placeholder="Mohammed"
                />
                {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom}</p>}
              </div>
              <div>
                <label className="label-field">Nom *</label>
                <input
                  type="text"
                  className={`input-field ${errors.nom ? 'border-red-500' : ''}`}
                  value={cvData.nom}
                  onChange={(e) => update({ nom: e.target.value })}
                  placeholder="El Alaoui"
                />
                {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
              </div>
              <div>
                <label className="label-field">Email</label>
                <input
                  type="text"
                  className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                  value={cvData.email}
                  onChange={(e) => update({ email: e.target.value })}
                  placeholder="mohammed@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="label-field">Telephone</label>
                <input
                  type="text"
                  className="input-field"
                  value={cvData.telephone}
                  onChange={(e) => update({ telephone: e.target.value })}
                  placeholder="06 12 34 56 78"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="label-field">Adresse</label>
                <input
                  type="text"
                  className="input-field"
                  value={cvData.adresse}
                  onChange={(e) => update({ adresse: e.target.value })}
                  placeholder="123 Rue Hassan II"
                />
              </div>
              <div>
                <label className="label-field">Ville</label>
                <input
                  type="text"
                  className="input-field"
                  value={cvData.ville}
                  onChange={(e) => update({ ville: e.target.value })}
                  placeholder="Rabat"
                />
              </div>
              <div>
                <label className="label-field">Date de naissance</label>
                <input
                  type="text"
                  className="input-field"
                  value={cvData.dateNaissance}
                  onChange={(e) => update({ dateNaissance: e.target.value })}
                  placeholder="15/03/1995"
                />
              </div>
              <div>
                <label className="label-field">Nationalite</label>
                <input
                  type="text"
                  className="input-field"
                  value={cvData.nationalite}
                  onChange={(e) => update({ nationalite: e.target.value })}
                  placeholder="Marocaine"
                />
              </div>
              <div>
                <label className="label-field">Situation familiale</label>
                <select
                  className="input-field"
                  value={cvData.situationFamiliale}
                  onChange={(e) => update({ situationFamiliale: e.target.value })}
                >
                  <option value="">-- Choisir --</option>
                  <option value="Celibataire">Celibataire</option>
                  <option value="Marie(e)">Marie(e)</option>
                  <option value="Divorce(e)">Divorce(e)</option>
                  <option value="Veuf(ve)">Veuf(ve)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="label-field">Objectif professionnel</label>
              <textarea
                className="input-field"
                rows={3}
                value={cvData.objectif}
                onChange={(e) => update({ objectif: e.target.value })}
                placeholder="Cadre administratif motive, titulaire d'un Master en droit public, souhaitant mettre ses competences au service de la fonction publique marocaine..."
              />
            </div>
          </div>
        )}

        {/* Step 1: Experiences */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Experiences professionnelles</h3>
              <button onClick={addExperience} className="btn-primary text-sm !py-2 !px-4">
                + Ajouter
              </button>
            </div>
            {cvData.experiences.length === 0 && (
              <p className="text-gray-500 text-center py-8">
                Aucune experience ajoutee. Cliquez sur &quot;Ajouter&quot; pour commencer.
              </p>
            )}
            {cvData.experiences.map((exp, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm text-primary-600">Experience {i + 1}</span>
                  <button
                    onClick={() => removeExperience(i)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Supprimer
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="label-field">Poste</label>
                    <input
                      type="text"
                      className="input-field"
                      value={exp.poste}
                      onChange={(e) => updateExperience(i, { poste: e.target.value })}
                      placeholder="Cadre administratif"
                    />
                  </div>
                  <div>
                    <label className="label-field">Entreprise / Organisme</label>
                    <input
                      type="text"
                      className="input-field"
                      value={exp.entreprise}
                      onChange={(e) => updateExperience(i, { entreprise: e.target.value })}
                      placeholder="Ministere de l'Education Nationale"
                    />
                  </div>
                  <div>
                    <label className="label-field">Ville</label>
                    <input
                      type="text"
                      className="input-field"
                      value={exp.ville}
                      onChange={(e) => updateExperience(i, { ville: e.target.value })}
                      placeholder="Rabat"
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="label-field">Date debut</label>
                      <input
                        type="text"
                        className="input-field"
                        value={exp.dateDebut}
                        onChange={(e) => updateExperience(i, { dateDebut: e.target.value })}
                        placeholder="Jan 2020"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="label-field">Date fin</label>
                      <input
                        type="text"
                        className="input-field"
                        value={exp.dateFin}
                        onChange={(e) => updateExperience(i, { dateFin: e.target.value })}
                        placeholder="Dec 2023"
                        disabled={exp.enCours}
                      />
                    </div>
                  </div>
                </div>
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={exp.enCours}
                    onChange={(e) => updateExperience(i, { enCours: e.target.checked })}
                    className="rounded text-primary-600"
                  />
                  Poste actuel
                </label>
                <div>
                  <label className="label-field">Description (une tache par ligne)</label>
                  <textarea
                    className="input-field"
                    rows={3}
                    value={exp.description}
                    onChange={(e) => updateExperience(i, { description: e.target.value })}
                    placeholder="Gestion des dossiers administratifs&#10;Redaction de rapports&#10;Coordination avec les services regionaux"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 2: Formations */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Formations</h3>
              <button onClick={addFormation} className="btn-primary text-sm !py-2 !px-4">
                + Ajouter
              </button>
            </div>
            {cvData.formations.length === 0 && (
              <p className="text-gray-500 text-center py-8">
                Aucune formation ajoutee. Cliquez sur &quot;Ajouter&quot; pour commencer.
              </p>
            )}
            {cvData.formations.map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm text-primary-600">Formation {i + 1}</span>
                  <button
                    onClick={() => removeFormation(i)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Supprimer
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="sm:col-span-2">
                    <label className="label-field">Diplome</label>
                    <input
                      type="text"
                      className="input-field"
                      value={f.diplome}
                      onChange={(e) => updateFormation(i, { diplome: e.target.value })}
                      placeholder="Master en Droit Public"
                    />
                  </div>
                  <div>
                    <label className="label-field">Etablissement</label>
                    <input
                      type="text"
                      className="input-field"
                      value={f.etablissement}
                      onChange={(e) => updateFormation(i, { etablissement: e.target.value })}
                      placeholder="Universite Mohammed V"
                    />
                  </div>
                  <div>
                    <label className="label-field">Ville</label>
                    <input
                      type="text"
                      className="input-field"
                      value={f.ville}
                      onChange={(e) => updateFormation(i, { ville: e.target.value })}
                      placeholder="Rabat"
                    />
                  </div>
                  <div>
                    <label className="label-field">Annee</label>
                    <input
                      type="text"
                      className="input-field"
                      value={f.annee}
                      onChange={(e) => updateFormation(i, { annee: e.target.value })}
                      placeholder="2022"
                    />
                  </div>
                  <div>
                    <label className="label-field">Mention (optionnel)</label>
                    <input
                      type="text"
                      className="input-field"
                      value={f.mention || ''}
                      onChange={(e) => updateFormation(i, { mention: e.target.value })}
                      placeholder="Bien"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 3: Competences */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Competences</h3>
            <div className="relative">
              <label className="label-field">Ajouter une competence</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="input-field flex-1"
                  value={competenceInput}
                  onChange={(e) => {
                    setCompetenceInput(e.target.value);
                    setShowSuggestions(e.target.value.length > 0);
                  }}
                  onFocus={() => setShowSuggestions(competenceInput.length > 0)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addCompetence(competenceInput);
                    }
                  }}
                  placeholder="Tapez une competence puis Entree"
                />
                <button
                  onClick={() => addCompetence(competenceInput)}
                  className="btn-primary text-sm !py-2 !px-4"
                >
                  Ajouter
                </button>
              </div>
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                  {filteredSuggestions.slice(0, 8).map((s) => (
                    <button
                      key={s}
                      onClick={() => addCompetence(s)}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-primary-50 hover:text-primary-700 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {cvData.competences.map((c, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
                >
                  {c}
                  <button
                    onClick={() => removeCompetence(i)}
                    className="ml-1 text-primary-600 hover:text-red-600"
                  >
                    x
                  </button>
                </span>
              ))}
            </div>
            {cvData.competences.length === 0 && (
              <p className="text-gray-500 text-sm">Aucune competence ajoutee. Commencez a taper pour voir les suggestions.</p>
            )}
          </div>
        )}

        {/* Step 4: Langues */}
        {step === 4 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Langues</h3>
              <button onClick={addLangue} className="btn-primary text-sm !py-2 !px-4">
                + Ajouter
              </button>
            </div>
            {cvData.langues.map((l, i) => (
              <div key={i} className="flex items-center gap-3 border border-gray-200 rounded-lg p-3">
                <div className="flex-1">
                  <label className="label-field">Langue</label>
                  <input
                    type="text"
                    className="input-field"
                    value={l.langue}
                    onChange={(e) => updateLangue(i, { langue: e.target.value })}
                    placeholder="Francais"
                  />
                </div>
                <div className="flex-1">
                  <label className="label-field">Niveau</label>
                  <select
                    className="input-field"
                    value={l.niveau}
                    onChange={(e) => updateLangue(i, { niveau: e.target.value as Langue['niveau'] })}
                  >
                    {niveauxLangue.map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={() => removeLangue(i)}
                  className="text-red-500 hover:text-red-700 mt-5"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Step 5: Certifications & Interests */}
        {step === 5 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="input-field flex-1"
                  value={certificationInput}
                  onChange={(e) => setCertificationInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addCertification();
                    }
                  }}
                  placeholder="Ex: DELF B2, Permis de conduire B, ..."
                />
                <button onClick={addCertification} className="btn-primary text-sm !py-2 !px-4">
                  Ajouter
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {cvData.certifications.map((c, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                  >
                    {c}
                    <button onClick={() => removeCertification(i)} className="ml-1 hover:text-red-600">
                      x
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Centres d&apos;interet</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="input-field flex-1"
                  value={interetInput}
                  onChange={(e) => setInteretInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addInteret();
                    }
                  }}
                  placeholder="Ex: Lecture, Sport, Benevolat, ..."
                />
                <button onClick={addInteret} className="btn-primary text-sm !py-2 !px-4">
                  Ajouter
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {cvData.centresInteret.map((c, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {c}
                    <button onClick={() => removeInteret(i)} className="ml-1 hover:text-red-600">
                      x
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 6: Preview hint */}
        {step === 6 && (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Votre CV est pret !</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Consultez l&apos;apercu a droite (ou en dessous sur mobile). Vous pouvez choisir parmi 3 modeles et telecharger votre CV en utilisant le bouton d&apos;impression du navigateur.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <button
                onClick={() => window.print()}
                className="btn-primary"
              >
                Imprimer / Telecharger PDF
              </button>
              <button onClick={resetForm} className="btn-secondary text-red-600 border-red-300 hover:bg-red-50">
                Reinitialiser le formulaire
              </button>
            </div>
          </div>
        )}

        {/* Navigation */}
        {step < 6 && (
          <div className="flex justify-between mt-8 pt-4 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={step === 0}
              className="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Precedent
            </button>
            <button onClick={nextStep} className="btn-primary text-sm">
              {step === 5 ? 'Terminer' : 'Suivant'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
