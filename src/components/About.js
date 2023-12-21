import React from "react";
import AboutPhoto from "../assets/images/about.jpg";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-item">
        <img src={AboutPhoto} width={250} height={250} alt="Amanda So" />
      </div>
      <div className="about-item">
        <p className="about-text">
          Hi I&apos;m Amanda, a physical therapist turned full-stack web
          developer.
        </p>
        <p className="about-text">
          My curious and compassionate nature has led to a lifelong journey of
          seeking knowledge and finding ways to help others. Working in the
          healthcare setting, I was constantly problem-solving and using
          clinical reasoning to help treat my patients. I now use these skills
          I&apos;ve honed as a physical therapist in web development, teaching
          myself the latest technologies and best coding practices. The ubiquity
          of the web and the large role it plays in our society has me hopeful
          that the code I write can make a positive difference. I am passionate
          about finding creative solutions to problems and developing
          user-friendly web applications.{" "}
        </p>
        <p className="about-text">
          Apart from coding, I enjoy playing board games, crocheting, and trying
          out new recipes.
        </p>
      </div>
    </div>
  );
}
