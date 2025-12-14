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
      <h1 className="heading text-3xl md:text-5xl font-bold text-center">
        Project <span className="text-purple">n°5</span>
      </h1>

      {/* Image principale */}
      <div className="flex justify-center mx-auto">
        <div className="relative flex items-center justify-center sm:w-[800px] w-[90vw] overflow-hidden sm:h-[60vh] h-[40vh] lg:h-[70vh] mb-10">
          <Image
            src="/placeholder-project.png"
            alt="Mutuellia App"
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

      {/* Grille d'images - à compléter quand vous aurez les images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4 max-w-7xl mx-auto">
        <div className="relative flex items-center justify-center">
          <Image
            src="/placeholder-project.png"
            alt="Interface Mutuellia"
            className="hover:scale-105 transition-transform duration-300"
            width={500}
            height={500}
            priority
            style={{ objectFit: 'contain' }}
          />
          <h2 className="absolute bottom-4 right-2 text-xl font-semibold mb-3 text-purple-400">
            Interface de simulation
          </h2>
        </div>

        <div className="relative flex items-center justify-center">
          <Image
            src="/placeholder-project.png"
            alt="Tableau de remboursement"
            className="hover:scale-105 transition-transform duration-300"
            width={500}
            height={500}
            priority
            style={{ objectFit: 'contain' }}
          />
          <h2 className="absolute bottom-4 right-2 text-xl font-semibold mb-3 text-purple-700">
            Gestion des données de remboursement
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

export default Project5
