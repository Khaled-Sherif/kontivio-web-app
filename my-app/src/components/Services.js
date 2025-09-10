import React from "react";
import "./Services.css";

const services = [
  {
    title: "Customer Support",
    desc: "Phone, Chat, and Email support with a human touch.",
  },
  {
    title: "Technical Support",
    desc: "Troubleshooting and technical assistance for your customers.",
  },
  {
    title: "Contact Validation",
    desc: "Quality checks and verification to keep your data clean.",
  },
  {
    title: "Reporting & Performance",
    desc: "Transparent insights to help your business grow.",
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="card">
              <h2>Card Title</h2>
              <p>This is some sample content inside a styled card.</p>
              <button>Click Me</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;