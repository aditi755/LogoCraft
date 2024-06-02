import React, {useState, useEffect, useContext} from 'react'
import { UpdateStorageContext } from '@/context/UpdateStorageContext'
import { icons } from 'lucide-react'
const LogoPreview = () => {
    const [storageValue, setStorageValue] = useState({});
    const {updateStorage, setUpdateStorage} = useContext(UpdateStorageContext)

    useEffect(() => {
        const storageData = JSON.parse(localStorage.getItem('value'))
        setStorageValue(storageData)
        console.log("updateValue", storageValue)
    }, [updateStorage])

    const Icon = ({name, color, size, rotate}) => {
        const LucidIcon = icons[name];
        console.log('lucideIcon', LucidIcon)
        if(!LucidIcon){
          return;
        }
        return <LucidIcon color={color} size={size} style={{
            transform: `rotate(${rotate}deg)`
        }}/>;
    }
    
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="md:h-[400px] md:w-[400px] bg-gray-200 outline-dotted outline-gray-300  "  style={{
            padding:storageValue?.bgPadding
        }}>
            <div className="h-full w-full flex items-center justify-center" 
            
            style={{
                borderRadius: storageValue?.bgRounded,
                background: storageValue?.bgColor,
            }}>
                <Icon name={storageValue?.icon} 
                color = {storageValue?.iconColor}
                size={storageValue?.iconSize}
                rotate={storageValue?.iconRotate}
                />
            </div>
        </div>
    </div>
  )
}

export default LogoPreview