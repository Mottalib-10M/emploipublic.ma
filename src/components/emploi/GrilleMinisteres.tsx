import Link from 'next/link';
import { ministeres } from '@/data/ministeres';

export default function GrilleMinisteres() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {ministeres.map((m) => (
        <Link
          key={m.slug}
          href={`/ministeres/${m.slug}/`}
          className="card p-6 group"
        >
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
            <span className="text-primary-600 font-bold text-lg">{m.nomCourt.charAt(0)}</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            {m.nomCourt}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{m.description.substring(0, 120)}...</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{m.effectif}</span>
            <span className="text-primary-600 font-medium">{m.typeConcours.length} types de concours</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
