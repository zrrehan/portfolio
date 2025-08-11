import { Outlet } from "react-router";
import Navbar from "./Components/Navbar";

function Layout() {
    return(
        <div className="max-w-[1150px] mx-auto w-[90%]">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default Layout;