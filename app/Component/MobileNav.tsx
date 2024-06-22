import React from 'react'
 
interface props {
    nav:boolean;
    closeNav: ()=>void
}
function MobileNav({nav,closeNav}:props) {
   const navAnimation = nav ?'traslate-x-0' : "translate-x-[-100%]"
     return (
    <div  className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0
    bottom-[100px] z-[1000] bg-[#09101a]`}  >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
       <div className='nav-link'>Home</div>
            <div className='nav-link-mobile'>About</div>
            <div className='nav-link-mobile'>Skill</div>
            <div className='nav-link-mobile'>Project</div>
            <div className='nav-link-mobile'>Services</div>
            <div className='nav-link-mobile'>Contact</div>
           
            <div className="w-[2rem] absolute
             top-[2rem] right-[2rem]   h-[2rem] cursor-pointer text-yellow-300" 
           onClick={closeNav} >
               X
              </div>
      </div>
    </div>
  )
}

export default MobileNav
