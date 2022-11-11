import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="section1" className="section-content home-container">
      <h1>Amanda So</h1>
      <p id="home-subtitle">Full stack web developer</p>
      <button>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Learn More
        </Link>
      </button>
    </div>
  );
};

export default Home;
