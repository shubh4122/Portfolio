import Menu from "./Menu.jsx";
import {useState} from "react";

const TopNavbar = ({setShowTerminal, setHighPerfMode, HighPerfMode, openMenu, setOpenMenu}) => {


    const colorPerf = HighPerfMode ?
                            'border-green-400/30 text-green-400 hover:border-green-400/60 shadow-[0_0_20px_rgba(0,255,0,0.15)] hover:shadow-[0_0_30px_rgba(0,255,0,0.35)]':
                            'border-red-400/30 text-red-400 hover:border-red-400/60 shadow-[0_0_20px_rgba(255,0,0,0.15)] hover:shadow-[0_0_30px_rgba(255,0,0,0.35)]'

    return (
        <nav className="flex items-center justify-around w-screen h-[10vh] bg-black/20 xl:backdrop-blur-xs backdrop-blur-xl">
            <a href="#">
                <div className="logo flex items-center gap-2  w-[10vh] h-full">
                    {/*<span className="hidden xl:inline w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.9)]"></span>*/}
                    {/*<span className="hidden xl:inline text-white font-bold">Shubham Pandey</span>*/}
                    <img src="spg.png" loading="eager" className="sm:w-[10vh] sm:h-[10vh] w-[8vh] h-[8vh]" />
                </div>
            </a>
            <div className="navPageLinks  items-center gap-6 hidden xl:flex  h-full">
                <a href="#" className=""><div className="text-white/40 hover:text-white">Home</div></a>
                <a href="#expSec" className=""><div className=" text-white/40 hover:text-white">Experience</div></a>
                <a href="#projSec" className=""><div className=" text-white/40 hover:text-white">Projects</div></a>
                <a href="#skillSec" className=""><div className="text-white/40 hover:text-white">Skills</div></a>
                <a href="#contactSec" className=""><div className="text-white/40 hover:text-white">Contact Me</div></a>

                {/*<button*/}
                {/*    onClick={()=>{*/}
                {/*        setHighPerfMode((prevMode) => !prevMode)*/}
                {/*    }}*/}
                {/*    className={`*/}
                {/*    ${colorPerf}*/}
                {/*    min-[600px]:hidden*/}
                {/*    w-1/7 h-2/4 relative flex items-center justify-center gap-5*/}
                {/*    rounded-full*/}
                {/*    bg-black/40 backdrop-blur-xl backdrop-saturate-150*/}
                {/*    border font-mono text-sm*/}
                {/*    hover:bg-black/60*/}
                {/*    transition-all duration-300*/}
                {/*    cursor-hover-target`*/}
                {/*    }>*/}
                {/*    <span className="opacity-70">Performance Mode: {HighPerfMode ? "High": "Low"}</span>*/}
                {/*</button>*/}
            </div>


            <button
                onClick={() => {
                    setShowTerminal((prevState) => !prevState)
                }}
                className="navBtn w-fit h-2/4 relative flex items-center justify-center gap-2
                         rounded-full
                         bg-black/40 backdrop-blur-xl backdrop-saturate-150
                         border border-green-400/30
                         text-green-400 font-mono text-sm
                         shadow-[0_0_20px_rgba(0,255,0,0.15)]
                         hover:bg-black/60 hover:border-green-400/60
                         hover:shadow-[0_0_30px_rgba(0,255,0,0.35)]
                         transition-all duration-300
                         cursor-hover-target">
                <span className="opacity-80">&gt;_</span>
                <span className="opacity-70">whoami <span className="max-:">(About me)</span></span>
            </button>

            <button
                onClick={()=>{
                    setHighPerfMode((prevMode) => !prevMode)
                }}
                className={`
                    ${colorPerf}
                    max-[600px]:hidden
                    navBtn w-fit h-2/4 relative flex items-center justify-center gap-5
                    rounded-full
                    bg-black/40 backdrop-blur-xl backdrop-saturate-150
                    border font-mono text-sm
                    hover:bg-black/60
                    transition-all duration-300
                    cursor-hover-target`
                }>
                <span className="opacity-70">Performance Mode: {HighPerfMode ? "High": "Low"}</span>
            </button>

            <img src={!openMenu?"menu.png":"close.png"} loading="eager" className="inline xl:hidden w-[7vh] h-[7vh] scale-60 " onClick={()=>setOpenMenu(!openMenu)}/>

        </nav>
    )
}

export default TopNavbar;