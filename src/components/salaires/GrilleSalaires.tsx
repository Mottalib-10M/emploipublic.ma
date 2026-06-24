'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { echelles } from '@/data/echelles';
import ShareButtons from '@/components/ui/ShareButtons';

function GrilleSalairesInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const initialEchelle = searchParams.get('echelle') || 'all';
  const [selectedEchelle, setSelectedEchelle] = useState<string>(initialEchelle);

  // Sync URL params on mount and when searchParams change
  useEffect(() => {
    const param = searchParams.get('echelle');
    if (param && param !== selectedEchelle) {
      setSelectedEchelle(param);
    }
  }, [searchParams, selectedEchelle]);

  const handleEchelleChange = (value: string) => {
    setSelectedEchelle(value);

    // Update URL without full reload
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'all') {
      params.delete('echelle');
    } else {
      params.set('echelle', value);
    }
    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    router.replace(newUrl, { scroll: false });
  };

  const filtered = selectedEchelle === 'all'
    ? echelles
    : echelles.filter((e) => String(e.echelle) === selectedEchelle);

  const shareText = selectedEchelle === 'all'
    ? 'Grille des salaires de la fonction publique au Maroc 2026 :'
    : `Salaires fonction publique Maroc - Échelle ${selectedEchelle} :`;

  return (
    <div>
      {/* Filter + Share */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end gap-4">
        <div>
          <label className="label-field">Filtrer par échelle</label>
          <select
            className="input-field max-w-xs"
            value={selectedEchelle}
            onChange={(e) => handleEchelleChange(e.target.value)}
          >
            <option value="all">Toutes les échelles</option>
            {echelles.map((e) => (
              <option key={String(e.echelle)} value={String(e.echelle)}>
                Échelle {e.echelle} - {e.grade}
              </option>
            ))}
          </select>
        </div>
        <ShareButtons
          text={shareText}
          className="sm:ml-auto"
        />
      </div>

      {/* Table */}
      <div className="space-y-8">
        {filtered.map((ech) => (
          <div key={String(ech.echelle)} className="card overflow-hidden">
            <div className="bg-primary-600 text-white px-6 py-4">
              <h3 className="text-lg font-bold">Échelle {ech.echelle} — {ech.grade}</h3>
              <p className="text-primary-100 text-sm mt-1">{ech.categorie}</p>
            </div>
            <div className="px-6 py-3 bg-primary-50 text-sm text-gray-700">
              {ech.description}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Échelon</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Indice</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Salaire brut (DH)</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Salaire net estimé (DH)</th>
                  </tr>
                </thead>
                <tbody>
                  {ech.echelons.map((ec) => (
                    <tr key={ec.echelon} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="px-6 py-3 font-medium">{ec.echelon}</td>
                      <td className="px-6 py-3">{ec.indice}</td>
                      <td className="px-6 py-3">{ec.salaireBrut.toLocaleString('fr-FR')} DH</td>
                      <td className="px-6 py-3 text-primary-600 font-semibold">{ec.salaireNet.toLocaleString('fr-FR')} DH</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GrilleSalaires() {
  return (
    <Suspense fallback={
      <div className="animate-pulse space-y-4">
        <div className="h-10 bg-gray-200 rounded w-64"></div>
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
    }>
      <GrilleSalairesInner />
    </Suspense>
  );
}
