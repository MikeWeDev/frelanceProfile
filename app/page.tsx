'use client'
import Nav from '@/app/Component/Nav'
import { useEffect, useState } from 'react';
import MobileNav from './Component/MobileNav';
import Hero from './Component/Hero/Hero'
import About from './Component/About';
import Skills from './Component/Skills';
import Services from './Component/Services'
import Projects from './Component/Projects';
import Contact from './Component/Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Home() {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      delay:200,
      once:true
    })
  },[])
 
 const [nav ,setNav] =useState(false)
 const openNav = ()=> setNav(true)
 const closeNav = ()=> setNav (false)

  return (

    <div className="overflow-x-hidden" > 
    <Nav nav={nav} open={openNav} />
    <MobileNav nav={nav} closeNav={closeNav}  />
    <Hero />
    <About />
    <Skills />
    <Services />
    <Projects />
    <Contact />
    </div>
  ); 
}
