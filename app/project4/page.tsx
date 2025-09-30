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

const Project4 = () => {
  return (
    <div className="relative py-20 mb-[100px] pt-36 no-caret overflow-x-hidden" id="Project4">
      <div>
        <SpotlightNoSSR className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <SpotlightNoSSR className="h-[80vh] w-[50vw] top-10 left-full" fill="purple"/>
        <SpotlightNoSSR className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue"/>
      </div>

      {/* Titre */}
      <h1 className="heading text-3xl md:text-5xl font-bold text-center">
        Project <span className="text-purple">n°4</span>
      </h1>

      {/* Image principale */}
      <div className="flex justify-center mx-auto">
        <div className="relative flex items-center justify-center sm:w-[800px] w-[90vw] overflow-hidden sm:h-[60vh] h-[40vh] lg:h-[70vh] mb-10">
          <Image 
            src="/Projet_newsletter_loodo/img1_project_newsletter_loodo.png"
            alt="Newsletter Loodo"
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
          Newsletter Bêta-testeurs
        </h2>
        
        <div className="space-y-6 text-white mt-10">
          <p className="text-lg text-center max-w-2xl mx-auto">
            Ce mini-projet a été conçu dans le cadre du développement de mon application <strong>Loodo</strong>. 
            L&apos; objectif : mettre en place une <strong>newsletter automatisée</strong> permettant aux utilisateurs 
            intéressés de s&apos;inscrire comme <strong>bêta-testeurs</strong> et de vérifier leur email pour valider 
            leur participation.
          </p>

          <p className="text-lg text-center max-w-2xl mx-auto">
            J&apos;ai développé l&apos;ensemble en <strong>Next.js</strong>, avec une base de données <strong>PostgreSQL</strong> 
            hébergée sur <strong>Neon</strong>, et gérée via <strong>Prisma ORM</strong>. 
            Le système gère l&apos;inscription, l&apos;envoi d&apos;un email de confirmation et la mise à jour automatique 
            de la base des abonnés.
          </p>

          <p className="text-lg text-center max-w-2xl mx-auto">
            Ce projet m&apos;a permis d&apos;explorer la <strong>gestion d&apos;abonnements en temps réel</strong>, 
            l&apos;<strong>automatisation des envois</strong> et l&apos;implémentation d&apos;une logique fiable de 
            <strong>vérification d&apos;email</strong>. 
            
          </p>
        </div>
      </div>

      {/* Bouton lien démo ou repo */}
      <a className="flex justify-center mx-auto gap-8 mt-10" href="https://loodo.app">
        <MagicButton title="🔗 Voir le site" icon={<FaLocationArrow />} possition="rigth" /> 
      </a>

    {/* Image database */}
    <div className="flex justify-center mx-auto">
      <div className="relative flex items-center justify-center sm:w-[800px] w-[90vw] overflow-hidden sm:h-[60vh] h-[40vh] lg:h-[70vh] mb-10">
        <Image 
          src="/Projet_newsletter_loodo/img4_project_newsletter_loodo.png"
          alt="Newsletter Loodo"
          className="z-10"
          width={2500} 
          height={1500} 
          priority
        />
      </div>
    </div>

      {/* 2 autres images format portrait */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4 max-w-7xl mx-auto">

        <div className="relative flex items-center justify-center">
          <Image
            src="/Projet_newsletter_loodo/img3_project_newsletter_loodo.png"
            alt="Confirmation du mail"
            className="hover:scale-105 transition-transform duration-300"
            width={500} // adapte aux dimensions réelles
            height={500} // idem
            priority
            style={{ objectFit: 'contain' }}
          />
          <h2 className="absolute bottom-4 right-0.5 text-xl font-semibold mb-3 text-purple-400">
            Confirmation du mail
          </h2>
        </div>

        <div className="relative flex items-center justify-center">
          <Image
            src="/Projet_newsletter_loodo/img2_project_newsletter_loodo.png"
            alt="Mise à jour user database"
            className="hover:scale-105 transition-transform duration-300"
            width={500} // adapte aux dimensions réelles
            height={500}
            priority
            style={{ objectFit: 'contain' }}
          />
          <h2 className="absolute bottom-4 right-2 text-xl font-semibold mb-3 text-purple-700">
            Mise à jour de l&apos;user dans la database
          </h2>
        </div>

      </div>


      {/* Lien retour */}
      <Link className="flex justify-center mx-auto gap-8" href="/">
        <MagicButton title="Retour à la page d'accueil" icon={<FaLocationArrow />} possition="rigth" /> 
      </Link>
      
      <p className="md:text-base text-sm md:font-normal font-light text-center py-40">
        Copyright © 2025 Bergeron Ludovic
      </p>
    </div>
  )
}

export default Project4
