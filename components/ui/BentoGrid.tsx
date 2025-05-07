'use client'
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import GlobeDemo  from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from 'lottie-react';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from 'react-icons/io5';
import dynamic from "next/dynamic";// tester si mieux


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => { 
  
  return (
    <div
      className={cn(
        "relative overflow-hidden mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
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
        " group/bento overflow-hidden relative shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl transition duration-200 hover:shadow-xl  dark:shadow-none border-white/[0.1]   ",
        className,
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
            <img 
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover,object-center')}
            />
          )}
        </div>
        <div className = {`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
        {spareImg && ( 
          <img
              src={spareImg}
              alt={spareImg}
              className={ 'object-cover,object-center w-full h-full' }
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
          <div className ="absolut z-50 flex items-center justify-center text-white font-bold">
            
          </div>
          </BackgroundGradientAnimation>
        )}


        <div className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
            {title}
          </div>
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div> 

          
        
        
        {/* for the github 3d globe */}
        {id === 2 && <GlobeDemo />}

        {id === 3 && (
        <div className= "flex gap-1 lg:gap-5 w-fit absolute right-3 lg:-right-2">
            <div className = "flex flex-col gap-3 lg:gap-8">
              {['Python','c','Java'].map
              ((item) => (
                <span key={item} className="py-2 lg:py4 lg:px-3 px-3 texte-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e] "/>
            </div>
            <div className = "flex flex-col gap-3 lg:gap-8">
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132e] "/>

              {['Html','css','TypScript'].map
              ((item) => (
                <span key={item} className="py-2 lg:py4 lg:px-3 px-3 texte-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
        {id === 6 &&(
          <div className = "mt-5 relative">
            <div className = "absolute -bottom-5 right-0">
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
              title={copied ?'Email Copié' : 'Copier mon email'}
              icon={<IoCopyOutline />}
              possition="left"
              otherClasses ="!bg-[#161a31]"
              handleclick={handleCopy}
              />
          </div>
        )}  
        
         
        </div>
      </div>
    </div>
  );
};
