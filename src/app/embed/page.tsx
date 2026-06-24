import GrilleSalaires from '@/components/salaires/GrilleSalaires';

export default function EmbedPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-xl font-bold text-gray-900 mb-4">
        Grille des Salaires - Fonction Publique Maroc
      </h1>
      <GrilleSalaires />
    </div>
  );
}
