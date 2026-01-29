import EducationCard from "./EducationCard.jsx";

const EducationSection = () => {
    return (
        <div className="w-screen border-8 border-green-400 flex ">

            <EducationCard img="hbtu.png" location={"Kanpur"} duration={"2020 - 2024"} branch={"Information Technology"} institute={"Harcourt Butler Technical University"} grade={"8.62/10"}/>

            {/*<EducationCard img="gurukul.jpg" location={"Lucknow"} duration={"2018 - 2019"} branch={"Science + Computers"} institute={"Gurukul Academy"} grade={"95.5%"}/>*/}

            {/*<EducationCard img="gurukul.jpg" location={"Lucknow"} duration={"2016 - 2027"} branch={"Science + Computers"} institute={"Gurukul Academy"} grade={"94.6%"}/>*/}
        </div>
    )
}

export default EducationSection;