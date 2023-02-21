import React from "react";
import mail from "../assets/images/email.png";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-item">
        <a href="mailto:soamanda95@gmail.com">
          <img src={mail} alt="" />
        </a>
      </div>
      <div className="contact-item">
        <a href="https://github.com/amandakso">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            height={36}
            width={36}
            alt=""
          />
        </a>
      </div>
      <div className="contact-item">
        <a href="https://www.linkedin.com/in/amandakso">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
            height={36}
            width={36}
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
