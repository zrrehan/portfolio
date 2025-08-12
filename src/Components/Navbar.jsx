import { CgMenuRight } from "react-icons/cg";
import { NavLink } from "react-router";

function Navbar() {
    return(
        <div className="flex justify-between items-center my-5 relative  z-10">
            <div className="">
                <a className="text-4xl font-bold text-[#e5e5e5]">Rehan <span className="text-[#a9927d] text-5xl">.</span></a>
            </div>
            <div >
                
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}
                        <label htmlFor="my-drawer-4" className=" drawer-button hover:cursor-pointer text-[#a9927d] lg:hidden">
                            <CgMenuRight size={34} />
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <NavLink to="/" className="text-3xl my-2 text-center" >Home</NavLink>
                            <NavLink to="/projects" className="text-3xl my-2 text-center">Projects</NavLink>
                            <NavLink to="/resume/skills" className="text-3xl my-2 text-center">Resume</NavLink>
                        </ul>
                    </div>
                </div>

                <div className="lg:flex items-center justify-center gap-8 text-xl hidden ">
                    <NavLink to ="/" className="header-text text-3xl " >Home</NavLink>
                    <NavLink to="/projects" className="header-text text-3xl ">Projects</NavLink>
                    <NavLink to = "/resume/skills" className="header-text text-3xl ">Resume</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;