import React from 'react'
import { PhotoIcon, UserCircleIcon,} from '@heroicons/react/24/solid'


function Navbar() {
  return (
    <nav className="sticky top-0 bg-white w-full flex items-center justify-between p-4  shadow-sm">
    <div onClick={()=> {}} className="flex items-center space-x-2 px-2">
      {/* <PhotoIcon className='h-8 w-8  text-indigo-500' /> */}
    <div className="text-black uppercase font-bold tracking-[8px] font-Ubuntu text-xl">
        ImgEncrypt
    </div>
   </div>
   <div className='items-cente flex' >
    <UserCircleIcon className='h-10 w-10 text-indigo-500'/>
  </div>
  </nav>
  )
}

export default Navbar