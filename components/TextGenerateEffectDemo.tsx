"use client";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const words = `Bonjour moi c'est Ludovic et voici mon Portfolio`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect className = "texte-center text-[40px] md:text-5xl lg:text-6xl justify-center" 
  duration={2} filter={false} words={words} />;
}
