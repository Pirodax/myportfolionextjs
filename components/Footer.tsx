import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id="contact">
        <div>
            <img src="/footer-grid.svg" 
            alt="grid" 
            className='w-full h-full opacity-50' 
            />
        </div>
        <div className=" flex flex-col items-center text-center" >
            <h1 className="heading text-4xl lg:max-w-[45vw]">
                Pas encore convaincu ?<br /> Je serais ravi de vous démontrer 
                <span className='text-purple'>  mes compétences </span> lors d'un entretien. 
            </h1>
            <p className='text-white-200 md:mt-10 my-5 texte-center'>
            « Prenons rendez-vous à votre convenance pour échanger sur vos besoins et explorer ensemble les opportunités de collaboration. »
            </p>
            <a href="mailto:bergeron@et.esiea.fr">
                <MagicButton
                    title="Contactez-moi"
                    icon={<FaLocationArrow/>}
                    possition='rigth'
                />
            </a>
        </div >
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:texte-base text-sm md:font-normal font-ligth">Copyright © 2025 Bergeron Ludovic </p>
        </div>
        <div className="flex justify-center items-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
                <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                    <img 
                    src={profile.img} alt={profile.id.toString()} width={20} height={20}/>
                </div>
        
            ))}
        </div>
    </footer>
  )
}

export default Footer