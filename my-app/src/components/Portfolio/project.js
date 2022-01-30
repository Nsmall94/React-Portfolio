import {useState, useEffect} from "react";

import ProjectHolder from "../projectHolder/projectHolder";

import myspace2 from "../../Assets/project-photos/mspace.png"
import hmbp from "../../Assets/project-photos/hmbp.jpg"
import budge from "../../Assets/project-photos/budget.png"



const Portfolio= () => {
    useEffect(() => {
        console.log("yummy")
    })

    const [projects, setProject] = useState([
        {
            id: 1,
            name: "Media Therapy",
            image: mediatherapy,
            github: "https://github.com/Nsmall94/Media-Therapy",
            app: "https://nsmall94.github.io/Media-Therapy/",
            description: "Media Therapy",
            technologies: ""
        },
        {
            id: 2,
            name: "Daily Planner",
            image: daily,
            github: "https://github.com/Nsmall94/Daily-Planner",
            app: "https://nsmall94.github.io/Daily-Planner/",
            description: "an app used to keep track of your day plans",
            technologies: ""
        },
        {
            id: 3,
            name: "Weather Dashboard",
            image: weather,
            github: "https://github.com/Nsmall94/Weather-Dashboard",
            app: "https://nsmall94.github.io/Weather-Dashboard/",
            description: "An app to check the weather",
            technologies: ""
        },
      
    ])


    return ( <ProjectHolder projects={projects}/>);
}
 
export default Portfolio;