import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <img src={logo} width={80} height={80} alt="logo" id="nav-logo" />
        <ul className={hamburgerOpen ? "nav-items-expanded" : "nav-items"}>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleHamburger}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleHamburger}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleHamburger}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleHamburger}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleHamburger}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
