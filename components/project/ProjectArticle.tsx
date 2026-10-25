'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Bilingual } from '@/data';

const BACK = { en: 'Back to work', fr: 'Retour aux travaux' };

export type MetaItem = { label: Bilingual; value: string };
export type ProjectLink = { label: Bilingual; href: string };

/**
 * Shared shell for every project page: the same header, the same document grid,
 * the same measure. Only the body changes from one project to the next.
 */
export default function ProjectArticle({
  title,
  subtitle,
  meta,
  links,
  children,
}: {
  title: string;
  subtitle?: string;
  meta?: MetaItem[];
  links?: ProjectLink[];
  children: ReactNode;
}) {
  const { language } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <article>
          <header className="border-b border-rule pb-8 pt-10 md:pt-14">
            <Link
              href="/#work"
              className="text-sm text-ink-2 underline decoration-rule decoration-1 underline-offset-[0.3em] transition-colors hover:text-trace hover:decoration-trace"
            >
              {BACK[language]}
            </Link>

            <h1 className="mt-6 max-w-[22ch] font-serif text-[clamp(2rem,5vw,3.25rem)] font-normal leading-[1.06] tracking-[-0.02em]">
              {title}
            </h1>

            {subtitle ? (
              <p className="mt-4 max-w-[62ch] text-ink-2">{subtitle}</p>
            ) : null}
          </header>

          <div className="doc-grid pt-9 md:pt-11">
            <aside className="text-sm">
              {meta?.length ? (
                <dl className="space-y-3">
                  {meta.map((item) => (
                    <div key={item.label.en}>
                      <dt className="text-ink-2">{item.label[language]}</dt>
                      <dd className="text-ink">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              {links?.length ? (
                <ul className="mt-6 space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="text-ink underline decoration-rule decoration-1 underline-offset-[0.3em] transition-colors hover:text-trace hover:decoration-trace"
                      >
                        {link.label[language]}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </aside>

            <div className="prose-doc">{children}</div>
          </div>
        </article>

        <div className="mt-20 md:mt-28">
          <Footer />
        </div>
      </main>
    </>
  );
}

/** A single image or video, framed and captioned. */
export function Figure({
  src,
  sources,
  alt = '',
  caption,
  width = 1600,
  height = 1000,
  portrait = false,
  poster,
  priority = false,
}: {
  src?: string;
  sources?: { src: string; type: string }[];
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
  portrait?: boolean;
  poster?: string;
  priority?: boolean;
}) {
  return (
    <figure className={portrait ? 'my-8 max-w-[22rem]' : 'my-8'}>
      <div className="overflow-hidden border border-rule bg-surface">
        {sources ? (
          <video
            className="block w-full"
            controls
            playsInline
            muted
            loop
            preload="metadata"
            poster={poster}
          >
            {sources.map((source) => (
              <source key={source.src} src={source.src} type={source.type} />
            ))}
          </video>
        ) : src ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className="block h-auto w-full"
          />
        ) : null}
      </div>
      {caption ? (
        <figcaption className="mt-2.5 text-sm text-ink-2">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

/** Two or three images read side by side. */
export function Gallery({
  items,
  columns = 3,
  portrait = false,
}: {
  items: { src: string; alt?: string; caption?: string }[];
  columns?: 2 | 3;
  portrait?: boolean;
}) {
  return (
    <div
      className={`my-8 grid gap-5 ${
        columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'
      }`}
    >
      {items.map((item) => (
        <figure key={item.src}>
          <div
            className={`relative overflow-hidden border border-rule bg-surface ${
              portrait ? 'aspect-[9/16]' : 'aspect-[4/3]'
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt ?? ''}
              fill
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
              className={portrait ? 'object-contain' : 'object-cover'}
            />
          </div>
          {item.caption ? (
            <figcaption className="mt-2.5 text-sm text-ink-2">
              {item.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
