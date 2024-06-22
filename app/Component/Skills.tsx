import './Style/index.css'
function Skills() {
  return (
    <div id='skill' className='bg-[#25283D] p-2 h-[160vh] md:h-[100vh] flex items-center justify-center '>
       <div className="con flex flex-col  md:flex-row justtify-between items-center w-[90%] h-[90%] text-white">
       
        <div className="text flex-1 flex flex-col gap-7">
        <h3 className="font-semi-bold text-[25px] text-yellow-400 uppercase"
          data-aos="zoom-in"  data-aos-duration="1100" data-aos-delay="400">my skills</h3>
        <h1 className="bold text-[20px] md:text-[25px] "
          data-aos="zoom-in"  data-aos-duration="1300" data-aos-delay="500">LETS EXPLORE POPULAR <br></br>
        SKILLS AND <span className='text-yellow-400'>EXPRIANCE</span> </h1>
        <p className="text-[12px] opacity-[0.3]"   data-aos="zoom-in"  data-aos-duration="1500" data-aos-delay="600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Blanditiis officia veritatis dolores saepe sint aliquam 
             porro animi molestiae nulla laborum?
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Blanditiis officia veritatis dolores saepe sint aliquam 
             porro animi molestiae nulla laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            
        </p>
       <button   data-aos="zoom-in"  data-aos-duration="1700" data-aos-delay="700"
        className="w-[50%] h-[24px] md:w-[40%] transition-all duration-200 py-6 hover:bg-yellow-400 border-none text-black flex justify-center items-center bg-[#55e6a5] border-[2px] text-[15px] uppercase font-bold ">LEARN MORE</button>
        </div>
        <div className="icon flex-1  ">
        <div className="stage-cube-cont md:mt-[-100px] mt-[60px]"  data-aos="zoom-in" 
        data-aos-duration="2100" data-aos-delay="1000">
            <div className="cube-spiner">
                <div className="face1">
                   js               
                </div>
                <div className="face2">
                   tail
                </div>
                <div className="face3">
                   react
                </div>
                <div className="face4">
                   next
                </div>
                <div className="face5">
                  type
                </div>
                <div className="face6">
                  git
                </div>
               
            </div>
        </div>

        </div>
       </div>
    </div>
  )
}

export default Skills

/*"@fortawesome/fontawesome-svg-core": "^6.5.1",
"@fortawesome/free-brands-svg-icons": "^6.5.1",
"@fortawesome/free-solid-svg-icons": "^6.5.1",
"@fortawesome/react-fontawesome": "^0.2.0",*/