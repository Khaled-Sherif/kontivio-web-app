import React from 'react';
import heroImage from '../assets/Image-hero.jpeg';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Trusted Call Center Partner</h1>
        <p>Delivering excellent customer support, 24/7.</p>
        <button>Get a Quote</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;