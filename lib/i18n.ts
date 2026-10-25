import type { Language } from "@/contexts/LanguageContext";
import type { Bilingual } from "@/data";

/** Read a value that may be one string for both languages, or one per language. */
export function pick(value: string | Bilingual, language: Language): string {
  return typeof value === "string" ? value : value[language];
}
