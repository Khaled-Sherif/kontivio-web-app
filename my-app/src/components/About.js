import React from 'react';
import './About.css';


function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Kontivio</h2>
        <p>
          At Kontivio, we believe in human-centered outsourcing. 
          Our mission is to create exceptional customer experiences 
          while empowering businesses to scale globally.
        </p>
      </div>
      <div className="about-image">
        <img src="/images/about.jpg" alt="About Kontivio" />
      </div>
    </section>
  );
}

export default About;