'use client'
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import GlobeDemo  from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
// import Lottie from 'lottie-react';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from 'react-icons/io5';
import dynamic from "next/dynamic";// tester si mieux
import Image from 'next/image'; 
import { FaDownload } from "react-icons/fa6";
import { ModalPortal } from './ModalPortal';


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => { 
  
  return (
    <div
      className={cn( //gap-y-6 pour l'espacement entre les widgets
        "relative overflow-hidden mx-auto grid max-w-7xl grid-cols-1 gap-x-4 gap-y-4 " +
        "md:grid-cols-6 lg:grid-cols-6 md:auto-rows-[18rem] bg-border-white",
        className,
      )}
    >
      {children}
    </div>
  );
};
const handleDownloadCV = () => {
  // Créer un lien temporaire
  const link = document.createElement('a');
  link.href = '/CV_Ludovic_BERGERON.pdf'; // Assurez-vous que le PDF est dans le dossier public
  link.download = 'CV-Ludovic-BERGERON.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: string | number,
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;

}) => {
  const [copied , setCopied] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('bergeron@et.esiea.fr');

    setCopied(true);
  }
  const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false// tester si mieuxx
  });
  return (
    <div
      className={cn(
        " group/bento overflow-hidden relative shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl transition duration-200 hover:shadow-xl  dark:shadow-none bg-border-white border border-white/10   ",
        className,
        showCV && "overflow-visible"
      )}
      // style = color de fond des widget  
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(0, 0, 191, 1) 75%, rgba(106, 48, 207, 1) 100%)',
      }}
    >
      
      <div className ={`${id ===6 && 'flex justify-center'} h-full`} >
        <div className="w-full h-full absolute">
          {img && (   // image sur les widget
            <Image 
              src={img}
              alt={img}
              width={20}
              height={20 } 
                
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div className = {`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
        {spareImg && ( 
          <Image
              src={spareImg}
              alt={spareImg}
              width={20}
              height={20 } 
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        
        {id === 6 && (
          <BackgroundGradientAnimation>
          {/* <div className ="absolut z-50 flex items-center justify-center text-white font-bold">
          </div> */}
          </BackgroundGradientAnimation>
        )}


        <div className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            showCV
              ? ""                          // ← pas de transform si le modal est ouvert
              : "group-hover/bento:translate-x-2 transition duration-200"
          )}
        >
          <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
            {title}
          </div>
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div> 

          
        
        {id === 2 && (
          <div className="flex justify-center w-full h-full">
            <GlobeDemo />
          </div>
        )}

        {id === 3 && (
          <div className="flex flex-col items-center w-full">
            <h3 className="justify-end text-xl font-bold text-white mb-6">Technologies & Langages & Langues</h3>
            <div className="flex gap-6 lg:gap-10">
              {/* Première colonne - Langages Backend */}
              <div className="flex flex-col gap-3">
                {['TypeScript', 'React', 'Tailwind'].map((item) => (
                  <span 
                    key={item} 
                    className="py-2 px-4 text-sm lg:text-base rounded-lg text-center 
                            bg-[#10132E] hover:bg-[#1a1f47] transition-colors duration-300
                            border border-purple-500/20 hover:border-purple-500/40
                            shadow-lg hover:shadow-purple-500/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
              
              {/* Deuxième colonne - Technologies Frontend */}
              <div className="flex flex-col gap-3">
                
                  {['Python', 'Java', 'C'].map((item) => (
                  <span 
                    key={item} 
                    className="py-2 px-4 text-sm lg:text-base rounded-lg text-center 
                            bg-[#10132E] hover:bg-[#1a1f47] transition-colors duration-300
                            border border-blue-500/20 hover:border-blue-500/40
                            shadow-lg hover:shadow-blue-500/10"
                  >
                    {item}
                  </span>
                ))}
              </div>

               {/* Langues  */}
              <div className="flex flex-col gap-3">
                
                  {['Français', 'Anglais', 'Chinois'].map((item) => (
                    <span 
                      key={item} 
                      className="py-2 px-4 text-sm lg:text-base rounded-lg text-center 
                        bg-[#10132E] hover:bg-[#1a1f47] transition-colors duration-300
                        border border-pink-500/20 hover:border-pink-500/40
                        shadow-lg hover:shadow-purple-500/10"
                    >
                      {item}
                    </span>
                ))}
              </div>

            </div>
          </div>
        )}

        {id === 5 && (
        <div 
          className="w-full h-full cursor-pointer relative overflow-hidden group" 
          onClick={() => setShowCV(true)}
        >
          <div className="text-center text-2xl font-bold mb-4">Mon CV</div>
          <p className="text-center text-m text-neutral-300 mb-4">Cliquer pour inspecter</p>
          <div className="relative w-full overflow-hidden">
            <Image
              src="/CV-Preview.png"
              alt="CV Preview"
              width={595}
              height={800}
              className="mx-auto rounded-lg filter brightness-[0.7] blur-[1.5px] group-hover:blur-[0.5px] group-hover:brightness-[0.8] transition-all duration-3000 scale-110 transform -translate-y-10"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
          </div>
        </div>
       )}
        
        
      

        {/* Modal CV qui s'affiche par-dessus */}
        {showCV && (
          <ModalPortal>
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <div className="relative w-full h-full max-w-5xl mx-auto p-4 flex items-center justify-center">
                <div className="relative w-full bg-[#0A0A0A] rounded-[2.5rem] p-8 shadow-2xl">
                  <button
                    onClick={() => setShowCV(false)}
                    className="absolute -top-4 -right-4 z-[101] w-10 h-10 rounded-full bg-purple-400 text-white hover:bg-purple-400 transition-all duration-300 shadow-lg flex items-center justify-center group"
                  >
                    <span className="transform group-hover:rotate-90 transition-transform duration-300">
                    ✕
                    </span>
                  </button>

                  <div className="flex flex-col items-center gap-6 relative z-[99]">
                    <h2 className="text-2xl md:text-4xl font-bold text-neutral-200 font-sans mt-2">
                      Mon CV
                    </h2>
                    
                    <MagicButton 
                      title="Télécharger CV" 
                      icon={<FaDownload />}
                      possition="right"
                      handleclick={handleDownloadCV} // pour télécharrger le cv
                    />

                    <div className="scrollbar-hide max-h-[70vh] overflow-y-auto rounded-2xl">
                      <Image
                        src="/CV-Preview.png"
                        alt="CV officiel"
                        width={595}
                        height={842}
                        className="mx-auto rounded-2xl shadow-2xl"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalPortal>
        )}
    
        {id === 6 &&(
          <div className="flex flex-col items-center justify-center w-full mt-auto">
            <div className="relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie 
                  loop={copied}
                  autoplay={copied}
                  animationData={animationData}
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                  }}
                />
                </div>
                <MagicButton 
                  title={copied ? 'Email Copié' : 'Copier mon email'}
                  icon={<IoCopyOutline />}
                  possition="left"
                  otherClasses="!bg-[#161a31]"
                  handleclick={handleCopy}
                />
              </div>
            </div>
          )}
        </div>
         
      </div>
    </div>
    
  );
};
