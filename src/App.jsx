import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'

import { Button } from "@/components/ui/button"
import SideNav from './components/SideNav'
import IconController from './components/IconController'
import BackgroundController from './components/BackgroundController'
import LogoPreview from './components/LogoPreview'
import { UpdateStorageContext } from './context/UpdateStorageContext'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
const [updateStorage, setUpdateStorage] = useState({});
const [downloadIcon, setDownloadIcon] = useState()

  return (
    <UpdateStorageContext.Provider value={{updateStorage, setUpdateStorage}}>
    <>
     <Header DownloadIcon={setDownloadIcon}/>
     <div className="md:w-64 w-16 fixed ">
     <SideNav selectedIndex={(value) => setSelectedIndex(value)}/>
     </div>

     <div className="fixed md:ml-64 ml-20 grid grid-cols-1 md:grid-cols-6">

     <div className="md:col-span-2 border h-screen shadow-sm p-5 overflow-auto bg-red-100">
      {selectedIndex == 0 ? <IconController />: <BackgroundController />}
    </div> 

   <div className="md:col-span-3 bg-blue-100 ">
<LogoPreview downloadIcon={downloadIcon}/>

</div>  

{/* <div className="">
Ads
</div> */}

    </div>
    </>
    </UpdateStorageContext.Provider> 
  )
}

export default App

