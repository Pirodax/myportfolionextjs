'use client';

import Image from 'next/image';
import Section from './Section';
import { leadership } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';

const COPY = {
  en: { title: 'Beyond the lab' },
  fr: { title: 'Hors du laboratoire' },
};

export default function BeyondTheLab() {
  const { language } = useLanguage();
  const copy = COPY[language];

  return (
    <Section title={copy.title}>
      <div className="doc-grid">
        <time className="text-sm font-medium text-ink md:pt-0.5">
          {leadership.period[language]}
        </time>
        <div>
          <h3 className="font-serif text-[1.25rem] leading-snug tracking-tight md:text-[1.4rem]">
            {leadership.role[language]}
          </h3>
          <p className="mt-3 max-w-[68ch] text-ink-2">{leadership.body[language]}</p>

          <p className="mt-4 text-[0.95rem]">
            <a
              href={leadership.link.href}
              target="_blank"
              rel="noreferrer"
              className="text-ink underline decoration-rule decoration-1 underline-offset-[0.3em] transition-colors hover:text-trace hover:decoration-trace"
            >
              {leadership.link.label[language]}
            </a>
          </p>

          {leadership.events.length > 0 ? (
            <ul className="mt-6 grid gap-5 sm:grid-cols-2">
              {leadership.events.map((event) => (
                <li key={event.date}>
                  {event.img ? (
                    <span className="relative block aspect-[4/3] overflow-hidden border border-rule bg-surface">
                      <Image
                        src={event.img}
                        alt=""
                        fill
                        sizes="(min-width: 640px) 20rem, 100vw"
                        className="object-cover"
                      />
                    </span>
                  ) : null}
                  <time className="mt-2 block text-sm text-ink-2">{event.date}</time>
                  <p className="text-[0.95rem]">{event.title[language]}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

    </Section>
  );
}
