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
          As a curious and compassionate individual, I have embarked on a
          lifelong journey of seeking knowledge and finding ways to help others.
          Throughout my time in the healthcare field, I constantly employed
          problem-solving skills and clinical reasoning to provide the best care
          for my patients. I now use these skills I&apos;ve honed as a physical
          therapist in web development, teaching myself the latest technologies
          and best coding practices.{" "}
        </p>
        <p className="about-text">
          The ubiquitous nature of the web and its profound impact on our
          society inspire me to create positive change through the code I write.
          I am passionate about finding creative solutions to problems and
          developing beautiful, user-friendly web applications. I am passionate
          about finding creative solutions to problems and developing beautiful,
          user-friendly web applications.{" "}
        </p>
        <p className="about-text">
          Apart from coding, I enjoy playing board games, traveling, and trying
          out new recipes.
        </p>
      </div>
    </div>
  );
}
