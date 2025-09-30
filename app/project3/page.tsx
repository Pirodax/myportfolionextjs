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

const Project3 = () => {
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
        <span className="text-purple">n°3</span>
      </h1>
      <div className="flex justify-center mx-auto">
        <div className="relative flex items-center justify-center sm:w-[800px] w-[90vw] overflow-hidden sm:h-[60vh] h-[40vh] lg:h-[70vh] mb-10">
        <Image // image de présentation
          src="/Projet_DesignSprint/img3_projet_DesignSprint.jpg"
          alt="/img_Project_web"
          className="z-10"
          width={2500} 
          height={1500} 
          priority
        />
        </div>
      </div>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-purple mb-6">
            Premier prix du concours Design Sprint 2025 (Figma🥇)
          </h2>
        
          <div className="space-y-6 text-white mt-10">
            <p className="text-lg text-center max-w-2xl mx-auto">
              🥇 J&apos;ai eu la chance de remporter la <strong>première place</strong> lors du concours 
              <em>Design Sprint (RSE)</em> organisé par mon école <strong>ESIEA</strong>, avec mon équipe. 
              Le défi consistait à imaginer et réaliser une interface web ou mobile pour accompagner 
              l&apos;outil <em>SurusConnect</em>, destiné aux agriculteurs, afin de faciliter le déclenchement 
              d&apos;alertes et l&apos;accès aux informations nécessaires en cas d&apos;incident de travail.
            </p>

            <p className="text-lg text-center max-w-2xl mx-auto">
              Le concours s&apos;est déroulé sur une semaine, structurée en 5 étapes clés : 
              compréhension du besoin, divergence et storyboard, prototypage sur <strong>Figma</strong>, 
              tests utilisateurs et ajustements, puis soutenance finale devant le jury. 
              Cette méthodologie nous a permis de développer rapidement une solution concrète et adaptée 
              au contexte des agriculteurs.
            </p>

            <p className="text-lg text-center max-w-2xl mx-auto">
              Ce projet m&apos;a permis de renforcer mes compétences en <strong>UX/UI design</strong>, 
              en <strong>travail d&apos;équipe</strong>, et en <strong>méthodologie Design Sprint</strong>. 
              Je suis particulièrement fier de ce résultat car il représente ma capacité à collaborer 
              efficacement et à transformer une problématique complexe en une interface intuitive.
            </p>
          </div>
          <a className="flex justify-center mx-auto gap-8" href="https://www.figma.com/proto/GZ7HfY6ox0H46OfYEmfcwA/Design-for-good?page-id=0%3A1&node-id=30-5870&p=f&viewport=-1153%2C2728%2C0.33&t=s7LnL8z8DwFk7rme-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=30%3A5870">
            <MagicButton title="🔗Tester le prototype" icon={<FaLocationArrow />} possition="rigth" /> 
          </a>
        </div>
        

      {/* 3 images en format portrait */}
      <div className="flex justify-center mx-auto">
        <div className="relative flex items-center justify-center sm:w-[800px] w-[90vw] overflow-hidden sm:h-[60vh] h-[40vh] lg:h-[70vh] mb-10">
          <Image
            src="/Projet_DesignSprint/img1_projet_DesignSprint.png"
            alt="Portrait 1"
            className="object-cover hover:scale-105 transition-transform duration-300"
            fill
          />
          <h2 className="absolute bottom-4 right-4 text-xl font-semibold mb-3 text-purple-400">Tableau de bord Figma</h2>
        </div>
      </div>
     <div className="flex flex-col  items-center justify-center mx-auto gap-8 mt-10">
        <div className="relative flex items-center justify-center w-[360px] h-[640px]  mb-10">
          <Image
            src="/Projet_DesignSprint/img2_projet_DesignSprint.png"
            alt="Portrait 2"
            className="hover:scale-105 transition-transform duration-300"
            width={360}
            height={640}
            priority
            style={{ objectFit: 'contain' }}
          />
          <h2 className="absolute bottom-4 right-4 text-xl font-semibold mb-3 text-purple-400">Page d&apos;appel d&apos;urgence</h2>
        </div>
      </div>
      
      {/* target="_blank" */}
      
      <a className="flex justify-center mx-auto gap-8" href="https://www.linkedin.com/posts/bergeronludovic_esiea-surusconnect-figma-activity-7337104300290043905-XW90?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGKmssBzsdCp9JSXLNSlJO85wM0SKPwXKQ">
        <MagicButton title="Poste LinkedIn" icon={<FaLocationArrow />} possition="rigth" /> 
      </a>
      <Link className="flex justify-center mx-auto gap-8" href="/">
        <MagicButton title="Retour à la page d'acceuil" icon={<FaLocationArrow />} possition="rigth" /> 
      </Link>
      <p className="md:text-base text-sm md:font-normal font-light text-center py-40">
        Copyright © 2025 Bergeron Ludovic
      </p>
    </div>
        
    
  )
}

export default Project3