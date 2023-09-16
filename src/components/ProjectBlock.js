import React from "react";
import "../css/ProjectBlock.css";
import Projects from "./Projects";
import threedots from "../assets/three-dots.png";

function ProjectBlock() {
  const info = [
    {
      id: 1,
      name: "Personal Portfolio Website",
      TechStack: "ReactJs, HTML, CSS, Javascript, Bootstrap",
      description:
        "Crafted a personal portfolio website to highlight my skills and projects, providing a comprehensive online platform for sharing my professional journey. This showcase demonstrates my dedication to web development and my ability to create visually engaging and informative digital experiences.",
      link: "https://aryan-seth-portfolio3.netlify.app/",
    },
    {
      id: 2,
      name: "AI Summarizer",
      TechStack: "ReactJs, HTML, CSS, Javascript, Rapid API, Redux Toolkit,Tailwind CSS",
      description:
        "Built a user-friendly web app with OpenAI's GPT to summarize articles instantly when you paste their links, simplifying complex content and saving time.",
      link: "https://ai-summarizer-23.netlify.app/",
    },
    {
      id: 3,
      name: "Google Search Portfolio Website",
      TechStack: "ReactJs, HTML, CSS, Javascript",
      description:
        "The website you are currently looking at is  Google Search-inspired single-page React portfolio website showcasing my qualifications, skills, and software developer experiences. Created an engaging and dynamic user interface to highlight notable projects and achievements. Leveraged HTML, CSS, and JavaScript to deliver an innovative and visually appealing online presence.",
      link: "https://github.com/aryan-prog/google-portfolio",
    },
    {
      id: 5,
      name: "Intehire",
      TechStack: "ReactJs, HTML, CSS, Javascript, Firebase",
      description:
        "Implemented an innovative BTP that leverages cutting-edge technologies to address specific research objectives. Developed robust algorithms and interactive interfaces, showcasing problem-solving skills and a deep understanding of the subject matter. Result-oriented approach, contributing to valuable insights and advancements in the field.",
      link: "https://github.com/aryan-prog/btp",
    },
    {
      id: 4,
      name: "Google Keep Clone",
      TechStack: "ReactJs, HTML, CSS, Javascript, Material UI",
      description:
        "Designed and built a Google Keep clone enabling note creation, saving, archiving, and deletion. Demonstrated strong development skills in creating this practical web application.",
      link: "https://github.com/aryan-prog/Google-Keep-Clone",
    },
  ];

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
