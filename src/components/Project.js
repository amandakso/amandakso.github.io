import React from "react";

export default function Project(props) {
  const data = props;
  return (
    <div className="project-container">
      <div>{data.photo}</div>
      <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
