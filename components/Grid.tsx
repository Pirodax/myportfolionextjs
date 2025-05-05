import React from 'react'
import { MdDescription } from 'react-icons/md'
import { BentoGridItem } from './ui/BentoGrid'
import { BentoGrid } from './ui/BentoGrid'
import { gridItems } from '@/data'
const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
         {gridItems.map((item , idx) => ( //gidItems est un tableau d'objets possition: data/index.ts
            <BentoGridItem
              id={item.id}
              key={`${item.id}-${idx}`}
              title={item.title}
              description={item.description}
            />
         ))}
      </BentoGrid>
    </section>
  )
}

export default Grid