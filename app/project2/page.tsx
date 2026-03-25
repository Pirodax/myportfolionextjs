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
    subtitle: "Site de vitrine de Deedee Dorzee",
    p1: "dd-web-site.vercel.app est un site web de type portfolio qui regroupe les travaux photographiques ainsi que la biographie de Deedee Dorzée. Le site permet de naviguer à travers ses différents projets organisés par marques ou personnalités, et d'explorer ses séries visuelles comme un véritable livre numérique.",
    p2: "Développé avec Next.js et TypeScript, il utilise Tailwind CSS pour le design responsive et organise les données via des fichiers data en TypeScript, jouant le rôle d'une mini-base de données locale. Une seule page dynamique [slug] s'adapte automatiquement à chaque projet, sans qu'il soit nécessaire de créer une page manuelle par série.",
    p3: "Le site est hébergé sur Vercel, garantissant rapidité et facilité de déploiement. Le résultat est un portfolio moderne, minimaliste et évolutif, pensé pour mettre en valeur les travaux de Deedee Dorzée.",
    discover: "Découvrir le site",
    mobile: "Une application web responsive. Vous pouvez voir le format mobile juste ci-dessus ⬆️",
    p4: "Pour ce projet je me suis expérimenté à la base de données via le fichier data de Next.js. L'image 1 représente les différents books de Deedee Dorzee (ses travaux regroupés par marque ou célébrité). J'ai choisi de stocker toutes les informations dans des fichiers TypeScript au sein du dossier data. Ensuite, grâce au système de routes dynamiques de Next.js ([slug]), j'ai créé une seule page capable de s'adapter automatiquement à chaque projet.",
    back: "Retour aux projets",
  },
  en: {
    subtitle: "Deedee Dorzee Showcase Website",
    p1: "dd-web-site.vercel.app is a portfolio-type website that gathers the photographic works and biography of Deedee Dorzée. The site lets you browse her various projects organised by brands or personalities, and explore her visual series like a real digital book.",
    p2: "Built with Next.js and TypeScript, it uses Tailwind CSS for responsive design and organises data via TypeScript data files, acting as a mini local database. A single dynamic [slug] page automatically adapts to each project, removing the need to create a manual page for every series.",
    p3: "The site is hosted on Vercel, ensuring speed and ease of deployment. The result is a modern, minimalist and scalable portfolio designed to showcase Deedee Dorzée's work.",
    discover: "Visit the website",
    mobile: "A responsive web application. You can see the mobile format just above ⬆️",
    p4: "For this project I experimented with a data-driven approach using Next.js data files. Image 1 shows the different books of Deedee Dorzee (her works grouped by brand or celebrity). I chose to store all information in TypeScript files inside the data folder. Then, using Next.js dynamic routing ([slug]), I created a single page that automatically adapts to each project.",
    back: "Back to projects",
  },
};

const Project2 = () => {
  const { language } = useLanguage();
  const text = t[language];

  return (
    <div className="relative py-20 mb-[100px] pt-36 no-caret overflow-x-hidden" id="Project2">
      <div>
        <SpotlightNoSSR className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <SpotlightNoSSR className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <SpotlightNoSSR className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <h1 className="heading text-3xl md:text-5xl font-bold text-center">
        Project <span className="text-purple">n°2</span>
      </h1>

      <div className="flex justify-center mx-auto">
        <div className="relative flex items-center justify-center sm:w-[800px] w-[90vw] overflow-hidden sm:h-[60vh] h-[40vh] lg:h-[70vh] mb-10">
          <Image src="/Projet_dd_portfolio/img1_project_dd_portfolio.png" alt="img_Project_dd_portfolio" className="z-10" width={2500} height={1500} priority />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-purple mb-6">{text.subtitle}</h2>
        <div className="space-y-6 text-white mt-10">
          <p className="text-lg text-center max-w-2xl mx-auto">{text.p1}</p>
          <p className="text-lg text-center max-w-2xl mx-auto">{text.p2}</p>
          <p className="text-lg text-center max-w-2xl mx-auto">{text.p3}</p>
          <p className="text-lg text-center max-w-2xl mx-auto">
            🔗 <a href="https://dd-web-site.vercel.app/" className="underline hover:text-gray-300">{text.discover}</a>
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mx-auto gap-8 mt-10">
        <div className="relative flex items-center justify-center w-[360px] h-[640px] overflow-hidden mb-10">
          <Image src="/Projet_dd_portfolio/img5_project_dd_portfolio.jpeg" alt="mobile view" className="z-10 object-cover" width={360} height={640} priority />
        </div>
        <div className="space-y-6 text-white-200">
          <p className="text-lg text-center">{text.mobile}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-4 max-w-7xl mx-auto">
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
          <Image src="/Projet_dd_portfolio/img2_project_dd_portfolio.png" alt="Image 1" className="object-cover hover:scale-105 transition-transform duration-300" fill />
          <h2 className="absolute bottom-4 right-4 text-xl font-semibold mb-3 text-purple">Image 1</h2>
        </div>
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
          <Image src="/Projet_dd_portfolio/img3_project_dd_portfolio.png" alt="Image 2" className="object-cover hover:scale-105 transition-transform duration-300" fill />
          <h2 className="absolute bottom-4 right-4 text-xl font-semibold mb-3 text-purple">Image 2</h2>
        </div>
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
          <Image src="/Projet_dd_portfolio/img4_project_dd_portfolio.png" alt="Image 3" className="object-cover hover:scale-105 transition-transform duration-300" fill />
          <h2 className="absolute bottom-4 right-4 text-xl font-semibold mb-3 text-purple">Image 3</h2>
        </div>
      </div>

      <div className="space-y-6 text-white mt-10">
        <p className="text-lg text-center max-w-2xl mx-auto">{text.p4}</p>
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

export default Project2
