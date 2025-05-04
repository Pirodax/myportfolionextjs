import React from 'react'
import { MdDescription } from 'react-icons/md'
import { BentoGridItem } from './ui/BentoGrid'
import { BentoGrid } from './ui/BentoGrid'
const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
         {[{ title: 'Title', description: 'desc1', id: "1" }].map((item) => (
            <BentoGridItem
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
            />
         ))}
      </BentoGrid>
    </section>
  )
}

export default Grid