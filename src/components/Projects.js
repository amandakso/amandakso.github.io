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
      <Project
        title="Blog Site"
        description="A blog created with an API-only backend and two frontends. One frontend serves as the client-side blog site where users can access and comment on blog posts. The other frontend allows users to create and edit blog posts."
        id="project2"
        photo={
          <img
            className="projectImg"
            src={project2}
            alt="Screenshot of Project 2"
          />
        }
        demo="https://amandakso.github.io/odin-blog-client/"
        repo="https://github.com/amandakso/odin-blog-client"
      />
    </div>
  );
};

export default Projects;
