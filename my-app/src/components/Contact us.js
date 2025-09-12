import React from "react";
import "./Contact us.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Reach out today.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="btn-primary">Send</button>
      </form>
    </section>
  );
}

export default Contact;