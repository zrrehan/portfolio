import { CgMenuRight } from "react-icons/cg";
import { NavLink } from "react-router";

function Navbar() {
    return(
        <div className="flex justify-between items-center my-5">
            <div className="">
                <a className="text-4xl font-bold text-[#e5e5e5]">Rehan <span className="text-[#a9927d] text-5xl">.</span></a>
            </div>
            <div >
                <button className="hover:cursor-pointer text-[#a9927d] lg:hidden">
                    <CgMenuRight size = {34}/>
                </button>

                <div className="lg:flex items-center justify-center gap-8 text-xl hidden">
                    <NavLink to ="/" >Home</NavLink>
                    <NavLink to = "/resume">Resume</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;