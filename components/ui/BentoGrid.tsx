import { cn } from "@/lib/utils";
import { rgba } from "framer-motion";
import { MdGradient } from "react-icons/md";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import GlobeDemo  from "./GridGlobe";
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
  return (
    <div
      className={cn(
        " group/bento relative shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none  ",
        className,
      )}
      // style = color de fond des widget  
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(0, 0, 191, 1) 75%, rgba(106, 48, 207, 1) 100%)',
      }}
    >
      
    <div className ={`${id ===6}&& 'flex justify-center h-full`} >
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

        {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
        <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
          {description}
        </div> 

        <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
          {title}
        </div>
      
       {/* for the github 3d globe */}
       {id === 2 && <GlobeDemo />}
      </div>
    </div>
    <div className="transition duration-200 group-hover/bento:translate-x-2">
      <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
        {title}
      </div>
      <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
        {description}
      </div>
    </div>
  </div>
  );
};
