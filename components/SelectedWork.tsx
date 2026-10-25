'use client';

import Image from 'next/image';
import Link from 'next/link';
import Section from './Section';
import YouTubeEmbed from './YouTubeEmbed';
import { featuredWork } from '@/data';
import { pick } from '@/lib/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

const COPY = {
  en: {
    title: 'Selected work',
    intro:
      'Systems I built end to end, where the constraint — a phone with no network, a clinical cohort, a product that ships — did most of the teaching.',
    stack: 'Built with',
    read: 'Project notes',
    demo: 'The system running end to end, on the phone.',
  },
  fr: {
    title: 'Travaux choisis',
    intro:
      "Des systèmes construits de bout en bout, où la contrainte — un téléphone sans réseau, une cohorte clinique, un produit qui sort — a fait l'essentiel de l'enseignement.",
    stack: 'Construit avec',
    read: 'Notes de projet',
    demo: "Le système en fonctionnement, de bout en bout, sur le téléphone.",
  },
};

export default function SelectedWork() {
  const { language } = useLanguage();
  const copy = COPY[language];

  return (
    <Section id="work" title={copy.title} intro={copy.intro}>
      <div className="space-y-10 md:space-y-12">
        {featuredWork.map((entry, index) => (
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
              <p className="mt-1 text-ink-2">{entry.context[language]}</p>

              <dl className="mt-4 md:mt-5">
                <dt className="text-ink-2">{copy.stack}</dt>
                <dd className="mt-0.5 text-ink">{entry.stack.join(', ')}</dd>
              </dl>
            </div>

            <div>
              <h3 className="font-serif text-[1.35rem] leading-snug tracking-tight md:text-[1.6rem]">
                {pick(entry.title, language)}
              </h3>

              <p className="mt-3 max-w-[60ch] font-serif text-[1.15rem] leading-relaxed text-ink md:text-[1.25rem]">
                {entry.summary[language]}
              </p>

              <p className="mt-5 max-w-[68ch] text-ink-2">
                {entry.detail[language]}
              </p>

              {entry.media?.type === 'youtube' ? (
                <YouTubeEmbed
                  className="mt-7"
                  id={entry.media.id}
                  title={pick(entry.title, language)}
                  caption={copy.demo}
                />
              ) : entry.media ? (
                <figure className="mt-7 overflow-hidden border border-rule bg-surface">
                  {entry.media.type === 'video' ? (
                    <video
                      className="block w-full"
                      controls
                      playsInline
                      preload="metadata"
                      poster={entry.media.poster}
                    >
                      <source src={entry.media.src} />
                    </video>
                  ) : (
                    <Image
                      src={entry.media.src}
                      alt={pick(entry.title, language)}
                      width={1600}
                      height={900}
                      className="block h-auto w-full"
                    />
                  )}
                </figure>
              ) : null}

              <p className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.95rem]">
                <Link
                  href={entry.href}
                  className="text-ink underline decoration-rule decoration-1 underline-offset-[0.3em] transition-colors hover:text-trace hover:decoration-trace"
                >
                  {copy.read}
                </Link>
                {entry.links?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink underline decoration-rule decoration-1 underline-offset-[0.3em] transition-colors hover:text-trace hover:decoration-trace"
                  >
                    {link.label[language]}
                  </a>
                ))}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
