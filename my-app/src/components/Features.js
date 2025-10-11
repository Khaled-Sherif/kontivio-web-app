import React from "react";
import "./Features.css";

function Features() {
  const services = [
    { title: "5+ years experience", desc: "We have more than 5 years of experience in customer support and quality improving." },
    { title: "90% + in all KPIS", desc: "We have always achieved more than 90% score in all KPIs." },
    { title: "7+ industries", desc: "We have a team who have " },
  ];

  return (
    <section id="services" className="features">
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