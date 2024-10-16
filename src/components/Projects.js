import React from "react";
import Project from "./Project";
import pandagramPhoto from "../assets/images/pandagramPhoto.png";
import blogPhoto from "../assets/images/blogPhoto.png";
import odinbookPhoto from "../assets/images/odinbookPhoto.png";
import nextReadPhoto from "../assets/images/nextReadPhoto.png";
import pomodoroPetsPhoto from "../assets/images/pomodoroPetsPhoto.png";
// import photoPlaceholder from "../assets/images/photoPlaceholder.jpg";

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
      title: "Pomodoro Pets",
      description:
        "A timer web application that combines the effective Pomodoro Technique with adorable virtual pets. Created with Angular and deployed with Vercel.",
      id: "project-pomodoro-pets",
      photo: pomodoroPetsPhoto,
      alt: "Screenshot of Pomodoro Pets Project",
      demo: "https://pomodoro-pets.vercel.app/",
      repo: "https://github.com/amandakso/pomodoro-pets",
    },

    {
      title: "Next Read",
      description:
        "A web application built with Vite and deployed with Vercel. Users can generate book prompts for their next read and receive prompt-related book suggestions.",
      id: "project-next-read",
      photo: nextReadPhoto,
      alt: "Screenshot of Next Read Project",
      demo: "https://next-read-seven.vercel.app/",
      repo: "https://github.com/amandakso/next-read",
    },
    {
      title: "OdinBook",
      description:
        "A facebook clone web application developed with MERN stack. Users can create/edit posts on web applications. Users are able to add friends and like/comment on posts. Friendship statuses allow only friends of users to interact with a user's posts. Project in progress.",
      id: "project-odinbook",
      photo: odinbookPhoto,
      alt: "Screenshot of OdinBook project",
      demo: "https://odin-facebook-client.vercel.app/",
      repo: "https://github.com/amandakso/odin-facebook-api",
    },
    {
      title: "Pandagram",
      description:
        "An instagram clone application developed using React and Firebase. Users can upload photos, like/comment on posts, and follow other users.",
      id: "project-pandagram",
      photo: pandagramPhoto,
      alt: "Screenshot of Pandagram project",
      demo: "https://pandagram-39745.web.app/",
      repo: "https://github.com/amandakso/odin-instagram",
    },
    {
      title: "Blog Site",
      description:
        "A blog created with an API-only backend and two frontends. One frontend serves as the client-side blog site where users can access and comment on blog posts. The other frontend allows users to create and edit blog posts.",
      id: "project-blog",
      photo: blogPhoto,
      alt: "Screenshot of Blog Site project",
      demo: "https://amandakso.github.io/odin-blog-client/",
      repo: "https://github.com/amandakso/odin-blog-client",
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
