import React from "react";
import open from "../assets/images/open-in-new.png";

export default function Project(props) {
  const data = props;
  return (
    <div className="project-container">
      <div>{data.photo}</div>
      <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p>
          Live Demo{" "}
          <a href={data.demo}>
            <img src={open} alt="" />
          </a>
          Repo
          <a href={data.repo}>
            <img src={open} alt="" />
          </a>
        </p>
      </div>
    </div>
  );
}
