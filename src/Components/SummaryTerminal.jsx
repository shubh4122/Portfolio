
const SummaryTerminal = ({closeTerminal}) => {

    const maximizeTerminal = () => {

    }
    const minimizeTerminal = () => {

    }

    return (
        <div className="relative rounded-[1%] bg-gray-950/10 backdrop-blur-sm backdrop-saturate-150
            border border-white/10
            shadow-2xl shadow-black/50
            ring-1 ring-white/5
            before:absolute before:inset-0 before:rounded-[1%] before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none
            top-1/12
            w-1/2 h-3/4">
            <div className="flex items-center gap-2 border-b border-white/10 h-1/24">
                {/*the first one is just to give the buttons a slight padding, normally it didn't work*/}
                <span className="w-1 h-3 rounded-full bg-transparent"></span>
                <button onClick={closeTerminal} className="w-3 h-3 rounded-full bg-red-500/80"></button>
                <button onClick={minimizeTerminal} className="w-3 h-3 rounded-full bg-yellow-500/80"></button>
                <button onClick={maximizeTerminal} className="w-3 h-3 rounded-full bg-green-500/80"></button>
            </div>
        </div>
    );
}

export default SummaryTerminal;