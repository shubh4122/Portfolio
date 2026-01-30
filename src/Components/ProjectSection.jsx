import ProjCards from "./ProjCards.jsx";

const ProjectSection = () => {
    return (
        <div className="section w-screen grid grid-cols-3 gap-y-8 place-items-center
            ">
            <ProjCards img={"effiya.png"}
                       name={"ConnectHub"}
                       workingLink={""}
                       source={""}
                       category={"Android"}
                       skills={["Java","Firebase","Git","XML","Picasso",]}
                       description=
                           {"ConnectHub is a social media app built on Firebase, supporting full CRUD for posts, image uploads, realtime search, and user discovery. Developed using MVVM architecture and structured Git workflows for scalability and maintainability."}
            />


            <ProjCards img={"effiya.png"}
                       name={"BlinkChat"}
                       workingLink={""}
                       source={""}
                       category={"Android"}
                       skills={["Java","Firebase","Git","XML","Glide",]}
                       description=
                           {"BlinkChat is a lightweight realtime chat app powered by Firebase, featuring secure authentication, instant messaging, and image sharing—built using FirebaseUI, Realtime Database, and Storage for a fast, seamless chat experience."}
            />


            <ProjCards img={"effiya.png"}
                       name={"Ransomware"}
                       workingLink={""}
                       source={""}
                       category={"Terminal/CLI"}
                       skills={["Python","Fernet","Encryption/Decryption"]}
                       description=
                           {"[Educational] A Python-based ransomware simulation built to understand encryption mechanics and security risks. The terminal-driven tool encrypts a directory and restores it only with a secure key—developed out of curiosity to explore real-world threat models and defenses."}
            />


            <ProjCards img={"effiya.png"}
                       name={"Git-GitHub Automation"}
                       workingLink={""}
                       source={""}
                       category={"Terminal/CLI"}
                       skills={["Git","Github","API","Automation","Shell"]}
                       description=
                           {"A CLI-based Git–GitHub automation script that creates a GitHub repository and links it to a local Git project in a single command—streamlining repository setup, reducing manual steps, and improving developer workflow efficiency."}
            />

            <ProjCards img={"effiya.png"}
                       name={"ytPlaylist-Downloader"}
                       workingLink={""}
                       source={""}
                       category={"Terminal/CLI"}
                       skills={["Python","Automation"]}
                       description=
                           {"A terminal-based YouTube downloader designed for bulk efficiency, enabling one-command downloads of full playlists—solving a common limitation of existing tools that require manual, per-video downloads."}
            />

            <ProjCards img={"effiya.png"}
                       name={"KeyFortress"}
                       workingLink={""}
                       source={""}
                       category={"Android"}
                       skills={["Java","Firebase","XML","Picasso","Biometrics"]}
                       description=
                           {"KeyFortress is a biometric-first password security solution developed at a hackathon, enabling users to log into accounts using biometrics while securely storing auto-generated, high-strength passwords that are nearly impossible to crack."}
            />

            <ProjCards img={"effiya.png"}
                       name={"PolyChat"}
                       workingLink={""}
                       source={""}
                       category={"Web"}
                       skills={["MERN","ReactJs","NodeJs","Styled Components","SocketIO","TensorFlowJs","Machine Learning"]}
                       description=
                           {"PolyChat is a multilingual web chat platform that uses machine learning models to perform real-time message translation, enabling seamless conversations between users speaking different languages without manual intervention."}
            />
        </div>
    )
}

export default ProjectSection;