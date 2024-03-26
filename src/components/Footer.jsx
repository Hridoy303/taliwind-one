import React from 'react'
import fot from'../assets/fot.png'
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdOutlineAddIcCall } from "react-icons/md";
import { FaMap } from "react-icons/fa6";
import face from '../assets/face.png'
import insta from '../assets/insta.png'
import lin from '../assets/lin.png'
import twi from '../assets/twi.png'
import cartone from'../assets/cartone.png'
import carttwo from'../assets/carttwo.png'


const Footer = () => {
  return (
    <div>
      <section className='bg-[#1F1F1F] py-[149px]'>
        <div className="max-w-container mx-auto">
            <div className="lg:flex flex-wrap ">
                <div className="  lg:w-1/3 w-full ">
                    <img src={fot} alt="" />
                   
                   <div className="flex items-center mt-[33px]">
                  
                  
                     <h5 className='text-[white] '>< MdOutlineAttachEmail/> </h5>
                     <h2 className=' ml-[5px] font-pops font-normal text-[14px] text-[#ffffffa4]'>mail@yourcompany.com</h2>
                   </div>
                   <div className="flex items-center mt-[15px]">
                    <h4 className='text-[#fff]'> <MdOutlineAddIcCall /> </h4>
                    <h3 className='ml-[5px] font-pops font-normal text-[14px] text-[#ffffffa4]'>+896 120 5889 (Toll free)</h3>
                   </div>
                   <div className="flex items-center mt-[15px]">
                    <h4 className='text-[#ffffffaf]'><FaMap/></h4>
                    <h5 className='ml-[5px] font-pops font-normal text-[14px] text-[#ffffffa4]'>101 Baker Street, New York, USA, 12345</h5>
                   </div>
                   <div className="flex mt-[34px]">
                    <img src={face} alt="" />
                    <img src={lin}  alt="" className='ml-[12px]' />
                    <img src={insta} alt="" className='ml-[12px]' />
                    <img src={twi} alt="" className='ml-[12px]' />
                   </div>
                </div>
                <div className="lg:w-1/5 w-1/3 ">
                    <h2 className=' font-pops font-semibold text-[16px] text-[#fff] mt-[35px]'>Company</h2>
                    <h3 className='mt-[21px] font-pops font-normal text-[14px] text-[#ffffffa4]'>Home</h3>
                    <h4 className='mt-[15px] font-pops font-normal text-[14px] text-[#ffffffa4]'>About</h4>
                    <h5 className='mt-[15px] font-pops font-normal text-[14px] text-[#ffffffa4]'>Services</h5>
                    <h6 className='mt-[15px] font-pops font-normal text-[14px] text-[#ffffffa4]'>Gallery</h6>
                </div>
                <div className="lg:w-1/5 w-1/3 ">
                <h2 className='font-pops font-semibold text-[16px] text-[#fff] mt-[35px]'>Others</h2>
                    <h3 className='mt-[21px] font-pops font-normal text-[14px] text-[#ffffffa4]'>Blog</h3>
                    <h4 className='mt-[15px] font-pops font-normal text-[14px] text-[#ffffffa4]'>Contact</h4>
                    <h5 className='mt-[15px] font-pops font-normal text-[14px] text-[#ffffffa4]'>Terms & Conditions</h5>
                    <h6 className='mt-[15px] font-pops font-normal text-[14px] text-[#ffffffa4]'>Privacy Policy</h6>
                </div>
                <div className="lg:w-1/5  w-1/3 ">
                    <h2 className='font-pops font-semibold text-[16px] text-[#fff] mt-[35px]'>Certificate</h2>
                    <div className="flex mt-[21px]">
                      <img src={cartone} alt="" />
                      <img src={carttwo} alt=""  className='ml-[8px]'/>
                    </div>
                    
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
