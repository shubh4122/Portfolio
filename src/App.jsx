import './App.css'
import CyberBackground3D from "./Components/CyberBackground3D.jsx";
import {useEffect, useState} from "react";
import SummaryTerminal from "./Components/SummaryTerminal.jsx";
import Pill from "./Components/Pill.jsx";
import HeroSection from "./Components/HeroSection.jsx";
import ExperienceSection from "./Components/ExperienceSection.jsx";
import TopNavbar from "./Components/TopNavbar.jsx";
import EducationSection from "./Components/EducationSection.jsx";
import ProjectSection from "./Components/ProjectSection.jsx";
import SkillsSection from "./Components/SkillsSection.jsx";
import Footer from "./Components/Footer.jsx";
// import { motion, AnimatePresence} from "motion/react";


const App = () => {
    const [HighPerfMode, setHighPerfMode] = useState(true);
    const [showTerminal, setShowTerminal] = useState(false);
    const [role, setRole] = useState(0);

    // setHighPerfMode(true); - //in 2 conditions - 1. Low performance device detected. 2. Toggled

    const roles = [
        "A Software Developer",
        "A Data Engineer",
        "An Impact-driven Engineer",
        "A Problem Solver",
        "A Tech Generalist",
        "An AI Developer",
    ];

    useEffect(() => {
        // Custom Cursor
        const dot = document.querySelector('.cursor-dot');
        const ring = document.querySelector('.cursor-ring');

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;

        const onMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            dot.style.left = mouseX + "px";
            dot.style.top = mouseY + "px";
        };

        window.addEventListener("mousemove", onMove);

        const loop = () => {
            // ring always eases toward mouse
            ringX += (mouseX - ringX) * 0.25;
            ringY += (mouseY - ringY) * 0.25;

            ring.style.left = ringX + "px";
            ring.style.top = ringY + "px";

            // This function schedules my functions to run 60 times every second (basically before each repaint - 60fps) Required for easing/lag smooth and controlled animations. CSS animations can't do it much
            requestAnimationFrame(loop);
        };

        loop();


        // Hero Section - ROLES
        const intervalId = setInterval(() => {
            setRole((prevRole)=>(prevRole+1) % roles.length)
        }, 2000);

        return () => {
            window.removeEventListener("mousemove", onMove);
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div className="relative overflow-x-hidden antialiased">
            {/*Background*/}
            {HighPerfMode && <CyberBackground3D/>}

            {/*Foreground*/}
            <div className="foreground overflow-hidden">
                {/*Cursor*/}
                <div className="cursor-ring">
                    <div className="cursor-dot"></div>
                </div>

                <TopNavbar setShowTerminal={setShowTerminal}/>

                {/*Terminal - code to be at the end*/}
                {showTerminal &&
                    <div className="absolute flex justify-center align-top h-screen w-screen z-50">
                        <SummaryTerminal closeTerminal={() => setShowTerminal(false)}/>
                    </div>
                }

                {/*Hero Section*/}
                <div className="h-[90vh] relative">
                    <HeroSection roles={roles} role={role} />
                </div>

                <div className="leftall experience">
                    <h1 className=" text-7xl font-bold tracking-tight text-green-400 ">Experience.</h1>
                    <div className="flex">
                        {/*<div className="timeline bg-green-400/30 h-auto w-[11px]">*/}
                        {/*    /!*<span className="absolute rounded-full bg-green-400 h-20 w-20"></span>*!/*/}
                        {/*    <span className="absolute bg-green-400 h-1/5 w-[9px]"/>*/}
                        {/*</div>*/}
                        <ExperienceSection/>
                    </div>
                </div>

                {/*<div className="education">*/}
                {/*    <h1 className="leftall text-7xl font-bold tracking-tight text-green-400 ">Education.</h1>*/}
                {/*    <EducationSection/>*/}
                {/*</div>*/}

                <div className="projects">
                    <h1 className="leftall text-7xl font-bold tracking-tight text-green-400 ">Projects.</h1>
                    <ProjectSection/>
                </div>

                <div className="h-screen">
                    <h1 className="leftall text-7xl font-bold tracking-tight text-green-400 ">Skills.</h1>
                    <SkillsSection/>
                </div>

                <Footer/>

            </div>

        </div>







        // <div className="min-h-screen text-gray-200 font-sans selection:bg-red-500 selection:text-white">
        //
        //     {/* The Background */}
        //     <CyberBackground3D />
        //
        //     {/* Your Content Goes Here */}
        //     <main className="relative z-10 px-6 py-12 max-w-5xl mx-auto">
        //
        //         <nav className="flex justify-between items-center mb-20">
        //             <div className="text-xl font-mono font-bold tracking-tighter">
        //                 <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2 shadow-[0_0_8px_rgba(255,59,59,0.8)]"></span>
        //                 ELLIOT_ALD.X
        //             </div>
        //         </nav>
        //
        //         <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
        //             HELLO <span className="text-red-500">FRIEND.</span>
        //         </h1>
        //
        //         {/* Example Glass Panel using Tailwind */}
        //         <div className="mt-12 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
        //             <h2 className="text-sm font-mono text-gray-400 mb-4">/// SYSTEM STATUS</h2>
        //             <p className="text-lg leading-relaxed">
        //                 All systems nominal. The particle background is now active.
        //             </p>
        //         </div>
        //
        //     </main>
        // </div>

        // <div id="canvas-container"></div>
        // <div id="static-bg"></div>
        // <div class="scanlines"></div>
        // <div className="App"> Hello Mr. Robot </div>
    )
}

export default App
