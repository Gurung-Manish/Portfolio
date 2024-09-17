import React from "react";
import hero from "../../assets/hero.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home_hero">
        <img className="home_hero_picture" src={hero} alt="hero"></img>
      </div>
      <div className="home_content">
        <div className="home_content_text">
          <h3>
            It's me <br /> Manish Gurung
          </h3>
        </div>
        <marquee>Manish Gurung</marquee>
      </div>
    </div>
  );
};

export default Home;
