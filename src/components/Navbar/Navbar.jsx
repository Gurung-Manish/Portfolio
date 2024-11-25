import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        {/* <li className="p__opensans">
          <a href="#home">
            <div className="navbar-item-wrapper">Home</div>
          </a>
        </li> */}
        <li className="p__opensans">
          <a href="#about">
            <div className="navbar-item-wrapper">About</div>
          </a>
        </li>
        <li className="p__opensans">
          <a href="#education">
            <div className="navbar-item-wrapper">Education</div>
          </a>
        </li>
        <li className="p__opensans">
          <a href="#experience">
            <div className="navbar-item-wrapper">Experience</div>
          </a>
        </li>
        <li className="p__opensans">
          <a href="#projects">
            <div className="navbar-item-wrapper">Projects</div>
          </a>
        </li>
        <li className="p__opensans">
          <a href="#contact">
            <div className="navbar-item-wrapper">Contact</div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
