import { NavLink } from "react-router-dom"
import { SiPerplexity } from "react-icons/si";
import { CiMobile4 } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { RiDiscordFill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { FaGlobeAmericas } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { FaSignInAlt } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import "./sidebar.css"

const Sidebar = () => {
    return(
        <div className="w-56 flex flex-col justify-between py-4 h-screen font-roboto fixed" >
           <div>
             <h1 className="sb-heading"> <SiPerplexity size="2rem" color="#258585"/> perplexity</h1>

           <div className="sidenav">
           <NavLink className="navv"><RiSearchLine/> Home</NavLink>
           <NavLink className="navv"><FaGlobeAmericas/> Discover</NavLink>
           <NavLink className="navv"><FiBookOpen/> Library</NavLink>
           <NavLink className="navv"><FaSignInAlt/> Sign in</NavLink>
           </div>

           <button className="button"> Sign Up </button>
           </div>

           <div className="px-4 text-sm text-slate-500">

            <button className="font-semibold hover:text-[#48BCD1]">Try Pro</button>
            <p>Upgrade for image upload, smarter AI, and more Pro Search.</p>

            <button className="flex items-center bg-slate-200 p-1 px-2 rounded text-black font-medium hover:text-slate-500">< MdArrowOutward/> Learn More</button>
            <p className="border mt-2"></p>
             <div className="flex justify-between items-center mt-2">
                <button className="flex items-center font-medium text-sm p-1.5 rounded-2xl hover:bg-slate-200"> <CiMobile4 size="1.1rem"/> Download</button>

                <div className="flex items-center">
                <button className="p-1.5 rounded-xl hover:bg-slate-200"> <FaXTwitter /> </button>
                <button className="text-lg ml-4 p-1.5 rounded-2xl hover:bg-slate-200"> <RiDiscordFill /> </button>
                </div>

             </div>
           </div>

        </div>
    )
};

export default Sidebar;