import React from 'react';
import './Footer.css'; // We will create this CSS file next

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">CAREERS</a></li>
            <li><a href="#">TERMS</a></li>
            <li><a href="#">PRIVACY</a></li>
            <li><a href="#">INTEREST BASED ADS</a></li>
            <li><a href="#">AD PREFERENCES</a></li>
            <li><a href="#">HELP</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>WORK WITH US</h4>
          <ul>
            <li><a href="#">AUTHORS</a></li>
            <li><a href="#">ADVERTISE</a></li>
            <li><a href="#">AUTHORS & ADS BLOG</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>CONNECT</h4>
          <div className="social-icons">
            {/* In a real project, you would use icon components (e.g., from react-icons) here */}
            <a href="#" aria-label="Facebook">F</a>
            <a href="#" aria-label="Twitter">T</a>
            <a href="#" aria-label="Instagram">I</a>
            <a href="#" aria-label="LinkedIn">L</a>
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