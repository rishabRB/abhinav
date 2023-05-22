import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ArrowDownTrayIcon, PhotoIcon } from "@heroicons/react/24/solid";

function App() {
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
    <div>
      {/* navbar */}
      <Navbar />
      
      {/* section-1 */}
      <section className='h-[85vh] bg-no-repeat bg-fixed bg-cover items-center bg-[url("https://images.pexels.com/photos/772429/pexels-photo-772429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] bg-image'>
        <div className="flex w-full h-full justify-center items-center  bg-opacity-10">
            <div className="p-10 space-y-4">
                 <h1 className=" text-black text-[1.5rem] mt-[10rem] font-extrabold font-Ubuntu ">Want your images to be safe ? </h1>
                  <div className="flex justify-center items-center">
                      <a href="#encrypt"  className="bg-gray-100 font-Ubuntu cursor-pointer text-indigo-500 font-bold hover:shadow-2xl transition transtion-delay px-10 py-3 rounded-3xl">
                        Of-course
                      </a>
                  </div>
            </div>
        </div>
      </section>

      
      
      
      {/* section - 2 */}


       <section id="encrypt"  className="text-gray-600 h-screen bg-white body-font overflow-hidden">
        {
        !isLoading ? 
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
        :
        //loading 
        <div className="h-full flex items-center justify-center">
           {
           isEncrypted ? 
            <div className="w-[60rem] h-[30rem] border-2 flex rounded-md justify-center items-center bg-cover bg-no-repeat bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR9pb4Qh09hN0mxzmEU5OhSglvtl2sKhv8YreLJ9tAfEE-GAbdVYoPxagbLxo2Z_O-XAA&usqp=CAU')]">
                <div className="flex flex-col items-center bg-neutral-100 bg-opacity-10 justify-center space-y-5">
                    <h1 className="text-2xl font-Ubuntu font-bold text-white">
                        Here is your encrypted image
                    </h1>
                    <button className="px-6 py-2 font-Ubuntu flex items-center bg-indigo-500 text-white hover:shadow-xl cursor-pointer rounded-full"> <ArrowDownTrayIcon  className="h-5 w-5 mr-3"/> Download</button>
                </div>
            </div>
            :
            <div>
            <PhotoIcon className="h-10 w-10 text-indigo-500 animate-bounce" />
            </div>
            }
        </div>
        }
      </section>
    
    


      {/* section-3 */}
      
      <section className='min-h-[80vh] h-auto p-5 flex justify-center bg-no-repeat bg-fixed bg-cover items-center bg-[url("https://images.pexels.com/photos/772429/pexels-photo-772429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] bg-image'>
            <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5 h-full items-center justify-around">

                  <div className="card  flex flex-col space-y-2 border" >
                      <h1 className="font-Ubuntu text-black uppercase font-extrabold"> Upload your image </h1>
                      <p className="text-sm text-gray-500" > Welcome to our image encryption platform! Get started by securely uploading your image to protect its privacy and ensure its confidentiality. Our user-friendly interface allows you to easily select and upload your image file from your device or cloud storage. </p>
                  </div>

                  <div className="card flex flex-col space-y-5  border" >
                  <h1 className="font-Ubuntu text-black font-medium"><span className="bg-indigo-500 text-white px-5 py-3 rounded-lg">Encrypt</span></h1>
                  <p className="text- text-gray-500" > Our advanced encryption algorithms will work their magic to transform your image into an encrypted format that is virtually impossible to decipher without the correct decryption key. Your image's content, details, and visual information will be safeguarded, ensuring that only authorized individuals can access its original form. </p>
                  </div>

                  <div className="card flex flex-col space-y-5 border" >
                  <h1 className="font-Ubuntu text-black font-medium"><span className="border border-indigo-500 text-indigo-500 px-5 py-3 rounded-lg">Decrypt</span></h1>
                  <p className="text- text-gray-500" > Unlock the encrypted images and restore them to their original form through our seamless decryption process. If you have encrypted images that require decryption, you've come to the right place.
Our decryption feature allows you to safely retrieve your encrypted images.</p>
                  </div>
             </div>
      </section>

      {/* section-4 */}
      <section className="h-[80vh bg-gray-100 py-10 px-8 rounded-lg">
        <h2 class="text-2xl tracking-[1px] font-Ubuntu mb-4 text-indigo-500">Supported File Formats</h2>
        <p class="text-lg text-gray-500 mb-6">Our image encryption service supports a wide range of file formats to accommodate your diverse needs. Whether you have personal photographs, professional graphics, or important documents, we have you covered. The following file formats are supported:</p>
            <div className="flex items-center justify-center">
                <img src="https://qph.cf2.quoracdn.net/main-qimg-87b6b3c9d0c8fd2d8aed16421b8024e6" alt=""  className="format-img"/>
                <img src="https://cdn-icons-png.flaticon.com/512/337/337948.png" alt=""  className="format-img"/>
                <img src="https://blog.idrsolutions.com/app/uploads/2017/03/BMP.png" alt=""  className="format-img"/>
                <img src="https://blog.idrsolutions.com/app/uploads/2015/04/TIFF.png" alt=""  className="format-img"/>
            </div>
      </section>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
