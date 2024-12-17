import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

function Header() {
  return (
    <header className="header">
      <div className="logo">Okonji Emeka</div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
