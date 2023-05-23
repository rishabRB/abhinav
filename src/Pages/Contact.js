import React from 'react'
import Navbar from '../Components/Navbar'

function Contact() {
  return (
    <>
       <Navbar />
       <section className='h-screen'>
            <div className='flex flex-col space-y-5 md:flex-row items-center justify-between p-10'>
                <div className='h-auto w-[500px] space-y-2 flex flex-col items-center justify-center border-2 py-10 px-5'>
                     <img className="contactImage" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nmacc-2023-0331-Salman_Khan.jpg/800px-Nmacc-2023-0331-Salman_Khan.jpg' alt="" />
                     <h2 className='uppercase text-2xl'>Abhinav Kumar </h2>
                     <a className='text-blue-500' href='mailto:abhinav@gmail.com'>abhinav@gmail.com</a>
                </div>

                <div className='h-auto w-[500px] space-y-2 flex flex-col items-center justify-center  border-2 py-10 px-5'>
                     <img className='contactImage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nmacc-2023-0331-Salman_Khan.jpg/800px-Nmacc-2023-0331-Salman_Khan.jpg" alt="" />
                     <h2 className='uppercase text-2xl'>Purnendu roy </h2>
                     <a className='text-blue-500' href='mailto:abhinav@gmail.com'>abhinav@gmail.com</a>
                </div>

                <div className='h-auto w-[500px] space-y-2 flex flex-col items-center justify-center border-2  py-10 px-5'>
                     <img className='contactImage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nmacc-2023-0331-Salman_Khan.jpg/800px-Nmacc-2023-0331-Salman_Khan.jpg" alt="" />
                     <h2 className='uppercase text-2xl'>Rushali sarkar </h2>
                     <a className='text-blue-500' href='mailto:abhinav@gmail.com'>abhinav@gmail.com</a>
                </div>
            </div>
       </section>
    </>
  )
}

export default Contact