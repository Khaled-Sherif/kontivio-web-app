import React from "react";
import "./Features.css";

function Features() {
  const services = [
    { title: "Customer Support", desc: "24/7 multilingual support across channels." },
    { title: "Sales Outsourcing", desc: "Boost your revenue with expert sales teams." },
    { title: "Tech Support", desc: "Fast, reliable technical support for your customers." },
  ];

  return (
    <section id="services" className="features">
      <h2>Our Services</h2>
      <div className="features-grid">
        {services.map((s, i) => (
          <div key={i} className="feature-card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;