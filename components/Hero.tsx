'use client';

import SignalTrace from './SignalTrace';
import { hero, identity } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';

const CAPTION = {
  en: 'Closed-loop insulin delivery: the measured signal, its target band, and the dose the controller chooses.',
  fr: "Délivrance d'insuline en boucle fermée : le signal mesuré, sa plage cible, et la dose choisie par le contrôleur.",
};

export default function Hero() {
  const { language } = useLanguage();

  const links = [
    { label: identity.email, href: `mailto:${identity.email}` },
    { label: 'GitHub', href: identity.github },
    { label: 'LinkedIn', href: identity.linkedin },
    { label: language === 'en' ? 'Curriculum vitae' : 'CV', href: identity.cv },
  ];

  return (
    <div className="pt-14 pb-16 md:pt-20 md:pb-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center lg:gap-16">
        <div>
          <h1 className="font-serif text-[clamp(2.4rem,6.2vw,4.25rem)] font-normal leading-[1.03] tracking-[-0.025em]">
            {hero.headline[language].map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-7 max-w-[62ch] text-ink-2">{hero.lead[language]}</p>

          <p className="mt-4 max-w-[62ch] text-ink">{hero.seeking[language]}</p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.95rem]">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="text-ink underline decoration-rule decoration-1 underline-offset-[0.3em] transition-colors hover:text-trace hover:decoration-trace"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <figure className="lg:pt-2">
          <SignalTrace className="w-full max-w-sm lg:max-w-none" />
          <figcaption className="mt-4 max-w-[38ch] text-sm leading-relaxed text-ink-2">
            {CAPTION[language]}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
