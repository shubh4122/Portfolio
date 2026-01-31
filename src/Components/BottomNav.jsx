const BottomNav = () => {
    return(
        <div className="bnav sticky bottom-1/40 w-1/2 h-20 border border-white/10 bg-gray-800/30 backdrop-blur-xs left-1/4 rounded-2xl flex items-center justify-center gap-4">
            <a href={""} className="h-full w-14 " target={"_blank"}>
                <div  className="hover:-translate-y-2 hover:scale-150 hover:rotate-4  h-full w-14 rounded-2xl overflow-hidden">
                    <img src="me1.jpeg" className="scale-150 -translate-y-1.5"/>
                </div>
            </a>

            <vr className="h-full border-2 border-green-400/20 rounded-full"/>

            <a href={"https://www.linkedin.com/in/shubh4122"} target={"_blank"} >
                <img src="lin.png" className="hover:-translate-y-2  hover:scale-150 hover:rotate-4  h-16 w-16 grayscale hover:grayscale-0"/>
            </a>

            <a href={"https://github.com/shubh4122"} target={"_blank"} >
                <img src="github.svg" className="hover:-translate-y-2 hover:scale-150 hover:rotate-4  h-14 w-14 invert-40 grayscale hover:invert"/>
            </a>

            <a href={`https://wa.me/917052800709?text=Hi Shubham, I came across your portfolio and wanted to connect.`} target={"_blank"} >
                <img src="wa.png" className="hover:-translate-y-2 hover:scale-150 hover:rotate-4  h-16 w-16  grayscale-80 hover:grayscale-0 "/>
            </a>

            <a href={"https://x.com/shubh_twt"} target={"_blank"} >
                <img src="x.png" className="hover:-translate-y-2 hover:scale-150 hover:-rotate-4  h-16 w-16 -translate-x-1 invert-40 scale-90 grayscale hover:invert"/>
            </a>
            {/*<img src="insta.png" className="hover:-translate-y-2 hover:scale-150 h-16 w-16 scale-150"/>*/}
            {/*<img src="email.png" className="hover:-translate-y-2 hover:scale-150 h-16 w-16"/>*/}
            <vr className="h-full border-2 border-green-400/20 rounded-full"/>

            <a href={"https://drive.google.com/file/d/1vhXVr9NZ_fSGU6ExyUxJO1K8UGyHdkDS/view?usp=sharing"} target={"_blank"} >
                <button className="hover:-translate-y-2 hover:scale-150 hover:-rotate-4  h-full bg-purple-500/90 text-black font-bold text-xl bnav rounded-2xl">Resume</button>
            </a>

            <a href={"mailto:spofficial4122@gmail.com"} target={"_blank"} >
                <button
                    className="flex gap-3 items-center justify-center tracking-tighter hover:-translate-y-2 hover:scale-150 hover:-rotate-4 h-full bg-indigo-800/90 text-white font-bold text-xl bnav rounded-2xl"
                >
                    <img src="email.png" className="h-6 invert"/> Get in Touch
                </button>
            </a>
        </div>
    )
}

// my photo, and about me. |
//Home - Experience - Projects - Skills |
// LIn, Whatsapp, Github, Insta, Email |
//View Resume

export default BottomNav;