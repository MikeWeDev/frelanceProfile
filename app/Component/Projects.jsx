import Image from 'next/image'
function Projects() {
  return (
    <div id="project" className='flex  flex-col items-center md:h-[160vh] h-[300vh] bg-[#172A3A] p-5'>
      <h1 className='text-[12px] text-white uppercase py-5'
        data-aos="zoom-in" 
        data-aos-duration="1000" data-aos-delay="400">lates projects</h1>
      <h2 className='py-8 md:text-[30px] text-[23px]  text-white'
        data-aos="zoom-in" 
        data-aos-duration="1400" data-aos-delay="500">MY BEST <span className="text-yellow-400">PROJECT</span> </h2>
      <div className="flex flex-col justify-between w-[95%]  h-[80%] gap-10  ">
        {pictures.map((items,index)=>(
         <div className="flex md:flex-row flex-col  w-[100%] h-full justify-between items-center 
         md:border-b-[4px] md:border-b-white p-2 gap-5 " key={index}
         data-aos="zoom-in"  data-aos-duration="2100" data-aos-delay="500">

         <div className="md:w-[50%] md:h-full w-[90%] h-[40%] flex items-center justify-center bg-[#12f7ff] relative  rounded-lg">
         
           <div className="border-[2px] w-[80%]  z-10 text-black  h-full flex justify-center items-center flex-col">
           <h1 className='text-white  md:text-[25px] text-[20px]'>{items.title}</h1>
           <p className='text-white lg:text-[15px] md:text-[12px] text-[10px] mt-2 overflow-y-hidden opacity-[0.5]'>
           {items.desc}
          </p>
              <button className='border-[2px] border-[#ED217C] text-[#ED217C] rounded-full  p-5 m-3 '>LINK</button>
           </div>


         <Image
         src={items.img}
         alt='user'
         layout='fill'
         objectFit='contain'
         className='w-full h-full absolute  z-20 object-contain hover:opacity-0 p-2 md:p-1'
         />
         </div>
         <div className="flex flex-col justify-between items-center md:w-[50%] w-[90%] md:h-[90%] h-[60%] ">
          <h1 className='text-white  md:text-[25px] text-[20px]'>{items.title}</h1>
          <p className='text-white lg:text-[15px] md:text-[12px] text-[10px] overflow-y-hidden opacity-[0.5]'>
           {items.desc}
          </p>
          <div className="btns flex justify-between gap-3 w-full flex-wrap pt-2" >
            <button className=' md:w-[20%] w-[40%] md:h-full h-1/2  bg-[#02A9EA] text-white md:p-1 p-0.5 rounded-md'>React</button>
            <button className=' md:w-[20%] w-[40%] md:h-full h-1/2 bg-white text-BLACK md:p-1 p-0.5 rounded-md'>React</button>
            <button className=' md:w-[20%] w-[40%] md:h-full h-1/2 bg-[#ED217C] text-white md:p-1 p-0.5 rounded-md'>React</button>
            <button className=' md:w-[20%] w-[40%] md:h-full h-1/2 bg-[#2541B2] text-white md:p-1 p-0.5 rounded-md'>React</button>
          </div>
         </div>
       </div>
        ))}
      
       
      </div>
    </div>
  )
}

export default Projects
 const pictures = [
  {
     title:"E-COMMERCE",
      desc:`This is an e-commerce website that is made by REACT.JS with  | tailwind css and | vanilla js
   that has all necessary functionality that most e-commerce website has on there user interface.`,
    img:"/images/b2.jpg"
  },
  {
    title:"REAL-STATE",
    img:"/images/b2.jpg",
    desc:"This is a real-state website that give all neccessary information about the campany and it is built by  REACT.JS with  | tailwind css and | vanilla js "

  },
  {
    title:"CAR-RENTAL",
    desc:`This is Car Rental website that is made by REACT.JS with  | tailwind css and | vanilla js
    that has all necessary functionality to show all info about the car dealership campany.`,
    img:"/images/b2.jpg"
  },
 ]