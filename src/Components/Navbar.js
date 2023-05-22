import React from 'react'
import { LockClosedIcon, PhotoIcon, UserCircleIcon,} from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'


function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="sticky top-0 bg-white w-full flex items-center justify-between p-4  shadow-sm">
    <div onClick={()=> {navigate("/")}} className="flex items-center space-x-2 px-2">
      <LockClosedIcon className='h-6 w-6  text-black mb-1' />
    <div className="text-black uppercase font-bold tracking-[8px] font-Ubuntu text-xl">
        ImagEncrypt
    </div>
   </div>
   <div className='items-cente flex' >
    <UserCircleIcon className='h-10 w-10 text-indigo-500'/>
  </div>
  </nav>
  )
}

export default Navbar