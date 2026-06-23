import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
        <span className="text-4xl font-bold text-primary-600">404</span>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Page introuvable</h1>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        La page que vous recherchez n&apos;existe pas ou a ete deplacee. Retournez a l&apos;accueil ou utilisez la navigation pour trouver ce que vous cherchez.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" className="btn-primary">
          Retour a l&apos;accueil
        </Link>
        <Link href="/concours/" className="btn-secondary">
          Voir les concours
        </Link>
      </div>
    </div>
  );
}
