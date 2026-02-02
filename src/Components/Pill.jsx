const Pill = ({text, setOnClick, setOnClickValue}) => {



    return (
        <div>
            <button
                    onClick={() => {
                        setOnClick(setOnClickValue)
                    }}
                    className="pill w-fit h-fit relative flex items-center justify-center gap-3
                                 rounded-full
                                 bg-black/40 backdrop-blur-xl backdrop-saturate-150
                                 border border-green-400/30
                                 text-white
                                 shadow-[0_0_20px_rgba(0,255,0,0.15)]
                                 hover:bg-black/60 hover:border-green-400/60
                                 hover:shadow-[0_0_30px_rgba(0,255,0,0.35)]
                                 transition-all duration-300
                                 cursor-hover-target">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.9)]"></span>
                {/*{text==="Open To Opportunities" &&*/}
                {/*    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.9)]"></span>}*/}
                <span className="opacity-70 max-md:text-sm">{text}</span>
            </button>
        </div>
    )
}

export default Pill;