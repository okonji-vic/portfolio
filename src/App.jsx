import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer style={{paddingBottom:'230px'}}>
        <p>&copy; 2024 by <a href="/">Emeka</a></p>
      </footer>
    </div>
    
  );
}

export default App;

