import React from "react";
import "./Card.css";
import ProjectData from "./WorkData";
import Card from "./Card";
const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">My Recent Work</h1>
      <div className="project-container">
        {ProjectData.map((value, index) => {
            return (
                <Card
                key={index}
                imgsrc={value.imgsrc}
                title={value.title}
                text={value.text}
                view={value.view}
                />
            );
        })}
        </div>
    </div>
  );
};

export default Work;
