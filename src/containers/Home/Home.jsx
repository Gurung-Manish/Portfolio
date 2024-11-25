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
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Social />
    </div>
  );
};

export default Home;
