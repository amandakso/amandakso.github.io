import React from "react";

export default function Section(props) {
  const data = props;

  return (
    <section id={data.id}>
      <h2>{data.title}</h2>
      <div>{data.content}</div>
    </section>
  );
}
