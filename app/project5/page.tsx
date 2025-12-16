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

const Project5 = () => {
  return (
    <div className="relative py-20 mb-[100px] pt-36 no-caret overflow-x-hidden" id="Project5">
      <div>
        <SpotlightNoSSR className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <SpotlightNoSSR className="h-[80vh] w-[50vw] top-10 left-full" fill="purple"/>
        <SpotlightNoSSR className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue"/>
      </div>

      {/* Titre */}
      <h1 className="heading text-3xl md:text-5xl font-bold text-center mb-10">
        Project <span className="text-purple">n°5</span>
      </h1>

      {/* Vidéo démo principale en format portrait */}
      <div className="flex justify-center mx-auto mt-10 mb-32">
        <div className="relative flex items-center justify-center w-[360px] h-[640px]">
          <video
            className="z-10 rounded-xl shadow-2xl"
            width={360}
            height={640}
            controls
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/Projet_Mutuellia/demo_1.webm" type="video/webm" />
            <source src="/Projet_Mutuellia/demo_1.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </div>

      {/* Texte explicatif */}
      <div className="max-w-4xl mx-auto px-4 mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-purple mb-6">
          Mutuellia – Application de simulation de remboursements santé
        </h2>

        <div className="space-y-6 text-white mt-10">
          <p className="text-lg text-center max-w-2xl mx-auto">
            <strong>Mutuellia</strong> est un projet d&apos;équipe ambitieux développé en mode <strong>Agile Scrum</strong> 
            avec une équipe de <strong>6 personnes</strong>. L&apos;application mobile permet aux utilisateurs de simuler
            leurs droits de remboursement santé en fonction de leur contrat de mutuelle.
          </p>

          <p className="text-lg text-center max-w-2xl mx-auto">
            En tant que <strong>Tech Lead & Product Owner</strong>, j&apos;ai coordonné l&apos;équipe et géré
            les priorités du backlog via <strong>Jira</strong> et <strong>GitHub</strong>. Le développement
            s&apos;est fait avec <strong>Flutter</strong> pour l&apos;interface mobile, et <strong>PostgreSQL / Supabase</strong>
            pour gérer la base de données backend.
          </p>

          <p className="text-lg text-center max-w-2xl mx-auto">
            Le défi majeur de ce projet a été la <strong>gestion de bases de données massives</strong> contenant
            tous les tableaux de remboursement en fonction des mutuelles et de leurs formules. Même pour une MVP,
            structurer et optimiser ces données complexes a demandé une architecture robuste et une collaboration
            étroite entre tous les membres de l&apos;équipe.
          </p>

          <p className="text-lg text-center max-w-2xl mx-auto">
            Ce projet m&apos;a permis de renforcer mes compétences en <strong>leadership technique</strong>,
            en <strong>gestion de projet Agile</strong>, et en <strong>architecture de bases de données</strong>.
          </p>
        </div>
      </div>


      {/* 3 images en format portrait - affichées en entier */}
      <div className="flex flex-col md:flex-row gap-8 mt-10 px-4 max-w-7xl mx-auto items-center justify-center">

        <div className="relative flex flex-col items-center">
          <div className="relative w-[280px] h-[560px] rounded-xl overflow-hidden bg-[#13162d]">
            <Image
              src="/Projet_Mutuellia/img2_project_mutuellia.png"
              alt="Portrait 1"
              className="object-contain hover:scale-105 transition-transform duration-300"
              fill
            />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-purple">Completer votre profil</h2>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="relative w-[280px] h-[560px] rounded-xl overflow-hidden bg-[#13162d]">
            <Image
              src="/Projet_Mutuellia/img1_project_mutuellia.png"
              alt="Portrait 2"
              className="object-contain hover:scale-105 transition-transform duration-300"
              fill
            />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-purple">Choisir votre consultation</h2>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="relative w-[280px] h-[560px] rounded-xl overflow-hidden bg-[#13162d]">
            <Image
              src="/Projet_Mutuellia/img3_project_mutuellia.png"
              alt="Portrait 3"
              className="object-contain hover:scale-105 transition-transform duration-300"
              fill
            />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-purple">Simuler votre remboursement</h2>
        </div>
      </div>
      {/* target="_blank" */}
      


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

export default Project5
