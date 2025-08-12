import { Outlet } from "react-router";
import ResumeNavigation from "../Components/Resume/ResumeNavigation";

function Resume() {
    return(
        <div className="flex flex-col lg:flex-row justify-between gap-8">
            <ResumeNavigation></ResumeNavigation>
            <Outlet></Outlet>
        </div>
    )
}

export default Resume;