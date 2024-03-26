import React from 'react'
import comone from '../assets/comone.png'
import comtwo from '../assets/comtwo.png'
import comthree from '../assets/comthree.png'
import comfour from '../assets/comfour.png'

const Company = () => {
  return (
    <div>
     
     <section className='lg:py-[117px] py-[50px]'>
     <div className="max-w-container mx-auto">
        <div className="flex">
          
          
          <div className="  lg:w-1/4 ">
                <img src={comone} alt="" className='' />
           </div>
           <div className="  lg:w-1/4 ">
            <img src={comtwo} alt="" />
           </div>
           <div className="  lg:w-1/4 ">
            <img src={comthree} alt="" />
           </div>
           <div className=" lg:w-1/4 ">
            <img src={comfour} alt="" />
           </div>
          
        </div>
      </div>
     </section>
    </div>
  )
}

export default Company
