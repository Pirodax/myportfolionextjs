'use client';

import Section from './Section';
import { education, methods } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';

const COPY = {
  en: { title: 'Methods and training', education: 'Education' },
  fr: { title: 'Méthodes et formation', education: 'Formation' },
};

export default function Methods() {
  const { language } = useLanguage();
  const copy = COPY[language];

  return (
    <Section id="methods" title={copy.title}>
      <dl className="space-y-4">
        {methods.map((group) => (
          <div key={group.label.en} className="doc-grid">
            <dt className="text-sm text-ink-2 md:pt-0.5">{group.label[language]}</dt>
            <dd className="max-w-[68ch] text-[0.95rem]">{group.items}</dd>
          </div>
        ))}
      </dl>

      <h3 className="mt-12 border-t border-rule pt-8 font-serif text-[1.25rem] tracking-tight">
        {copy.education}
      </h3>

      <div className="mt-6 space-y-6">
        {education.map((entry) => (
          <div key={entry.id} className="doc-grid">
            <time className="text-sm font-medium text-ink md:pt-0.5">
              {entry.period[language]}
            </time>
            <div className="max-w-[68ch]">
              <p className="font-medium text-ink">
                {entry.school}
                <span className="ml-2 font-normal text-ink-2">
                  {entry.place[language]}
                </span>
              </p>
              <p className="mt-1 text-[0.95rem] text-ink-2">
                {entry.degree[language]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
