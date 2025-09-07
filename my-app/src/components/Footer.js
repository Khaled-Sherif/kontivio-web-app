import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <p>Contact us: info@callcenterpro.com | +1 (800) 123-4567</p>
      <p>&copy; {new Date().getFullYear()} CallCenterPro</p>
    </footer>
  );
}

export default Footer;