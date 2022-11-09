import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <img src={logo} width={80} height={80} alt="logo" id="nav-logo" />
        <ul className="nav-items">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
