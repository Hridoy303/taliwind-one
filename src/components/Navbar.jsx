import React, { useState } from 'react'
import petroil from'./../assets/petroil.png'
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  let [show, setShow] = useState(false)
  let hridoy = () =>{
    setShow(!show)
  }
  return (
    
   
   <nav className='bg-[red] py-5'>
    <div className="max-w-container mx-auto  ">
       
       <div className=" flex justify-between px-[12px] lg:px-0 ">
       <div className="">
            <img src={petroil} alt="petroil" />
        </div>
        <div className="">
            <ul className={`lg:flex  text-center gap-x-12 mt-2 absolute  lg:static lg:-z-10 z-50 ${show == true ? "top-[173px] left-0  bg-[gray] py-6 w-full duration-700  " 
            : "top-[-173px] left-0   bg-[]   w-full duration-700  "}`}>
            <li><a className='text-[white] font-pops text-[16px] font-semibold hover:text-[green]  duration-300  ' href="#">Home</a></li> 
                   <li className=' lg:py-0 pt-1'><a className='text-[#ffffff] font-pops text-[16px] font-semibold hover:text-[green]   ' href="#">About</a></li>
                  <li className=' lg:py-0 pt-1'><a className='text-[white] font-pops text-[16px] font-semibold hover:text-[green]  duration-300' href="#">Services</a></li>
                  <li className=' lg:py-0 pt-1'><a className='text-[white] font-pops text-[16px] font-semibold hover:text-[green]  duration-300' href="#">Gallery</a></li>
                  <li className=' lg:py-0 pt-1'><a className='text-[white] font-pops text-[16px] font-semibold hover:text-[green]  duration-300' href="#">Blog</a></li>
                  <li className=' lg:py-0 pt-1'><a className='text-[white] font-pops text-[16px] font-semibold hover:text-[black]   border-[#ffffffc5]  lg:border-2  lg:py-4 px-6  rounded-[10px] hover:bg-yellow-700  duration-300  lg:inline inline-block ' href="#">CONTACT</a></li>
            </ul>
        </div>
        <div className=" lg:hidden text-[white]  text-[24px]  border-2 p-2" onClick={hridoy}>
          {show == true ? <RxCross1 /> :<FaBars /> }
      
        </div>
       </div>
    </div>
   </nav>
  )
}

export default Navbar
