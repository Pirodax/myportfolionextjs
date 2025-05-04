import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/lib/utils";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TextGenerateEffectDemo } from './TextGenerateEffectDemo';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
 

const Hero = () => {
  return (
    <div className ="pb-20 pt-36">   
        <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        {/* Background gradient for the container */}

        <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 ">
        <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(rgba(64,64,64,0.8)_1px,transparent_1px)]",//transparence (0.x)
          
        )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"/>
         
    </div>

        <div className ="flex justify-center relative my-20 z-10">
            <div className ="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
                <h2 className = "uppercase tracking-widest text-2xl font-bold text-center text-blue-100 max-w-80">
                   My Portfolio créé avec Next.js et Tailwind CSS
                </h2>
                <TextGenerateEffectDemo/> {/* Text animation effect  qui se trouve dans components*/}
                <p className = "text-center md:tracking-wider text-sm mb-4 md:text-lg lg:text-2xl">
                    hello, je suis Ludovic, un développeur web passionné par la création d'expériences numériques uniques.
                </p>
                <a href="about">
                    <MagicButton
                     title="Voir mon travail "
                     icon={<FaLocationArrow/>}
                     possition='rigth'

                    />
                </a>
                
            </div>

        </div>

        
    </div>
  )
}

export default Hero
