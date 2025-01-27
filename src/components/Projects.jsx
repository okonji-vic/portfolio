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
      title: "Pizza Ordering App",
      description:
        "A pizza ordering app built with React. This is an app that allows users to order pizza online.",
      link: "https://pizza-menu-1.netlify.app/",
    },
    {
      title: "A todo App",
      description:
        "A todo application built with React. this is a simple todo app that allows users to add, delete and mark todos as completed or pending. It helps in daily task management.",
      link: "https://todoist02.netlify.app/",
    },
    {
      title: "A github user search app",
      description: "A github user search app built with React.",
      link: "https://repo02.netlify.app/",
    },
    {
      title: "Blog Website",
      description: "A blog website built with React and Contentful",
      link: "https://blog-post01.netlify.app/",
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
      title: "Advice Generator",
      description:
        "An advice generator app that fetches advice from an API and displays it.",
      link: "https://advice01.netlify.app/",
    },
    // {
    //   title: "E-commerce Website",
    //   description: "An e-commerce website built with React and Commerce.js",
    //   link: "#",
    // },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <iframe
              src={project.link} // Replace with your live pictures URL
                title="Live Pictures"
                width="100%"
                height="350px"
                style={{
                    border: "2px solid #ccc",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                }}
                allowFullScreen
            />
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
