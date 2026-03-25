"use client";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

export function TextGenerateEffectDemo() {
  const { language } = useLanguage();
  const words = translations[language].hero.greeting;
  return (
    <TextGenerateEffect
      className="texte-center text-[40px] md:text-5xl lg:text-6xl justify-center"
      duration={2}
      filter={false}
      words={words}
    />
  );
}
