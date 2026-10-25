'use client';

import ProjectArticle from '@/components/project/ProjectArticle';
import { useLanguage } from '@/contexts/LanguageContext';

/* Screenshots for this client project were never added to /public/.
   Drop them in and render them with <Figure src="..." /> when available. */

const t = {
  en: {
    title: 'Sosoft, a small custom CMS',
    subtitle:
      'Professional websites for a real client, one of them with a purpose-built mini CMS so the client can edit content without touching code.',
    p1: 'The brief was to design and deliver several professional websites, one of which needed a content management interface of its own. The client adds, edits and removes content through a graphical interface, while the visual and technical consistency of the site is preserved.',
    p2: 'Next.js on the front end, PostgreSQL and Supabase for the database, deployed on Vercel with a CI/CD pipeline so releases are automatic and repeatable.',
    p3: 'This was production work with real deadlines, a real client to keep informed, and a standard of finish that is not negotiable — a different discipline from a school project.',
  },
  fr: {
    title: 'Sosoft, un mini CMS sur mesure',
    subtitle:
      "Des sites professionnels pour un client réel, dont l'un équipé d'un mini CMS développé sur mesure pour que le client édite son contenu sans toucher au code.",
    p1: "Le sujet était de concevoir et livrer plusieurs sites professionnels, dont l'un nécessitait sa propre interface de gestion de contenu. Le client ajoute, modifie et supprime son contenu via une interface graphique, tout en préservant la cohérence visuelle et technique du site.",
    p2: "Next.js côté front, PostgreSQL et Supabase pour la base de données, déployé sur Vercel avec une chaîne CI/CD pour des livraisons automatiques et reproductibles.",
    p3: "C'était du travail de production, avec de vraies échéances, un vrai client à tenir informé et un niveau de finition non négociable — une discipline différente de celle d'un projet d'école.",
  },
};

export default function Project7() {
  const { language } = useLanguage();
  const text = t[language];

  return (
    <ProjectArticle
      title={text.title}
      subtitle={text.subtitle}
      meta={[
        {
          label: { en: 'Context', fr: 'Contexte' },
          value: language === 'en' ? 'Client project' : 'Projet client',
        },
        {
          label: { en: 'Built with', fr: 'Construit avec' },
          value: 'Next.js, PostgreSQL, Supabase, Vercel, CI/CD',
        },
      ]}
    >
      <p>{text.p1}</p>
      <p>{text.p2}</p>
      <p>{text.p3}</p>
    </ProjectArticle>
  );
}
