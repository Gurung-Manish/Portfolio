import React from "react";
import hero from "../../assets/hero.png";
import { Navbar } from "../../components";
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
      <Navbar />
      {/* Main Content */}
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
