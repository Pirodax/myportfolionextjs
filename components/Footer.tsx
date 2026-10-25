'use client';

import { identity, socialMedia } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';

const COPY = {
  en: {
    title: 'Get in touch',
    body: 'If any of this overlaps with what your group is working on, write to me. Email reaches me fastest, and I answer every message.',
    cv: 'Curriculum vitae (PDF)',
  },
  fr: {
    title: 'Me contacter',
    body: "Si quelque chose ici recoupe les travaux de votre équipe, écrivez-moi. L'e-mail est le plus direct, et je réponds à tous les messages.",
    cv: 'Curriculum vitae (PDF)',
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const copy = COPY[language];

  return (
    <footer id="contact" className="border-t border-rule pt-7 md:pt-9">
      <h2 className="font-serif text-[1.6rem] leading-tight tracking-tight md:text-[2rem]">
        {copy.title}
      </h2>

      <p className="mt-3 max-w-[58ch] text-ink-2">{copy.body}</p>

      <a
        href={`mailto:${identity.email}`}
        className="mt-7 inline-block font-serif text-[clamp(1.4rem,3.6vw,2.1rem)] tracking-tight text-ink underline decoration-rule decoration-1 underline-offset-[0.22em] transition-colors hover:text-trace hover:decoration-trace"
      >
        {identity.email}
      </a>

      <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.95rem]">
        {socialMedia.map((profile) => (
          <li key={profile.id}>
            <a
              href={profile.link}
              target="_blank"
              rel="noreferrer"
              className="text-ink underline decoration-rule decoration-1 underline-offset-[0.3em] transition-colors hover:text-trace hover:decoration-trace"
            >
              {profile.name}
            </a>
          </li>
        ))}
        <li>
          <a
            href={identity.cv}
            className="text-ink underline decoration-rule decoration-1 underline-offset-[0.3em] transition-colors hover:text-trace hover:decoration-trace"
          >
            {copy.cv}
          </a>
        </li>
      </ul>

      <div className="mt-16 flex flex-wrap justify-between gap-2 border-t border-rule pt-5 text-sm text-ink-2">
        <p>© {new Date().getFullYear()} Ludovic Bergeron</p>
        <p>{identity.location[language]}</p>
      </div>
    </footer>
  );
}
