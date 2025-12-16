import './App.css'
import CyberBackground3D from "./Components/CyberBackground3D.jsx";
import {useEffect, useState} from "react";


const App = () => {
    const [HighPerfMode, setHighPerfMode] = useState(true);

    // setHighPerfMode(true); - //in 2 conditions - 1. Low performance device detected. 2. Toggled

    useEffect(() => {
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

        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    return (
        <div className="relative overflow-x-hidden">
            {/*Background*/}
            {HighPerfMode && <CyberBackground3D/>}

            {/*Cursor*/}
            <div className="cursor-ring">
                <div className="cursor-dot"></div>
            </div>

            {/*Foreground*/}
            <nav className="relative flex items-center justify-between ">
                <div className="text-red-700 border-dotted border-red-600 border-2">Hello World</div>
            </nav>
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
