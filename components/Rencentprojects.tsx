import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3Dpin'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image'
const Rencentprojects = () => {
  return (
    <div className ="py-20" id="projects">
        <h1 className="heading text-3xl md:text-5xl font-bold text-center">
            Petite selection de {' '}
            <span className="text-purple">mes projets recents</span>
        </h1>
            
        <div className = "flex flex-wrap items-center justify-center gap-x-24 gap-y-2 mt-10 p-4">
            {projects.map(({id,title,des,img,iconLists,link}) => (
                <div key={id} className= "sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                    <PinContainer title={title} href={link}>
                    <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[20vh] lg:h-[30vh] mb-10'>
                        <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                            <Image 
                                src="/bg.png" 
                                alt="bg-img" 
                                layout="fill" 
                                objectFit="cover" 
                                priority
                            />
                        </div>
                            <Image
                                src={img}
                                alt={title}
                                className="z-10 absolute bottom-0"
                                width={500} // ajustez selon vos besoins
                                height={300} // ajustez selon vos besoins
                                priority
                            />
                    </div>
                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                        {title}
                    </h1>
                    <p className="font-light lg:font-normal text-sm line-clamp-2">
                        {des}
                    </p>
                    <div className ="flex items-center justify-between mt-7 mb-3">
                        <div className ="flex items-center">
                            {iconLists.map((icon , index) =>(
                                <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                style= {{
                                transform : `translateX(-${5 *index *2}px )`
                                }}>
                                     <Image 
                                        src={icon} 
                                        alt={icon}
                                        width={32} // ajustez selon vos besoins
                                        height={32} // ajustez selon vos besoins
                                        className="p-2"
                                    />
                                
                                </div>
                            ))}
                        </div>
                        <div className ="flex justify-center items-center">
                            <p className= "flex lg:text-xl md:text-xs test-sm text-purple">
                                Inspecter le projet 
                            </p>
                            <FaLocationArrow className="ms-03"// add space 
                            color ="#CBACF9"/> 
                        </div>
                    </div>
                    </PinContainer>                
                </div> 
            ))}
        </div>
    </div>
  )
}

export default Rencentprojects