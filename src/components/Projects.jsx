import React from "react";
import "./Projects.css";

function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my work.",
      link: "#",
    },
    {
      title: "A todo App",
      description: "A todo application built with React",
      link: "https://todoist02.netlify.app/",
    },
    {
      title: "A github user search app",
      description: "A github user search app built with React.",
      link: "https://repo02.netlify.app/",
    },
    {
      title: "A calculator",
      description: "A simple calculator app built with React.",
      link: "https://calculator880.netlify.app/",
    },
    {
      title: "A basketball game counter app",
      description: "A basketball game counter app built with React.",
      link: "https://counter-app88.netlify.app/",
    },
    
    {
      title: "A Discount Calculator",
      description: "A Simple Discount Calculator built with React.",
      link: "https://discount-calculator01.netlify.app/",
    },
    {
      title: "Blog Website",
      description: "A blog website built with React and Contentful",
      link: "https://blog-post01.netlify.app/",
    },
    {
      title: "E-commerce Website",
      description: "An e-commerce website built with React and Commerce.js",
      link: "#",
    },


  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
