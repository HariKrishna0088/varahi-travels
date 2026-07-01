import React from 'react';
import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <Plane className="nav-icon" />
            <span>Sri Varahi Theerthayatra</span>
          </div>
          <p>Your ultimate partner for unforgettable tropical escapes and premium global adventures.</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/packages">Tour Packages</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
            <img src={`${import.meta.env.BASE_URL}assets/owner.jpeg`} alt="K.CHANDRA BABU (Vasu)" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #0ea5e9' }} />
            <div>
              <p style={{ margin: 0, color: '#fff' }}><strong>K.CHANDRA BABU (Vasu)</strong></p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#ccc' }}>+91 9491340504</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#ccc' }}>vasukoduru717@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sri Varahi Theerthayatra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
