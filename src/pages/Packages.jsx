import React from 'react';
import DestinationCards from '../components/DestinationCards';

const Packages = () => {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container text-center animate-fade-in-up" style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Tour <span className="highlight">Packages</span></h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>Find the perfect itinerary for your next adventure. Whether you are looking for relaxation, culture, or thrill, we have it all.</p>
      </div>
      <DestinationCards />
    </div>
  );
};

export default Packages;
