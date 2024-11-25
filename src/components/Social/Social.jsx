import React from "react";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa"; // Importing popular social icons from react-icons
import "./Social.css";
const Social = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/-manish-gurung/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="app__social-icon" />
      </a>
      <a
        href="https://github.com/Gurung-Manish"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="app__social-icon" />
      </a>
      <a
        href="https://www.youtube.com/@_manish_gurung_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube className="app__social-icon" />
      </a>
      <a
        href="https://www.instagram.com/_manish_grg_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="app__social-icon" />
      </a>
    </div>
  );
};

export default Social;
