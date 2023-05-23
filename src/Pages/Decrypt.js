import React, { useEffect, useState } from "react";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useCookies } from "react-cookie";

function Decrypt() {
    const [file, setFile] = useState();
    // function handleChange(e) {
    //     console.log(e.target.files);
    //     setFile(URL.createObjectURL(e.target.files[0]));
    // }

    const [cookies, setCookie] = useCookies(['name']);
    // const [decImg,setDecImg] = useState(null)

    const [isLoading, setIsLoading] = useState(false)
    const [isEncrypted,setIsEncrypted] = useState(false)
  
   
   const handleClick=(e)=>{
      e.preventDefault()
      console.log(cookies.path)
   }


  return (
    <>
        <Navbar />
         <section id="encrypt"  className="text-gray-600 h-screen bg-white body-font overflow-hidden">
        <div className="container px-5 py-14 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 className="text-gray-900 text-2xl title-font font-Ubuntu font-medium mb-4">
                 Keep your images safe like never before
              </h1>
              <div className="flex mb-4">
                <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  Description
                </a>
              </div>
              <p className="leading-relaxed mb-4 overflow-y-auto h-80  scrollbar-none">
              Welcome to our image encryption website! Our platform provides a secure and user-friendly way to encrypt your images to protect them from unauthorized access.
              To get started, simply upload your image and select the encryption button We will run our algorithm and encrypt your image.
              After your image has been encrypted, we will provide you with a download button that you can use to download your encrypted image. You can then share the encrypted image with others, knowing that it is protected from unauthorized access.
              We take your security seriously and use the latest encryption technologies to ensure that your images are safe. However, it is important to note that while image encryption can provide a high level of security, it is not foolproof. We recommend that you take additional precautions to protect your images as well.
              Thank you for choosing our image encryption website. We are committed to providing you with a secure and reliable service.
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
                    // onChange={handleChange} 
                  />
                </label>
                <button onClick={handleClick} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Decrypt
                </button>
              </form>
              <div className="text-center">
                <a href="/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                   Back to home
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
              src="https://www.ultimatesource.toys/wp-content/uploads/2013/11/dummy-image-square-1.jpg"
            />)}
          </div>
        </div>
        </section>
        <Footer/>
    </>
  )
}
export default Decrypt