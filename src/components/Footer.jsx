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
            <span>Sri Varahi Tirtha Yatra</span>
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
              <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem', color: '#ccc' }}>
                <a href="https://www.google.com/maps/@14.4552293,79.9771783,3a,47.3y,92.68h,88.98t/data=!3m7!1e1!3m5!1seMGZPiTGsuu5cbPj3EYK1w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D1.019999999999996%26panoid%3DeMGZPiTGsuu5cbPj3EYK1w%26yaw%3D92.68!7i16384!8i8192?entry=ttu" target="_blank" rel="noopener noreferrer" style={{color: '#0ea5e9', textDecoration: 'none'}}>
                  📍 Nellore, Andhra Pradesh
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sri Varahi Tirtha Yatra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
