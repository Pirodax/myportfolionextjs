'use client'
import React from 'react'
import { BentoGridItem, BentoGrid } from './ui/BentoGrid'
import { gridItems } from '@/data'
import { useLanguage } from '@/contexts/LanguageContext'

const Grid = () => {
  const { language } = useLanguage();

  return (
    <section id="about">
      <div className="min-h-screen flex items-center justify-center">
        <BentoGrid>
          {gridItems.map(({ id, title, title_en, description, description_en, className, img, imgClassName, titleClassName, spareImg }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={language === 'en' && title_en ? title_en : title}
              description={language === 'en' && description_en ? description_en : description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}

export default Grid
