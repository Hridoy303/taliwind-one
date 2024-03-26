import React from 'react'
import one from'../assets/one.png'
import two from'../assets/two.png'
import three from'../assets/three.png'
import four from'../assets/four.png'


const Country = () => {
  return (
    <div>
      <div className="max-w-container mx-auto  lg:pt-[80px] pt-[40px] pb-[40px]  lg:pb-[100px]">
        <div className=" lg:flex  lg:items-center py-[20px] lg:py-[0]  lg:text-left text-center">
            <div className=" lg:w-1/4">
                <h2 className=' font-pops lg:text-[48px] text-[24px] font-bold   text-[#000000]'>The biggest
                     supplier on
                     the country</h2>
            </div>
            <div className=" lg:w-3/4">
             
             <p className='  lg:px-[150px] font-pops   lg:text-[16px] text-[14px] mt-[10px] font-normal text-[#6C6C6C]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>

            </div>
        </div>
      </div>

       <div className="flex flex-wrap items-center  justify-between pb-[26px]">
        <div className="lg:w-[24%] sm:w-[49%]  py-2">
         <img src={one} alt="" className='w-full' />
        
        
        </div>
        <div className="lg:w-[24%] sm:w-[49%] py-2">
        <img src={two} alt="" className='w-full' />
        
        
        </div>
        <div className=" lg:w-[24%] sm:w-[49%] py-2">
        <img src={three} alt="" className='w-full' />
      
      
        </div>
        <div className=" lg:w-[24%] sm:w-[49%] py-2">
        
        
        <img src={four} alt="" className='w-full' />
        </div>
       </div>




    </div>
  )
}

export default Country
