'use client'
import React from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image'
import "../globals.css";
import MagicButton from '../../components/ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'


interface SpotlightProps {
  className?: string;
  fill?: string;
}
const SpotlightNoSSR = dynamic<SpotlightProps>(
  () => import('../../components/ui/Spotlight').then((mod) => mod.Spotlight),
  { ssr: false }
);

const Project1 = () => {
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
        <span className="text-purple">n°1</span>
      </h1>
      <div className="flex justify-center mx-auto">
        <div className="relative flex items-center justify-center sm:w-[800px] w-[90vw] overflow-hidden sm:h-[60vh] h-[40vh] lg:h-[70vh] mb-10">
        <Image
          src="/img1_project_web.png"
          alt="/img_Project_web"
          className="z-10"
          width={2500} // ajustez selon vos besoins
          height={1500} // ajustez selon vos besoins
          priority
        />
        </div>
      </div>
       <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-purple mb-6">
          Portfolio Next.js - Vue d&apos;ensemble
        </h2>
        
        <div className="space-y-6 text-white-200">
          <p className="text-lg text-center">
            Un portfolio professionnel moderne avec des effets visuels avancés, construit comme une application web responsive.
          </p>

          <div className="grid md:grid-cols-2 gap-8 ml-20 md:ml-30">
            <div>
              <h3 className="text-xl font-semibold mb-3  text-purple">Technologies Principales</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Next.js 15 (React)</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>CSS Modules</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple">Composants et Animations</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Custom Spotlight effect</li>
                <li>MagicButton component</li>
                <li>Dynamic imports</li>
                <li>Hover animations</li>
              </ul>
            </div>
          </div>

         
          <div className="grid md:grid-cols-2 gap-8 ml-20 md:ml-30">
            <div>
              <h3 className="text-xl font-semibold mb-3  text-purple">Outils de développement</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>ESLint</li>
                <li>PostCSS</li>
                <li>TypeScript Config</li>
                <li>Sentry (monitoring d&apos;erreurs)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple">Déploiement</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Cloudflare Pages</li>
                <li>Vercel (configuration alternative)</li>
                <li>Optimisation des images</li>
                <li>Routing dynamique</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* 3 images en format portrait */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-4 max-w-7xl mx-auto">
      
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
          <Image
            src="/img2_project_web.png"
            alt="Portrait 1"
            className="object-cover hover:scale-105 transition-transform duration-300"
            fill
          />
          <h2 className="absolute bottom-4 right-4 text-xl font-semibold mb-3 text-purple">Développement</h2>
        </div>

        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
          <Image
            src="/img3_project_web.png"
            alt="Portrait 2"
            className="object-cover hover:scale-105 transition-transform duration-300"
            fill
          />
          <h2 className="absolute bottom-4 right-4 text-xl font-semibold mb-3 text-purple">Déploiement</h2>
        </div>
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
          <Image
            src="/img4_project_web.png"
            alt="Portrait 3"
            className="object-cover hover:scale-105 transition-transform duration-300"
            fill
          />
          <h2 className="absolute bottom-4 right-4 text-xl font-semibold mb-3 text-purple-500">Feedback</h2>
        </div>
      </div>
      <a className="flex justify-center mx-auto gap-8" href="https://github.com/Pirodax/myportfolionextjs">
        <MagicButton title="Voir code source" icon={<FaLocationArrow />} possition="rigth" />
      </a>
      <p className="md:text-base text-sm md:font-normal font-light text-center py-40">
        Copyright © 2025 Bergeron Ludovic
      </p>
    </div>
        
    
  )
}

export default Project1