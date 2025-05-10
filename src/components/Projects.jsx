import React from "react";
import "./Projects.css";

function Projects() {
  const projectList = [
  
  
    {
      title: "An NFT Marketplace Application",
      description: "An NFT Marketplace Desktop Application built with React and typescript. Documentation is available on the project's github repository.",
      link: "https://nft-marketplace-001.netlify.app/",
    },
    {
      title: "Task Management Application",
      description:
        "Task Management application built with React and typescript. this is a simple todo app that allows users to add, delete and mark todos as completed or pending. It helps in daily task management, has authentication, calender etc.",
      link: "https://cil-todo.netlify.app/",
    },
    {
      title: "Pizza Ordering App",
      description:
        "A pizza ordering app built with React. This is an app that allows users to order pizza online.",
      link: "https://pizza-menu-1.netlify.app/",
    },
    {
      title: "A Biorhythm Calculator with Authentication",
      description: "A biorhythm calculator app with authentication built with Ionic framework using React.",
      link: "https://biorhythm01.netlify.app/",
    },
    {
      title: "A TMDB Movie Search App",
      description: "A movie search app built with React using TMDB API.",
      link: "https://movieapp101.netlify.app/",
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
    
    

    // {
    //   title: "A Discount Calculator",
    //   description: "A Simple Discount Calculator built with React.",
    //   link: "https://discount-calculator01.netlify.app/",
    // },
    // {
    //   title: "Advice Generator",
    //   description:
    //     "An advice generator app that fetches advice from an API and displays it.",
    //   link: "https://advice01.netlify.app/",
    // },
    // {
    //   title: "E-commerce Website",
    //   description: "An e-commerce website built with React and Commerce.js",
    //   link: "#",
    // },
  ];

  return (
    <section id="projects" className="projects">
      <h2
        data-aos="fade-up"
      >My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}
            data-aos="flip-left" 
            data-aos-delay={index * 200}
          >
            <h3
              data-aos="fade-right"
            >{project.title}</h3>
            <p
              data-aos="fade-left"
            >{project.description}</p>
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
              data-aos="zoom-in"
            />
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              data-aos="fade-up"
            data-aos-delay="500"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
