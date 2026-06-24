'use client';

import { useState } from 'react';
import { CVData, emptyCVData } from '@/lib/cv-engine';
import FormulaireCV from '@/components/cv/FormulaireCV';
import CVPreview from '@/components/cv/CVPreview';

export default function GenerateurCVPage() {
  const [cvData, setCvData] = useState<CVData>(emptyCVData);

  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Générateur de CV Gratuit
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Créez votre CV professionnel gratuitement en quelques minutes. 3 modèles optimisés pour la fonction publique marocaine. Téléchargez en PDF.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-primary-600">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Générateur de CV</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <FormulaireCV cvData={cvData} onChange={setCvData} />
          </div>
          <div className="lg:sticky lg:top-20 lg:self-start">
            <CVPreview cvData={cvData} />
          </div>
        </div>

        {/* Info Section */}
        <section className="mt-16 bg-white rounded-xl shadow-md border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Comment utiliser le générateur de CV</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-primary-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Remplissez vos informations</h3>
              <p className="text-sm text-gray-600">
                Suivez les 7 étapes du formulaire pour saisir vos informations personnelles, expériences, formations et compétences. Vos données sont automatiquement sauvegardées dans votre navigateur.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-primary-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Choisissez votre modèle</h3>
              <p className="text-sm text-gray-600">
                Sélectionnez parmi nos 3 modèles professionnels : Classique (traditionnel), Moderne (design actuel) ou Professionnel (structure mise en avant). L&apos;aperçu se met à jour en temps réel.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-primary-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Téléchargez votre CV</h3>
              <p className="text-sm text-gray-600">
                Utilisez le bouton &quot;Imprimer / PDF&quot; pour générer un fichier PDF propre et professionnel. Vous pouvez aussi télécharger le CV au format HTML pour le modifier plus tard.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="mt-12">
          <article className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Créer un CV pour la fonction publique au Maroc</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Un CV bien rédigé est un élément essentiel de votre candidature à un concours de la fonction publique au Maroc. Même si le concours repose principalement sur les épreuves écrites et orales, un CV professionnel et structuré démontre votre sérieux et votre rigueur aux yeux du jury. Notre générateur de CV vous aide à créer un document impeccable qui met en valeur vos qualifications, expériences et compétences de manière claire et attractive.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour les candidatures à la fonction publique, votre CV doit inclure certaines informations spécifiques : votre état civil complet (prénom, nom, date de naissance, nationalité, situation familiale), vos coordonnées, un objectif professionnel clair lié au poste visé, vos formations et diplômes (en précisant les établissements et les mentions), vos expériences professionnelles détaillées, vos compétences techniques et linguistiques, ainsi que vos certifications et centres d&apos;intérêt. Notre outil vous guide à travers chacune de ces sections pour ne rien oublier.
            </p>
            <p className="text-sm text-gray-500 mt-6 italic">
              Outil développé par Mottalib Radif (MBA INSEAD)
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
