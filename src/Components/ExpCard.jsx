import Pill from "./Pill.jsx";

const ExpCard = ({img, Company, expRole, duration, location, responsibilities, grade}) => {
    return (
        <div className="card
            bg-gray-950/10 backdrop-blur-xs
            border border-green-400/10
            shadow-[0_0_20px_rgba(0,255,0,0.15)] shadow-green-400/10
            hover:shadow-[0_0_20px_rgba(0,255,0,0.15)] hover:shadow-green-400/50 hover:scale-101
            xl:w-11/12 w-full rounded-4xl text-white">
            <div className="flex items-center gap-4 rounded-4xl">
                <img src={img} alt={Company} className="expLogo rounded-full sm:h-24 sm:w-24 h-16 w-16" />
                <div className="flex flex-col">
                    <p className="sm:text-3xl text-xl">{expRole}</p>
                    <p className="text-xl bold text-green-400">{Company}</p>
                </div>
            </div>


            <div className="flex expCardPills items-center gap-4 rounded-4xl max-sm:flex-col max-sm:items-start">
                <Pill text={location} />
                <Pill text={duration} />
                {grade && <Pill text={grade}/>}
            </div>

            <ul className="list-disc ulist">
                {responsibilities.map(responsibility => (
                    <li key={responsibility}>{responsibility}</li>
                ))}
            </ul>
        </div>
    )
}

export default ExpCard;