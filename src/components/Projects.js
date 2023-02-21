import React from "react";
import Project from "./Project";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";

const Projects = () => {
  return (
    <div>
      <Project
        title="Pandagram"
        description="An instagram clone application developed using React and Firebase. Users can upload photos, like/comment on posts, and follow other users."
        id="project1"
        photo={
          <img
            className="projectImg"
            src={project1}
            alt="Screenshot of Project 1"
          />
        }
        demo="https://pandagram-39745.web.app/"
        repo="https://github.com/amandakso/odin-instagram"
      />
    </div>
  );
};

export default Projects;
