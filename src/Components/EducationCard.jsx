import Pill from "./Pill.jsx";

const EducationCard = ({img, branch, institute, duration, location, grade}) => {
    return (
        <div className="cardEd
            bg-gray-950/10 backdrop-blur-xs
            border border-green-400/10
            shadow-[0_0_20px_rgba(0,255,0,0.15)] shadow-green-400/50
            w-screen rounded-4xl text-white">

            <div className="flex items-center gap-4 rounded-4xl">
                <img src={img} alt={institute} className="expLogo rounded-full h-24 w-24 " />
                <div className="flex flex-col">
                    <p className="text-3xl">{institute}</p>
                    <p className="text-xl bold text-green-400">{branch}</p>
                </div>
            </div>

            <div className="flex expCardPills items-center gap-4 rounded-4xl">
                <Pill text={location} />
                <Pill text={duration} />
                <Pill text={grade} />
            </div>

        </div>
    )
}

export default EducationCard;