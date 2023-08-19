import React from "react";
import uniqid from "uniqid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import "./ProjectContainer.css";

import techTrove from "../../assets/projects/TechTrove.jpg";
import musicProject from "../../assets/projects/Music project.jpg";
import weatherApp from "../../assets/projects/Weather app.jpg";

const ProjectContainer = ({ project }) => {
  let imageUrl = "";

  if (project.name === "TechTrove") {
    imageUrl = techTrove;
  } else if (project.name === "Music project") {
    imageUrl = musicProject;
  } else {
    imageUrl = weatherApp;
  }

  return (
    <div className="project">
      <h3>{project.name}</h3>

      <div className="project__img">
        <img src={imageUrl} alt={project.name} />
      </div>

      <p className="project__description">{project.description}</p>
      {project.stack && (
        <ul className="project__stack">
          {project.stack.map((item) => (
            <li key={uniqid()} className="project__stack-item">
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className="icons">
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label="source code"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label="live preview"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LaunchIcon />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectContainer;
