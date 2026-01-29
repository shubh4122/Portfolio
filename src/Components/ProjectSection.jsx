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
                       skills={["Java","Firebase","Git","Java","Firebase","Git","Java","Firebase","Git"]}
                       description={"i want every section of my portfolio should be of height h-screen and if there are more elements in it that don't fit in the screen height, just the container i want every section of my portfolio should be of height h-screen and if there are "}/>


            <ProjCards img={"effiya.png"}
                       name={"ConnectHub"}
                       workingLink={""}
                       source={""}
                       category={"Android App"}
                       skills={["Java",""]}
                       description={""}/>


            <ProjCards img={"effiya.png"}
                       name={"ConnectHub"}
                       workingLink={""}
                       source={""}
                       category={"Android App"}
                       skills={["Java",""]}
                       description={""}/>

            <div></div>

            <ProjCards img={"effiya.png"}
                       name={"ConnectHub"}
                       workingLink={""}
                       source={""}
                       category={"Android App"}
                       skills={["Java",""]}
                       description={""}/>
        </div>
    )
}

export default ProjectSection;