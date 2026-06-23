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
            Generateur de CV Gratuit
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Creez votre CV professionnel gratuitement en quelques minutes. 3 modeles optimises pour la fonction publique marocaine. Telechargez en PDF.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Comment utiliser le generateur de CV</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-primary-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Remplissez vos informations</h3>
              <p className="text-sm text-gray-600">
                Suivez les 7 etapes du formulaire pour saisir vos informations personnelles, experiences, formations et competences. Vos donnees sont automatiquement sauvegardees dans votre navigateur.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-primary-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Choisissez votre modele</h3>
              <p className="text-sm text-gray-600">
                Selectionnez parmi nos 3 modeles professionnels : Classique (traditionnel), Moderne (design actuel) ou Professionnel (structure mise en avant). L&apos;apercu se met a jour en temps reel.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-primary-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Telechargez votre CV</h3>
              <p className="text-sm text-gray-600">
                Utilisez le bouton &quot;Imprimer / PDF&quot; pour generer un fichier PDF propre et professionnel. Vous pouvez aussi telecharger le CV au format HTML pour le modifier plus tard.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="mt-12">
          <article className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Creer un CV pour la fonction publique au Maroc</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Un CV bien redige est un element essentiel de votre candidature a un concours de la fonction publique au Maroc. Meme si le concours repose principalement sur les epreuves ecrites et orales, un CV professionnel et structure demontre votre serieux et votre rigueur aux yeux du jury. Notre generateur de CV vous aide a creer un document impeccable qui met en valeur vos qualifications, experiences et competences de maniere claire et attractive.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour les candidatures a la fonction publique, votre CV doit inclure certaines informations specifiques : votre etat civil complet (prenom, nom, date de naissance, nationalite, situation familiale), vos coordonnees, un objectif professionnel clair lie au poste vise, vos formations et diplomes (en precisant les etablissements et les mentions), vos experiences professionnelles detaillees, vos competences techniques et linguistiques, ainsi que vos certifications et centres d&apos;interet. Notre outil vous guide a travers chacune de ces sections pour ne rien oublier.
            </p>
            <p className="text-sm text-gray-500 mt-6 italic">
              Outil developpe par Mottalib Radif (MBA INSEAD)
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
