"use client";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const words = `Yo c'est ludovic le meilleur dev du monde
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect className = "texte-center text-[40px] md:text-5xl lg:text-6xl justify-center" 
  duration={2} filter={false} words={words} />;
}
