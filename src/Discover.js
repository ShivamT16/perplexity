import { useState } from "react";
import { Categories } from "./data";
import { FaGlobeAmericas } from "react-icons/fa";
import { ArticleCard } from "./Article";

export const Discover = () => {
  const [ column, setColumn] = useState("Top")

  return (
    <div className="bg-white px-10 my-2 rounded-xl ml-[15rem]" >
      <h1 className="flex items-center text-3xl font-roboto gap-2 my-4 text-slate-750"><FaGlobeAmericas/> Discover</h1>
      <p className="border mx-[-2.5rem]"></p>
      <div className="flex w-[64rem]" > 
       <div className="w-[80%] mr-10">
        <div className="flex gap-4 my-2">
            {
             Categories.map((item) =>
             <button onClick={() => setColumn(item.category)} 
             style={{borderRadius: ".5rem", color: column === item.category ? " #258585": "",backgroundColor: column === item.category ? "#e8f5f5" : ""}}> 

            <p className="flex gap-1 items-center text-sm p-2 rounded-lg hover:text-slate-500" >{item.icon} {item.category}</p> 

             </button>)
            }
        </div>

        <ArticleCard column={column} />
        <br />
        <ArticleCard column={column} />
       </div>

       <div className="flex items-start text-slate-600 w-[24rem] font-roboto bg-slate-100 p-4 h-max rounded-lg mt-16">
        <div>
        <p className="font-semibold text-lg">Make it yours</p>
        <p>Select topics and interests to customize your Discover experience</p>
        {
             Categories.slice(1).map((item) =>   
             <button className="text-[#1a5050] bg-[#cde7e7] px-2.5 py-1.5 rounded-lg m-1">
              <p className="flex gap-1 items-center">{item.icon}{item.category} </p>
              </button> 
        )}
        <br />
        <button>Save Interests</button>
        </div>
        <p>X</p>
       </div>
         
      </div>

    </div>
  )
}