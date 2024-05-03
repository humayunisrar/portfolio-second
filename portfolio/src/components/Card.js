import React from "react";
import "./Card.css";
import sleet from "../assets/sleet.jpg";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="project-card">
          
    <img src={props.imgsrc} alt="project" />

    <h2 className="project-title">{props.title}</h2>
    <div className="project-details">
    <p>{props.text}</p>
      
    <div className="project-btn">
      <NavLink to={props.view} className="btn">
        View
      </NavLink>
      <NavLink to="" className="btn">
        Source
      </NavLink>
      </div>
    </div>
  </div>
);
};

export default Card;
