'use client'
import React from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image'
import "../globals.css";
import MagicButton from '../../components/ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
// Définir le type des props que doit accepter Spotlight
interface SpotlightProps {
  className?: string;
  fill?: string;
}
// Import dynamique de Spotlight, sans SSR
const SpotlightNoSSR = dynamic<SpotlightProps>(
  () => import('../../components/ui/Spotlight').then((mod) => mod.Spotlight),
  { ssr: false }
);

const Project7 = () => {
  return (
    <div className="relative py-20 mb-[100px] pt-36 no-caret overflow-x-hidden" id="Project7">
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
      <h1 className="heading text-3xl md:text-5xl font-bold text-center mb-10">
        Project{' '}
        <span className="text-purple">n°2</span>
      </h1>
      <div className="flex justify-center mx-auto mt-8">
        <div className="relative flex items-center gap-6 rounded-md justify-center sm:w-[800px] w-[90vw] overflow-hidden sm:h-[60vh] h-[40vh] lg:h-[70vh] mb-10">
          <Image
            src="/img_maintenace.png"
            alt="/img_maintenace"
            className="z-10"
            width={2200}
            height={1200}
            priority
          />
        </div>
      </div>
      <p className="text-white-200 md:mt-10 my-5 text-center text-xl">
        « Cette page est en maintenance, elle sera bientôt réparée. »     
      </p>
      {/* 3 images en format portrait */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-4 max-w-7xl mx-auto">
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
        <Image
          src="/img_maintenace.png"
          alt="Portrait 1"
          className="object-cover hover:scale-105 transition-transform duration-300"
          fill
        />
        </div>
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
        <Image
          src="/img_maintenace.png"
          alt="Portrait 2"
          className="object-cover hover:scale-105 transition-transform duration-300"
          fill
        />
        </div>
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
        <Image
          src="/img_maintenace.png"
          alt="Portrait 3"
          className="object-cover hover:scale-105 transition-transform duration-300"
          fill
        />
        </div>
      </div>
      <a className="flex justify-center mx-auto" href="https://github.com/Pirodax/myportfolionextjs">
        <MagicButton title="Voir code source" icon={<FaLocationArrow />} possition="rigth" />
      </a>
      <p className="md:text-base text-sm md:font-normal font-light text-center py-40">
        Copyright © 2025 Bergeron Ludovic
      </p>
    </div>
        
    
  )
}

export default Project7