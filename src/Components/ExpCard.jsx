import Pill from "./Pill.jsx";

const ExpCard = ({img, Company, expRole, duration, location, responsibilities}) => {
    return (
        <div className="card
            bg-gray-950/10 backdrop-blur-xs
            border border-green-400/10
            shadow-[0_0_20px_rgba(0,255,0,0.15)] shadow-green-400/50
            w-3/4 rounded-4xl text-white">
            <div className="flex items-center gap-4 rounded-4xl">
                <img src={img} alt={Company} className="expLogo rounded-full h-24 w-24 " />
                <div className="flex flex-col">
                    <p className="text-3xl">{expRole}</p>
                    <p className="text-xl bold">{Company}</p>
                </div>
            </div>


            <div className="flex expCardPills items-center gap-4 rounded-4xl">
                <Pill text={location} />
                <Pill text={duration} />
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