import React from "react";
import Project from "./Project";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

/**
 * Project list template
 *     {
      title:
      description:
      id:
      photo:
      alt:
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
      alt: "Screenshot of Pandagram project",
      demo: "https://pandagram-39745.web.app/",
      repo: "https://github.com/amandakso/odin-instagram",
    },
    {
      title: "Blog Site",
      description:
        "A blog created with an API-only backend and two frontends. One frontend serves as the client-side blog site where users can access and comment on blog posts. The other frontend allows users to create and edit blog posts.",
      id: "project2",
      photo: project2,
      alt: "Screenshot of Blog Site project",
      demo: "https://amandakso.github.io/odin-blog-client/",
      repo: "https://github.com/amandakso/odin-blog-client",
    },
    {
      title: "OdinBook",
      description:
        "A facebook clone developed with MERN stack. Project in progress.",
      id: "project3",
      photo: project3,
      alt: "Project in progress. Project placeholder photo of a developing plant. Photo by Francesco Gallarotti on Unsplash",
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
                alt={project.alt}
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
