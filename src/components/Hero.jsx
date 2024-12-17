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
      transition={{ duration: 1 }}
    >

    
      <div className="hero-content">
        <h1>Hello, I'm <span>Okonji Emeka</span></h1>
        <p>Frontend Developer | Building seamless web experiences</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
      </motion.section>
  );
}

export default Hero;
