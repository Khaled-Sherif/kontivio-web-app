import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="cards">
        <div className="card">Inbound Support</div>
        <div className="card">Outbound Sales</div>
        <div className="card">Technical Helpdesk</div>
      </div>
    </section>
  );
}

export default Services;