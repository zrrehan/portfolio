import InfoTable from "./InfoTable";

function AboutMe() {
    return(
        <div className="space-y-7">
            <div className="space-y-2">
                <h1 className="text-5xl font-bold header-text">About Me</h1>
                <p className="text-xl">
                    I am a passionate software engineer specializing in full-stack web development. With expertise in React, Express.js, and MongoDB, I build scalable and efficient applications that deliver seamless user experiences. Continuously learning and adapting, I strive to create clean, maintainable code and innovative solutions that solve real-world problems.
                </p>
            </div>
            <InfoTable></InfoTable>
        </div>
    )
}

export default AboutMe;