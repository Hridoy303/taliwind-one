import React from 'react'
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
  
  <header className='py-4 bg-black'>
      <div className='max-w-container mx-auto'>
     
     <div className="lg:flex">

     <div className=" w-full  sm:w-full lg:w-1/4">
       
       <div className="flex items-center lg:justify-start justify-center relative after:absolute after:content[''] after:top- [0px] after:right-[70px] after:h-[24px] after:w-[2px]
        lg:after:bg-[#5C6A92] after:bg-none ">
           <CiMail className='text-white mr-2'/>
         <p className='font-pops text-white text-xs 0.75rem'>mail@yourcompany.com</p>
   </div>

     </div>
     <div className=" w-full sm:w-full lg:w-1/4">
      
       <div className="flex items-center lg:justify-start justify-center lg:py-0 py-2 ">
       <FiPhone className='text-white mr-2'/>
       <p className='font-pops text-white text-xs 0.75rem'>+896 120 5889 (Toll free)</p>
       </div>
     </div>
     <div className=" w-full sm:w-full lg:w-1/2">
    
    <div className="flex  items-center lg:justify-end justify-center gap-x-6">
        <FaFacebookF className='text-white '/>
         <FaTwitter className='text-white'/>
         <FaLinkedinIn className='text-white' />
         <FaInstagram  className='text-white'/>
    </div>

     </div>

     </div>
        
        
    </div>
  </header>
  )
}

export default Header
