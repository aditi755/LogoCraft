import { PencilRuler, Image, Shield } from 'lucide-react'
import React from 'react'

const SideNav = () => {
    const menuList = [{
        id: 1,
        name: 'Icon',
        icon: PencilRuler
    },
   {
    id: 2,
    name: 'Background',
    icon: Image
   },
   {
    id: 3,
    name: 'Upgrade',
    icon: Shield
   }
]
  return (
    <div>
    <div>
        {menuList.map((menu, index) => {
            <h2 key={index}> {menu.name}</h2>
        })}
        </div>
        </div>
  )
}

export default SideNav