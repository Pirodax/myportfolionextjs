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

const Project7 = () => {
  return (
    <div className="relative py-20 mb-[100px] pt-36 no-caret overflow-x-hidden" id="Project7">
      <div>
        <SpotlightNoSSR className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <SpotlightNoSSR className="h-[80vh] w-[50vw] top-10 left-full" fill="purple"/>
        <SpotlightNoSSR className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue"/>
      </div>

      {/* Titre */}
      <h1 className="heading text-3xl md:text-5xl font-bold text-center">
        Project <span className="text-purple">n°7</span>
      </h1>

      {/* Image principale */}
      <div className="flex justify-center mx-auto">
        <div className="relative flex items-center justify-center sm:w-[800px] w-[90vw] overflow-hidden sm:h-[60vh] h-[40vh] lg:h-[70vh] mb-10">
          <Image
            src="/placeholder-project.png"
            alt="Sosoft CMS"
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
          Sosoft – Mini CMS sur mesure
        </h2>

        <div className="space-y-6 text-white mt-10">
          <p className="text-lg text-center max-w-2xl mx-auto">
            <strong>Sosoft</strong> est un projet professionnel développé pour un <strong>client réel</strong>.
            L&apos;objectif était de concevoir et réaliser plusieurs <strong>sites web professionnels</strong>,
            dont un intégrant un <strong>mini CMS développé sur mesure</strong>.
          </p>

          <p className="text-lg text-center max-w-2xl mx-auto">
            Ce CMS permet au client de gérer le contenu de son site via une <strong>interface graphique intuitive</strong>,
            sans avoir besoin de toucher au code. Il peut ajouter, modifier ou supprimer du contenu de manière autonome,
            tout en conservant la cohérence visuelle et technique du site.
          </p>

          <p className="text-lg text-center max-w-2xl mx-auto">
            Le projet a été développé avec <strong>Next.js</strong> pour le frontend, <strong>PostgreSQL / Supabase</strong>
            pour la base de données backend, et déployé via <strong>Vercel</strong>. J&apos;ai mis en place un système de
            <strong> CI/CD</strong> pour automatiser les déploiements et garantir une livraison rapide et fiable.
          </p>

          <p className="text-lg text-center max-w-2xl mx-auto">
            Ce projet professionnel m&apos;a permis de travailler dans un <strong>contexte réel de production</strong>,
            avec des contraintes de <strong>livrable</strong>, de <strong>suivi client</strong>, et de
            <strong> qualité professionnelle</strong>. Une expérience enrichissante qui m&apos;a appris à gérer
            un projet de bout en bout, de la conception à la livraison finale.
          </p>
        </div>
      </div>

      {/* Grille d'images - à compléter quand vous aurez les images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4 max-w-7xl mx-auto">
        <div className="relative flex items-center justify-center">
          <Image
            src="/placeholder-project.png"
            alt="Interface CMS"
            className="hover:scale-105 transition-transform duration-300"
            width={500}
            height={500}
            priority
            style={{ objectFit: 'contain' }}
          />
          <h2 className="absolute bottom-4 right-2 text-xl font-semibold mb-3 text-purple-400">
            Interface du CMS
          </h2>
        </div>

        <div className="relative flex items-center justify-center">
          <Image
            src="/placeholder-project.png"
            alt="Site web Sosoft"
            className="hover:scale-105 transition-transform duration-300"
            width={500}
            height={500}
            priority
            style={{ objectFit: 'contain' }}
          />
          <h2 className="absolute bottom-4 right-2 text-xl font-semibold mb-3 text-purple-700">
            Rendu du site web
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

export default Project7
