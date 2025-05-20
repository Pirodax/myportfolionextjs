import React from 'react'
import { MagicButtonFix } from './ui/MagicButtonFix'
import { FaLocationArrow } from 'react-icons/fa6'


export default function ContactButtonFix() {
  return (
    <a href="mailto:bergeron@et.esiea.fr">
          <MagicButtonFix
                    title="Contactez-moi"
                    icon={<FaLocationArrow/>}
                    possition='rigth'
                />
        </a>
    
  )
}




