import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] py-20 md:mb-5  "id="contact">
      {/* background grid
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div> */}
      <div className="w-full pb-10 flex flex-col items-center">
        <h1 className="heading text-3xl md:text-5xl font-bold text-center">
          Pas encore convaincu ?<br /> Je serais ravi de vous démontrer 
          <span className="text-purple">  mes compétences </span> lors d'un entretien.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center text-xl">
          « Prenons rendez-vous à votre convenance pour échanger sur vos besoins et explorer ensemble les opportunités de collaboration. »
        </p>
        <a href="mailto:bergeron@et.esiea.fr">
          <MagicButton
                    title="Contactez-moi"
                    icon={<FaLocationArrow/>}
                    possition='rigth'
                />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Bergeron Ludovic
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-15 h-15 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.link} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                <button className="w-full h-full flex items-center justify-center">
                  <img 
                    src={profile.img} 
                    alt={profile.id.toString()} 
                    className="w-2/3 h-2/3 object-contain"
                  />
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer