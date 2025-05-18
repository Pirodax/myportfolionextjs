'use client'
import React from 'react'
import dynamic from 'next/dynamic';
 
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

const Projet1 = () => {
  return (
    <div className ="py-20" id="Projet1">
        <div className =" mb-[100px] pt-36">   
        <div>
        <SpotlightNoSSR
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <SpotlightNoSSR
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <SpotlightNoSSR className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        {/* Background gradient for the container */}
        
        
        
        
        <h1 className="heading text-3xl md:text-5xl font-bold text-center">
            Projet  {' '}
            <span className="text-purple">n°1</span>
        </h1>
        </div>
    </div>
  )
}

export default Projet1