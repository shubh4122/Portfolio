import ExpCard from "./ExpCard.jsx";
import EducationCard from "./EducationCard.jsx";

const ExperienceSection = () => {
    return (
        <div className="h-fit w-screen  flex flex-col items-end">
            <ExpCard img={"effiya.png"} expRole={"Analyst - Software & Data Engineering"}
                     duration={"Jun'2024 - Present"} Company={"Effiya Technologies"} location={"Hybrid | Saudi Arabia | Delhi"}
                     responsibilities={[
                         "Owned end-to-end system delivery — from data ingestion and modeling to production deployment and dashboards.",
                         "Designed and optimized data pipelines and storage layers for performance, reliability, and scale.",
                         "Built and productionized statistical and ML models to support forecasting, pricing, and risk decisions.",
                         "Exposed insights through production-ready dashboards and KPIs for business and executive use.",
                         "Led client-facing solution delivery across onsite and remote engagements.",
                         "Collaborated with and led small engineering teams to ship reliable systems.",
                         "Delivered software in regulated, high-impact domains including energy, banking, fraud, and risk."
                     ]}/>

            <ExpCard img={"atom.jfif"} expRole={"SDET Intern"}
                     duration={"Nov'2023 - May'2024"} Company={"Atom EI"} location={"Remote"}
                     responsibilities={[
                         "Built QA and product analysis capabilities from the ground up, owning end-to-end, integration, and sanity testing workflows.",
                         "Drove defect reduction and quality improvements, cutting production bugs by ~80% and improving overall user experience by ~50%.",
                         "Supported product optimization through data-driven analysis, leveraging tools like MS Clarity and Amplitude to identify usage patterns and pain points.",
                         "Contributed to UX and feature refinement via competitor analysis, hands-on product evaluation, and design feedback using Figma and collaboration tools.",
                     ]}/>

            <ExpCard img={"jzLogo.png"} expRole={"Android Developer"}
                     duration={"Aug'2022 - Sep'2022"} Company={"John Zakariah Technologies"} location={"Remote"}
                     responsibilities={[
                         "Built a production-ready Android application using MVVM architecture, integrating end-to-end with Firebase services.",
                         "Developed a web-based admin panel to enable efficient data management and operational workflows.",
                         "Owned full feature integration across mobile and backend layers, ensuring data consistency and reliability.",
                         "Rapidly learned and applied new technologies to deliver core system components within project timelines.",
                     ]}/>

            <ExpCard img={"hbtu.png"} expRole={"Harcourt Butler Technical University"}
                     duration={"Aug'2022 - Sep'2022"} Company={"Bachelor of Technology - Information Technology"} location={"Kanpur"}
                     grade={"8.62/10"} responsibilities={[]}
                     />

        </div>
    )
}

export default ExperienceSection;