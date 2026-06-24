import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grille Salaires Fonction Publique Maroc - Widget',
  description: 'Widget intégrable : grille des salaires de la fonction publique marocaine par échelle et échelon.',
  robots: { index: false, follow: false },
};

export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Hide the site-wide header and footer for the embeddable widget */}
      <style dangerouslySetInnerHTML={{ __html: `
        body > header,
        body > .flex.flex-col > header,
        body > footer,
        body > .flex.flex-col > footer,
        body > a[href="#main-content"] {
          display: none !important;
        }
      `}} />
      <div className="bg-white">
        {children}
        <div className="text-center py-3 text-xs text-gray-400 border-t border-gray-100">
          Propulsé par{' '}
          <a
            href="https://emploipublic.ma/salaires-fonction-publique/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline"
          >
            emploipublic.ma
          </a>
        </div>
      </div>
    </>
  );
}
