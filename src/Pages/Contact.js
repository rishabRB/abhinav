import React from 'react'
import Navbar from '../Components/Navbar'
import { ArrowLeftIcon, EnvelopeIcon, HomeIcon } from '@heroicons/react/24/solid'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <>
       <Navbar />
       <section className='md:h-[70vh]'>
            <div className='flex flex-col'>
            <div className='px-12 pt-6 flex items-center'>
                {/* <HomeIcon className=' h-10 w-10' /> */}
                <a className='text-blue-600 flex' href='/'><ArrowLeftIcon className='h-6 w-6 mr-1' /> Home</a>
            </div>
            <div className='flex flex-col  md:flex-row items-center justify-between py-7 px-10'>
                <div className='h-auto w-[500px] space-y-2 flex flex-col items-center justify-center border-2 py-10 px-5'>
                     <img className="contactImage" src='https://www.shutterstock.com/image-vector/happy-young-people-design-vector-260nw-440727109.jpg' alt="" />
                     <h2 className='uppercase text-2xl'>Abhinav Kumar </h2>
                     <a className='text-blue-500 flex items-center' href='mailto:abhinavkumar10122000@gmail.com'><EnvelopeIcon className='h-4 w-4 mr-3' /> abhinavkumar10122000@gmail.com</a>
                </div>

                <div className='h-auto w-[500px] space-y-2 flex flex-col items-center justify-center  border-2 py-10 px-5'>
                     <img className='contactImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRv5dEZTaidyHavbXn3ZKklLufAj_NBD_ng&usqp=CAU" alt="" />
                     <h2 className='uppercase text-2xl'>Purnendu roy </h2>
                     <a className='text-blue-500 flex items-center' href='mailto:purnenduroypr2002@gmail.com'><EnvelopeIcon className='h-4 w-4 mr-3' /> purnenduroypr2002@gmail.com</a>
                </div>

                <div className='h-auto w-[500px] space-y-2 flex flex-col items-center justify-center border-2  py-10 px-5'>
                     <img className='contactImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZqgUo6pAmyOxYkFlbSasU6BVbnJlIrdvH2jRQMHTDZPmG1Di8j9IXoFBIAu8xtk5uro&usqp=CAU" alt="" />
                     <h2 className='uppercase text-2xl'>Rushali sarkar </h2>
                     <a className='text-blue-500 flex items-center' href='mailto:rushalisarkar2000@gmail.co'><EnvelopeIcon className='h-4 w-4 mr-3' /> rushalisarkar2000@gmail.co</a>
                </div>
            </div>
            </div>
       </section>
       <Footer />
    </>
  )
}

export default Contact