import type { Language } from "@/contexts/LanguageContext";

export const translations: Record<Language, {
  nav: { about: string; projects: string; testimonials: string; contact: string };
  hero: { title: string; subtitle: string; cta: string; greeting: string };
  projects: { heading: string; headingSpan: string; inspect: string };
  testimonials: { heading: string; headingSpan: string };
  skills: { heading: string; headingSpan: string };
  footer: {
    heading: string; headingSpan: string; quote: string; cta: string;
  };
  contactBtn: string;
  back: string;
  copyright: string;
}> = {
  fr: {
    nav: {
      about: "À propos",
      projects: "Projets",
      testimonials: "Témoignages",
      contact: "Contact",
    },
    hero: {
      title: "FUTUR INGÉNIEUR LOGICIEL/IA",
      subtitle: "Prêt à relever de nouveaux défis en entreprise !",
      cta: "Voir mon travail",
      greeting: "Bonjour moi c'est Ludovic et voici mon Portfolio",
    },
    projects: {
      heading: "Petite sélection de",
      headingSpan: "mes projets récents",
      inspect: "Inspecter le projet",
    },
    testimonials: {
      heading: "Petits mots de",
      headingSpan: "mes professeurs",
    },
    skills: {
      heading: "Mes",
      headingSpan: "Compétences",
    },
    footer: {
      heading: "Pas encore convaincu ? Je serais ravi de vous démontrer",
      headingSpan: "mes compétences",
      quote:
        "« Prenons rendez-vous à votre convenance pour échanger sur vos besoins et explorer ensemble les opportunités de collaboration. »",
      cta: "Contactez-moi",
    },
    contactBtn: "Contactez-moi",
    back: "Retour aux projets",
    copyright: "Copyright © 2026  Bergeron Ludovic",
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    hero: {
      title: "FUTURE SOFTWARE / AI ENGINEER",
      subtitle: "Ready to take on new professional challenges!",
      cta: "See my work",
      greeting: "Hi, I'm Ludovic and this is my Portfolio",
    },
    projects: {
      heading: "A small selection of",
      headingSpan: "my recent projects",
      inspect: "Explore the project",
    },
    testimonials: {
      heading: "Kind words from",
      headingSpan: "my professors",
    },
    skills: {
      heading: "My",
      headingSpan: "Skills",
    },
    footer: {
      heading: "Not convinced yet? I would be happy to demonstrate",
      headingSpan: "my skills",
      quote:
        "« Let's schedule a meeting at your convenience to discuss your needs and explore collaboration opportunities together. »",
      cta: "Contact me",
    },
    contactBtn: "Contact me",
    back: "Back to projects",
    copyright: "Copyright © 2026  Bergeron Ludovic",
  },
};
