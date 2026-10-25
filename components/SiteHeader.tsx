'use client';

import Link from 'next/link';
import { identity, navItems } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SiteHeader() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="font-serif text-lg leading-none tracking-tight hover:text-trace"
        >
          {identity.name}
        </Link>

        <nav className="flex items-center gap-5 text-sm">
          <ul className="hidden items-center gap-5 sm:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`/#${item.id}`}
                  className="text-ink-2 transition-colors hover:text-ink"
                >
                  {item.label[language]}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="border border-rule px-2 py-1 text-xs font-medium text-ink-2 transition-colors hover:border-ink-2 hover:text-ink"
            aria-label={
              language === 'en' ? 'Lire en français' : 'Read in English'
            }
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
        </nav>
      </div>
    </header>
  );
}
