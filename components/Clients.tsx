'use client'
import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/data/translations'

const Clients = () => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading text-3xl md:text-5xl font-bold text-center">
        {t.heading}{' '}
        <span className="text-purple">{t.headingSpan}</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
      </div>
    </div>
  )
}

export default Clients
