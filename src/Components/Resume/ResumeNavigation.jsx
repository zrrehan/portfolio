import { NavLink } from "react-router";

function ResumeNavigation() {
    return(
        <div className="flex flex-col gap-3">
            <NavLink className="resumeNav btn btn-neutral rounded-xl text-2xl w-[90vw] lg:text-4xl lg:px-35 py-6 lg:w-[460px]" to="/resume/skills">Skills</NavLink>
            <NavLink className="resumeNav btn btn-neutral rounded-xl text-2xl w-[90vw] lg:text-4xl lg:px-35 py-6 lg:w-[460px]" to = "/resume/education">Education</NavLink>
            <NavLink className="resumeNav btn btn-neutral rounded-xl text-2xl w-[90vw] lg:text-4xl lg:px-35 py-6 lg:w-[460px]" to="/resume/about-me"><p>About Me</p></NavLink>
        </div>
    )
}

export default ResumeNavigation;