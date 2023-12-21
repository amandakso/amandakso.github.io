import React from "react";
import Project from "./Project";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";

/**
 * Project list template
 *     {
      title:
      description:
      id:
      photo:
      demo:
      repo:,

    }
 * 
 */
const Projects = () => {
  const projectList = [
    {
      title: "Pandagram",
      description:
        "An instagram clone application developed using React and Firebase. Users can upload photos, like/comment on posts, and follow other users.",
      id: "project1",
      photo: project1,
      demo: "https://pandagram-39745.web.app/",
      repo: "https://github.com/amandakso/odin-instagram",
    },
    {
      title: "Blog Site",
      description:
        "A blog created with an API-only backend and two frontends. One frontend serves as the client-side blog site where users can access and comment on blog posts. The other frontend allows users to create and edit blog posts.",
      id: "project2",
      photo: project2,
      demo: "https://amandakso.github.io/odin-blog-client/",
      repo: "https://github.com/amandakso/odin-blog-client",
    },
    {
      title: "OdinBook",
      description:
        "A facebook clone developed with MERN stack. Project in progress.",
      id: "project3",
      photo: null,
      demo: "https://github.com/amandakso/odin-facebook-api",
      repo: "https://github.com/amandakso/odin-facebook-api",
    },
  ];

  return (
    <div>
      {projectList.map((project, index) => {
        return (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            id={project.id}
            photo={
              <img
                className="projectImg"
                src={project.photo}
                alt={`Screenshot of ${project.title}`}
              />
            }
            demo={project.demo}
            repo={project.repo}
          />
        );
      })}
    </div>
  );
};

export default Projects;
