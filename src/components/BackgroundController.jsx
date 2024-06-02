// import React, {useState, useEffect, useContext} from 'react'
// import { Slider } from "@/components/ui/slider"
// import ColorPickerController from './ColorPickerController'
// import { UpdateStorageContext } from '@/context/UpdateStorageContext'

// const BackgroundController = () => {
//   const [rounded, setRounded] = useState(0)
//   const [padding, setPadding] = useState(0)
//   const [color, setColor] = useState('#000')

//   const storageValue = JSON.parse(localStorage.getItem('value'));
//   const {updateStorage, setUpdateStorage} = useContext(UpdateStorageContext)

//   useEffect(() => {
//     const updatedValue = {
//       ...storageValue,
//       bgRounded: rounded,
//       bgPadding: padding,
//       bgColor: color
//     }
//     setUpdateStorage(updatedValue)
//     console.log('updatestorage'.updateStorage)
//     console.log('updateValue',updatedValue)
//     localStorage.setItem('value', JSON.stringify(updatedValue))

//   }, [rounded, padding, color])

//   return (
//     <div>
//     <div className="py-2"> 
//     <label className="p-2 flex justify-between items-center">Rounded <span>{rounded} px</span></label>
//     <Slider defaultValue={[0]} max={512} step={1}
//     onValueChange={(event) => setRounded(event[0])}
//     />
//     </div> 

// <div className="py-2">
// <label className="p-2 flex justify-between items-center">Padding <span>{padding} px</span></label>
// <Slider defaultValue={[40]} max={512} step={1}
// onValueChange={(event) => setPadding(event[0])}
// />
// </div> 

// <div className="py-2">
// <label className="p-2 flex justify-between items-center">Color <span>{color} px</span></label>
// <ColorPickerController hideController={false} selectedColor={(color) => setColor(color)}/>
// </div> 

// </div>
//   )
// }

// export default BackgroundController

import React, { useState, useEffect, useContext } from 'react';
import { Slider } from "@/components/ui/slider";
import ColorPickerController from './ColorPickerController';
import { UpdateStorageContext } from '@/context/UpdateStorageContext';

const BackgroundController = () => {
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  const [rounded, setRounded] = useState(updateStorage.bgRounded || 0);
  const [padding, setPadding] = useState(updateStorage.bgPadding || 0);
  const [color, setColor] = useState(updateStorage.bgColor || '#000');

  const handleRoundedChange = (value) => {
    setRounded(value);
    setUpdateStorage(prevState => ({ ...prevState, bgRounded: value }));
  };

  const handlePaddingChange = (value) => {
    setPadding(value);
    setUpdateStorage(prevState => ({ ...prevState, bgPadding: value }));
  };

  const handleColorChange = (value) => {
    setColor(value);
    setUpdateStorage(prevState => ({ ...prevState, bgColor: value }));
  };

  useEffect(() => {
    localStorage.setItem('value', JSON.stringify(updateStorage));
  }, [updateStorage]);

  return (
    <div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Rounded <span>{rounded} px</span>
        </label>
        <Slider
          defaultValue={[rounded]}
          max={512}
          step={1}
          onValueChange={(event) => handleRoundedChange(event[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Padding <span>{padding} px</span>
        </label>
        <Slider
          defaultValue={[padding]}
          max={100}
          step={1}
          onValueChange={(event) => handlePaddingChange(event[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Color <span>{color}</span>
        </label>
        <ColorPickerController
          hideController={false}
          selectedColor={(color) => handleColorChange(color)}
        />
      </div>
    </div>
  );
};

export default BackgroundController;
