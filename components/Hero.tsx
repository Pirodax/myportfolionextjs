'use client'
import React from 'react'
import { cn } from "@/lib/utils";
import dynamic from 'next/dynamic';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { TextGenerateEffectDemo } from './TextGenerateEffectDemo';

interface SpotlightProps {
  className?: string;
  fill?: string;
}
const SpotlightNoSSR = dynamic<SpotlightProps>(
  () => import('./ui/Spotlight').then((mod) => mod.Spotlight),
  { ssr: false }
);

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <div className="mb-[100px] pt-36">
      <div>
        <SpotlightNoSSR className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <SpotlightNoSSR className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <SpotlightNoSSR className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-black-100">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(rgba(64,64,64,0.8)_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-2xl font-bold text-center text-blue-100 max-w-80">
            Ludovic <br /> Bergeron <br />
          </h2>
          <h2 className="uppercase tracking-widest text-2xl font-bold text-center text-blue-100 max-w-80">
            {t.title}
          </h2>
          <TextGenerateEffectDemo />
          <p className="text-center md:tracking-wider text-sm mb-4 md:text-lg lg:text-2xl">
            {t.subtitle}
          </p>
          <MagicButton
            title={t.cta}
            icon={<FaLocationArrow />}
            possition="right"
            handleclick={() => {
              const target = document.getElementById("projects");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
