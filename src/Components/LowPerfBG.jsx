const LowPerfBG = () => {
    return (
        <div className="fixed w-screen h-screen z-[-2]">
            {/*<div className="w-screen h-screen z-[-1] bg-black/40 backdrop-blur-xs backdrop-saturate-150"></div>*/}
            <div className=" bg-black w-screen h-screen z-[-2] flex items-center justify-center ">
                <img src="staticBg.png"  />
            </div>
        </div>
    )
}

export default LowPerfBG;