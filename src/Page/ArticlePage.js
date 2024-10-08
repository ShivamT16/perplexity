import { Article } from '../Context/data'
import { GoBookmark } from "react-icons/go";
import { HiOutlineLink } from "react-icons/hi";
import { FaShare } from "react-icons/fa";
import { CgToggleOn } from "react-icons/cg";
import { FiShare2 } from "react-icons/fi";
import { useParams } from 'react-router-dom';

export const ArticlePage = () => {
   const {heading} = useParams()
   
  return (
    <div className="bg-white w-full m-2 px-10 rounded-xl ml-[15rem]">

      <div className="flex flex-wrap justify-end text-normal py-2 gap-2"> 
      <button className='border p-1 px-2 rounded'><GoBookmark /></button>
      <button className='bg-[#258585] rounded text-white p-2'><HiOutlineLink/></button>
      <button className='flex items-center gap-1 text-white p-1 px-3 rounded bg-[#258585]'><FaShare/>Share</button>
      </div>

      <div className='p-1 rounded-full bg-slate-100 w-1/2 bottom-1 mb-10 fixed'>
       <div className='flex justify-between p-4 text-lg border rounded-full bg-white'>
        <input className='focus:outline-none' placeholder='Ask follow-up' />
        <p className='flex gap-2 items-center text-slate-500'>
        <CgToggleOn size="2rem" /> Pro <FiShare2 size="1.4rem" />
        </p>
       </div>
      </div>

      <p className="border mx-[-2.5rem]"></p>
      {
             Article.filter((item) => item.heading === heading ).map(({heading, description, image },index) => (
                <div className="">
                    <img className='h-[22rem] w-full rounded-lg my-8 hover:cursor-zoom-in' src={image} alt="articleImg" />
                    <div>
                    <p className="text-5xl w-[40rem] text-slate-800 font-roboto">{heading}</p>

                    <div className="flex justify-between items-center my-2">
                     <p className="flex items-center gap-1 text-slate-600"> 
                      <img src="https://techcrunch.com/wp-content/uploads/2024/10/argo-space-corp.jpg" alt="author" className="h-8 w-8 rounded-2xl" /> 
                      Curated by elymc</p>
                    </div>

                    <p className='text-lg text-slate-500 w-[42rem] my-2'><span className='text-black my-2 text-4xl font-semibold'>{description.slice(0,1)}</span> {description.slice(1)} </p>
                    <p className='text-lg text-slate-500 w-[42rem] my-2'>{description}</p>
                    <p className='text-lg text-slate-500 w-[42rem] my-2'>{description}</p>

                    </div>
                </div>
             ))
            }
    </div>
  )
}
