import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="section1" className="section-content home-container">
      <h1>Amanda So</h1>
      <p id="home-subtitle">Full stack web developer</p>
      <Link
        className="button-28"
        activeClass="active"
        to="section2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Learn More
      </Link>
    </div>
  );
};

export default Home;
