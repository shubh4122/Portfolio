import {useEffect, useState} from "react";

const footer = () => {
    const [index,setIndex] = useState(0);

    const temp = [
        "Have an idea, a question, or something worth building?",
        "If something here resonated.",
        "Interested in building something meaningful together?"
    ];

    useEffect(()=> {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex+1)%temp.length);
        },9000)


        return () => clearInterval(intervalId);
    },[]);


    return (
        <div className="footer w-screen bg-gray-950/10 backdrop-blur-xs h-fit text-white ">

                <div className="">
                    <div className="leftall flex flex-col gap-4">
                        <span key={temp[index]} className="text-2xl inset-0 animate-[slideFade_5s_ease-out]">{temp[index]}</span>
                        <h2 className="text-6xl text-green-400 tracking-tight">Let's Connect!</h2>
                    </div>


                    <div className="contacts flex">
                        <p className="leftall text-2xl">
                            Phone:
                            <a href="tel:+91-7052800709" className="text-green-400 font-bold ">
                                +91 7052800709
                            </a>
                        </p>

                        <p className="leftall text-2xl ">
                            eMail:
                            <a href="mailto:spofficial4122@gmail.com" className="text-green-400 font-bold">
                                spofficial4122@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="flex gap-16 leftall">
                        <button className="border-3 border-green-400/30 rounded-full bg-black/40
                                backdrop-blur-xl backdrop-saturate-150 text-green-400
                                hover:shadow-[0_0_20px_rgba(0,255,0,0.2)] hover:-translate-y-0.5">
                            <img src="wa.png" className="h-16"/>
                        </button>

                        <button className="border-3 border-green-400/30 rounded-full bg-black/40
                                backdrop-blur-xl backdrop-saturate-150 text-green-400
                                hover:shadow-[0_0_20px_rgba(0,255,0,0.2)] hover:-translate-y-0.5">
                            <img src="lin.png" className="h-16"/>
                        </button>

                        <button className="btn  btn-primary text-black border border-green-400/30 rounded-full font-bold
                                bg-green-400 hover:shadow-[0_0_20px_rgba(0,255,0,0.2)] hover:-translate-y-0.5 flex items-center justify-center" >
                            <img src="github.svg" className="h-16"/>
                        </button>

                        <button className="border-3 border-green-400/30 rounded-full bg-black/40
                                backdrop-blur-xl backdrop-saturate-150 text-green-400
                                hover:shadow-[0_0_20px_rgba(0,255,0,0.2)] hover:-translate-y-0.5">
                            <img src="insta.png" className="h-16 scale-150"/>
                        </button>
                    </div>
                </div>

            <div className="flex flex-col gap-4 items-center contacts ">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <hr className="  w-8/10 border-gray-800"/>
                <p className="w-8/10 text-gray-500 text-center"> Made with passion in India. Built as a place to experiment, and shared as a record of the journey.</p>
            </div>

        </div>
    )
}

export default footer;

//Made with passion in India.
// Built as a place to experiment, and shared as a record of the journey.

//wa,email,lin,github,insta,footer

//Have an idea, a question, or something worth building? Let’s connect.
//
// If something here resonated, I’d be glad to connect.
//Interested in building something meaningful together? Let’s talk.
// Open to conversations, ideas, and collaborations.