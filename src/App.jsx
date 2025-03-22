import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      offset: 120,
      // once: true,
      mirror: true,
    });
  }, []);
  
  return (
    <Router>
      <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      {/* <footer style={{paddingBottom:'230px'}}>
        <p>&copy; 2024 by <a href="/">Emeka</a></p>
      </footer> */}
      <Footer />
    </div>
    </Router>
  );
}

export default App;
    
    
 

