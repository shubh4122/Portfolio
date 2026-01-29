const SkillsCard = ({icon, bucket, skills}) => {
    return (
        <div className="cardInternals bg-gray-950/10 backdrop-blur-xs
            border border-green-400/10
            transition-shadow duration-300 ease-out
            hover:shadow-[0_0_20px_rgba(0,255,0,0.2)] hover:-translate-y-0.5
            w-11/12 h-60 rounded-4xl text-white">

            <div className="flex gap-2 items-center justify-start h-2/10">
                <img src={icon} className="h-full"/>
                <h1 className="text-2xl text-gray-400 font-extrabold">{bucket}</h1>
            </div>
            <div className="cardInternals wrap-break-word text-green-300">
                <p>{skills.join(", ")}</p>
            </div>
        </div>
    )
}

export default SkillsCard;