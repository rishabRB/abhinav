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
        <a href="/contact" className='uppercase font-medium text-black px-3 py-2  rounded-md hover:text-indigo-400 transition delay-150 ease-out'>Contact us</a>
  </div>
  </nav>
  )
}

export default Navbar