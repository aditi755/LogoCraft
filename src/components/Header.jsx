import React from 'react'
import Logo from '../assets/Logo.png'
import { Button } from './ui/button'
import { Download } from "lucide-react"

const Header = ({DownloadIcon}) => {
  return (
    <div className="md:static- p-4 shadow-sm border flex justify-between items-between">   
    {/* navbar and sidebar fixing.. */}
    <div className="flex flex-row gap-3 font-bold text-2xl text-red-700">
        <img src={Logo} alt="logo" height={10} width={40}/>
        <div>LogoCraft</div>
        </div>
        <Button className="flex gap-2 items-center"
        onClick={() => DownloadIcon(Date.now())}
        > <Download className="h-4 w-4"/> Downlaod</Button>
    </div>
  )
}

export default Header