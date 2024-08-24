import Image from 'next/image'
function Projects() {
  return (
    <div className='bg-[#172A3A]'>
    <div id="project" className='flex  flex-col items-center md:h-[160vh] h-[300vh]  p-5'   data-aos="zoom-in" 
    data-aos-duration="800" data-aos-delay="400">
      <h1 className='text-[12px] text-white uppercase py-5'
      >lates projects</h1>
      <h2 className='py-8 md:text-[30px] text-[23px]  text-white'
       >MY BEST <span className="text-yellow-400">PROJECT</span> </h2>
      <div className="flex flex-col justify-between w-[95%]  h-[80%] gap-10  ">
        {pictures.map((items,index)=>(
         <div className="flex md:flex-row flex-col  w-[100%] h-full justify-between items-center 
         md:border-b-[4px] md:border-b-white border-white p-2 gap-5 " key={index}>

         <div className="md:w-[50%] md:h-full w-[95%] h-[50%]    relative
          rounded-lg  p-0 m-0 border-[2px] border-red-500 flex justify-center items-center">
         
           <div className=" w-[100%] bg-[#12f7ff] p-5 z-10 md:hover:z-30 text-black  h-[100%] flex justify-center
            items-center flex-col">
           <h1 className='text-black  md:text-[25px] text-[20px]'>{items.title}</h1>
           <p className='text-black lg:text-[15px] md:text-[12px] text-[10px] mt-2 overflow-y-hidden '>
           {items.desc}
          </p>
               <a href={items.links}  className='border-[3px] border-yellow-500 shadow-yellow-500 hover:shadow-2xl
                 text-black font-bold   rounded-full  p-4 m-2 '>Link</a>
             
           </div>
          
         <div className="md:hover:z-0  z-20 ">
          <a href={items.links}>
          <Image
         src={items.img}
         alt='user'
         objectFit='contain'
         width="500"
         height="250"
         className='object-cover rounded-lg opacity-[1] md:hover:opacity-0
          cursor-pointer w-[100%] h-[100%]  absolute left-0 right-0 top-0 bottom-0'
         />
          </a>
        
         </div>
         
        
        
         </div>
         <div className="flex flex-col justify-between items-center md:w-[50%] w-[90%] md:h-[90%] h-[40%] ">
          <h1 className='text-white  md:text-[25px] text-[20px]'>{items.title}</h1>
          <p className='text-white lg:text-[15px] md:text-[12px] text-[10px] overflow-y-hidden opacity-[0.5]'>
           {items.desc}
          </p>
          <div className="btns flex justify-between gap-3 w-full flex-wrap pt-2" >
            <button className=' md:w-[20%] w-[40%] md:h-full h-1/2  bg-[#02A9EA] text-white md:p-1 p-0.5 rounded-md'>
            {items.tech[0]}</button>
            <button className=' md:w-[20%] w-[40%] md:h-full h-1/2 bg-white text-BLACK md:p-1 p-0.5 rounded-md'>
             {items.tech[1]}</button>
            <button className=' md:w-[20%] w-[40%] md:h-full h-1/2 bg-[#ED217C] text-white md:p-1 p-0.5 rounded-md'>
             {items.tech[2]}</button>
            <button className=' md:w-[20%] w-[40%] md:h-full h-1/2 bg-[#2541B2] text-white md:p-1 p-0.5 rounded-md'>
             {items.tech[3]}</button>
          </div>
         </div>
       </div>
        ))}
      
       
      </div>
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
   img:"/coloshop-free-bootstrap-ecommerce-website-templates.jpg",
    links:"https://mike-ecommerce-web.netlify.app/",
    tech:["React","JS","Tailwind","css"]
  },
  {
    title:"REAL-STATE",
    img:"/royalestate-free-real-estate-website-templates.jpg" ,
    desc:`This is a real-state website that give all neccessary information about the campany and it is built by 
     REACT.JS with  | tailwind css and | vanilla js `,
     links:"https://mike-realstate-app.netlify.app/",
      tech:["React","js","Tailwind","css"]

  },
 
 ]