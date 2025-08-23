import React from 'react';
import { Link } from 'react-router-dom'; // <-- Import Link
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>COMPANY</h4>
          <ul>
            {/* Use Link for internal navigation */}
            <li><Link to="/about">ABOUT US</Link></li>
            <li><Link to="/careers">CAREERS</Link></li>
            <li><Link to="/terms">TERMS</Link></li>
            <li><Link to="/privacy">PRIVACY</Link></li>
            <li><Link to="/ads">INTEREST BASED ADS</Link></li>
            <li><Link to="/ad-preferences">AD PREFERENCES</Link></li>
            <li><Link to="/help">HELP</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>WORK WITH US</h4>
          <ul>
            <li><Link to="/authors">AUTHORS</Link></li>
            <li><Link to="/advertise">ADVERTISE</Link></li>
            <li><Link to="/blog">AUTHORS & ADS BLOG</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>CONNECT</h4>
          <div className="social-icons">
            {/* Use actual URLs for external links */}
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">F</a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">T</a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">I</a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">L</a>
          </div>
        </div>
      </div>
      <div className="footer-separator"></div>
      <div className="footer-bottom-bar">
        <p>© 2025 COFFEE & COZY. ALL RIGHTS RESERVED. | DESIGNED BY SAMRUDHI B</p>
      </div>
    </footer>
  );
}

export default Footer;