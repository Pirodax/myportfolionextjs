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
    subtitle: "Mutuellia – Application de simulation de remboursements santé",
    p1: "Mutuellia est un projet d'équipe ambitieux développé en mode Agile Scrum avec une équipe de 6 personnes. L'application mobile permet aux utilisateurs de simuler leurs droits de remboursement santé en fonction de leur contrat de mutuelle.",
    p2: "En tant que Tech Lead & Product Owner, j'ai coordonné l'équipe et géré les priorités du backlog via Jira et GitHub. Le développement s'est fait avec Flutter pour l'interface mobile, et PostgreSQL / Supabase pour gérer la base de données backend.",
    p3: "Le défi majeur de ce projet a été la gestion de bases de données massives contenant tous les tableaux de remboursement en fonction des mutuelles et de leurs formules. Même pour une MVP, structurer et optimiser ces données complexes a demandé une architecture robuste et une collaboration étroite entre tous les membres de l'équipe.",
    p4: "Ce projet m'a permis de renforcer mes compétences en leadership technique, en gestion de projet Agile, et en architecture de bases de données.",
    label1: "Compléter votre profil",
    label2: "Choisir votre consultation",
    label3: "Simuler votre remboursement",
    back: "Retour aux projets",
  },
  en: {
    subtitle: "Mutuellia – Health Insurance Reimbursement Simulator",
    p1: "Mutuellia is an ambitious team project developed in Agile Scrum mode with a team of 6 people. The mobile application allows users to simulate their health reimbursement rights based on their insurance contract.",
    p2: "As Tech Lead & Product Owner, I coordinated the team and managed backlog priorities via Jira and GitHub. Development was done with Flutter for the mobile interface, and PostgreSQL / Supabase for the backend database.",
    p3: "The major challenge of this project was managing massive databases containing all the reimbursement tables for different insurance providers and their formulas. Even for an MVP, structuring and optimizing this complex data required a robust architecture and close collaboration among all team members.",
    p4: "This project helped me strengthen my skills in technical leadership, Agile project management, and database architecture.",
    label1: "Complete your profile",
    label2: "Choose your consultation",
    label3: "Simulate your reimbursement",
    back: "Back to projects",
  },
};

const Project5 = () => {
  const { language } = useLanguage();
  const text = t[language];

  return (
    <div className="relative py-20 mb-[100px] pt-36 no-caret overflow-x-hidden" id="Project5">
      <div>
        <SpotlightNoSSR className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <SpotlightNoSSR className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <SpotlightNoSSR className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <h1 className="heading text-3xl md:text-5xl font-bold text-center">
        Project <span className="text-purple">n°5</span>
      </h1>

      <div className="flex justify-center mx-auto mt-10 mb-32">
        <div className="relative flex items-center justify-center w-[360px] h-[640px]">
          <video className="z-10 rounded-xl shadow-2xl" width={360} height={640} controls autoPlay loop muted playsInline>
            <source src="/Projet_Mutuellia/demo_1.webm" type="video/webm" />
            <source src="/Projet_Mutuellia/demo_1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-purple mb-6">{text.subtitle}</h2>
        <div className="space-y-6 text-white mt-10">
          <p className="text-lg text-center max-w-2xl mx-auto">{text.p1}</p>
          <p className="text-lg text-center max-w-2xl mx-auto">{text.p2}</p>
          <p className="text-lg text-center max-w-2xl mx-auto">{text.p3}</p>
          <p className="text-lg text-center max-w-2xl mx-auto">{text.p4}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-10 px-4 max-w-7xl mx-auto items-center justify-center">
        <div className="relative flex flex-col items-center">
          <div className="relative w-[280px] h-[560px] rounded-xl overflow-hidden bg-[#13162d]">
            <Image src="/Projet_Mutuellia/img2_project_mutuellia.png" alt="Portrait 1" className="object-contain hover:scale-105 transition-transform duration-300" fill />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-purple">{text.label1}</h2>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="relative w-[280px] h-[560px] rounded-xl overflow-hidden bg-[#13162d]">
            <Image src="/Projet_Mutuellia/img1_project_mutuellia.png" alt="Portrait 2" className="object-contain hover:scale-105 transition-transform duration-300" fill />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-purple">{text.label2}</h2>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="relative w-[280px] h-[560px] rounded-xl overflow-hidden bg-[#13162d]">
            <Image src="/Projet_Mutuellia/img3_project_mutuellia.png" alt="Portrait 3" className="object-contain hover:scale-105 transition-transform duration-300" fill />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-purple">{text.label3}</h2>
        </div>
      </div>

      <Link className="flex justify-center mx-auto gap-8 mt-10" href="/#projects">
        <MagicButton title={text.back} icon={<FaLocationArrow />} possition="rigth" />
      </Link>
      <p className="md:text-base text-sm md:font-normal font-light text-center py-40">
        Copyright © 2026  Bergeron Ludovic
      </p>
    </div>
  )
}

export default Project5
