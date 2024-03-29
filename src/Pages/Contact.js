import React from 'react'
import Navbar from '../Components/Navbar'
import { ArrowLeftIcon, EnvelopeIcon, HomeIcon } from '@heroicons/react/24/solid'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <>
       <Navbar />
       <section className='md:h-[85vh]'>
            <div className='flex flex-col'>
            <div className='px-12 pt-6 flex items-center'>
                {/* <HomeIcon className=' h-10 w-10' /> */}
                <a className='text-blue-600 flex' href='/'><ArrowLeftIcon className='h-6 w-6 mr-1' /> Home</a>
            </div>
            <div className='flex flex-col  md:flex-row items-center justify-between py-7 px-10'>
                <div className='h-auto w-[500px] m-1 space-y-2 flex flex-col items-center justify-center border-2 py-10 px-5'>
                     <img className="contactImage" src='https://media.istockphoto.com/id/1143500885/vector/man-portrait-with-beard-vector-illustration-of-male-character.jpg?s=612x612&w=0&k=20&c=v9pv64ASjUYTRscfrYXEeof-oI2IfTPwJPuxRWNeG74=' alt="" />
                     <h2 className='uppercase text-2xl'>Rishabb Bibhtuy </h2>
                     <a className='text-blue-500 flex items-center' href='mailto:bibhuty82@gmail.com'><EnvelopeIcon className='h-4 w-4 mr-3' /> bibhuty82@gmail.com</a>
                </div>

                <div className='h-auto w-[500px] m-1 space-y-2 flex flex-col items-center justify-center  border-2 py-10 px-5'>
                     <img className='contactImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRv5dEZTaidyHavbXn3ZKklLufAj_NBD_ng&usqp=CAU" alt="" />
                     <h2 className='uppercase text-2xl'>Abhishek Abhigynam </h2>
                     <a className='text-blue-500 flex items-center' href='mailto:purnenduroypr2002@gmail.com'><EnvelopeIcon className='h-4 w-4 mr-3' /> xyx@gmail.com</a>
                </div>

                <div className='h-auto w-[500px] m-1 space-y-2 flex flex-col items-center justify-center border-2  py-10 px-5'>
                <img className="contactImage" src='https://media.istockphoto.com/id/1143500885/vector/man-portrait-with-beard-vector-illustration-of-male-character.jpg?s=612x612&w=0&k=20&c=v9pv64ASjUYTRscfrYXEeof-oI2IfTPwJPuxRWNeG74=' alt="" />
                     <h2 className='uppercase text-2xl'>Aayush Raj </h2>
                     <a className='text-blue-500 flex items-center' href='mailto:rushalisarkar2000@gmail.com'><EnvelopeIcon className='h-4 w-4 mr-3' /> xyx@gmail.com</a>
                </div>

                <div className='h-auto w-[500px] m-1 space-y-2 flex flex-col items-center justify-center border-2  py-10 px-5'>
                <img className="contactImage" src='https://media.istockphoto.com/id/1143500885/vector/man-portrait-with-beard-vector-illustration-of-male-character.jpg?s=612x612&w=0&k=20&c=v9pv64ASjUYTRscfrYXEeof-oI2IfTPwJPuxRWNeG74=' alt="" />
                     <h2 className='uppercase text-2xl'>Animesh </h2>
                     <a className='text-blue-500 flex items-center' href='mailto:rushalisarkar2000@gmail.com'><EnvelopeIcon className='h-4 w-4 mr-3' /> ybs@gmail.com</a>
                </div>
            </div>
            </div>
       </section>
       <Footer />
    </>
  )
}

export default Contact