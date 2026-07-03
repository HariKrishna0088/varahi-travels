import React from 'react';
import { Users, Heart, Map, Sun, Bus, TrainFront } from 'lucide-react';
import { Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import './DestinationCards.css';


const DestinationCards = () => {
  return (
    <section className="section destinations">
      <div className="container">
        <div className="section-header text-center animate-fade-in-up">
          <h2>Our <span className="highlight">Specialties</span></h2>
          <p>Explore our highly curated travel packages designed for unforgettable memories and spiritual awakening.</p>
        </div>
        
        <div className="destinations-grid">
          {destinations.map(dest => (
            <Link to={`/destination/${dest.id}`} key={dest.id} className="dest-card animate-fade-in-up" style={{ animationDelay: `${dest.id * 0.1}s`, textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div className="dest-image-wrapper">
                <img src={dest.image} alt={dest.title} className="dest-image" />
                <div className="dest-price">{dest.price}</div>
              </div>
              <div className="dest-content">
                <div className="dest-meta">
                  <span className="dest-duration">{dest.duration}</span>
                </div>
                <div style={{ display: 'inline-block', background: '#0ea5e9', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  Food & Stay Included
                </div>
                {/* Transport Badges */}
                {dest.transport && (
                  <div className="transport-badges">
                    <div className="transport-badge bus-badge">
                      <Bus size={13} />
                      <span>AC / Non-AC Bus</span>
                    </div>
                    <div className="transport-badge train-badge">
                      <TrainFront size={13} />
                      <span>AC / Non-AC Train</span>
                    </div>
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  {dest.icon}
                  <h3 style={{ margin: 0 }}>{dest.title}</h3>
                </div>
                <p>{dest.description}</p>
                <div className="btn btn-secondary dest-btn" style={{ textAlign: 'center' }}>View Details</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationCards;
