'use client';

import ProjectArticle from '@/components/project/ProjectArticle';
import { useLanguage } from '@/contexts/LanguageContext';

/* Figures for this page were never added to /public/Projet_QLoRA/.
   Drop them there and render them with <Figure src="..." /> when available. */

const t = {
  en: {
    title: 'Fine-tuning an LLM with QLoRA',
    subtitle:
      'Adapting a pre-trained language model to a specific domain on a single consumer GPU, through 4-bit quantisation and low-rank adapters.',
    p1: 'QLoRA combines two ideas: quantise the base model to 4-bit so it fits in memory, and train small low-rank adapters on top of the frozen weights. Together they bring fine-tuning a multi-billion-parameter model within reach of one consumer GPU.',
    p2: 'The project covers the whole pipeline — dataset preparation, model configuration with BitsAndBytes, training through Hugging Face Transformers and PEFT, evaluation, and export of the adapted model.',
    p3: 'This is the technique behind the on-device coach prototyped for Loodo, where the question was how much of a hosted model’s usefulness survives inside a phone.',
    github: 'GitHub',
  },
  fr: {
    title: "Affiner un LLM avec QLoRA",
    subtitle:
      "Adapter un modèle de langue pré-entraîné à un domaine précis sur un seul GPU grand public, par quantification 4 bits et adaptateurs de faible rang.",
    p1: "QLoRA combine deux idées : quantifier le modèle de base en 4 bits pour qu'il tienne en mémoire, et entraîner de petits adaptateurs de faible rang au-dessus des poids gelés. Ensemble, elles mettent l'affinage d'un modèle de plusieurs milliards de paramètres à portée d'un seul GPU grand public.",
    p2: "Le projet couvre tout le pipeline — préparation du jeu de données, configuration du modèle avec BitsAndBytes, entraînement via Hugging Face Transformers et PEFT, évaluation, et export du modèle adapté.",
    p3: "C'est la technique derrière le coach embarqué prototypé pour Loodo, où la question était de savoir quelle part de l'utilité d'un modèle hébergé survit à l'intérieur d'un téléphone.",
    github: 'GitHub',
  },
};

export default function Project6() {
  const { language } = useLanguage();
  const text = t[language];

  return (
    <ProjectArticle
      title={text.title}
      subtitle={text.subtitle}
      meta={[
        {
          label: { en: 'Built with', fr: 'Construit avec' },
          value: 'Python, Hugging Face Transformers, PEFT, BitsAndBytes, Unsloth',
        },
      ]}
      links={[
        { label: { en: text.github, fr: text.github }, href: 'https://github.com/Pirodax' },
      ]}
    >
      <p>{text.p1}</p>
      <p>{text.p2}</p>
      <p>{text.p3}</p>
    </ProjectArticle>
  );
}
