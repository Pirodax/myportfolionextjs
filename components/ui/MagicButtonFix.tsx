'use client'
import React from 'react'

export const MagicButtonFix = ({
  title, icon, possition, handleclick, otherClasses
}: {
  title: string; icon: React.ReactNode; possition: string; handleclick?: () => void; otherClasses?: string;
}) => {
  return (
    <div className="fixed bottom-6 left-4 z-50">
      <button 
        className="inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-50 " 
        onClick={handleclick}
      >
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
          {possition === 'left' && icon}
          {title}
          {possition === 'rigth' && icon}
        </span>
      </button>
    </div>
  )
}