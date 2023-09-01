import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai'

function Navbar() {

  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive(!active)
  }

 const navigate = useNavigate();
 const location = useLocation();

 function pathlocatiocn(route){
  if(route === location.pathname){
   return true
  }
 }

  return (
    <div className='  bg-[#fff]'>
    <div className='flex justify-between w-[80%] mx-auto pt-3'>
       {/* logo */}
      <div className='flex relative'>
        <div className='absolute top-[7px] left-[-7px] w-[4px] h-[25px] bg-[#FFB100]'></div>
        <h2 className='flex flex-col'> 
        <span className='text-xl'>HELID DIGITAL</span>
        <span className='text-[12px] translate-y-[-7px] text-[#F9C349]'> marketing</span>
        </h2>
     
      </div>

      <div onClick={handleActive}>
         { active ? (
          <AiOutlineClose 
          className="text-xl absolute right-4 top-4  md:hidden bg-[#FFB100] w-[9%] 
          h-[30px] text-white"/>
         ): (
          <AiOutlineMenuUnfold
          className="text-xl absolute right-4 top-4  md:hidden bg-[#FFB100] w-[9%] 
          h-[30px] text-white"/>
         )
        }
        </div>
      
       <nav className={ active ? 'absolute md:static md:left-0 left-0 md:top-0 top-14 w-full md:w-auto md:bg-white bg-[#000] md:text-[#191919] text-white z-40 md:h-auto h-[60vh] transition-all ease-in' : 'absolute md:static md:left-0 left-0 md:top-0 top-10 w-full md:w-auto md:bg-white bg-[#eee] md:h-auto h-[60vh] md:translate-y-0 translate-y-[-150%] transition-all ease-in' }>
       
        <ul className='flex md:space-x-5 md:flex-row flex-col md:pt-0 md:pl-0 pl-4 pt-4 
        md:space-y-0 space-y-4'>
            
          <li className={`text-[17px] cursor-pointer   ${pathlocatiocn("/") && "text-[#FFB100] "}`} onClick={() => navigate("/")}>Home</li>
           
            <li className={`text-[17px] cursor-pointer  ${pathlocatiocn("/about") && "text-[#FFB100] "}`} onClick={() => navigate("/about")}>About Us</li>
           
            <li className={`text-[17px] cursor-pointer  ${pathlocatiocn("/services") && "text-[#FFB100] "}`} onClick={() => navigate("/services")}>Services</li>
           
            <li className={`text-[17px] cursor-pointer  ${pathlocatiocn("/contact") && "text-[#FFB100] "}`} onClick={() => navigate("/contact")}>Contact</li>
           
           
        </ul>
       </nav>
    </div>
    </div>
  )
}

export default Navbar