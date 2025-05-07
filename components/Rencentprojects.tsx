import { projects } from '@/data'
import React from 'react'

const Rencentprojects = () => {
  return (
    <div className ="py-20 text-center">
        <h1 className="heading text-3xl md:text-5xl font-bold">
            Petite selection de {' '}
            <span className="text-purple">mes projets recents</span>
        </h1>
            
        <div className = "flex flex-wrap items-center justify-center gap-16 mt-10 p-4">
            {projects.map((project) => (
                <div>
                    {project.title} 
                </div> // afficher le titre de chaque projet dans project.title projet
            ))}
        </div>
    </div>
  )
}

export default Rencentprojects