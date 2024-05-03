import React from "react";
import "./Card.css";
import sleet from "../assets/sleet.jpg";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">My Recent Work</h1>

      <div className="project-container">
        <div className="project-card">
          
          <img src={sleet} alt="project" />

          <h2 className="project-title">Project Name</h2>
          <div className="project-details">
          <p>Project Description</p>
            
          <div className="project-btn">
            <NavLink to="" className="btn">
              View
            </NavLink>
            <NavLink to="" className="btn">
              Source
            </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
