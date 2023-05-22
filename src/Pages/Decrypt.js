import React, { useEffect, useState } from "react";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Decrypt() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const [isLoading, setIsLoading] = useState(false)
    const [isEncrypted,setIsEncrypted] = useState(false)
  
   
   const handleClick=()=>{
    setIsLoading(true)
    setTimeout(() => {
      setIsEncrypted(true) 
    },1000);
   }

   
  return (
    <>
        <Navbar />
         <section id="encrypt"  className="text-gray-600 h-screen bg-white body-font overflow-hidden">
        <div className="container px-5 py-14 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font     text-gray-500 tracking-widest">
                Project Name
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Topic Heading
              </h1>
              <div className="flex mb-4">
                <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  Description
                </a>
              </div>
              <p className="leading-relaxed mb-4 overflow-y-auto h-80  scrollbar-thin scrollbar-thumb-indigo-500">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean.Fam locavore kickstarter distillery.
                Mixtape chillwave tumeric sriracha taximy chia microdosing tilde
                DIY. XOXO fam inxigo juiceramps cornhole raw denim forage
                brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub
                blue bottle austin listicle pour-over, neutra jean.Fam locavore
                kickstarter distillery. Mixtape chillwave tumeric sriracha
                taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps
                cornhole raw denim forage brooklyn. Everyday carry +1 seitan
                poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean.Fam locavore kickstarter distillery.
                Mixtape chillwave tumeric sriracha taximy chia microdosing tilde
                DIY. XOXO fam inxigo juiceramps cornhole raw denim forage
                brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub
                blue bottle austin listicle pour-over, neutra jean.Fam locavore
                kickstarter distillery. Mixtape chillwave tumeric sriracha
                taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps
                cornhole raw denim forage brooklyn. Everyday carry +1 seitan
                poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean.Fam locavore kickstarter distillery.
                Mixtape chillwave tumeric sriracha taximy chia microdosing tilde
                DIY. XOXO fam inxigo juiceramps cornhole raw denim forage
                brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub
                blue bottle austin listicle pour-over, neutra jean.
              </p>
              <form className="flex items-center">
                <div className="shrink-0">
                  <img
                    className="h-16 w-16 object-cover rounded-full"
                    src="https://media.istockphoto.com/id/1408718836/photo/robot-creating-artificial-intelligence-in-a-digital-brain-3d-rendering.jpg?b=1&s=170667a&w=0&k=20&c=3mteE_g6Dgn0Ha_JFFJd2tINssXALIjDS6BleIKoEyQ="
                    alt="Current profile photo"
                  />
                </div>
                <label className="block">
                  <span className="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    className="block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-violet-50 file:text-violet-700
                      hover:file:bg-violet-100 ml-5
                    "
                    onChange={handleChange} 
                  />
                </label>
                <button onClick={handleClick} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Encrypt
                </button>
              </form>
              <div className="text-center">
                <a href="#" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                  Click here to Decrypt your Image
                </a>
              </div>
            </div>
            { file ? (
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={file}
            /> ) : (<img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />)}
          </div>
        </div>
        </section>
        <Footer/>
    </>
  )
}
export default Decrypt