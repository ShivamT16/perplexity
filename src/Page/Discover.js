import { useContext, useState } from "react";
import { Categories } from "../Context/data";
import { FaGlobeAmericas } from "react-icons/fa";
import { ArticleCard } from "./Article";
import { LoginContext } from "../Context/LoginContext";

export const Discover = () => {
  const {handleOpen} = useContext(LoginContext)
  const [ column, setColumn] = useState("Top")

  return (
    <div className="ml-0 md:ml-[14rem] bg-white px-6 w-max my-2 rounded-xl" >
      <h1 className="flex items-center text-3xl font-roboto gap-2 my-4 text-slate-750"><FaGlobeAmericas/> Discover</h1>
      <p className="border mx-[-1.5rem]"></p>
      <div className="w-[67rem] flex flex-wrap" > 
       <div className="w-[70%] mr-6">
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

       <div className="hidden md:block text-slate-600 w-[18rem] font-roboto bg-slate-100 p-4 h-max rounded-lg mt-16">
        <div className="flex justify-between items-center">
        <p className="font-semibold text-lg">Make it yours</p>
        <p>X</p>
        </div>
        <p>Select topics and interests to customize your Discover experience</p>
        {
             Categories.slice(1).map((item) =>   
             <button onClick={handleOpen} className="text-[#1a5050] bg-[#cde7e7] px-2.5 py-1.5 rounded-lg m-1">
              <p className="flex gap-1 items-center">{item.icon}{item.category} </p>
              </button> 
        )}
        <p className="border mx-[-1rem] mt-2"></p>
        <button onClick={handleOpen} className="bg-[#258585] p-2 my-2 w-full rounded-3xl text-white font-semibold font-roboto hover:bg-[#469c9c]" >Save Interests</button>
        </div>
         
      </div>

    </div>
  )
}