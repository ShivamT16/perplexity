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
import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import LoginModal from "./LoginModal";

const Sidebar = () => {
   const {handleOpen} = useContext(LoginContext)
    return(
        <div className="hidden md:flex w-56 flex-col justify-between py-4 h-screen font-roboto fixed" >
           <div>
           <LoginModal />
           <h1 className="sb-heading"> <SiPerplexity size="2rem" color="#258585"/> perplexity</h1>

           <div className="bg-white border text-[.9rem] my-6 ml-6 mr-2 p-1 px-4 text-stone-600 font-medium rounded-3xl">
            <p>New Thread <span className="border px-1 mx-1 rounded">Ctrl</span> <span className="border px-1 rounded">I</span> </p>
           </div>

           <div className="mx-2 font-medium">
           <NavLink to="/" className="navv"><RiSearchLine/> Home</NavLink>
           <NavLink to="/discover" className="navv"><FaGlobeAmericas/> Discover</NavLink>
           <NavLink onClick={handleOpen} className="navv"><FiBookOpen/> Library</NavLink>
           <NavLink onClick={handleOpen} className="navv"><FaSignInAlt/> Sign in</NavLink>
           </div>

           <button onClick={handleOpen} className="button"> Sign Up </button>
           </div>

           <div className="px-4 text-sm text-slate-500">

            <button className="font-semibold hover:text-[#48BCD1]">Try Pro</button>
            <p>Upgrade for image upload, smarter AI, and more Pro Search.</p>

            <button onClick={handleOpen} className="flex items-center bg-slate-200 p-1 px-2 rounded text-black font-medium hover:text-slate-500">< MdArrowOutward/> Learn More</button>
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