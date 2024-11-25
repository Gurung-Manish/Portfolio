import React from "react";
import { Navbar, Social } from "../../components";
import {
  Projects,
  Experience,
  Contact,
  Education,
  About,
} from "../../containers";
import "./Home.css";

const Home = () => {
  return (
    <div className="home" id="home">
      {/* Left Navbar */}
      <div className="home__navbar">
        <Navbar />
      </div>

      {/* Main Content (Centered) */}
      <div className="home__content">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>

      {/* Right Social */}
      <div className="home__social">
        <Social />
      </div>
    </div>
  );
};

export default Home;
