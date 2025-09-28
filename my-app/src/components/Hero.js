import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Outsourcing That Drives Growth</h1>
        <p>We deliver customer experience solutions with innovation and care.</p>
        <a href="#contact" className="btn-primary">Get Started</a>
      </div>
    </section>
  );
}

export default Hero;