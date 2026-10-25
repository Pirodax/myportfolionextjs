'use client';

import Image from 'next/image';
import Section from './Section';
import { testimonials } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';

const COPY = {
  en: { title: 'References' },
  fr: { title: 'Références' },
};

export default function References() {
  const { language } = useLanguage();

  return (
    <Section title={COPY[language].title}>
      <ul className="grid gap-x-10 gap-y-9 md:grid-cols-3">
        {testimonials.map((reference) => (
          <li key={reference.name}>
            <blockquote className="font-serif text-[1.05rem] italic leading-relaxed text-ink">
              {reference.quote[language]}
            </blockquote>
            <figcaption className="mt-4 flex items-start gap-3">
              <Image
                src={reference.img}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 shrink-0 rounded-full object-cover grayscale"
              />
              <span className="text-sm leading-snug">
                <span className="block font-medium text-ink">{reference.name}</span>
                <span className="block text-ink-2">{reference.title[language]}</span>
              </span>
            </figcaption>
          </li>
        ))}
      </ul>
    </Section>
  );
}
