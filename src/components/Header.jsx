import React from 'react'
// import reactLogo from '../components/assets/react.svg'
import { Button } from './ui/button'
import { Download } from "lucide-react"

const Header = ({DownloadIcon}) => {
  return (
    <div className="md:static- p-4 shadow-sm border flex justify-between items-between">   
    {/* navbar and sidebar fixing.. */}
        <img src="reactLogo"/>
        <Button className="flex gap-2 items-center"
        onClick={() => DownloadIcon(Date.now())}
        > <Download className="h-4 w-4"/> Downlaod</Button>
    </div>
  )
}

export default Header