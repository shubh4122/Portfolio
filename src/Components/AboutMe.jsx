const AboutMe = () => {
    return (
        <div className="aboutMe">
            <img src="ascii-art.png" alt="Shubham Pandey" className="w-5/10 h-3/10 invert"/>

            <div>
                <p className="text-purple-400/80">shubham@portfolio : <span className="text-cyan-400">whoami</span></p>

                <p className="text-green-50">
                    Hi, <span className="text-cyan-400/80">I’m Shubham</span> — a software developer working at the intersection of systems and data.
                    <br/><br/>
                    <p>
                        With <span className="text-green-400/70">2+ YOE</span>, I design and build scalable, production-grade software that processes large volumes of data and delivers real business impact.
                    </p>
                    <br/>
                    My work spans
                    <span className="text-cyan-400/70"> software engineering</span>,
                    <span className="text-green-400/70"> data engineering </span>
                    and
                    <span className="text-yellow-400/70"> applied AI</span>.
                    I hold a <span className=" text-red-400/70">B.Tech in Information Technology (Honors)</span> and focus on building systems that are both robust and genuinely useful.
                </p>
            </div>

            <p className="absolute w-full text-center bottom-1 text-xs text-gray-400">[Shaped by a long-standing fondness for Linux environments and command-line workflows]</p>
        </div>
    )
}

export default AboutMe;