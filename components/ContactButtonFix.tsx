'use client'
import { MagicButtonFix } from './ui/MagicButtonFix'
import { FaLocationArrow } from 'react-icons/fa6'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/data/translations'

export default function ContactButtonFix() {
  const { language } = useLanguage();
  const label = translations[language].contactBtn;

  return (
    <a href="mailto:bergeron@et.esiea.fr">
      <MagicButtonFix title={label} icon={<FaLocationArrow />} possition='rigth' />
    </a>
  )
}
