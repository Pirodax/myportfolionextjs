import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3Dpin'

const Rencentprojects = () => {
  return (
    <div className ="py-20 text-center">
        <h1 className="heading text-3xl md:text-5xl font-bold">
            Petite selection de {' '}
            <span className="text-purple">mes projets recents</span>
        </h1>
            
        <div className = "flex flex-wrap items-center justify-center gap-16 mt-10 p-4">
            {projects.map(({id,title,des,img,iconLists,link,}) => (
                <div key={id} className= "lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                    <PinContainer title={title} href={link}>
                    <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh]'>
                        <div className ="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                            <img src ="/bg.png" alt ="bg-img"/>
                        </div>
                        <img
                         src={img}
                         alt={title}
                         className="z-10 absolute bottom-0"/>
                    </div>
                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                        {title}
                    </h1>
                    <p className="font-light lg:font-normal text-sm line-clamp-2">
                        {des}
                    </p>
                    </PinContainer>                
                </div> //<----------------- // afficher le titre de chaque projet dans project.title projet
            ))}
        </div>
    </div>
  )
}

export default Rencentprojects