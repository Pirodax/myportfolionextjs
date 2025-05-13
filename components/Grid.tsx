import React from 'react'
// import { MdDescription } from 'react-icons/md'
import { BentoGridItem } from './ui/BentoGrid'
import { BentoGrid } from './ui/BentoGrid'
import { gridItems } from '@/data'
const Grid = () => {
  return (
    <section id="about">
      <div className="min-h-screen flex items-center justify-center">

      <BentoGrid>
         {gridItems.map(({id, title , description, className , img , imgClassName, titleClassName, spareImg}) => ( //gidItems est un tableau d'objets possition: data/index.ts
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className} //size (widget) place and other
              img={img} //img
              imgClassName={imgClassName} //img size
              titleClassName={titleClassName} //text size
              spareImg={spareImg} //img
            />
         ))}
      </BentoGrid>
      </div>
    </section>
  )
}

export default Grid