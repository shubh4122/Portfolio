import Pill from "./Pill.jsx";

const HeroSection = ({roles, role}) => {
    return (
        <div className="absolute hero  
                        2xl:w-1/2 xl:w-3/4 w-full">

            <div className="topHero h-fit flex items-center justify-start gap-5">
                <Pill text={"Open To Opportunities"} setOnClick={null} setOnClickValue={null}/>
                {/*<span key={roles[role]} className="text-green-200 inset-0 animate-[slideFade_0.5s_ease-out]" >{roles[role]}</span>*/}
            </div>
            <h1 className="xl:text-7xl sm:text-6xl text-4xl
                            font-bold tracking-tight text-green-400 ">
                Hi, I'm Shubham.
            </h1>
            <h2 className="sellingLine
                            xl:text-4xl sm:text-3xl text-xl
                            font-bold tracking-tight text-white">
                Building Systems, Delivering Impact!
            </h2>
            <p className="text-lg text-green-100 max-[400px]:text-sm">
                Through end-to-end, production-grade software — spanning design, development,
                data, testing, and deployment — with
                <span className="italic font-bold text-green-400"> 2+ years of hands-on experience </span>
                across global teams in
                Saudi Arabia, the US, Vietnam, Malaysia, and the UAE.
            </p>
            <a href="https://drive.google.com/file/d/1vhXVr9NZ_fSGU6ExyUxJO1K8UGyHdkDS/view?usp=sharing" target={"_blank"}>
                <button className="heroBtn
                                    sm:w-fit w-full
                                    border-3 border-green-400/30 rounded-full bg-black/40 hover:scale-90
                                    backdrop-blur-xl backdrop-saturate-150 text-green-400">View Resume 📃</button>
            </a>
            <a href="mailto:spofficial4122@gmail.com" target={"_blank"}>
                <button className="heroBtn
                                    sm:w-fit w-full
                                    border border-green-400/30 rounded-full font-bold hover:scale-90
                                    bg-green-400">Get in Touch 📩</button>
            </a>
        </div>
    )
}

export default HeroSection;