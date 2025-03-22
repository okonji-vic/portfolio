import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}
    >

    
      <div className="hero-content" data-aos="fade-up">
        <h1>Hello, I'm <span>Okonji Emeka</span></h1>
        <p data-aos="fade-up" data-aos-delay="300">Frontend Developer | Building seamless web experiences</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
      </motion.section>
  );
}

export default Hero;
