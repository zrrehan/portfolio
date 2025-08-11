import { FaGit, FaGithub, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills() {
    return(
        <div className="space-y-3">
            <h1 className="text-5xl font-bold header-text">My Skills</h1>
            <p className="text-xl">
                I have expertise in full-stack web development, specializing in modern technologies such as
                <strong>React</strong> for front-end, <strong>Express.js</strong> for back-end, and <strong>MongoDB</strong> for database management.
                My skillset enables me to build efficient, scalable, and user-friendly web applications.
            </p>

            <div className="space-y-5">
                <div>
                    <h1 className="header-text text-3xl">Languages</h1>
                    <div className="flex gap-6 flex-wrap">
                        <div className="rounded-xl bg-linear-to-r from-[#a9927d] to-[#e6ad7f] h-30 w-30 flex flex-col items-center justify-center">
                            <IoLogoJavascript size={50} />
                            JavaScript
                        </div>
                        <div className="rounded-xl bg-linear-to-r from-[#a9927d] to-[#e6ad7f] h-30 w-30 flex flex-col items-center justify-center">
                            <FaPython size={50} />
                            Python
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="header-text text-3xl">Framework</h1>
                    <div className="flex gap-6 flex-wrap">
                        <div className="rounded-xl bg-linear-to-r from-[#a9927d] to-[#e6ad7f] h-30 w-30 flex flex-col items-center justify-center">
                            <FaReact size={50} />
                            React JS
                        </div>
                        <div className="rounded-xl bg-linear-to-r from-[#a9927d] to-[#e6ad7f] h-30 w-30 flex flex-col items-center justify-center">
                            <SiExpress size={50} />
                            Express JS
                        </div>
                        <div className="rounded-xl bg-linear-to-r from-[#a9927d] to-[#e6ad7f] h-30 w-30 flex flex-col items-center justify-center">
                            <SiMongodb size={50} />
                            Mongo DB
                        </div>
                        <div className="rounded-xl bg-linear-to-r from-[#a9927d] to-[#e6ad7f] h-30 w-30 flex flex-col items-center justify-center">
                            <IoLogoFirebase size={50} />
                            Firebase
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="header-text text-3xl">Tools</h1>
                    <div className="flex gap-6 flex-wrap">
                        <div className="rounded-xl bg-linear-to-r from-[#a9927d] to-[#e6ad7f] h-30 w-30 flex flex-col items-center justify-center">
                            <FaGit size={50} />
                            Git
                        </div>
                        <div className="rounded-xl bg-linear-to-r from-[#a9927d] to-[#e6ad7f] h-30 w-30 flex flex-col items-center justify-center">
                            <FaGithub size={50} />
                            Github
                        </div>
                        <div className="rounded-xl bg-linear-to-r from-[#a9927d] to-[#e6ad7f] h-30 w-30 flex flex-col items-center justify-center">
                            <VscVscode size={50} />
                            VS Code
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;