import React from "react";
import "./About.css";
import heroImage from "../../assets/hero.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__watermark">
        <h1>ABOUT ME</h1>
      </div>
      <div className="about__body">
        <div className="about__image">
          <img src={heroImage} alt="Manish Gurung" />
        </div>
        <div className="about__text">
          <h1>Manish Gurung</h1>
          <p>
            Versatile Software Engineer experienced in full-stack development,
            skilled at delivering scalable, high-performance applications with a
            focus on backend and frontend integration. Passionate about solving
            complex problems through innovative approaches and working
            collaboratively in Agile teams.
          </p>
          <button className="about__button">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default About;
