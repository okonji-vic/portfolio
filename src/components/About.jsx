import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Hi! I'm <strong>Okonji Emeka Nicholas</strong>, a Frontend Developer. 
              I love building interactive, user-friendly websites/applications and bringing ideas to life through code.
            </p>
            <p>
              With a diploma in Frontend Engineering at AltSchool Africa, I blend analytical thinking with creative problem-solving.
            </p>
          </div>
          <div className="about-photo">
            <img src="./src/assets/IMG-20240817-WA0002.jpg" alt="Okonji Emeka" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
