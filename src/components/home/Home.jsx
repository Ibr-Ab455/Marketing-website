import React from 'react'
import data from '../../assets/images/All data.png'
import Clent from '../../assets/images/clent.png'
import Agency from '../../assets/images/Agency.png'
import Alex from '../../assets/images/Alexa Boost Online Conversion.jpg';
import { LuContact } from 'react-icons/lu'

function Home() {
  return (
    <>
    <div className='md:mt-8 mt-10'>
      <div className='flex md:mx-auto  md:w-[90%] w-full md:flex-row flex-col md:items-center items-center'>
        {/* left */}
        <div className='md:w-[50%] md:ml-0 ml-10  relative'>
         <h1 className='text-4xl font-bold leading-[45px]'>Helid digital <br></br> 
       <span className='text-[#FFB100]'> marketing services
       </span>
       </h1>
         <div className='absolute top-[7px] left-[-10px] w-[4px] h-[90px] bg-[#FFB100]'></div>
         <p className='pt-2 text-[17px] leading-6 mb-6'>We tailor all of our digital marketing services to meet the specific expectations and goals of our clients. Grow your Digital Marketing solution</p>
         <button className='bg-[#FFB100] w-[150px] h-[45px] rounded hover:bg-[#191919] hover:text-white transition-all'>Read More</button>
        </div>
        {/* right */}
        <div className='md:w-[50%] w-full'>
         <img src={data} alt='data'/>
        </div>
      </div>
    </div>
    {/* END HERO SECTION */}

     <div className='bg-[#eee] w-full md:h-[100vh]  h-[100%]'>
      <div className='text-center relative pt-14 '>
       <h1 className='text-3xl mb-2'>Helid Solution</h1> 
       <div className='absolute top-[53%] lg:left-[42%]  xl:left-[42%] md:left-[40%] left-[27%] w-[5px] h-[20px] bg-[#FFB100]'></div>
       <p>Gain More Profit By Using Our SEO Tools </p>
     </div>
      
      <div className='flex md:w-[80%] md:flex-row flex-col mx-auto pt-8 gap-4'>
        <div className='flex md:w-[50%] md:flex-row flex-col w-full'>
        <div className='py-8 px-6 '>
          <img src={Clent} alt='sawir' className='w-[360px]'/>
         </div>
         <div className='pt-4 pl-8'>
          <h2 className='text-xl text-[#000] capitalize'>Client Services</h2>
          <p className='pt-4 mb-4 text-gray-400'>Get more leads, customers and sales by 
            taking your business online or 
            improving your existing online solution</p>
            <button className=''>Read more</button>
         </div>
        </div>

        <div className='flex md:w-[50%] md:flex-row flex-col w-full md:ml-0 ml-2'>
        <div className=' py-8 px-6 '>
          <img src={Agency} alt='sawir' className='w-[360px]'/>
         </div>
         <div className='pt-4 pl-8'>
          <h2 className='text-xl text-[#000] capitalize'>Agency Services</h2>
          <p className='pt-4 mb-4 text-gray-400'>Get more leads, customers and sales by 
            taking your business online or 
            improving your existing online solution</p>
            <button className='border-b-red-500'>Read more</button>
         </div>

         
         
        </div>
      </div>

      <div className='w-full flex md:flex-row flex-col mt-20'>
       
       <div className='bg-[#232222] md:w-[50%] w-full h-[72.5vh]'>
        <div className='text-center mt-[100px] md:ml-[130px] ml-8  w-[80%]'>
        <h1 className='text-3xl relative mb-2 text-white before:content-[""] before:absolute before:w-[6px] before:h-[22px] before:bg-[#F9C349]
        before:left-[22%] before:top-2'>Our Mission is Clear</h1> 
        <p className='text-xl leading-8 text-[#F9C349] pt-8 pb-8 capitalize'>The highest quality marketing <br/>
        for evry client, on evry project.</p>
        <p className='text-[14px] leading-6 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  <br/> Commodi cum  voluptatibus ex facilis illo beatae odio <br/> consectetur, numquam, incidunt doloribus.</p>
         <div className='flex ml-[110px] mt-4 space-x-2'>
          <LuContact className='text-3xl text-white'/>
          <h3 className='text-[13px] text-[#F9C349] pt-[4px]'>CONTCAT US FOR MORE INFO</h3>
         </div>
        </div>
       </div>
      
       <div className='md:w-[50%]  w-full md:h-[50vh] lg:h-[50vh] '>
         <img src={Alex} alt='alex' />
       </div>
      </div>
    
      
    </div>
  </>
  )
}

export default Home