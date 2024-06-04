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
        <label className="p-2 flex justify-between items-center font-bold">
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
        <label className="p-2 flex justify-between items-center font-bold">
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
        <label className="p-2 flex justify-between items-center font-bold">
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
