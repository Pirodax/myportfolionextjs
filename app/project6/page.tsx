'use client'
import dynamic from 'next/dynamic';
import Image from 'next/image'
import "../globals.css";
import MagicButton from '../../components/ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface SpotlightProps {
  className?: string;
  fill?: string;
}
const SpotlightNoSSR = dynamic<SpotlightProps>(
  () => import('../../components/ui/Spotlight').then((mod) => mod.Spotlight),
  { ssr: false }
);

const t = {
  fr: {
    heading: "Fine-tuning QLoRA d'un LLM",
    subtitle: "Fine-tuning d'un LLM avec QLoRA",
    p1: "Ce projet explore le fine-tuning d'un grand modèle de langage (LLM) en utilisant la technique QLoRA (Quantized Low-Rank Adaptation). L'objectif est d'adapter un modèle pré-entraîné à un domaine ou une tâche spécifique, tout en réduisant drastiquement les ressources GPU nécessaires grâce à la quantification 4-bit.",
    p2: "QLoRA combine deux approches : la quantification du modèle de base en 4-bit pour économiser la mémoire, et l'entraînement d'adaptateurs LoRA légers sur les couches gelées. Cela permet de fine-tuner des LLMs de plusieurs milliards de paramètres sur un GPU grand public.",
    p3: "Le projet couvre l'ensemble du pipeline : préparation du dataset, configuration du modèle avec BitsAndBytes, entraînement via HuggingFace Transformers et PEFT, évaluation des résultats, et export du modèle adapté.",
    label1: "Pipeline d'entraînement",
    label2: "Résultats & évaluation",
    back: "Retour aux projets",
    github: "Voir le code source",
  },
  en: {
    heading: "QLoRA Fine-tuning of an LLM",
    subtitle: "Fine-tuning an LLM with QLoRA",
    p1: "This project explores the fine-tuning of a large language model (LLM) using the QLoRA (Quantized Low-Rank Adaptation) technique. The goal is to adapt a pre-trained model to a specific domain or task, while drastically reducing the GPU resources needed thanks to 4-bit quantization.",
    p2: "QLoRA combines two approaches: quantizing the base model to 4-bit to save memory, and training lightweight LoRA adapters on frozen layers. This makes it possible to fine-tune LLMs with billions of parameters on a consumer GPU.",
    p3: "The project covers the full pipeline: dataset preparation, model configuration with BitsAndBytes, training via HuggingFace Transformers and PEFT, results evaluation, and export of the adapted model.",
    label1: "Training pipeline",
    label2: "Results & evaluation",
    back: "Back to projects",
    github: "View source code",
  },
};

const Project6 = () => {
  const { language } = useLanguage();
  const text = t[language];

  return (
    <div className="relative py-20 mb-[100px] pt-36 no-caret overflow-x-hidden" id="Project6">
      <div>
        <SpotlightNoSSR className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <SpotlightNoSSR className="h-[80vh] w-[50vw] top-10 left-full" fill="purple"/>
        <SpotlightNoSSR className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue"/>
      </div>

      <h1 className="heading text-3xl md:text-5xl font-bold text-center">
        Project <span className="text-purple">n°6</span>
      </h1>

      {/* Image principale */}
      <div className="flex justify-center mx-auto mt-10">
        <div className="relative flex items-center justify-center sm:w-[800px] w-[90vw] overflow-hidden sm:h-[60vh] h-[40vh] lg:h-[70vh] mb-10">
          <Image
            src="/Projet_QLoRA/img1_project_qlora.png"
            alt="Fine-tuning QLoRA LLM"
            className="z-10 object-contain"
            width={2500}
            height={1500}
            priority
          />
        </div>
      </div>

      {/* Texte explicatif */}
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-purple mb-6">
          {text.subtitle}
        </h2>

        <div className="space-y-6 text-white mt-10">
          <p className="text-lg text-center max-w-2xl mx-auto">
            {text.p1}
          </p>
          <p className="text-lg text-center max-w-2xl mx-auto">
            {text.p2}
          </p>
          <p className="text-lg text-center max-w-2xl mx-auto">
            {text.p3}
          </p>
        </div>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 px-4 max-w-7xl mx-auto">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-[#13162d]">
          <Image
            src="/Projet_QLoRA/img2_project_qlora.png"
            alt="Training pipeline"
            className="object-contain hover:scale-105 transition-transform duration-300"
            fill
          />
          <h2 className="absolute bottom-4 right-4 text-xl font-semibold mb-3 text-purple">{text.label1}</h2>
        </div>
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-[#13162d]">
          <Image
            src="/Projet_QLoRA/img3_project_qlora.png"
            alt="Results"
            className="object-contain hover:scale-105 transition-transform duration-300"
            fill
          />
          <h2 className="absolute bottom-4 right-4 text-xl font-semibold mb-3 text-purple">{text.label2}</h2>
        </div>
      </div>

      <a className="flex justify-center mx-auto gap-8 mt-10" href="https://github.com/Pirodax">
        <MagicButton title={text.github} icon={<FaLocationArrow />} possition="rigth" />
      </a>
      <Link className="flex justify-center mx-auto gap-8 mt-4" href="/#projects">
        <MagicButton title={text.back} icon={<FaLocationArrow />} possition="rigth" />
      </Link>

      <p className="md:text-base text-sm md:font-normal font-light text-center py-40">
        Copyright © 2026  Bergeron Ludovic
      </p>
    </div>
  )
}

export default Project6
