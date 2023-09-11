import React, { useState } from "react";
import "../css/ProjectBlock.css";
import Projects from "./Projects";
import threedots from "../assets/three-dots.png";

function ProjectBlock() {
  const [info, setInfo] = useState([
    {
      id: 1,
      name: "Google Search Portfolio Website",
      TechStack: "Reactjs, HTML, CSS, Javascript",
      description:
        "The website you are currently looking at is  Google Search-inspired single-page React portfolio website showcasing my qualifications, skills, and software developer experiences. Created an engaging and dynamic user interface to highlight notable projects and achievements. Leveraged HTML, CSS, and JavaScript to deliver an innovative and visually appealing online presence.",
      link: "https://github.com/aryan-prog/google-portfolio",
    },
    {
      id: 2,
      name: "Intehire",
      TechStack: "Reactjs, HTML, CSS, Javascript, Firebase",
      description:
        "Implemented an innovative BTP that leverages cutting-edge technologies to address specific research objectives. Developed robust algorithms and interactive interfaces, showcasing problem-solving skills and a deep understanding of the subject matter. Result-oriented approach, contributing to valuable insights and advancements in the field.",
      link: "https://github.com/aryan-prog/btp",
    },
    {
      id: 3,
      name: "Google Keep Clone",
      TechStack: "Reactjs, HTML, CSS, Javascript, Material UI",
      description: "",
      link: "https://github.com/aryan-prog/Google-Keep-Clone",
    },
  ]);

  return (
    <div className="proj">
      <span id="project-heading">Projects</span>
      <br />
      <div className="project-results">
        <span id="project-results">Showing results for Projects</span>
        <img src={threedots} alt=""></img>
      </div>
      {info.map((curElem) => {
        return (
          <Projects
            key={curElem.id}
            name={curElem.name}
            TechStack={curElem.TechStack}
            description={curElem.description}
            link={curElem.link}
          />
        );
      })}
    </div>
  );
}

export default ProjectBlock;
