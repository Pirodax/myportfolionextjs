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

const Project6 = () => {
  return (
    <div className="relative py-20 mb-[100px] pt-36 no-caret overflow-x-hidden" id="Project6">
      <div>
        <SpotlightNoSSR className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <SpotlightNoSSR className="h-[80vh] w-[50vw] top-10 left-full" fill="purple"/>
        <SpotlightNoSSR className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue"/>
      </div>

      {/* Titre */}
      <h1 className="heading text-3xl md:text-5xl font-bold text-center">
        Project <span className="text-purple">n°6</span>
      </h1>

      {/* Image principale */}
      <div className="flex justify-center mx-auto">
        <div className="relative flex items-center justify-center sm:w-[800px] w-[90vw] overflow-hidden sm:h-[60vh] h-[40vh] lg:h-[70vh] mb-10">
          <Image
            src="/placeholder-project.png"
            alt="Loodo App"
            className="z-10"
            width={2500}
            height={1500}
            priority
          />
        </div>
      </div>

      {/* Texte explicatif */}
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-purple mb-6">
          Loodo – Mon projet coup de cœur ❤️
        </h2>

        <div className="space-y-6 text-white mt-10">
          <p className="text-lg text-center max-w-2xl mx-auto">
            <strong>Loodo</strong> est né d&apos;un besoin personnel. Je me suis rendu compte que j&apos;avais
            du mal à rester concentré et organisé dans mes projets personnels et académiques. Les distractions
            étaient nombreuses, et je cherchais un outil qui m&apos;aide vraiment à aller jusqu&apos;au bout
            de mes objectifs.
          </p>

          <p className="text-lg text-center max-w-2xl mx-auto">
            J&apos;ai donc décidé de créer <strong>ma propre application de productivité</strong>. Un outil
            pensé pour améliorer la <strong>concentration</strong>, l&apos;<strong>organisation</strong>, et
            l&apos;<strong>achèvement de projets</strong>. Je l&apos;ai d&apos;abord développée pour moi-même,
            en l&apos;adaptant à mes besoins réels.
          </p>

          <p className="text-lg text-center max-w-2xl mx-auto">
            Puis je me suis dit : <em>&quot;Et si je partageais cet outil avec le monde ?&quot;</em> C&apos;est
            ainsi que Loodo est devenu un projet plus ambitieux. Développée avec <strong>Flutter</strong> pour
            le mobile, <strong>PostgreSQL / Supabase</strong> pour le backend, et entièrement designée sur
            <strong> Figma</strong> en appliquant les principes <strong>UX/UI</strong>.
          </p>

          <p className="text-lg text-center max-w-2xl mx-auto">
            Ce projet me tient particulièrement à cœur car il représente ma vision de la productivité,
            ma capacité à identifier un problème réel, et à y apporter une solution concrète. Loodo n&apos;est
            pas qu&apos;une simple application : c&apos;est un outil qui m&apos;accompagne au quotidien et que
            je souhaite partager avec tous ceux qui cherchent à mieux s&apos;organiser.
          </p>
        </div>
      </div>

      {/* Bouton lien vers le site */}
      <a className="flex justify-center mx-auto gap-8 mt-10" href="https://loodo.app">
        <MagicButton title="🔗 Découvrir Loodo" icon={<FaLocationArrow />} possition="rigth" />
      </a>

      {/* Grille d'images - à compléter quand vous aurez les images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4 max-w-7xl mx-auto">
        <div className="relative flex items-center justify-center">
          <Image
            src="/placeholder-project.png"
            alt="Interface Loodo"
            className="hover:scale-105 transition-transform duration-300"
            width={500}
            height={500}
            priority
            style={{ objectFit: 'contain' }}
          />
          <h2 className="absolute bottom-4 right-2 text-xl font-semibold mb-3 text-purple-400">
            Interface de l&apos;application
          </h2>
        </div>

        <div className="relative flex items-center justify-center">
          <Image
            src="/placeholder-project.png"
            alt="Design Figma Loodo"
            className="hover:scale-105 transition-transform duration-300"
            width={500}
            height={500}
            priority
            style={{ objectFit: 'contain' }}
          />
          <h2 className="absolute bottom-4 right-2 text-xl font-semibold mb-3 text-purple-700">
            Maquettes Figma
          </h2>
        </div>
      </div>

      {/* Lien retour */}
      <Link className="flex justify-center mx-auto gap-8 mt-10" href="/">
        <MagicButton title="Retour à la page d'accueil" icon={<FaLocationArrow />} possition="rigth" />
      </Link>

      <p className="md:text-base text-sm md:font-normal font-light text-center py-40">
        Copyright © 2025 Bergeron Ludovic
      </p>
    </div>
  )
}

export default Project6
