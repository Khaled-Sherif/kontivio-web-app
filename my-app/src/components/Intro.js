import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <div className="container intro-grid">
        <div className="intro-text">
          <h2>Who We Are</h2>
          <p>
            At Kontivio, we are more than a support team. We are a startup built
            by experts with over 5 years of experience in global customer
            service, ready to grow with your business needs. Our mission: to
            improve your customer experience and help your company scale.
          </p>
        </div>
        <div className="intro-image">
          <img src="/images/team.jpg" alt="Kontivio Team" />
        </div>
      </div>
    </section>
  );
};

export default Intro;