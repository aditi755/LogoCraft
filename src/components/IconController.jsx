import React, {useState} from 'react'
import {Smile} from 'lucide-react'
import { Slider } from "@/components/ui/slider"

const IconController = () => {
    const [size, setSize] = useState(200)
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
        <label className="p-2 flex justify-between items-center">Rotate<span>{size} degree</span></label>
        <Slider defaultValue={[200]} max={512} step={1}
        onValueChange={(event) => setSize(event[0])}
        />
        </div>

    </div>
  )
}

export default IconController