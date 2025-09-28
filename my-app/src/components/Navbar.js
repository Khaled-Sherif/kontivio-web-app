import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/Logo_shape.png"; // put your Kontivio logo in src/assets/

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="ribbon"></div>
      <div class="navbar-container">
        <a href="/" class="navbar-logo">
          <div style={{ display: "flex", alignItems: "center", gap: "3px", height: "40px" }}>
            <img
              alt="Kontivio Logo"
              src={logo}
              style={{ height: "40px" }}
            />
            <span class="navbar-logo-text">
              Kontivio
            </span>
          </div>
        </a>
        <nav>
          <ul class="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a href="#contact" class="btn-primary">Start Free Trial</a>
      </div>
    </div>
  );
}

export default Navbar;