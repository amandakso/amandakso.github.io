import React from "react";

export default function Section(props) {
  const data = props;

  return (
    <section id={data.id} className="section-content">
      <h2>{data.title}</h2>
      <div>{data.content}</div>
    </section>
  );
}
