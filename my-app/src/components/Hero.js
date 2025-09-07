import React from 'react';
import heroImage from '../assets/Image-hero.jpeg';
import './Hero.css';
import styles from "./Hero.module.css"


const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Customer Service Outsourcing for SMEs in Germany</h1>
        <p>
          Kontivio provides professional, multilingual customer support that
          represents your company’s vision and voice.
        </p>
        <a href="#contact" className={styles.button}>Get Started</a>
      </div>
    </section>
  );
};

export default Hero;