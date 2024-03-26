import React from 'react'
import map from'../assets/map.png'

const Contact = () => {
  return (
   
   <>
    <div>
      <img src={map} alt="" className='w-full' />
    </div>
    <div className="bg-[red] lg:py-[46px] py-[30px]">
        <div className="max-w-container mx-auto">
            <div className="  lg:flex">
                <div className="text-center">
                    <h3 className=' font-pops font-bold lg:text-[36px] text-[18px] text-[#ffffff]'>Want to join as member branch in your area?</h3>
                    
                </div>
                <div className=" text-center ">
                <button className=' hover:bg-[black] duration-300 border-[#ffffff98] border-2 lg:py-[15px] lg:px-[40px] py-[8px] mt-[20px] lg:mt-[0px] px-[18px] lg:ml-[200px] font-pops font-semibold lg:text-[16px] text-[12px] text-[#ffffffe7]'>Contact</button>
                  
                </div>
            </div>
        </div>
    </div>
   
   
   </>
  )
}

export default Contact
