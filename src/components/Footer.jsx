import React from 'react';
import { Plane } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <Plane className="nav-icon" />
            <span>Sri Varahi Theerthyatra Special</span>
          </div>
          <p>Your ultimate partner for unforgettable tropical escapes and premium global adventures.</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/packages">Tour Packages</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
            <img src="/assets/owner.jpeg" alt="K.CHANDRA BABU (Vasu)" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #0ea5e9' }} />
            <div>
              <p style={{ margin: 0, color: '#fff' }}><strong>K.CHANDRA BABU (Vasu)</strong></p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#ccc' }}>+91 9491340504</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#ccc' }}>vasukoduru717@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sri Varahi Theerthyatra Special. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
