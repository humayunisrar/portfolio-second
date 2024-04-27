import React from "react";
import "./Hero.css";
import HeroImg from "../assets/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={HeroImg} alt="Hero" />
      </div>

      <div className="content">

        <h1>Hi, I'm John Doe</h1>
        <p>Full Stack Developer</p>

        <div>
          
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>

        </div>
      </div>
    </div>
  );
};

export default Hero;
