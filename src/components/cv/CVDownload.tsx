'use client';

import { CVData, generateCVClassique, generateCVModerne, generateCVProfessionnel } from '@/lib/cv-engine';

interface CVDownloadProps {
  cvData: CVData;
  template: 'classique' | 'moderne' | 'professionnel';
}

const generators = {
  classique: generateCVClassique,
  moderne: generateCVModerne,
  professionnel: generateCVProfessionnel,
};

export default function CVDownload({ cvData, template }: CVDownloadProps) {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadHTML = () => {
    const generate = generators[template];
    const cvHtml = generate(cvData);

    const fullHtml = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CV - ${cvData.prenom} ${cvData.nom}</title>
<style>
  @page { margin: 15mm; size: A4; }
  body { margin: 0; padding: 0; background: #fff; }
</style>
</head>
<body>
${cvHtml}
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CV_${cvData.prenom}_${cvData.nom}.html`.replace(/\s+/g, '_');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <button
        onClick={handlePrint}
        className="btn-primary flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
        Imprimer / PDF
      </button>
      <button
        onClick={handleDownloadHTML}
        className="btn-secondary flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Télécharger HTML
      </button>
    </div>
  );
}
