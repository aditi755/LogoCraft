import React,{useState} from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Smile } from 'lucide-react'
import { iconList } from '@/constants/icons'
import { icons } from 'lucide-react'

const IconsList = ({selectedIcon}) => {

    const [openDialog, setOpenDialog] = useState(false)
    const storageValue = JSON.parse(localStorage.getItem('value'))
    const [icon, setIcon] = useState(storageValue?.icon || 'Smile')
   
    const Icon = ({name, color, size}) => {
        const LucidIcon = icons[name];
       // console.log('lucideIcon', LucidIcon)
        if(!LucidIcon){
          return;
        }
        return <LucidIcon color={color} size={size} />;
    }

  return (
    <>
    <div>
    <label>Icon</label>
    <div onClick={() => setOpenDialog(true)} 
    
    className="p-3 cursor-pointer bg-gray-200 rounded w-20 h-10 ml-3 flex items-center justify-center my-2">
    <Icon name={icon} color={'#000'} size={20} />
    </div>
</div>

    <Dialog open ={openDialog} onOpenChange={setOpenDialog} > 
    {/* onOpenChange provided by dialog shadcn to handle closing dialog */}
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pick your favourite Icon</DialogTitle>
        <DialogDescription>
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
            {iconList.map((icon, index) => (
              <div className="border p-3 flex rounded-sm items-center justify-center cursor-pointer" 
              onClick={() => {selectedIcon(icon); setOpenDialog(false); setIcon(icon)}}
              key={index} >
                  <Icon name={icon} color={'#000'} size={20}/>
              </div>
            ))}
         </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  </>
  )
}

export default IconsList
