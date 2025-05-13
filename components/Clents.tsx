import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'
// import { companies, testimonials } from '@/data'

const Clents = () => {
  return (
    <div className ="py-20" id="testimonials">
        <h1 className="heading text-3xl md:text-5xl font-bold text-center">
            Petits mots de {' '}
            <span className="text-purple">mes colaborateurs</span>
        </h1>
            
        <div className = "flex flex-col items-cente max-lg:mt-10">
           
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed= "slow"
            />
            {/* <div className= "flex flex-wrap itemps-center justify-center gap-4 md:gap-16 max-lg: mt-10">
                {companies.map(({id, img, name, nameImg}) => (
                    <div key={id} className="flex md:max-w-60 max-ww-32 gap-2">
                        <img src={img} 
                        alt={name} 
                        className="md:w-10 w-5" />
                        <img src={nameImg} 
                        alt={name} 
                        className="md:w-24 w-20" /> 
                    </div>
                ))}
            </div> */}
            </div>
        </div>
  )
}

export default Clents