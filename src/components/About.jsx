import React from 'react'

const About = () => {
  return (
    <div>
     
     <section className='bg-[#F0F0F0] lg:py-[136px] py-[60px]'>
        <div className="max-w-container mx-auto">
            <div className=" lg:flex justify-center">
                <div className=" lg:w-2/4  bg-[red] lg:pt-[100px] lg:pb-[100px] pt-[80px] pb-[79px]   ">
                    <h2 className=' font-pops     font-semibold lg:text-[36px] text-[28px] text-[#fff]   lg:ml-[200px] lg:w-[262px] text-center lg:text-left  '>Learn more about our company</h2>
                </div>
                <div className="bg-[url(../src/assets/com.png)] bg-no-repeat bg-cover bg-center lg:py-[168px]   text-center  py-[100px]    lg:w-3/4 ">
                          <button className='lg:py-[14px] lg:px-[30px] py-[10px] px-[20px] bg-[#fff]   text-[#F40404] font-pops font-bold text-[16px] hover:bg-[black] duration-300'>Learn more</button>
                </div>
            </div>
        </div>
     </section>
    </div>
  )
}

export default About
