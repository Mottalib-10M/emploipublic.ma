'use client';

import { useState } from 'react';
import { echelles } from '@/data/echelles';

export default function GrilleSalaires() {
  const [selectedEchelle, setSelectedEchelle] = useState<string>('all');

  const filtered = selectedEchelle === 'all'
    ? echelles
    : echelles.filter((e) => String(e.echelle) === selectedEchelle);

  return (
    <div>
      {/* Filter */}
      <div className="mb-6">
        <label className="label-field">Filtrer par echelle</label>
        <select
          className="input-field max-w-xs"
          value={selectedEchelle}
          onChange={(e) => setSelectedEchelle(e.target.value)}
        >
          <option value="all">Toutes les echelles</option>
          {echelles.map((e) => (
            <option key={String(e.echelle)} value={String(e.echelle)}>
              Echelle {e.echelle} - {e.grade}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="space-y-8">
        {filtered.map((ech) => (
          <div key={String(ech.echelle)} className="card overflow-hidden">
            <div className="bg-primary-600 text-white px-6 py-4">
              <h3 className="text-lg font-bold">Echelle {ech.echelle} — {ech.grade}</h3>
              <p className="text-primary-100 text-sm mt-1">{ech.categorie}</p>
            </div>
            <div className="px-6 py-3 bg-primary-50 text-sm text-gray-700">
              {ech.description}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Echelon</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Indice</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Salaire brut (DH)</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Salaire net estime (DH)</th>
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
