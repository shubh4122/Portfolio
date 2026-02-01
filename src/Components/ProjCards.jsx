import Pill from "./Pill.jsx";

const ProductCards = ({img, name, description, skills, source, workingLink, category}) => {
    return (
        <div className="bg-gray-950/10 backdrop-blur-xs
            border border-green-400/10
            transition-shadow duration-300 ease-out
            hover:shadow-[0_0_20px_rgba(0,255,0,0.2)] hover:-translate-y-0.5
            xl:w-11/12 sm:w-60/100 lg:w-3/4 w-95/100 h-150 rounded-4xl text-white
            ">

            <div className="relative h-3/10 ">
                <img src={img} alt={name}  className="w-full h-full rounded-t-4xl"/>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
            </div>

            <p className="text-center text-3xl font-bold tracking-tight text-green-400 ">{name}</p>
            <div className="cardInternals h-1/3 flex justify-center">
                <p className="text-justify w-9/10 tracking-tighter hyphens-auto ">{description}</p>
            </div>

            <div className="cardInternals absolute bottom-0 cardInternals flex flex-col gap-4 w-full">
                <p className="text-center"> <span className="text-green-400 font-extrabold">{category}</span> | {skills.join(" | ")}</p>

                <div className="flex gap-2 w-full justify-center">
                    {
                        workingLink &&
                        <a href={workingLink}  target={"_blank"}>
                            <button className="btn btn-primary ProjCardBtn border-3 border-green-400/30 rounded-full bg-black/40
                            backdrop-blur-xl backdrop-saturate-150 text-green-400" onClick={workingLink}>View Project
                                🔗</button>
                        </a>
                    }
                    <a href={source} target={"_blank"}>
                        <button className="flex gap-2 items-center btn ProjCardBtn btn-primary text-black border border-green-400/30 rounded-full font-bold
                            bg-green-400" onClick={source}>Source <img src="github.svg" className="h-11/12"/></button>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ProductCards;