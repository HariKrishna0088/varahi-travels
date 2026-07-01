import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar glass-panel">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <Plane className="nav-icon" />
          <span>Sri Varahi Theerthayatra</span>
        </Link>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/packages" onClick={() => setIsOpen(false)}>Packages</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <a href="tel:+919491340504" className="btn btn-primary" onClick={() => setIsOpen(false)}>Book Now</a>
        </div>
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
