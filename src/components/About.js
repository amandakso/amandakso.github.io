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
          <br />
          My curious and compassionate nature has led to a lifelong journey of
          seeking knowledge and finding ways to help others. Working in the
          healthcare setting, I was constantly problem-solving and using
          clinical reasoning to help treat my patients. I now use these skills
          I&apos;ve honed as a physical therapist in web development, teaching
          myself the latest technologies and best coding practices. The ubiquity
          of the web and the large role it plays in our society amazes me and I
          hope to write code that will make a positive difference. I am
          passionate about finding elegant solutions to problems and creating
          user-friendly web applications. <br />
          Apart from coding, I enjoy playing board games, traveling, and trying
          out new recipes.
        </p>
      </div>
    </div>
  );
}
