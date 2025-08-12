import { useContext } from "react";
import displayPicture from "../Assets/DP.png"
import { MyContext } from "../LoadData";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import CountUp from "react-countup";
import pandaSleep from "../Lotties/panda.json"
import Lottie from "lottie-react";

function Home() {
    const { title, description, year_of_experience, project_complete, problem_solved } = useContext(MyContext);
    console.log(title)
    return(
        <div className="my-12">
            <div className="flex flex-col-reverse lg:flex-row justify-between gap-7 pb-8">
                <div className="lg:w-[60%] space-y-3 lg:space-y-8">
                    <h1 className="text-4xl lg:text-6xl space-y-3 header-text">
                        <p className="text-xl lg:text-3xl">{title}</p>
                        Hello I'm <br />
                        <p className="text-4xl lg:text-6xl text-[#a9927d] font-bold">Khandaker Ziaur Rahman Rehan</p>
                    </h1>
                    <p className="text-2xl">{description}</p>

                    <div className="flex items-center gap-4 lg:gap-9">
                        <a href="./resume.pdf" download="Resume of Khandaker Ziaur Rahman Rehan">
                            <button className="btn lg:px-10 lg:py-6 lg:text-xl rounded-full bg-[#a9927d] hover:bg-[#a9927dc5]">Download CV <IoMdDownload /></button>
                        </a>
                        <a href="https://github.com/zrrehan" target="_blank"><FaGithub size={34} /></a>
                        <a href="https://www.linkedin.com/in/zrrehan/" target="_blank"><FaLinkedinIn size={34} /></a>
                        <a href="https://x.com/r_rrehan_" target="_blank"><BsTwitterX size={34} /></a>
                    </div>
                </div>

                <div className="lg:w-[400px] lg:h-[500px]">
                    <Lottie animationData={pandaSleep} loop={true} className="absolute w-[130px] md:w-[200px] top-10 right-3 lg:hidden" />
                    <img className="rounded-full" src={displayPicture} alt="display picture" />
                    <Lottie animationData={pandaSleep} loop={true} className="relative -top-25 -left-30 w-[200px] hidden lg:flex"/>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 justify-between">
                {
                    [
                        { title: "Years of experience", number: year_of_experience }, 
                        { title: "Projects Completed", number: project_complete },
                        { title: "Problems Solved", number: problem_solved },
                    ].map((singleData) => <div className="flex items-center gap-2 ">
                        <h1 className="text-7xl">
                            <CountUp end={singleData.number} duration={17} className="header-text font-extrabold"></CountUp>
                        </h1>
                        <p className="text-3xl header-text">{singleData.title}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Home;