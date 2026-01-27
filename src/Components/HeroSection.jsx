import Pill from "./Pill.jsx";

const HeroSection = ({roles, role}) => {
    return (
        <div className="absolute hero w-1/2 ">

            <div className="topHero h-fit flex items-center justify-start gap-5">
                <Pill text={"Open To Opportunities"} setOnClick={null} setOnClickValue={null}/>
                <span key={roles[role]} className="text-green-200 inset-0 animate-[slideFade_0.5s_ease-out]" >{roles[role]}</span>
            </div>
            <h1 className="text-7xl font-bold tracking-tight text-green-400 ">Hi, I'm Shubham.</h1>
            <h2 className="sellingLine text-4xl font-bold tracking-tight text-white">Building Systems, Delivering Impact!</h2>
            <p className="text-lg text-green-100">
                Through end-to-end, production-grade software — spanning design, development,
                data, testing, and deployment — with
                <span className="italic font-bold text-green-400"> 2+ years of hands-on experience </span>
                across global teams in
                Saudi Arabia, the US, Vietnam, Malaysia, and the UAE.
            </p>
            <button className="heroBtn border-3 border-green-400/30 rounded-full bg-black/40
                            backdrop-blur-xl backdrop-saturate-150 text-green-400">View Resume 📃</button>
            <button className="heroBtn border border-green-400/30 rounded-full
                            bg-green-400">Get in Touch 📩</button>
        </div>
    )
}

export default HeroSection;