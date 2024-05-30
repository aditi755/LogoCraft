import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'

import { Button } from "@/components/ui/button"
import SideNav from './components/SideNav'

function App() {

  return (
    <>
     <Header />
     <div className="md:w-64 w-16 fixed ">
     <SideNav />
     </div>
    <div className="">
    
    </div>
    </>
  )
}

export default App


// export const iconList=
//     ['Accessibility',  'Activity', 'AirVent', 'Airplay',
//  'AlarmClockOff', 'AlarmClock',  'Album', 
//  'AlignCenterHorizontal',
//  'AlignCenterVertical', 'AlignCenter', 'AlignEndHorizontal', 'AlignEndVertical',
//  'AlignHorizontalDistributeCenter', 'AlignHorizontalDistributeEnd', 
//  'AlignHorizontalDistributeStart', 'AlignHorizontalJustifyCenter', 
//  'AlignHorizontalJustifyEnd', 'AlignHorizontalJustifyStart', 
//  'AlignHorizontalSpaceAround', 'AlignHorizontalSpaceBetween', 
//  'AlignJustify', 'AlignLeft', 'AlignRight', 'AlignStartHorizontal',
//  'AlignStartVertical', 'AlignVerticalDistributeCenter', 'AlignVerticalDistributeEnd', 
//  'AlignVerticalDistributeStart', 'AlignVerticalJustifyCenter', 
//  'AlignVerticalJustifyEnd', 'AlignVerticalJustifyStart', 
//  'AlignVerticalSpaceAround', 'AlignVerticalSpaceBetween',
//  'Ampersand', 'Ampersands', 'Anchor', 'Angry', 'Annoyed',
//  'Antenna', 'Aperture', 'AppWindow', 'Apple', 'ArchiveRestore',
//  'ArchiveX', 'Archive', 'AreaChart', 'Armchair', 'ArrowBigDownDash', 
//  'ArrowBigDown', 'ArrowBigLeftDash', 'ArrowBigLeft', 'ArrowBigRightDash',
//  'ArrowBigRight', 'ArrowBigUpDash', 'ArrowBigUp', 'ArrowDown01',
//  'ArrowDown10', 'ArrowDownAZ', , 'ArrowDownFromLine',
//   'ArrowDownLeft',
//  'ArrowDownNarrowWide',  'ArrowDownRightSquare',
//  'ArrowDownRight', 'ArrowDownToDot', 'ArrowDownToLine',
//  'ArrowDownUp', 'ArrowDownWideNarrow', 'ArrowDownZA', 'ArrowDown',
//  'ArrowLeftCircle', 'ArrowLeftFromLine', 'ArrowLeftRight', 'ArrowLeftSquare',
//  'ArrowLeftToLine', 'ArrowLeft', 'ArrowRightCircle', 'ArrowRightFromLine',
//  'ArrowRightLeft', 'ArrowRightSquare', 'ArrowRightToLine', 'ArrowRight', 'ArrowUp01',
//  'ArrowUp10', 'ArrowUpAZ', 'ArrowUpCircle', 'ArrowUpDown', 'ArrowUpFromDot',
//  'ArrowUpFromLine', 'ArrowUpLeftFromCircle', 'ArrowUpLeftSquare', 'ArrowUpLeft',
//  'ArrowUpNarrowWide', 'ArrowUpRight',
//  'ArrowUpSquare', 'ArrowUpToLine', 'ArrowUpWideNarrow', 'ArrowUpZA', 'ArrowUp',
//  'ArrowsUpFromLine', 'Asterisk', 'AtSign', 'Atom', 'Award', 'Axe', 'Axis3d']