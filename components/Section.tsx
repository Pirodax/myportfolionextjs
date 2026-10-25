import type { ReactNode } from 'react';

/**
 * Every section of the page opens the same way: a rule, a serif heading, and an
 * optional line of context. The repetition is what makes the page read as one
 * document rather than a stack of cards.
 */
export default function Section({
  id,
  title,
  intro,
  children,
}: {
  id?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-rule pt-7 md:pt-9">
      <h2 className="font-serif text-[1.6rem] leading-tight tracking-tight md:text-[2rem]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-2 max-w-[58ch] text-[0.95rem] text-ink-2">{intro}</p>
      ) : null}
      <div className="mt-8 md:mt-10">{children}</div>
    </section>
  );
}
