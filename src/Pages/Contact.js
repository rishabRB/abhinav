import React from 'react'
import Navbar from '../Components/Navbar'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <>
       <Navbar />
       <section className='md:h-[70vh]'>
            <div className='flex flex-col space-y-5 md:flex-row items-center justify-between p-10'>
                <div className='h-auto w-[500px] space-y-2 flex flex-col items-center justify-center border-2 py-10 px-5'>
                     <img className="contactImage" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nmacc-2023-0331-Salman_Khan.jpg/800px-Nmacc-2023-0331-Salman_Khan.jpg' alt="" />
                     <h2 className='uppercase text-2xl'>Abhinav Kumar </h2>
                     <a className='text-blue-500 flex items-center' href='mailto:abhinavkumar10122000@gmail.com'><EnvelopeIcon className='h-4 w-4 mr-3' /> abhinavkumar10122000@gmail.com</a>
                </div>

                <div className='h-auto w-[500px] space-y-2 flex flex-col items-center justify-center  border-2 py-10 px-5'>
                     <img className='contactImage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nmacc-2023-0331-Salman_Khan.jpg/800px-Nmacc-2023-0331-Salman_Khan.jpg" alt="" />
                     <h2 className='uppercase text-2xl'>Purnendu roy </h2>
                     <a className='text-blue-500 flex items-center' href='mailto:purnenduroypr2002@gmail.com'><EnvelopeIcon className='h-4 w-4 mr-3' /> purnenduroypr2002@gmail.com</a>
                </div>

                <div className='h-auto w-[500px] space-y-2 flex flex-col items-center justify-center border-2  py-10 px-5'>
                     <img className='contactImage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nmacc-2023-0331-Salman_Khan.jpg/800px-Nmacc-2023-0331-Salman_Khan.jpg" alt="" />
                     <h2 className='uppercase text-2xl'>Rushali sarkar </h2>
                     <a className='text-blue-500 flex items-center' href='mailto:rushalisarkar2000@gmail.co'><EnvelopeIcon className='h-4 w-4 mr-3' /> rushalisarkar2000@gmail.co</a>
                </div>
            </div>
       </section>
       <Footer />
    </>
  )
}

export default Contact