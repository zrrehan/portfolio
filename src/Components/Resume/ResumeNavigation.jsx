import { NavLink } from "react-router";

function ResumeNavigation() {
    return(
        <div className="flex flex-col gap-3">
            <NavLink className="resumeNav btn btn-neutral rounded-xl text-4xl px-35 py-6" to="/resume/projects">Projects</NavLink>
            <NavLink className="resumeNav btn btn-neutral rounded-xl text-4xl px-35 py-6" to = "/resume/education">Education</NavLink>
            <NavLink className="resumeNav btn btn-neutral rounded-xl text-4xl px-35 py-6" to = "/resume/skills">Skills</NavLink>
        </div>
    )
}

export default ResumeNavigation;