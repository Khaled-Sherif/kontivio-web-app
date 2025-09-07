import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="navbar-left">
        <img className="logo" src="/Kontivio_logo.png" alt="Logo" />
        <nav className="navbar-center">
          <ul>
            <li><a href="#"><span>Home</span></a></li>
            <li><a href="#"><span>Services</span></a></li>
            <li><a href="#"><span>About</span></a></li>
            <li><a href="#"><span>Contact Us</span></a></li>
          </ul>
        </nav>
      </div>

      {/* Right: CTA Button + Language Selector */}
     <div className="navbar-right">
        <button className="nav-action-button"><span>Start Free Trial</span></button>
        <div className="language-selector">
          <select defaultValue="en">
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;