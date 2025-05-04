"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Yo c'est ludovic le meilleur dev du monde
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect className = "texte-center text-[40px] md:text-5xl lg:text-6xl" 
  duration={2} filter={false} words={words} />;
}
