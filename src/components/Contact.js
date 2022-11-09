import React from "react";
import mail from "../assets/images/email.png";

export default function Contact() {
  return (
    <div>
      <img src={mail} alt="" />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        height={36}
        width={36}
        alt=""
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
        height={36}
        width={36}
        alt=""
      />
    </div>
  );
}
