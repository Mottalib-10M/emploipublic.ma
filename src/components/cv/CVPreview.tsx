'use client';

import { useState } from 'react';
import { CVData, generateCVClassique, generateCVModerne, generateCVProfessionnel } from '@/lib/cv-engine';
import ShareButtons from '@/components/ui/ShareButtons';

interface CVPreviewProps {
  cvData: CVData;
}

const templates = [
  { id: 'classique', label: 'Classique', fn: generateCVClassique },
  { id: 'moderne', label: 'Moderne', fn: generateCVModerne },
  { id: 'professionnel', label: 'Professionnel', fn: generateCVProfessionnel },
] as const;

export default function CVPreview({ cvData }: CVPreviewProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('classique');

  const template = templates.find((t) => t.id === selectedTemplate) || templates[0];
  const html = template.fn(cvData);

  const hasData = cvData.prenom || cvData.nom;

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      {/* Template selector */}
      <div className="border-b border-gray-200 px-4 py-3 flex items-center gap-2 flex-wrap">
        <span className="text-sm font-medium text-gray-600 mr-2">Modèle :</span>
        {templates.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelectedTemplate(t.id)}
            className={`px-4 py-1.5 text-sm rounded-full font-medium transition-colors ${
              selectedTemplate === t.id
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {t.label}
          </button>
        ))}
        <button
          onClick={() => window.print()}
          className="ml-auto text-sm px-4 py-1.5 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
        >
          Imprimer
        </button>
      </div>

      {/* Share section */}
      <div className="border-b border-gray-200 px-4 py-3">
        <p className="text-xs text-gray-500 mb-2">Partager ce modèle avec un ami :</p>
        <ShareButtons
          text={`Générateur de CV gratuit pour la fonction publique au Maroc - modèle ${template.label} :`}
          url="https://emploipublic.ma/generateur-cv/"
        />
      </div>

      {/* Preview */}
      <div
        id="cv-preview"
        className="min-h-[600px] bg-white"
        style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}
      >
        {hasData ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <div className="flex items-center justify-center h-96 text-gray-400">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-lg font-medium">Aperçu du CV</p>
              <p className="text-sm mt-1">Remplissez le formulaire pour voir votre CV ici</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
