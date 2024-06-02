import React, {useState, useEffect, useContext} from 'react'
import {Smile} from 'lucide-react'
import { Slider } from "@/components/ui/slider"
import ColorPickerController from './ColorPickerController'
import { UpdateStorageContext } from '@/context/UpdateStorageContext'


const IconController = () => {
    const [size, setSize] = useState(200)
    const [rotate, setRotate] = useState(100)
    const [color, setColor] = useState('#fff')
    const storageValue = JSON.parse(localStorage.getItem('value')) 
    const {updateStorage, setUpdateStorage} = useContext(UpdateStorageContext)
    
    useEffect(() => {
       const updatedValue = {
        ...storageValue, 
        iconSize:size,
        iconRotate:rotate,
        iconColor:color,
        icon: 'Smile'
       }
       setUpdateStorage(updatedValue)
       localStorage.setItem('value', JSON.stringify(updatedValue))
    }, [size, rotate, color])

  return (
    <div>
        <div>
            <label>Icon</label>
            <div className="p-3 cursor-pointer bg-gray-200 rounded w-20 h-10 ml-3 flex items-center justify-center my-2"><Smile /></div>
        </div>


       <div className="py-2">
        <label className="p-2 flex justify-between items-center">Size <span>{size} px</span></label>
        <Slider defaultValue={[200]} max={512} step={1}
        onValueChange={(event) => setSize(event[0])}
        />
        </div> 

        <div className="py-2">
        <label className="p-2 flex justify-between items-center">Rotate<span>{rotate} degree</span></label>
        <Slider defaultValue={[200]} max={512} step={1}
        onValueChange={(event) => setRotate(event[0])}
        />
        </div>
        <div className="py-2">
        <label className="p-2 flex justify-between items-center">Color Picker</label>
      <ColorPickerController hideController={true}
      selectedColor={(color) => setColor(color)}/>
        </div>


    </div>
  )
}

export default IconController