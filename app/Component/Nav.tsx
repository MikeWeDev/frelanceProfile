'use client'
import {Link} from 'react-scroll'
import React, { useReducer, useState } from 'react'

interface props{
  nav:boolean;
  open : ()=> void
}
function Nav({open,nav}:props) {
   const {pathname} = useReducer();
  return (
    <div className=' w-[100%]  fixed z-[1000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%] ">
        
         <h1 className='flex-[0.6] cursor-pointer text-[25px]
           text-white font-bold '>
            <Link to="hero"  spy={true} 
                  smooth={true} 
                 duration={500}
                 offset={-800}> 
                 Mike
            <span className='text-yellow-300' >Dev</span> </Link>
            </h1>
        
        
            <div className={`nav-link ${pathname === "Hero/hero" ? 'active' : "" }  `} >
             <Link to="hero" 
                  spy={true} 
                  smooth={true} 
                  offset={-800}
                 duration={500}>Home</Link> </div>
            <div className='nav-link'>
              <Link to="about"
               spy={true} 
               smooth={true} 
               duration={500} >About</Link>
              </div>
            <div className='nav-link'>
              <Link to="skill"
               spy={true} 
               smooth={true} 
               duration={500} >Skill</Link>
              </div>
            <div className='nav-link'>
            <Link to="service"
             spy={true} 
             smooth={true}  
             duration={500} >Service</Link>
            </div>
            <div className='nav-link'>
            <Link to="project"
             spy={true} 
             smooth={true}  
             duration={500} >Project</Link>
            </div>
            <div className='nav-link'>
            <Link to="contact"
             spy={true} 
             smooth={true}  
             duration={500} >Contact</Link>
            </div>
            <div className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" 
             onClick={open}>
               Menu
              </div>
        </div>
    </div>
  )
}

export default Nav
