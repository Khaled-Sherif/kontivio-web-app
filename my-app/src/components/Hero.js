import React from 'react';
//import heroImage from '../assets/Image-hero.jpeg';
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="container hero-content">
          <h1>
            Your German-speaking customer support partner – helping your
            business grow with professional, reliable, and scalable solutions.
          </h1>
          <button className="btn">Get in Touch</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;