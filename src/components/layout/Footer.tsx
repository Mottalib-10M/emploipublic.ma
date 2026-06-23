import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <span className="font-bold text-white">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/concours/" className="hover:text-primary-400 transition-colors">Concours</Link></li>
              <li><Link href="/ministeres/" className="hover:text-primary-400 transition-colors">Ministères</Link></li>
              <li><Link href="/generateur-cv/" className="hover:text-primary-400 transition-colors">Générateur de CV</Link></li>
              <li><Link href="/salaires-fonction-publique/" className="hover:text-primary-400 transition-colors">Grille des salaires</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides/reussir-concours-public/" className="hover:text-primary-400 transition-colors">Réussir un concours</Link></li>
              <li><Link href="/guides/preparer-entretien-oral/" className="hover:text-primary-400 transition-colors">Préparer l&apos;entretien oral</Link></li>
              <li><Link href="/guides/lettre-motivation-fonction-publique/" className="hover:text-primary-400 transition-colors">Lettre de motivation</Link></li>
              <li><Link href="/guides/salaires-fonction-publique-maroc/" className="hover:text-primary-400 transition-colors">Guide des salaires</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${siteConfig.contact}`} className="hover:text-primary-400 transition-colors">
                  {siteConfig.contact}
                </a>
              </li>
              <li><Link href="/a-propos/" className="hover:text-primary-400 transition-colors">À propos</Link></li>
              <li><Link href="/mentions-legales/" className="hover:text-primary-400 transition-colors">Mentions légales</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
          <p className="text-sm text-gray-500">
            Créé par <span className="text-gray-400">{siteConfig.author.name}</span> ({siteConfig.author.title})
          </p>
        </div>
      </div>
    </footer>
  );
}
