import React from "react";

import "./Work.css";
import "../About/About.css";

import ProjectCard from "./ProjectCard/ProjectCard";
import projectData from "./projectData.json";

export default class Work extends React.Component {
  render() {
    return (
      <div>
        <div className="about-title">My Work</div>
        <div id="projects">
          {projectData.map((data) => {
            return (
              <ProjectCard
                key={data.key}
                size={data.size}
                title={data.title}
                titleSize={data.titleSize}
                date={data.date}
                language={data.language}
                imageUrl={data.imageUrl}
                details={data.details}
                githubUrl={data.githubUrl}
                additionalText={data.additionalText}
                expandedDetails={data.expandedDetails}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
