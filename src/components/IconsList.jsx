import React,{useState, useEffect} from 'react'
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import axios from 'axios'

const BASE_URL = 'https://logoexpress.tubeguruji.com/getIcons.php';

const IconsList = ({selectedIcon}) => {

    const [openDialog, setOpenDialog] = useState(false)
    const storageValue = JSON.parse(localStorage.getItem('value'))
    const [icon, setIcon] = useState(storageValue?.icon || 'Smile')
   
    useEffect(() => {
      getPngIcons()
    }, [])

    const Icon = ({name, color, size}) => {
        const LucidIcon = icons[name];
       // console.log('lucideIcon', LucidIcon)
        if(!LucidIcon){
          return;
        }
        return <LucidIcon color={color} size={size} />;
    }

    const getPngIcons = () => {
        axios.get(BASE_URL).then((res) => {
            console.log(res.data)
        })
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
        <Tabs defaultValue="icon" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="icon">Icons</TabsTrigger>
    <TabsTrigger value="color-icon">Color Icons</TabsTrigger>
  </TabsList>
  <TabsContent value="icon">

  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
            {iconList.map((icon, index) => (
              <div className="border p-3 flex rounded-sm items-center justify-center cursor-pointer" 
              onClick={() => {selectedIcon(icon); setOpenDialog(false); setIcon(icon)}}
              key={index} >
                  <Icon name={icon} color={'#000'} size={20}/>
              </div>
            ))}
         </div>
  </TabsContent>
  <TabsContent value="color-icon">Color Icons List</TabsContent>
</Tabs>

        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  </>
  )
}

export default IconsList
