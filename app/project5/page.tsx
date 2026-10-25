'use client';

import ProjectArticle, { Figure, Gallery } from '@/components/project/ProjectArticle';
import { useLanguage } from '@/contexts/LanguageContext';

const t = {
  en: {
    title: 'Mutuellia',
    subtitle:
      'A mobile app that simulates what a French health insurance contract will actually reimburse. Team of six, Agile Scrum, as Tech Lead and Product Owner.',
    p1: 'Users enter their contract and a planned consultation, and the app returns what they can expect to get back. The MVP was built by a team of six in Agile Scrum; I coordinated the team and ran the backlog in Jira and GitHub.',
    p2: 'The hard part was never the interface. French reimbursement tables vary by insurer and by formula within each insurer, which produces a large, irregular dataset that has to stay queryable and correct. Structuring it for an MVP, without the time to normalise everything, took the most design effort of the project.',
    p3: 'Flutter for the mobile app, PostgreSQL and Supabase behind it.',
    p4: 'What I took from it was the Tech Lead side: deciding what not to build, and keeping six people pointed at the same MVP.',
    demo: 'The simulation flow, end to end.',
    label1: 'Complete your profile',
    label2: 'Choose your consultation',
    label3: 'Simulate your reimbursement',
  },
  fr: {
    title: 'Mutuellia',
    subtitle:
      "Une application mobile qui simule ce qu'un contrat de mutuelle rembourse réellement. Équipe de six, Agile Scrum, en tant que Tech Lead et Product Owner.",
    p1: "L'utilisateur renseigne son contrat et une consultation prévue, et l'application lui renvoie ce qu'il peut espérer récupérer. La MVP a été construite par une équipe de six en Agile Scrum ; j'ai coordonné l'équipe et tenu le backlog sur Jira et GitHub.",
    p2: "La difficulté n'a jamais été l'interface. Les tableaux de remboursement varient selon la mutuelle et selon la formule au sein de chaque mutuelle, ce qui produit un jeu de données vaste et irrégulier qui doit rester interrogeable et juste. Le structurer pour une MVP, sans le temps de tout normaliser, a demandé le plus gros effort de conception du projet.",
    p3: "Flutter pour l'application mobile, PostgreSQL et Supabase derrière.",
    p4: "Ce que j'en retire tient au rôle de Tech Lead : décider ce qu'on ne construit pas, et garder six personnes alignées sur la même MVP.",
    demo: 'Le parcours de simulation, de bout en bout.',
    label1: 'Compléter son profil',
    label2: 'Choisir sa consultation',
    label3: 'Simuler son remboursement',
  },
};

export default function Project5() {
  const { language } = useLanguage();
  const text = t[language];

  return (
    <ProjectArticle
      title={text.title}
      subtitle={text.subtitle}
      meta={[
        {
          label: { en: 'Role', fr: 'Rôle' },
          value: 'Tech Lead, Product Owner',
        },
        {
          label: { en: 'Team', fr: 'Équipe' },
          value: language === 'en' ? '6 people, Agile Scrum' : '6 personnes, Agile Scrum',
        },
        {
          label: { en: 'Built with', fr: 'Construit avec' },
          value: 'Flutter, Dart, PostgreSQL, Supabase, Jira',
        },
      ]}
    >
      <Figure
        sources={[
          { src: '/Projet_Mutuellia/demo_1.webm', type: 'video/webm' },
          { src: '/Projet_Mutuellia/demo_1.mp4', type: 'video/mp4' },
        ]}
        caption={text.demo}
        portrait
      />

      <p>{text.p1}</p>
      <p>{text.p2}</p>
      <p>{text.p3}</p>

      <Gallery
        portrait
        items={[
          { src: '/Projet_Mutuellia/img2_project_mutuellia.png', caption: text.label1 },
          { src: '/Projet_Mutuellia/img1_project_mutuellia.png', caption: text.label2 },
          { src: '/Projet_Mutuellia/img3_project_mutuellia.png', caption: text.label3 },
        ]}
      />

      <p>{text.p4}</p>
    </ProjectArticle>
  );
}
