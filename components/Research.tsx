'use client';

import Section from './Section';
import { research } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';

const COPY = {
  en: {
    title: 'Research',
    intro:
      'Two projects: one running now, one finished. Each is described by what it asks, how it is evaluated, and what it would take to be believed.',
    methods: 'Methods',
  },
  fr: {
    title: 'Recherche',
    intro:
      "Deux travaux : l'un en cours, l'autre terminé. Chacun est décrit par sa question, son protocole d'évaluation, et ce qu'il faudrait pour y croire.",
    methods: 'Méthodes',
  },
};

export default function Research() {
  const { language } = useLanguage();
  const copy = COPY[language];

  return (
    <Section id="research" title={copy.title} intro={copy.intro}>
      <div className="space-y-10 md:space-y-12">
        {research.map((entry, index) => (
          <article
            key={entry.id}
            className={
              index > 0 ? 'doc-grid border-t border-rule pt-10 md:pt-12' : 'doc-grid'
            }
          >
            <div className="text-sm">
              <time className="block font-medium text-ink">
                {entry.period[language]}
              </time>

              <p className="mt-1 flex items-center gap-2 text-ink-2">
                {entry.current ? (
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-trace"
                  />
                ) : null}
                {entry.status[language]}
              </p>

              <dl className="mt-4 space-y-2 md:mt-5">
                {entry.meta.map((item) => (
                  <div key={item.label.en}>
                    <dt className="text-ink-2">{item.label[language]}</dt>
                    <dd className="text-ink">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="font-serif text-[1.35rem] leading-snug tracking-tight md:text-[1.6rem]">
                {entry.title[language]}
              </h3>
              <p className="mt-1.5 text-[0.95rem] text-ink-2">{entry.org}</p>

              <p className="mt-5 max-w-[68ch]">{entry.abstract[language]}</p>

              <dl className="mt-5 max-w-[68ch] text-[0.95rem]">
                <dt className="inline font-medium text-ink">{copy.methods}</dt>{' '}
                <dd className="inline text-ink-2">{entry.methods[language]}</dd>
              </dl>

              {entry.note ? (
                <p className="mt-5 max-w-[62ch] border-l border-rule pl-4 text-sm text-ink-2">
                  {entry.note[language]}
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
