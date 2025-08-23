'use client'
import React from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image'
import "../globals.css";
import MagicButton from '../../components/ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import Link from 'next/link';


interface SpotlightProps {
  className?: string;
  fill?: string;
}
const SpotlightNoSSR = dynamic<SpotlightProps>(
  () => import('../../components/ui/Spotlight').then((mod) => mod.Spotlight),
  { ssr: false }
);

const Project2 = () => {
  return (
    <div className="relative py-20 mb-[100px] pt-36 no-caret overflow-x-hidden" id="Project1">
      <div>
        <SpotlightNoSSR
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
        />
        <SpotlightNoSSR
        className="h-[80vh] w-[50vw] top-10 left-full"
        fill="purple"
        />
        <SpotlightNoSSR
        className="left-80 top-28 h-[80vh] w-[50vw]"
        fill="blue"
        />
      </div>
      {/* Background gradient for the container */}
      
      <h1 className="heading text-3xl md:text-5xl font-bold text-center">
        Project{' '}
        <span className="text-purple">n°2</span>
      </h1>
      <div className="flex justify-center mx-auto"> 
        <div className="relative flex items-center justify-center sm:w-[800px] w-[90vw] overflow-hidden sm:h-[60vh] h-[40vh] lg:h-[70vh] mb-10">
        <Image //image de présentation
          src="/Projet_dd_portfolio/img1_project_dd_portfolio.png"
          alt="/img_Project_dd_portfolio_presentation"
          className="z-10"
          width={2500} 
          height={1500} 
          priority
        />
        </div>
      </div>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-purple mb-6">
            Site de vitrine de Deedee Dorzee 
          </h2>
        
          <div className="space-y-6 text-white mt-10">
            <p className="text-lg text-center max-w-2xl mx-auto">
              <strong>dd-web-site.vercel.app</strong> est un site web de type <em>portfolio</em> qui regroupe les travaux 
              photographiques ainsi que la biographie de <strong>Deedee Dorzée</strong>. Le site permet de naviguer à travers 
              ses différents projets organisés par marques ou personnalités, et d&apos;explorer ses séries visuelles comme un 
              véritable livre numérique.
            </p>

            <p className="text-lg text-center max-w-2xl mx-auto">
              Développé avec <strong>Next.js</strong> et <strong>TypeScript</strong>, il utilise <strong>Tailwind CSS</strong> 
              pour le design responsive et organise les données via des fichiers <strong>data</strong> en TypeScript, jouant 
              le rôle d&apos;une mini-base de données locale. Une seule page dynamique <code>[slug]</code> s&apos;adapte automatiquement 
              à chaque projet, sans qu&apos;il soit nécessaire de créer une page manuelle par série.
            </p>

            <p className="text-lg text-center max-w-2xl mx-auto">
              Le site est hébergé sur <strong>Vercel</strong>, garantissant rapidité et facilité de déploiement. 
              Le résultat est un portfolio moderne, minimaliste et évolutif, pensé pour mettre en valeur les travaux de 
              Deedee Dorzée.
            </p>

            <p className="text-lg text-center max-w-2xl mx-auto">
              🔗 <a href="https://dd-web-site.vercel.app/" className="underline hover:text-gray-300">
                Découvrir le site
              </a>
            </p>
        </div>
      </div>

      <div className="flex flex-col  items-center justify-center mx-auto gap-8 mt-10">
        <div className="relative flex items-center justify-center w-[360px] h-[640px] overflow-hidden mb-10">
          <Image //image de présentation format tel
            src="/Projet_dd_portfolio/img5_project_dd_portfolio.jpeg"
            alt="/img_Project_dd_portfolio_presentation"
            className="z-10 object-cover"
            width={360}
            height={640}
            priority
          />
        </div>

        <div className="space-y-6 text-white-200">
          <p className="text-lg text-center">
            Une application web responsive. Vous pouvez voir le format mobile juste ci-dessus ⬆️
          </p>
        </div>

      </div>
      {/* 3 images en format portrait */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-4 max-w-7xl mx-auto">
      
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
          <Image
          src="/Projet_dd_portfolio/img2_project_dd_portfolio.png"
          alt="/img_Project_dd_portfolio_code"
            className="object-cover hover:scale-105 transition-transform duration-300"
            fill
          />
          <h2 className="absolute bottom-4 right-4 text-xl font-semibold mb-3 text-purple">Image 1</h2>
        </div>

        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
          <Image
          src="/Projet_dd_portfolio/img3_project_dd_portfolio.png"
          alt="/img_Project_dd_portfolio_code"
            className="object-cover hover:scale-105 transition-transform duration-300"
            fill
          />
          <h2 className="absolute bottom-4 right-4 text-xl font-semibold mb-3 text-purple">Image 2</h2>
        </div>
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
          <Image
          src="/Projet_dd_portfolio/img4_project_dd_portfolio.png"
          alt="/img_Project_dd_portfolio_code"
            className="object-cover hover:scale-105 transition-transform duration-300"
            fill
          />
          <h2 className="absolute bottom-4 right-4 text-xl font-semibold mb-3 text-purple">Image 3</h2>
        </div>
      </div>
      <div className="space-y-6 text-white mt-10">
        <p className="text-lg text-center max-w-2xl mx-auto">
          Pour ce projet je me suis expérimenté à la base de données via le fichier <strong>data</strong> de Next.js. 
          Petite explication de comment cela fonctionne : l&apos;image 1 représente les différents <em>books</em> de Deedee Dorzee 
          (ses travaux regroupés par marque ou célébrité). J&apos;ai choisi de stocker toutes les informations (titres, descriptions, 
          images, slugs) dans des fichiers <strong>TypeScript</strong> au sein du dossier data. Ensuite, grâce au système de 
          <strong> routes dynamiques</strong> de Next.js (<code>[slug]</code>), j&apos;ai créé une seule page capable de s&apos;adapter 
          automatiquement à chaque projet. De cette manière, je n&apos;ai pas besoin de créer une page manuelle pour chaque book : 
          une seule page générique suffit pour afficher tous les projets de Deedee Dorzee.
        </p>
      </div>

      {/* target="_blank" */}
      
      <Link className="flex justify-center mx-auto gap-8" href="/">
        <MagicButton title="Retour à la page d'acceuil" icon={<FaLocationArrow />} possition="rigth" /> 
      </Link>
      <p className="md:text-base text-sm md:font-normal font-light text-center py-40">
        Copyright © 2025 Bergeron Ludovic
      </p>
    </div>
        
    
  )
}

export default Project2