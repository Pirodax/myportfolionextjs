# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project Overview

Ludovic Bergeron's personal site. The audience is **researchers in machine
learning** who have already read his CV and clicked through out of curiosity.
Every decision answers one question: does this make him read like someone who
thinks like a researcher?

Next.js 16, React 19, TypeScript, Tailwind CSS 4. Deployed on Vercel.

## Development Commands

```bash
npm run dev     # development server
npm run build   # production build
npm start       # serve the production build
```

## Design system — "Signal on paper"

Defined entirely in `app/globals.css`. Do not introduce colours, fonts or
effects outside it.

- **Palette**: semantic CSS variables on `:root`, redefined under `.dark`, and
  exposed to Tailwind through `@theme inline`. Use the utilities `bg-paper`,
  `bg-surface`, `text-ink`, `text-ink-2`, `border-rule`, `text-trace`.
  There is exactly **one accent** — `--trace`, the teal of a signal curve.
- **Type**: `font-serif` is Newsreader (headings, pull quotes, the name);
  `font-sans` is IBM Plex Sans (body, metadata, navigation). Loaded in
  `app/layout.tsx` via `next/font/google`.
- **Layout**: the `.doc-grid` class is the backbone — a narrow margin column
  for dates, roles, advisors and stacks, a wide column for substance. Every
  section uses it, which is what makes the page read as one document.
  Content is **left-aligned**. Nothing is centred.
- **Motion**: one orchestrated moment only — the hero trace drawing itself
  (`.animate-trace`). No scroll reveals, no hover lifts, no gradient washes.
  `prefers-reduced-motion` is respected.

Things deliberately removed, which should not come back: spotlights, the 3D
globe, bento grids, infinite carousels, shimmer buttons, the purple accent,
the floating contact button, centred text.

## Content

**All content lives in `data/index.ts`.** Nothing is hard-coded in components.

- `identity` — name, email, GitHub, LinkedIn, CV path
- `hero` — headline lines, lead paragraph, what he is looking for
- `research` — the work a researcher came to read. Newest first.
- `featuredWork` — Sign2Speak (8), Loodo (9), clinical ML (10)
- `projects` — older engineering projects, no longer rendered (see the comment
  above the array); `/project1..7` still build but nothing links to them
- `methods`, `education`, `leadership`, `testimonials`, `socialMedia`

New content carries copy as `{ en, fr }` objects. The legacy `projects` array
keeps the older `_en` suffix shape. `lib/i18n.ts` exports `pick()` for values
that may be either.

**English is the default language**; French is available through the toggle in
the header (`contexts/LanguageContext.tsx`, persisted in localStorage).

## Adding a project

1. Add an entry to `featuredWork` in `data/index.ts` with a new id and
   `href: "/project{id}"`.
2. Create `app/project{id}/page.tsx` using `ProjectArticle`
   (see `app/project8/page.tsx` as the template).
3. Put media in `public/Projet_{Name}/` and render it with `Figure` or
   `Gallery` from `components/project/ProjectArticle.tsx`.

A `featuredWork` entry with `media: null` renders as text only — that is
intentional, so a missing screenshot never looks like a broken page.

## Components

- `SiteHeader` — static header, hairline rule, language toggle
- `Section` — the rule + serif heading that opens every section
- `Hero`, `Research`, `SelectedWork`, `Methods`, `BeyondTheLab`,
  `References`, `Footer` — the homepage, in order
- `SignalTrace` — the hero graphic. Geometry is computed at module scope so
  server and client render identical markup.
- `project/ProjectArticle` — the shell every project page uses, plus the
  `Figure` and `Gallery` helpers

## Notes

- The CV is served from `public/CV/Ludovic-Bergeron-CV.pdf`. That path is fixed:
  updating the CV means replacing that file, not editing code.
- Always use `Image` from `next/image`.
- Sentry, Vercel Analytics and Speed Insights are configured and in use.
