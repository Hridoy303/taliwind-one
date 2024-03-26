import React from 'react'



const Banner = () => {
  return (
   <section>
   
   
    <div className=" bg-[url(../src/assets/ban.png)] bg-no-repeat bg-cover  bg-center py-[50px]   lg:py-[258px] ">
      <div className="max-w-container mx-auto">
        <h2 className='text-[white] font-bold lg:text-[64px]  lg:w-[842px]  text-[24px] lg:text-left text-center   lg:leading-[80px]'>We exist since 1975 on the oil and gas industry.</h2>
       
       <div className=" lg:text-left text-center ">
       <button className='text-[white] hover:bg-yellow-700   duration-200   lg:border-2  lg:py-[14px] lg:px-[41px] border-2 py-[8px] px-[14px] text-[14px]  bg-[#F40404] font-pops font-semibold lg:text-[16px] leading-[24px]  lg:mt-[35px] mt-[20px]'>LEARN MORE</button>
       </div>
      </div>
    </div>
   </section>
  )
}

export default Banner
