"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

const MyApproach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading text-3xl md:text-5xl font-bold text-center">
            Mon {' '}
            <span className="text-purple">Approche</span>
        </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card 
          title="Planifier et concevoir des solutions sur mesure"
          icon={<AceternityIcon order="Phrase 1" />}
          description="Identifier les besoins, élaborer des cahiers des charges et créer des prototypes pour garantir l’adéquation entre l’objectif visé et la solution déployée."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
        </Card>
        <Card 
          title="Analyser et optimiser les processus" 
          icon={<AceternityIcon order="Phrase 2" />}
          description="Collecter des données, repérer les gisements d’amélioration et mettre en place des indicateurs de performance pour accroître l’efficacité et réduire les coûts."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-purple-600"
             
            dotSize={1}
          />
        </Card>
        <Card 
          title="Collaborer et communiquer de façon proactive" 
          icon={<AceternityIcon order= "Phrase 3"/>}
          description="Travailler en synergie avec les équipes et les parties prenantes, assurer la transparence des informations et anticiper les obstacles pour fluidifier les projets."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
        </Card>
      </div>
    </section>
  );
}
const Card = ({
  title,
  icon,
  description,
  children
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setHovered(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setHovered(false);
    }, 5000);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 lg:h-[35rem] relative rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl">
          {title}
        </h2>
        <h2
          className="dark:text-white text-ml opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
          style={{ color: "#e4ecff" }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}: {order:string}) => {
  return (

   <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-white backdrop-blur-3xl text-2xl font-bold">
        {order}
        </span>
    </button>
   </div>
  );
};

export const Icon = ({
  className,
  ...rest
}: {
  className?: string;
  [key: string]: unknown;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export default MyApproach;

// function setDisplayed(arg0: boolean) {
//   throw new Error("Function not implemented.");
// }
