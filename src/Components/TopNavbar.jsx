const TopNavbar = ({setShowTerminal, setHighPerfMode, HighPerfMode}) => {

    const colorPerf = HighPerfMode ?
                            'border-green-400/30 text-green-400 hover:border-green-400/60 shadow-[0_0_20px_rgba(0,255,0,0.15)] hover:shadow-[0_0_30px_rgba(0,255,0,0.35)]':
                            'border-red-400/30 text-red-400 hover:border-red-400/60 shadow-[0_0_20px_rgba(255,0,0,0.15)] hover:shadow-[0_0_30px_rgba(255,0,0,0.35)]'

    return (
        <nav className="flex items-center justify-around w-screen h-[10vh]">
            <div className="logo flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.9)]"></span>
                <span className="text-white font-bold">Shubham Pandey</span>
            </div>


            <button
                onClick={() => {
                    setShowTerminal(true)
                }}
                className="w-1/7 h-2/4 relative flex items-center justify-center gap-5
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
                <span className="opacity-70">whoami (About me)</span>
            </button>

            <button
                onClick={()=>{
                    setHighPerfMode((prevMode) => !prevMode)
                }}
                className={`
                    ${colorPerf}
                    w-1/7 h-2/4 relative flex items-center justify-center gap-5
                    rounded-full
                    bg-black/40 backdrop-blur-xl backdrop-saturate-150
                    border font-mono text-sm
                    hover:bg-black/60
                    transition-all duration-300
                    cursor-hover-target`
                }>
                <span className="opacity-70">[ Performance Mode: {HighPerfMode ? "High": "Low"} ]</span>
            </button>
        </nav>
    )
}

export default TopNavbar;