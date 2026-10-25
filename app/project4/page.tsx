'use client';

import ProjectArticle, { Figure, Gallery } from '@/components/project/ProjectArticle';
import { useLanguage } from '@/contexts/LanguageContext';

const t = {
  en: {
    title: 'Beta-tester newsletter for Loodo',
    subtitle:
      'Automated sign-up, email verification and subscriber management for the Loodo beta programme.',
    p1: 'Built as part of Loodo: a newsletter that lets interested users sign up as beta-testers and confirm their email to validate their place in the programme.',
    p2: 'The whole thing runs on Next.js, with a PostgreSQL database hosted on Neon and managed through Prisma. It handles registration, the confirmation email, and the automatic update of the subscriber table.',
    p3: 'The interesting part was the verification logic: an unverified address has to be stored, retried and eventually expired without ever becoming a confirmed subscriber by accident.',
    label1: 'Email confirmation',
    label2: 'Subscriber record updated',
    site: 'Visit the site',
  },
  fr: {
    title: 'Newsletter bêta-testeurs pour Loodo',
    subtitle:
      "Inscription automatisée, vérification d'e-mail et gestion des abonnés pour le programme bêta de Loodo.",
    p1: "Développé dans le cadre de Loodo : une newsletter qui permet aux utilisateurs intéressés de s'inscrire comme bêta-testeurs et de confirmer leur e-mail pour valider leur place dans le programme.",
    p2: "L'ensemble tourne sous Next.js, avec une base PostgreSQL hébergée sur Neon et gérée via Prisma. Il gère l'inscription, l'e-mail de confirmation et la mise à jour automatique de la table des abonnés.",
    p3: "La partie intéressante était la logique de vérification : une adresse non vérifiée doit être stockée, relancée puis expirée, sans jamais devenir par accident un abonné confirmé.",
    label1: "Confirmation de l'e-mail",
    label2: "Fiche d'abonné mise à jour",
    site: 'Voir le site',
  },
};

export default function Project4() {
  const { language } = useLanguage();
  const text = t[language];

  return (
    <ProjectArticle
      title={text.title}
      subtitle={text.subtitle}
      meta={[
        {
          label: { en: 'Built with', fr: 'Construit avec' },
          value: 'Next.js, TypeScript, PostgreSQL, Prisma, Neon, Vercel',
        },
      ]}
      links={[{ label: { en: text.site, fr: text.site }, href: 'https://loodo.app' }]}
    >
      <Figure src="/Projet_newsletter_loodo/img1_project_newsletter_loodo.png" alt="" priority />

      <p>{text.p1}</p>
      <p>{text.p2}</p>
      <p>{text.p3}</p>

      <Gallery
        columns={2}
        items={[
          {
            src: '/Projet_newsletter_loodo/img3_project_newsletter_loodo.png',
            caption: text.label1,
          },
          {
            src: '/Projet_newsletter_loodo/img2_project_newsletter_loodo.png',
            caption: text.label2,
          },
        ]}
      />

      <Figure src="/Projet_newsletter_loodo/img4_project_newsletter_loodo.png" alt="" />
    </ProjectArticle>
  );
}
