import React, {useState, useEffect, useContext} from 'react'

import { UpdateStorageContext } from '@/context/UpdateStorageContext'

const LogoPreview = () => {
    const [storageValue, setStorageValue] = useState({});
    const {updateStorage, setUpdateStorage} = useContext(UpdateStorageContext)

    useEffect(() => {
        const storageData = JSON.parse(localStorage.getItem('value'))
        console.log(storageData);
        setStorageValue(storageData)
    }, [updateStorage])
    
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="md:h-[400px] md:w-[400px] bg-gray-200 outline-dotted outline-gray-300  ">
            <div className="h-full w-full" 
            
            style={{
                borderRadius: storageValue?.bgRounded,
                background: storageValue?.bgColor,
                padding: storageValue?.bgPadding  
                // Fixing...
            }}></div>
        </div>
    </div>
  )
}

export default LogoPreview