import React from 'react'
import Image from 'next/image'
import Particle from './Particle'
import ExampleComponent from './TextEffect'
import {Link} from 'react-scroll'
function Hero() {
  return (
    <div id="hero " style={{background:"url(/images/banner.jpg)"}}
     className="bg-cover overflow-hidden mt-[12vh] bg-center h-[160vh] md:h-[88vh] flex  justify-center items-center">
      <Particle   />
     <div className="con flex md:flex-row flex-col justify-center
     w-[95%] items-center h-[80%] lg:h-auto gap-5 ">
      
      <div className="text ml-[20px] md:ml-2  text-white
       flex flex-col flex-1   gap-y-5 "  data-aos="zoom-in" 
                  data-aos-duration="1000" data-aos-delay="400" >
        <h1 className='text-bold text-[40px] font-serif ' data-aos="zoom-in" 
                  data-aos-duration="1300" data-aos-delay="600">HY , I AM
         <span className='text-yellow-400' > MIKE</span></h1>
        <h2 className='textarea '  data-aos="zoom-in" 
                  data-aos-duration="1500" data-aos-delay="700">
        <ExampleComponent />
          </h2>
        <p className='text-[12px] md:text-[18px] opacity-[0.4] text-[#ffffff92]'
         data-aos="zoom-in"  data-aos-duration="1700" data-aos-delay="700">
          Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Ratione animi nihil magnam. Temporibus
           corporis deserunt assumenda, distinctio voluptas unde aliquid.</p>
          <div className="flex justify-start gap-10 items-center 
          ">
            <button  data-aos="zoom-in" 
                  data-aos-duration="1900" data-aos-delay="800"
            className='px-[1rem] sm:px-[2rem]  hover:bg-transparent transition-all duration-200 py-[0.5rem] sm:py-[1rem]
            md:text-[18px] text-[10px]  font-bold uppercase bg-[#55e6a5] text-black hover:text-white flex 
            items-center  hover:border-solid hover:border-[#55e6a5] hover:border-[1px] '>
              DOWNLOAD CV </button>
            <button  data-aos="zoom-in" 
                  data-aos-duration="2000" data-aos-delay="1000"
            id="hero" className='px-[1rem] sm:px-[2rem] hover:bg-[#55e6a5] transition-all duration-200 py-[0.5rem] sm:py-[1rem]
             md:text-[18px] text-[10px] font-bold uppercase animate-ease border-solid border-[#55e6a5] border-[2px] bg-transparent
             hover:text-black text-white  flex items-center  hover:scale-95'>
             <Link to="contact" spy={true} 
               smooth={true} 
               duration={500}
               >CONTACT ME</Link> 
                </button>
          </div>
          <div className="social-links flex justify-start mt-[14px]  md:mt-[0.5rem] gap-10 items-center" >
            <div   className='w-[10%] flex justify-center text-yellow-500  items-center border-solid 
            border-yellow-500 border-[2px] p-[2px] md:P-1'>F</div>
           <div  className='w-[10%] flex justify-center text-yellow-500  items-center border-solid 
            border-yellow-500 border-[2px] p-[2px] md:P-1'>F</div>
            <div  className='w-[10%] flex justify-center text-yellow-500  items-center border-solid 
            border-yellow-500 border-[2px] p-[2px] md:P-1'>F</div>
            <div className='w-[10%] flex justify-center text-yellow-500  items-center border-solid 
            border-yellow-500 border-[2px] p-[2px] md:P-1'>F</div>
          </div>
      </div>
      <div className="flex-1 relative h-[80vh] w-[70vw] " data-aos="zoom-in" 
                  data-aos-duration="2500" data-aos-delay="2000">
        <Image 
        src='/images/u1.jpg'
        alt='user'
        layout='fill'
        className='rounded-full ' />
      </div>
     </div>
    </div>

  )
}

export default Hero
