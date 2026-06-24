'use client';

import { useState } from 'react';
import { CVData, emptyCVData } from '@/lib/cv-engine';
import FormulaireCV from '@/components/cv/FormulaireCV';
import CVPreview from '@/components/cv/CVPreview';

const cvFaqs = [
  {
    question: 'Le générateur de CV est-il vraiment gratuit et sans inscription ?',
    answer: 'Oui, notre générateur de CV est 100 % gratuit et ne nécessite aucune inscription ni création de compte. Vous pouvez créer, personnaliser et télécharger votre CV au format PDF autant de fois que vous le souhaitez, sans aucune limitation ni filigrane.',
  },
  {
    question: 'Mes données personnelles sont-elles protégées dans le générateur de CV ?',
    answer: 'Absolument. Toutes vos données restent dans votre navigateur (localStorage). Aucune information personnelle n\'est envoyée à nos serveurs. Vos données sont sauvegardées localement pour que vous puissiez reprendre la création de votre CV plus tard, et vous pouvez les supprimer à tout moment en effaçant les données de votre navigateur.',
  },
  {
    question: 'Quels modèles de CV sont disponibles pour la fonction publique ?',
    answer: 'Nous proposons trois modèles professionnels adaptés à la fonction publique marocaine : le modèle Classique (sobre et traditionnel, idéal pour les ministères conservateurs), le modèle Moderne (design actuel avec une mise en page épurée) et le modèle Professionnel (accent sur les compétences et l\'expérience). Chaque modèle est optimisé pour l\'impression A4.',
  },
  {
    question: 'Comment télécharger mon CV en format PDF ?',
    answer: 'Une fois votre CV complété, cliquez sur le bouton "Imprimer / PDF" situé au-dessus de l\'aperçu. La boîte de dialogue d\'impression de votre navigateur s\'ouvrira. Sélectionnez "Enregistrer au format PDF" comme destination d\'impression. Le document sera généré au format A4, prêt à être joint à votre dossier de candidature.',
  },
  {
    question: 'Quelles sections doit contenir un CV pour un concours de la fonction publique ?',
    answer: 'Un CV pour la fonction publique marocaine doit inclure : vos informations personnelles complètes (état civil, adresse, téléphone, email), un objectif professionnel lié au poste visé, votre formation et diplômes avec mentions, vos expériences professionnelles détaillées, vos compétences techniques et informatiques, vos langues parlées (arabe, français, anglais, amazigh), et éventuellement vos centres d\'intérêt. Notre générateur vous guide à travers toutes ces sections.',
  },
];

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
        <nav aria-label="Fil d&#39;Ariane" className="text-sm text-gray-500 mb-6">
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

        {/* SEO Content - Expanded to 1500+ chars */}
        <section className="mt-12">
          <article className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Créer un CV pour la fonction publique au Maroc</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Un CV bien rédigé est un élément essentiel de votre candidature à un concours de la fonction publique au Maroc. Même si le concours repose principalement sur les épreuves écrites et orales, un CV professionnel et structuré démontre votre sérieux et votre rigueur aux yeux du jury. Notre générateur de CV vous aide à créer un document impeccable qui met en valeur vos qualifications, expériences et compétences de manière claire et attractive.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour les candidatures à la fonction publique, votre CV doit inclure certaines informations spécifiques : votre état civil complet (prénom, nom, date de naissance, nationalité, situation familiale), vos coordonnées, un objectif professionnel clair lié au poste visé, vos formations et diplômes (en précisant les établissements et les mentions), vos expériences professionnelles détaillées, vos compétences techniques et linguistiques, ainsi que vos certifications et centres d&apos;intérêt. Notre outil vous guide à travers chacune de ces sections pour ne rien oublier.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le format du CV compte autant que son contenu. Les recruteurs de la fonction publique apprécient les CV sobres, bien structurés et aérés. Évitez les couleurs excessives, les polices fantaisistes et les mises en page trop originales. Nos trois modèles ont été conçus spécifiquement pour répondre aux attentes du secteur public marocain : le modèle Classique pour les postes traditionnels dans les ministères, le modèle Moderne pour les organismes publics innovants et le modèle Professionnel pour mettre en avant une expérience riche. Chaque modèle respecte le format A4 standard et produit un rendu imprimable de qualité.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Un bon CV pour la fonction publique doit être concis (une à deux pages maximum), chronologique (du plus récent au plus ancien) et vérifiable. Mentionnez toujours les dates exactes de vos diplômes et expériences, les noms complets des établissements et entreprises, et les intitulés précis de vos postes. Si vous parlez plusieurs langues, précisez votre niveau (courant, professionnel, notions) pour chacune, en particulier l&apos;arabe, le français et l&apos;anglais, langues couramment utilisées dans l&apos;administration marocaine.
            </p>
            <p className="text-sm text-gray-500 mt-6 italic">
              Outil développé par Mottalib Radif (MBA INSEAD)
            </p>
          </article>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes sur le générateur de CV</h2>
          <div className="space-y-4 max-w-3xl">
            {cvFaqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-lg">
                <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 hover:text-primary-600 transition-colors list-none flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
