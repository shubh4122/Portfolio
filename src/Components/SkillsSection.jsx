import SkillsCard from "./SkillsCard.jsx";

const SkillsSection = () => {
    return (
        <div className=" w-screen ">
            <p className="text-white text-xl leftall w-3/4 ">
                Experienced across full-stack web and mobile development, data engineering, and data science, paired with
                effective communication and a strong learning mindset<span className="text-green-400 font-extrabold">.</span>
            </p>

            <div className="section grid grid-cols-4 gap-y-8 text-white place-items-center w-screen">
                <SkillsCard icon={"java.png"} skills={["Java", "Python", "SQL","HTML","CSS","Javascript", "Kotlin","SAS","Bash"]} bucket={"Languages"}/>
                <SkillsCard icon={"node.png"} skills={["MERN", "Reactjs", "Nodejs", "threejs","Tailwind","Bootstrap"]} bucket={"Web Technology"}/>
                <SkillsCard icon={"data.png"} skills={["Cloudera(Hive/Impala)","Firebase","SQL/Non-SQL","pandas/numpy","matplotlib","Power BI","SAS Suite"]} bucket={"Data"}/>
                <SkillsCard icon={"ml.png"} skills={["Modelling(Regression, Clustering,Statistical,Forecasting)","scikit-learn"]} bucket={"ML"}/>
                <SkillsCard icon={"android.png"} skills={["Java", "Kotlin", "XML", "Android Studio"]} bucket={"Mobile Dev."}/>
                <SkillsCard icon={"tools.png"} skills={["Linux","Git","VS Code","IntelliJ IDEA","Jupyter", "Android Studio","Figma","Postman","MS Office"]} bucket={"Tools/ Platforms"}/>
                <SkillsCard icon={"soft.png"} skills={["Problem Solving","Requirement Gathering","Effective Communication","System Design"]} bucket={"Other Skills"}/>
            </div>


            </div>
    )
}

export default SkillsSection;