import React from "react";
import Project from "./Project";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.jpg";

const Projects = () => {
  return (
    <div>
      <Project
        title="Pandagram"
        description="An instagram clone application developed using React and Firebase. Users can upload photos, like/comment on posts, and follow other users."
        id="project1"
        photo={
          <img
            src={project1}
            width={250}
            height={"auto"}
            alt="Screenshot of Project 1"
          />
        }
        demo="https://pandagram-39745.web.app/"
        repo="https://github.com/amandakso/odin-instagram"
      />
      <Project
        title="Project #2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien elit, vehicula vitae facilisis bibendum, rutrum ut nunc. Curabitur eget augue sollicitudin, consequat enim vitae, cursus tellus. Proin mattis ipsum id magna efficitur, ac ornare sapien fringilla. Vivamus ullamcorper leo sapien, ultricies pharetra elit aliquam eget. Donec purus ex, faucibus eget consequat in, pharetra sed purus. Quisque at urna pretium, pulvinar ligula in, euismod eros. Aenean tempus tortor eget massa finibus, fermentum ultrices purus congue. Duis in elementum massa. Praesent quis sodales enim, ut fringilla tellus. Aliquam lobortis, tortor condimentum faucibus pulvinar, tellus leo venenatis ex, a mattis nisl diam et ex."
        id="project2"
        photo={
          <img
            src={project2}
            width={250}
            height={"auto"}
            alt="Screenshot of Project 2"
          />
        }
        demo="#"
        repo="#"
      />
    </div>
  );
};

export default Projects;
