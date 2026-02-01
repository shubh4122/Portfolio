const Menu = ({setOpenMenu, setHighPerfMode, HighPerfMode}) => {
    const colorPerf = HighPerfMode ?
        'border-green-400/30 text-green-400 hover:border-green-400/60 shadow-[0_0_20px_rgba(0,255,0,0.15)] hover:shadow-[0_0_30px_rgba(0,255,0,0.35)]':
        'border-red-400/30 text-red-400 hover:border-red-400/60 shadow-[0_0_20px_rgba(255,0,0,0.15)] hover:shadow-[0_0_30px_rgba(255,0,0,0.35)]'

    return (
        <menu className="z-100 absolute bg-black/20 backdrop-blur-xl rounded-4xl flex flex-col xl:hidden w-screen h-fit text-4xl items-center justify-center gap-8">
            <a href="#" onClick={()=>setOpenMenu(false)}><div className="text-white/40 hover:text-white">Home</div></a>
            <a href="#expSec" onClick={()=>setOpenMenu(false)}><div className=" text-white/40 hover:text-white">Experience</div></a>
            <a href="#projSec" onClick={()=>setOpenMenu(false)}><div className=" text-white/40 hover:text-white">Projects</div></a>
            <a href="#skillSec" onClick={()=>setOpenMenu(false)}><div className="text-white/40 hover:text-white">Skills</div></a>
            <a href="#contactSec" onClick={()=>setOpenMenu(false)}><div className="text-white/40 hover:text-white">Contact Me</div></a>

            <button
                onClick={()=>{
                    setHighPerfMode((prevMode) => !prevMode)
                }}
                className={`
                    ${colorPerf}
                    min-[600px]:hidden
                    navBtn w-fit h-full relative flex items-center justify-center gap-5
                    rounded-full
                    bg-black/40 backdrop-blur-xl backdrop-saturate-150
                    border font-mono text-sm
                    hover:bg-black/60
                    transition-all duration-300
                    cursor-hover-target`
                }>
                <span className="opacity-70">Performance Mode: {HighPerfMode ? "High": "Low"}</span>
            </button>
        </menu>
    )
}

export default Menu;