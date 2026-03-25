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
    subtitle: "Newsletter Bêta-testeurs",
    p1: "Ce mini-projet a été conçu dans le cadre du développement de mon application Loodo. L'objectif : mettre en place une newsletter automatisée permettant aux utilisateurs intéressés de s'inscrire comme bêta-testeurs et de vérifier leur email pour valider leur participation.",
    p2: "J'ai développé l'ensemble en Next.js, avec une base de données PostgreSQL hébergée sur Neon, et gérée via Prisma ORM. Le système gère l'inscription, l'envoi d'un email de confirmation et la mise à jour automatique de la base des abonnés.",
    p3: "Ce projet m'a permis d'explorer la gestion d'abonnements en temps réel, l'automatisation des envois et l'implémentation d'une logique fiable de vérification d'email.",
    site: "🔗 Voir le site",
    label1: "Confirmation du mail",
    label2: "Mise à jour de l'user dans la database",
    back: "Retour aux projets",
  },
  en: {
    subtitle: "Beta-Tester Newsletter",
    p1: "This mini-project was built as part of the development of my Loodo application. The goal: set up an automated newsletter allowing interested users to sign up as beta-testers and verify their email to confirm their participation.",
    p2: "I developed the whole system in Next.js, with a PostgreSQL database hosted on Neon and managed via Prisma ORM. The system handles registration, sending a confirmation email, and automatically updating the subscriber database.",
    p3: "This project allowed me to explore real-time subscription management, automated email sending, and the implementation of a reliable email verification logic.",
    site: "🔗 Visit the site",
    label1: "Email confirmation",
    label2: "User database update",
    back: "Back to projects",
  },
};

const Project4 = () => {
  const { language } = useLanguage();
  const text = t[language];

  return (
    <div className="relative py-20 mb-[100px] pt-36 no-caret overflow-x-hidden" id="Project4">
      <div>
        <SpotlightNoSSR className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <SpotlightNoSSR className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <SpotlightNoSSR className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <h1 className="heading text-3xl md:text-5xl font-bold text-center">
        Project <span className="text-purple">n°4</span>
      </h1>

      <div className="flex justify-center mx-auto">
        <div className="relative flex items-center justify-center sm:w-[800px] w-[90vw] overflow-hidden sm:h-[60vh] h-[40vh] lg:h-[70vh] mb-10">
          <Image src="/Projet_newsletter_loodo/img1_project_newsletter_loodo.png" alt="Newsletter Loodo" className="z-10" width={2500} height={1500} priority />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-purple mb-6">{text.subtitle}</h2>
        <div className="space-y-6 text-white mt-10">
          <p className="text-lg text-center max-w-2xl mx-auto">{text.p1}</p>
          <p className="text-lg text-center max-w-2xl mx-auto">{text.p2}</p>
          <p className="text-lg text-center max-w-2xl mx-auto">{text.p3}</p>
        </div>
      </div>

      <a className="flex justify-center mx-auto gap-8 mt-10" href="https://loodo.app">
        <MagicButton title={text.site} icon={<FaLocationArrow />} possition="rigth" />
      </a>

      <div className="flex justify-center mx-auto mt-10">
        <div className="relative flex items-center justify-center sm:w-[800px] w-[90vw] overflow-hidden sm:h-[60vh] h-[40vh] lg:h-[70vh] mb-10">
          <Image src="/Projet_newsletter_loodo/img4_project_newsletter_loodo.png" alt="Database" className="z-10" width={2500} height={1500} priority />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4 max-w-7xl mx-auto">
        <div className="relative flex items-center justify-center">
          <Image src="/Projet_newsletter_loodo/img3_project_newsletter_loodo.png" alt="Email confirmation" className="hover:scale-105 transition-transform duration-300" width={500} height={500} priority style={{ objectFit: 'contain' }} />
          <h2 className="absolute bottom-4 right-0.5 text-xl font-semibold mb-3 text-purple-400">{text.label1}</h2>
        </div>
        <div className="relative flex items-center justify-center">
          <Image src="/Projet_newsletter_loodo/img2_project_newsletter_loodo.png" alt="Database update" className="hover:scale-105 transition-transform duration-300" width={500} height={500} priority style={{ objectFit: 'contain' }} />
          <h2 className="absolute bottom-4 right-2 text-xl font-semibold mb-3 text-purple-700">{text.label2}</h2>
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

export default Project4
