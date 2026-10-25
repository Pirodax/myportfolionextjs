'use client';

import ProjectArticle, { Figure, Gallery } from '@/components/project/ProjectArticle';
import { useLanguage } from '@/contexts/LanguageContext';

const t = {
  en: {
    title: 'This website',
    subtitle:
      'A research-oriented personal site, rebuilt from a component-kit template into something closer to a document.',
    p1: 'The first version of this site was built on a popular Next.js portfolio template: dark background, spotlight effects, a 3D globe, animated cards. It did its job for an engineering internship search, and it stopped doing its job the moment the audience changed to researchers.',
    p2: 'The rebuild keeps the stack — Next.js, React, TypeScript, Tailwind — and replaces everything above it. Content lives in a single data file; the page is laid out on a two-column document grid with a narrow margin column for dates, roles and advisors; type is set in Newsreader and IBM Plex Sans; and the only motion left on the page is a single trace that draws itself once.',
    p3: 'It is deployed on Vercel, after an earlier run on Cloudflare, with Sentry for error tracking and Vercel Analytics for traffic.',
    label1: 'Development',
    label2: 'Deployment',
    label3: 'Feedback',
    note: 'The screenshots below are from the previous version of the site.',
    github: 'Source code',
  },
  fr: {
    title: 'Ce site',
    subtitle:
      "Un site personnel orienté recherche, reconstruit depuis un template de composants vers quelque chose de plus proche d'un document.",
    p1: "La première version de ce site reposait sur un template de portfolio Next.js très répandu : fond sombre, effets de projecteur, globe 3D, cartes animées. Il a fait son office pour une recherche d'alternance en ingénierie, et il a cessé de le faire dès que le public est devenu des chercheurs.",
    p2: "La refonte garde la pile technique — Next.js, React, TypeScript, Tailwind — et remplace tout ce qui se trouve au-dessus. Le contenu tient dans un seul fichier de données ; la page est posée sur une grille documentaire à deux colonnes, avec une colonne de marge étroite pour les dates, les rôles et les encadrants ; la typographie est en Newsreader et IBM Plex Sans ; et le seul mouvement restant est un tracé qui se dessine une fois.",
    p3: "Le site est déployé sur Vercel, après un premier passage par Cloudflare, avec Sentry pour le suivi des erreurs et Vercel Analytics pour la fréquentation.",
    label1: 'Développement',
    label2: 'Déploiement',
    label3: 'Retours',
    note: 'Les captures ci-dessous proviennent de la version précédente du site.',
    github: 'Code source',
  },
};

export default function Project1() {
  const { language } = useLanguage();
  const text = t[language];

  return (
    <ProjectArticle
      title={text.title}
      subtitle={text.subtitle}
      meta={[
        {
          label: { en: 'Built with', fr: 'Construit avec' },
          value: 'Next.js, React, TypeScript, Tailwind CSS, Vercel',
        },
      ]}
      links={[
        {
          label: { en: text.github, fr: text.github },
          href: 'https://github.com/Pirodax/myportfolionextjs',
        },
      ]}
    >
      <p>{text.p1}</p>
      <p>{text.p2}</p>
      <p>{text.p3}</p>

      <p className="text-sm text-ink-2">{text.note}</p>

      <Figure src="/Project_web_portfolio/img1_project_web.png" alt="" priority />

      <Gallery
        items={[
          { src: '/Project_web_portfolio/img2_project_web.png', caption: text.label1 },
          { src: '/Project_web_portfolio/img3_project_web.png', caption: text.label2 },
          { src: '/Project_web_portfolio/img4_project_web.png', caption: text.label3 },
        ]}
      />
    </ProjectArticle>
  );
}
