import React from 'react'
import Image from 'next/image'
import Particle from './Particle'
import ExampleComponent from '../TextEffect'
import {Link} from 'react-scroll'
import { MdFileDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
function Hero() {
  return (
    <div id="hero " style={{background:"url(/images/banner.jpg)"}}
     className=" bg-cover overflow-hidden mt-[12vh] bg-center h-[160vh] md:h-[88vh] flex  justify-center items-center">
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
        <p className='text-[11px] md:text-[15px] opacity-[0.4] text-[#ffffff92]'
         data-aos="zoom-in"  data-aos-duration="1700" data-aos-delay="700">
               Passionate Front-end Web Devloper . I specialize in utilizing the following tech stacks:
               Next.js | React.js | Typescript | Tailiwind css And Jest For Testing . Transforming Ideas Into 
               Seamless Web Expriance .
             
                 </p>
          <div className="flex justify-start gap-10 items-center 
          ">
            <button  data-aos="zoom-in" 
                  data-aos-duration="1900" data-aos-delay="800"
            className='px-[1rem] sm:px-[2rem]  hover:bg-transparent transition-all duration-200 py-[0.5rem] sm:py-[1rem]
            md:text-[16px] text-[10px]  font-bold uppercase bg-[#55e6a5] text-black hover:text-white flex 
            items-center  border border-[#55e6a5]  justify-between gap-5'>
             <MdFileDownload />
             <a href="/Final.pdf" download> DOWNLOAD CV</a> </button>
            <button  data-aos="zoom-in" 
                  data-aos-duration="2000" data-aos-delay="1000"
            id="hero" className='px-[1rem] sm:px-[2rem] hover:bg-[#55e6a5] transition-all duration-200 py-[0.5rem] sm:py-[1rem]
             md:text-[16px] text-[10px] font-bold uppercase animate-ease border-solid border-[#55e6a5] border-[2px] bg-transparent
             hover:text-black text-white  flex items-center  hover:scale-95'>
             <Link to="contact" spy={true} 
               smooth={true} 
               duration={500}
               >CONTACT ME</Link> 
                </button>
          </div>
          <div className="social-links flex justify-start mt-[14px]  md:mt-[0.5rem] gap-5 items-center" >
            <div   className=' text-[16px] flex justify-center text-[#0A66C2]  items-center border-solid 
            border-[#0A66C2] border-[2px] p-[4px] md:P-1  cursor-pointer  hover:opacity-[1]
             hover:scale-[1.2] transition-all duration-200 opacity-[0.5]'>
            <FaLinkedin/>
            </div>
           <div  className=' text-[16px] flex justify-center text-[orange] opacity-[0.5]  hover:opacity-[1] items-center border-solid 
            border-[orange] border-[2px] p-[4px] md:P-1  cursor-pointer  hover:scale-[1.2] transition-all duration-200'>
              <FaGithub />
              </div>
              <div  className=' text-[16px] flex justify-center text-[#0088CC] items-center border-solid 
            border-[#0088CC] border-[2px] opacity-[0.5]  hover:opacity-[1] p-[4px] md:P-1  cursor-pointer  hover:scale-[1.2] transition-all duration-200'>
              <FaTelegramPlane />
              </div>
              <div  className=' text-[16px] flex justify-center text-[#25D366] items-center border-solid 
            border-[#25D366] border-[2px] p-[4px]  hover:opacity-[1] opacity-[0.5] cursor-pointer  hover:scale-[1.2] transition-all duration-200'>
             <FaWhatsappSquare />
              </div>
           
          </div>
      </div>
      <div className="flex-1 relative h-[70vh] w-[70vw] " data-aos="zoom-in" 
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
