'use client';

import ProjectArticle, { Figure } from '@/components/project/ProjectArticle';
import { useLanguage } from '@/contexts/LanguageContext';

const t = {
  en: {
    title: 'Design Sprint 2025, first prize',
    subtitle:
      'A mobile interface for SurusConnect, letting farmers raise an alert and find what they need after a work accident. Won first place with my team.',
    p1: 'The competition, organised by ESIEA, ran over one week in five stages: understanding the need, divergence and storyboarding, prototyping in Figma, user testing and adjustment, then a final defence before the jury. The compressed format is what makes the method work — every assumption has to be tested the same week it is made.',
    p2: 'The brief was narrow and the users were specific: farmers, often alone, often far from help, needing to raise an alert quickly and reach the right information. That ruled out most of what a general-purpose interface would do.',
    p3: 'The prize went to the team. What I took from it was the method: turn a loosely defined problem into something testable, put it in front of users before it is finished, and let the test decide.',
    label1: 'Figma dashboard',
    label2: 'Emergency call screen',
    proto: 'Try the prototype',
    linkedin: 'LinkedIn post',
  },
  fr: {
    title: 'Design Sprint 2025, premier prix',
    subtitle:
      "Une interface mobile pour SurusConnect, permettant aux agriculteurs de déclencher une alerte et de trouver l'information nécessaire après un accident du travail. Première place avec mon équipe.",
    p1: "Le concours, organisé par l'ESIEA, s'est déroulé sur une semaine en cinq étapes : compréhension du besoin, divergence et storyboard, prototypage sur Figma, tests utilisateurs et ajustements, puis soutenance devant le jury. C'est le format resserré qui fait fonctionner la méthode : chaque hypothèse doit être testée la semaine même où elle est formulée.",
    p2: "Le sujet était étroit et les utilisateurs très particuliers : des agriculteurs, souvent seuls, souvent loin des secours, qui doivent déclencher une alerte vite et atteindre la bonne information. Cela écartait l'essentiel de ce que ferait une interface généraliste.",
    p3: "Le prix revient à l'équipe. Ce que j'en garde, c'est la méthode : transformer un problème mal défini en quelque chose de testable, le mettre devant des utilisateurs avant qu'il soit fini, et laisser le test trancher.",
    label1: 'Tableau de bord Figma',
    label2: "Écran d'appel d'urgence",
    proto: 'Tester le prototype',
    linkedin: 'Publication LinkedIn',
  },
};

export default function Project3() {
  const { language } = useLanguage();
  const text = t[language];

  return (
    <ProjectArticle
      title={text.title}
      subtitle={text.subtitle}
      meta={[
        { label: { en: 'Year', fr: 'Année' }, value: '2025' },
        {
          label: { en: 'Result', fr: 'Résultat' },
          value: language === 'en' ? 'First prize' : 'Premier prix',
        },
        { label: { en: 'Built with', fr: 'Construit avec' }, value: 'Figma' },
      ]}
      links={[
        {
          label: { en: text.proto, fr: text.proto },
          href: 'https://www.figma.com/proto/GZ7HfY6ox0H46OfYEmfcwA/Design-for-good?page-id=0%3A1&node-id=30-5870&p=f&viewport=-1153%2C2728%2C0.33&t=s7LnL8z8DwFk7rme-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=30%3A5870',
        },
        {
          label: { en: text.linkedin, fr: text.linkedin },
          href: 'https://www.linkedin.com/posts/bergeronludovic_esiea-surusconnect-figma-activity-7337104300290043905-XW90',
        },
      ]}
    >
      <Figure src="/Projet_DesignSprint/img3_projet_DesignSprint.jpg" alt="" priority />

      <p>{text.p1}</p>
      <p>{text.p2}</p>

      <Figure
        src="/Projet_DesignSprint/img1_projet_DesignSprint.png"
        alt=""
        caption={text.label1}
      />

      <Figure
        src="/Projet_DesignSprint/img2_projet_DesignSprint.png"
        alt=""
        caption={text.label2}
        width={720}
        height={1280}
        portrait
      />

      <p>{text.p3}</p>
    </ProjectArticle>
  );
}
