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
    subtitle: "Portfolio Next.js - Vue d'ensemble",
    p1: "Laissez-moi vous présenter mon site vitrine personnel. Il a été conçu comme une plateforme pour présenter mon profil, mes projets et mes compétences en développement web. L'objectif est de proposer une identité numérique claire, professionnelle et évolutive, tout en expérimentant avec des outils modernes du front-end.",
    p2: "Développé avec Next.js 15 et TypeScript, le site utilise Tailwind CSS pour un design épuré et entièrement responsive. J'ai également intégré des composants personnalisés tels que le Spotlight effect, le MagicButton, et de nombreux composants venant de https://ui.aceternity.com/, ainsi que des animations au survol et des imports dynamiques pour améliorer les performances.",
    p3: "Côté développement, j'ai configuré TypeScript pour une meilleure maintenabilité. Le déploiement était tout d'abord configuré via Cloudflare puis via Vercel, qui s'est révélé être plus optimisé.",
    p4: "Ce projet marque un jalon important dans mon parcours : il m'a permis de découvrir concrètement le cycle complet de développement et de mise en production d'un site web moderne.",
    label1: "Développement", label2: "Déploiement", label3: "Feedback",
    github: "Voir code source", back: "Retour aux projets",
  },
  en: {
    subtitle: "Next.js Portfolio - Overview",
    p1: "Let me introduce you to my personal showcase website. It was designed as a platform to present my profile, projects, and web development skills. The goal is to offer a clear, professional, and scalable digital identity while experimenting with modern front-end tools.",
    p2: "Built with Next.js 15 and TypeScript, the site uses Tailwind CSS for a clean, fully responsive design. I also integrated custom components such as the Spotlight effect, MagicButton, and many components from ui.aceternity.com, as well as hover animations and dynamic imports to improve performance.",
    p3: "On the development side, I configured TypeScript for better maintainability. Deployment was first set up via Cloudflare, then via Vercel, which proved to be more optimized.",
    p4: "This project marks an important milestone in my journey: it allowed me to concretely discover the full cycle of developing and deploying a modern website.",
    label1: "Development", label2: "Deployment", label3: "Feedback",
    github: "View source code", back: "Back to projects",
  },
};

const Project1 = () => {
  const { language } = useLanguage();
  const text = t[language];

  return (
    <div className="relative py-20 mb-[100px] pt-36 no-caret overflow-x-hidden" id="Project1">
      <div>
        <SpotlightNoSSR className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <SpotlightNoSSR className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <SpotlightNoSSR className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <h1 className="heading text-3xl md:text-5xl font-bold text-center">
        Project <span className="text-purple">n°1</span>
      </h1>

      <div className="flex justify-center mx-auto">
        <div className="relative flex items-center justify-center sm:w-[800px] w-[90vw] overflow-hidden sm:h-[60vh] h-[40vh] lg:h-[70vh] mb-10">
          <Image src="/Project_web_portfolio/img1_project_web.png" alt="img_Project_web" className="z-10" width={2500} height={1500} priority />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-purple mb-6">{text.subtitle}</h2>
        <div className="space-y-6 text-white mt-10">
          <p className="text-lg text-center max-w-2xl mx-auto">{text.p1}</p>
          <p className="text-lg text-center max-w-2xl mx-auto">{text.p2}</p>
          <p className="text-lg text-center max-w-2xl mx-auto">{text.p3}</p>
          <p className="text-lg text-center max-w-2xl mx-auto">{text.p4}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-4 max-w-7xl mx-auto">
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
          <Image src="/Project_web_portfolio/img2_project_web.png" alt="Portrait 1" className="object-cover hover:scale-105 transition-transform duration-300" fill />
          <h2 className="absolute bottom-4 right-4 text-xl font-semibold mb-3 text-purple">{text.label1}</h2>
        </div>
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
          <Image src="/Project_web_portfolio/img3_project_web.png" alt="Portrait 2" className="object-cover hover:scale-105 transition-transform duration-300" fill />
          <h2 className="absolute bottom-4 right-4 text-xl font-semibold mb-3 text-purple">{text.label2}</h2>
        </div>
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
          <Image src="/Project_web_portfolio/img4_project_web.png" alt="Portrait 3" className="object-cover hover:scale-105 transition-transform duration-300" fill />
          <h2 className="absolute bottom-4 right-4 text-xl font-semibold mb-3 text-purple-500">{text.label3}</h2>
        </div>
      </div>

      <a className="flex justify-center mx-auto gap-8 mt-10" href="https://github.com/Pirodax/myportfolionextjs">
        <MagicButton title={text.github} icon={<FaLocationArrow />} possition="rigth" />
      </a>
      <Link className="flex justify-center mx-auto gap-8 mt-4" href="/#projects">
        <MagicButton title={text.back} icon={<FaLocationArrow />} possition="rigth" />
      </Link>
      <p className="md:text-base text-sm md:font-normal font-light text-center py-40">
        Copyright © 2026 Bergeron Ludovic
      </p>
    </div>
  )
}

export default Project1
