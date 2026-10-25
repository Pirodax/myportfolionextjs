'use client';

import ProjectArticle, { Figure, Gallery } from '@/components/project/ProjectArticle';
import { useLanguage } from '@/contexts/LanguageContext';

const t = {
  en: {
    title: 'Deedee Dorzee, showcase website',
    subtitle:
      "A portfolio site gathering the photographic work and biography of Deedee Dorzée, browsable like a digital book.",
    p1: 'The site lets visitors browse her projects organised by brand or personality, and explore each visual series as a book. Built with Next.js and TypeScript, with Tailwind CSS for the responsive design.',
    p2: 'Content is organised in TypeScript data files acting as a small local database. A single dynamic [slug] page adapts to every project, so a new series needs no new page. The site is hosted on Vercel.',
    p3: 'This is where I first worked with a data-driven content model in Next.js: all the information lives in the data folder, and dynamic routing builds the pages from it.',
    mobile: 'The responsive layout at phone width.',
    discover: 'Visit the website',
  },
  fr: {
    title: 'Deedee Dorzee, site vitrine',
    subtitle:
      "Un site portfolio regroupant les travaux photographiques et la biographie de Deedee Dorzée, parcourable comme un livre numérique.",
    p1: "Le site permet de naviguer dans ses projets organisés par marque ou personnalité, et d'explorer chaque série visuelle comme un livre. Développé avec Next.js et TypeScript, avec Tailwind CSS pour le responsive.",
    p2: "Le contenu est organisé dans des fichiers de données TypeScript qui jouent le rôle d'une petite base locale. Une seule page dynamique [slug] s'adapte à chaque projet : une nouvelle série ne demande aucune nouvelle page. Le site est hébergé sur Vercel.",
    p3: "C'est là que j'ai travaillé pour la première fois avec un modèle de contenu piloté par les données dans Next.js : toute l'information vit dans le dossier data, et le routage dynamique construit les pages à partir d'elle.",
    mobile: 'La mise en page responsive en largeur téléphone.',
    discover: 'Voir le site',
  },
};

export default function Project2() {
  const { language } = useLanguage();
  const text = t[language];

  return (
    <ProjectArticle
      title={text.title}
      subtitle={text.subtitle}
      meta={[
        {
          label: { en: 'Built with', fr: 'Construit avec' },
          value: 'Next.js, TypeScript, Tailwind CSS, Vercel',
        },
      ]}
      links={[
        {
          label: { en: text.discover, fr: text.discover },
          href: 'https://dd-web-site.vercel.app/',
        },
      ]}
    >
      <p>{text.p1}</p>
      <p>{text.p2}</p>

      <Figure src="/Projet_dd_portfolio/img1_project_dd_portfolio.png" alt="" priority />

      <Gallery
        items={[
          { src: '/Projet_dd_portfolio/img2_project_dd_portfolio.png' },
          { src: '/Projet_dd_portfolio/img3_project_dd_portfolio.png' },
          { src: '/Projet_dd_portfolio/img4_project_dd_portfolio.png' },
        ]}
      />

      <p>{text.p3}</p>

      <Figure
        src="/Projet_dd_portfolio/img5_project_dd_portfolio.jpeg"
        alt=""
        caption={text.mobile}
        width={720}
        height={1280}
        portrait
      />
    </ProjectArticle>
  );
}
