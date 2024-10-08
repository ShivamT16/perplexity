import React from 'react'
import { RiFilter3Line } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";
import { CgToggleOn } from 'react-icons/cg';
import { FaArrowRight } from "react-icons/fa";

export const Home = () => {
  return (
    <div className= "flex flex-col justify-center items-center bg-white m-2 w-full h-screen px-10 rounded-xl ml-[15rem]">
       
       <p className='text-[2.5rem] text-slate-800 font-normal my-4'>Where knowledge begins</p>
       <div className='flex flex-col justify-between p-2 h-32 text-m border-2 w-3/5 border-slate-300 rounded-lg bg-white'>
        <input className='p-1 focus:outline-none' placeholder='Ask anything...' />
        <div className='flex items-center justify-between text-slate-600 font-medium'>
         <div className='flex gap-3'>   
         <p className='flex items-center gap-1'><RiFilter3Line /> Focus</p>
         <p className='flex items-center gap-1'><FiPlusCircle /> Attach</p>
         </div>
         <div className='flex items-center gap-1'>
         <CgToggleOn size="2rem" /> Pro <p className='bg-slate-200 p-2 mx-2 rounded-2xl' ><FaArrowRight /></p>
         </div>
        </div>
       </div>

      </div>

  )
}
