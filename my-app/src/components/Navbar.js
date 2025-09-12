import React from "react";
import "./Navbar.css";
import logo from "../assets/Kontivio_logo.png"; // put your Kontivio logo in src/assets/

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="Kontivio Logo" />
        </a>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a href="#contact" className="btn-primary">Start Free Trial</a>
      </div>
    </header>
  );
}

export default Navbar;