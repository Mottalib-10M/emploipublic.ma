'use client';

import { useState } from 'react';
import { concoursExamples, regions } from '@/data/concours-types';
import { ministeres } from '@/data/ministeres';

const statutLabels = {
  ouvert: 'Ouvert',
  ferme: 'Ferme',
  a_venir: 'A venir',
};

const statutColors = {
  ouvert: 'bg-green-100 text-green-800',
  ferme: 'bg-red-100 text-red-800',
  a_venir: 'bg-yellow-100 text-yellow-800',
};

interface ListeConcoursProps {
  filtreMinistere?: string;
}

export default function ListeConcours({ filtreMinistere }: ListeConcoursProps) {
  const [ministereFilter, setMinistereFilter] = useState(filtreMinistere || '');
  const [regionFilter, setRegionFilter] = useState('');
  const [statutFilter, setStatutFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = concoursExamples.filter((c) => {
    if (ministereFilter && c.ministereSlug !== ministereFilter) return false;
    if (regionFilter && c.region !== regionFilter && c.region !== 'Toutes les regions') return false;
    if (statutFilter && c.statut !== statutFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        c.titre.toLowerCase().includes(q) ||
        c.ministere.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div>
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div>
            <label className="label-field">Rechercher</label>
            <input
              type="text"
              className="input-field"
              placeholder="Mot-cle..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <label className="label-field">Ministere</label>
            <select
              className="input-field"
              value={ministereFilter}
              onChange={(e) => setMinistereFilter(e.target.value)}
            >
              <option value="">Tous les ministeres</option>
              {ministeres.map((m) => (
                <option key={m.slug} value={m.slug}>
                  {m.nomCourt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label-field">Region</label>
            <select
              className="input-field"
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
            >
              <option value="">Toutes les regions</option>
              {regions.filter((r) => r !== 'Toutes les regions').map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label-field">Statut</label>
            <select
              className="input-field"
              value={statutFilter}
              onChange={(e) => setStatutFilter(e.target.value)}
            >
              <option value="">Tous les statuts</option>
              <option value="ouvert">Ouvert</option>
              <option value="a_venir">A venir</option>
              <option value="ferme">Ferme</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-600 mb-4">
        {filtered.length} concours trouve{filtered.length > 1 ? 's' : ''}
      </p>

      {/* Concours cards */}
      <div className="space-y-4">
        {filtered.map((c) => (
          <div key={c.id} className="card p-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statutColors[c.statut]}`}>
                    {statutLabels[c.statut]}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                    {c.echelle}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{c.titre}</h3>
                <p className="text-sm text-primary-600 font-medium mb-2">{c.ministere}</p>
                <p className="text-sm text-gray-600 mb-3">{c.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {c.nombrePostes} postes
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {c.region}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Date limite : {c.dateLimite}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  <strong>Diplome requis :</strong> {c.diplomeRequis}
                </p>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg font-medium">Aucun concours trouve</p>
            <p className="text-sm mt-1">Essayez de modifier vos filtres de recherche</p>
          </div>
        )}
      </div>
    </div>
  );
}
