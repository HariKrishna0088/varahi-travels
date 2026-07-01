import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/assets/chardham%20hero%20background.png" alt="Char Dham Spiritual Background" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content animate-fade-in-up">
        <h1>Spiritual & Family Journeys with <span className="highlight">Sri Varahi Theerthyatra Special</span></h1>
        <p>Curated premium travel experiences. Whether you seek deep devotional tours, group adventures, or unforgettable family trips, your journey begins here.</p>
        
        <div className="hero-search glass-panel">
          <div className="search-input">
            <MapPin className="icon" />
            <input type="text" placeholder="Where do you want to go?" />
          </div>
          <button className="btn btn-primary">
            Explore <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
