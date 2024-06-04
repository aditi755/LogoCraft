// import React, {useState, useEffect, useContext} from 'react'
// import {Smile} from 'lucide-react'
// import { Slider } from "@/components/ui/slider"
// import ColorPickerController from './ColorPickerController'
// import { UpdateStorageContext } from '@/context/UpdateStorageContext'
// import IconsList from './IconsList'

// const IconController = () => {
  
//    const storageValue = JSON.parse(localStorage.getItem('value')) 
//    const {updateStorage, setUpdateStorage} = useContext(UpdateStorageContext)
//    const [size, setSize] = useState(updateStorage?.iconSize || 200);
//    const [rotate, setRotate] = useState(updateStorage?.iconRotate || 0);
//    const [color, setColor] = useState(updateStorage?.iconColor || '#fff');
//    const [icon, setIcon] = useState(updateStorage?.icon || 'Smile')

//    useEffect(() => {
//        const updatedValue = {
//         ...storageValue, 
//         iconSize:size,
//         iconRotate:rotate,
//         iconColor:color,
//         icon: icon
//        }
//        setUpdateStorage(updatedValue)
//        localStorage.setItem('value', JSON.stringify(updatedValue))
//     }, [size, rotate, color, icon, setUpdateStorage])

//   return (
//     <div>
//        <IconsList selectedIcon={(icon) => setIcon(icon)}/>


//        <div className="py-2">
//         <label className="p-2 flex justify-between items-center">Size <span>{size} px</span></label>
//         <Slider defaultValue={[200]} max={512} step={1}
//         onValueChange={(event) => setSize(event[0])}
//         />
//         </div> 

//         <div className="py-2">
//         <label className="p-2 flex justify-between items-center">Rotate<span>{rotate} °</span></label>
//         <Slider defaultValue={[200]} max={512} step={1}
//         onValueChange={(event) => setRotate(event[0])}
//         />
//         </div>

//         <div className="py-2">
//         <label className="p-2 flex justify-between items-center">Color Picker</label>
//       <ColorPickerController hideController={true}
//       selectedColor={(color) => setColor(color)}/>
//         </div>





//     </div>
//   )
// }

// export default IconController

import React, { useState, useEffect, useContext } from 'react';
import { Slider } from "@/components/ui/slider";
import ColorPickerController from './ColorPickerController';
import { UpdateStorageContext } from '@/context/UpdateStorageContext';
import IconsList from './IconsList';

const IconController = () => {
    const storageValue = JSON.parse(localStorage.getItem('value'));
    const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
    const [size, setSize] = useState(storageValue?.iconSize || 200);
    const [rotate, setRotate] = useState(storageValue?.iconRotate || 0);
    const [color, setColor] = useState(storageValue?.iconColor || '#fff');
    const [icon, setIcon] = useState(storageValue?.icon || 'Smile');

    useEffect(() => {
        const updatedValue = {
            ...storageValue,
            iconSize: size,
            iconRotate: rotate,
            iconColor: color,
            icon: icon
        };
        setUpdateStorage(updatedValue);
        localStorage.setItem('value', JSON.stringify(updatedValue));
    }, [size, rotate, color, icon, setUpdateStorage]);

    return (
        <div>
            <IconsList selectedIcon={(icon) => setIcon(icon)} />

            <div className="py-2">
                <label className="p-2 flex justify-between items-center font-bold">Size <span>{size} px</span></label>
                <Slider defaultValue={[size]} max={512} step={1}
                    onValueChange={(event) => setSize(event[0])}
                />
            </div>

            <div className="py-2">
                <label className="p-2 flex justify-between items-center font-bold">Rotate <span>{rotate} °</span></label>
                <Slider defaultValue={[rotate]} max={360} step={1}
                    onValueChange={(event) => setRotate(event[0])}
                />
            </div>

            <div className="py-2">
                <label className="p-2 flex justify-between items-center font-bold">Color Picker</label>
                <ColorPickerController hideController={true}
                    selectedColor={(color) => setColor(color)} />
            </div>
        </div>
    );
};

export default IconController;
