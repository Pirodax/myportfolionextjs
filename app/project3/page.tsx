'use client'
import dynamic from 'next/dynamic';
import Image from 'next/image'
import "../globals.css";
import MagicButton from '../../components/ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface SpotlightProps { className?: string; fill?: string; }
const SpotlightNoSSR = dynamic<SpotlightProps>(
  () => import('../../components/ui/Spotlight').then((mod) => mod.Spotlight),
  { ssr: false }
);

const t = {
  fr: {
    subtitle: "Premier prix du concours Design Sprint 2025 (Figma🥇)",
    p1: "🥇 J'ai eu la chance de remporter la première place lors du concours Design Sprint (RSE) organisé par mon école ESIEA, avec mon équipe. Le défi consistait à imaginer et réaliser une interface web ou mobile pour accompagner l'outil SurusConnect, destiné aux agriculteurs, afin de faciliter le déclenchement d'alertes et l'accès aux informations nécessaires en cas d'incident de travail.",
    p2: "Le concours s'est déroulé sur une semaine, structurée en 5 étapes clés : compréhension du besoin, divergence et storyboard, prototypage sur Figma, tests utilisateurs et ajustements, puis soutenance finale devant le jury. Cette méthodologie nous a permis de développer rapidement une solution concrète et adaptée au contexte des agriculteurs.",
    p3: "Ce projet m'a permis de renforcer mes compétences en UX/UI design, en travail d'équipe, et en méthodologie Design Sprint. Je suis particulièrement fier de ce résultat car il représente ma capacité à collaborer efficacement et à transformer une problématique complexe en une interface intuitive.",
    proto: "🔗 Tester le prototype",
    label1: "Tableau de bord Figma",
    label2: "Page d'appel d'urgence",
    linkedin: "Poste LinkedIn",
    back: "Retour aux projets",
  },
  en: {
    subtitle: "First Prize at Design Sprint Contest 2025 (Figma🥇)",
    p1: "🥇 I had the chance to win first place at the Design Sprint (RSE) competition organised by my school ESIEA, together with my team. The challenge was to design a web or mobile interface for the SurusConnect tool aimed at farmers, to facilitate triggering alerts and accessing information in the event of a work incident.",
    p2: "The contest ran over one week, structured in 5 key steps: understanding the need, divergence and storyboarding, Figma prototyping, user testing and adjustments, then a final presentation before the jury. This methodology allowed us to quickly develop a concrete solution adapted to the farmers' context.",
    p3: "This project helped me strengthen my skills in UX/UI design, teamwork, and the Design Sprint methodology. I am particularly proud of this result as it reflects my ability to collaborate effectively and turn a complex problem into an intuitive interface.",
    proto: "🔗 Try the prototype",
    label1: "Figma dashboard",
    label2: "Emergency call page",
    linkedin: "LinkedIn post",
    back: "Back to projects",
  },
};

const Project3 = () => {
  const { language } = useLanguage();
  const text = t[language];

  return (
    <div className="relative py-20 mb-[100px] pt-36 no-caret overflow-x-hidden" id="Project3">
      <div>
        <SpotlightNoSSR className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <SpotlightNoSSR className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <SpotlightNoSSR className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <h1 className="heading text-3xl md:text-5xl font-bold text-center">
        Project <span className="text-purple">n°3</span>
      </h1>

      <div className="flex justify-center mx-auto">
        <div className="relative flex items-center justify-center sm:w-[800px] w-[90vw] overflow-hidden sm:h-[60vh] h-[40vh] lg:h-[70vh] mb-10">
          <Image src="/Projet_DesignSprint/img3_projet_DesignSprint.jpg" alt="Design Sprint" className="z-10" width={2500} height={1500} priority />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-purple mb-6">{text.subtitle}</h2>
        <div className="space-y-6 text-white mt-10">
          <p className="text-lg text-center max-w-2xl mx-auto">{text.p1}</p>
          <p className="text-lg text-center max-w-2xl mx-auto">{text.p2}</p>
          <p className="text-lg text-center max-w-2xl mx-auto">{text.p3}</p>
        </div>
        <a className="flex justify-center mx-auto gap-8 mt-8" href="https://www.figma.com/proto/GZ7HfY6ox0H46OfYEmfcwA/Design-for-good?page-id=0%3A1&node-id=30-5870&p=f&viewport=-1153%2C2728%2C0.33&t=s7LnL8z8DwFk7rme-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=30%3A5870">
          <MagicButton title={text.proto} icon={<FaLocationArrow />} possition="rigth" />
        </a>
      </div>

      <div className="flex justify-center mx-auto mt-10">
        <div className="relative flex items-center justify-center sm:w-[800px] w-[90vw] overflow-hidden sm:h-[60vh] h-[40vh] lg:h-[70vh] mb-10">
          <Image src="/Projet_DesignSprint/img1_projet_DesignSprint.png" alt="Figma dashboard" className="object-cover hover:scale-105 transition-transform duration-300" fill />
          <h2 className="absolute bottom-4 right-4 text-xl font-semibold mb-3 text-purple-400">{text.label1}</h2>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mx-auto gap-8 mt-10">
        <div className="relative flex items-center justify-center w-[360px] h-[640px] mb-10">
          <Image src="/Projet_DesignSprint/img2_projet_DesignSprint.png" alt="Emergency call" className="hover:scale-105 transition-transform duration-300" width={360} height={640} priority style={{ objectFit: 'contain' }} />
          <h2 className="absolute bottom-4 right-4 text-xl font-semibold mb-3 text-purple-400">{text.label2}</h2>
        </div>
      </div>

      <a className="flex justify-center mx-auto gap-8 mt-4" href="https://www.linkedin.com/posts/bergeronludovic_esiea-surusconnect-figma-activity-7337104300290043905-XW90?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGKmssBzsdCp9JSXLNSlJO85wM0SKPwXKQ">
        <MagicButton title={text.linkedin} icon={<FaLocationArrow />} possition="rigth" />
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

export default Project3
