import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <div className='bg-[#121121]  h-[100vh]
     flex justify-center items-center ' id='about'>
     
      <div className="flex flex-col gap-[6rem] md:gap-0 justify-between md:flex-row w-[80%] items-center">
        <div className="text flex-1 flex flex-col gap-5 "
         data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">
      <h1 className='text-[25px] font-bold uppercase text-[#55e6a5] mb-[1rem] '>
        About me</h1>
      <h2 className='uppercase text-[15px] md:text-[20px] lg:text-[25px] md:leading-[3rem]
       text-white   '>
        seamiless  <span className='text-yellow-400'>expriance</span> </h2>
      <div className="mid text-white mb-4 flex justify-between items-center">
      <span className='w-[50px]  hidden md:block h-[5px] bg-slate-400 rounded-sm'>
      </span>
      <p className='text-[10px] md:text-[14px] text-slate-300 w-[80%]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officia nostrum expedita autem earum quibusdam
          libero quidem rerum, doloribus animi explicabo.
      </p>
      </div>
     
      <button
            className='w-[60%]   hover:bg-transparent transition-all duration-200 md:py-[1rem]
            text-[10px] md:text-[18px] py-[5px] font-bold uppercase
             bg-[#55e6a5] hover:bg-yellow-400 text-black  flex justify-center items-center'>
              DOWNLOAD CV</button>

        </div>
        <div className="md:w-[300px] md:h-[300px] md:mx-[2rem]
         md:mt-2  w-[250px] h-[250px] relative "
         data-aos="zoom-in" data-aos-delay="700" data-aos-duration="2500">
        <Image 
        src='/images/about.jpg'
        alt='user'
        layout='fill'
        objectFit='contain'
        className='relative z-[11] w-[100%] h-[100%] object-contain' />
        <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  )
}

export default About
