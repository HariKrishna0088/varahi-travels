import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { Star, ArrowLeft } from 'lucide-react';

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === parseInt(id));
  
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' });
  const [showContactOptions, setShowContactOptions] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads
    const savedReviews = localStorage.getItem(`reviews_${id}`);
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, [id]);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;
    
    const updatedReviews = [...reviews, { ...newReview, date: new Date().toLocaleDateString() }];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews_${id}`, JSON.stringify(updatedReviews));
    setNewReview({ name: '', rating: 5, text: '' });
  };

  if (!destination) return <div style={{ padding: '150px', textAlign: 'center', fontSize: '1.5rem', minHeight: '100vh' }}>Destination not found</div>;

  return (
    <div style={{ paddingTop: '70px', minHeight: '100vh', background: 'var(--bg-light)' }}>
      {/* Hero section for details */}
      <div style={{ position: 'relative', height: '500px', width: '100%' }}>
        <img src={destination.image} alt={destination.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'white', fontSize: '4rem', padding: '0 20px', marginBottom: '10px' }}>{destination.title}</h1>
            <span style={{ color: 'white', fontSize: '1.2rem', background: 'rgba(14, 165, 233, 0.8)', padding: '5px 15px', borderRadius: '20px' }}>
              {destination.duration} • Food & Stay Included
            </span>
          </div>
        </div>
        <Link to="/packages" style={{ position: 'absolute', top: '30px', left: '30px', color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', background: 'rgba(0,0,0,0.5)', padding: '10px 20px', borderRadius: '30px', backdropFilter: 'blur(10px)', transition: 'background 0.3s' }}>
          <ArrowLeft size={20} /> Back to Packages
        </Link>
      </div>

      <div style={{ maxWidth: '1000px', margin: '-60px auto 40px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
        {/* Content Section */}
        <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--brand-accent)', marginBottom: '20px' }}>
            {destination.icon}
            <h2 style={{ margin: 0, color: 'var(--brand-dark)', fontSize: '2rem' }}>About {destination.title}</h2>
          </div>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '30px' }}>
            {destination.description}
          </p>
          <div style={{ background: 'var(--bg-light)', padding: '30px', borderRadius: '15px', borderLeft: '6px solid var(--brand-accent)' }}>
            <h3 style={{ marginTop: 0, color: 'var(--brand-dark)', marginBottom: '10px', fontSize: '1.5rem' }}>Our Specialty</h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>{destination.specialty}</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
            <div style={{ background: 'var(--bg-light)', padding: '30px', borderRadius: '15px' }}>
              <h3 style={{ marginTop: 0, color: 'var(--brand-dark)', marginBottom: '15px', fontSize: '1.5rem' }}>History & Significance</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>{destination.history}</p>
            </div>
            <div style={{ background: 'var(--bg-light)', padding: '30px', borderRadius: '15px' }}>
              <h3 style={{ marginTop: 0, color: 'var(--brand-dark)', marginBottom: '15px', fontSize: '1.5rem' }}>What We Explore</h3>
              <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                {destination.explore && destination.explore.map((item, i) => (
                  <li key={i} style={{ marginBottom: '10px' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div style={{ marginTop: '50px', textAlign: 'center', minHeight: '60px' }}>
            {!showContactOptions ? (
               <button onClick={() => setShowContactOptions(true)} style={{ 
                 display: 'inline-block',
                 fontSize: '1.3rem', 
                 padding: '16px 40px', 
                 background: 'linear-gradient(45deg, #f59e0b, #ef4444)',
                 color: 'white',
                 fontWeight: '900',
                 borderRadius: '50px',
                 textTransform: 'uppercase',
                 letterSpacing: '2px',
                 border: 'none',
                 cursor: 'pointer',
                 boxShadow: '0 8px 25px rgba(239, 68, 68, 0.4)',
                 transition: 'transform 0.2s',
               }}>Contact Now</button>
            ) : (
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:+919491340504" style={{ padding: '12px 25px', background: '#3b82f6', color: 'white', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)' }}>📞 Call Us</a>
                <a href="https://wa.me/919491340504?text=Hello! I am interested in booking a package." target="_blank" rel="noopener noreferrer" style={{ padding: '12px 25px', background: '#25D366', color: 'white', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(37, 211, 102, 0.3)' }}>💬 WhatsApp</a>
                <a href="mailto:vasukoduru717@gmail.com?subject=Package Inquiry" style={{ padding: '12px 25px', background: '#f43f5e', color: 'white', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(244, 63, 94, 0.3)' }}>✉️ Email</a>
              </div>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
            <Star size={32} color="#f59e0b" fill="#f59e0b" />
            <h2 style={{ color: 'var(--brand-dark)', margin: 0, fontSize: '2rem' }}>Traveler Reviews</h2>
          </div>
          
          {/* Review List */}
          <div style={{ marginBottom: '50px' }}>
            {reviews.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', background: 'var(--bg-light)', borderRadius: '10px' }}>
                <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', margin: 0, fontSize: '1.1rem' }}>No reviews yet. Be the first to share your experience at {destination.title}!</p>
              </div>
            ) : (
              reviews.map((r, idx) => (
                <div key={idx} style={{ borderBottom: '1px solid #eee', paddingBottom: '25px', marginBottom: '25px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <strong style={{ fontSize: '1.2rem', color: 'var(--brand-dark)' }}>{r.name}</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{r.date}</span>
                  </div>
                  <div style={{ color: '#f59e0b', marginBottom: '15px', display: 'flex', gap: '2px' }}>
                    {[...Array(r.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-main)', lineHeight: '1.6', fontSize: '1.1rem' }}>"{r.text}"</p>
                </div>
              ))
            )}
          </div>

          {/* Add Review Form */}
          <div style={{ background: 'var(--bg-light)', padding: '30px', borderRadius: '15px' }}>
            <h3 style={{ color: 'var(--brand-dark)', marginBottom: '25px', fontSize: '1.5rem' }}>Write a Review</h3>
            <form onSubmit={handleSubmitReview} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  required 
                  value={newReview.name} 
                  onChange={e => setNewReview({...newReview, name: e.target.value})}
                  style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '10px', fontSize: '1rem', outline: 'none' }}
                />
                <select 
                  value={newReview.rating} 
                  onChange={e => setNewReview({...newReview, rating: Number(e.target.value)})}
                  style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '10px', fontSize: '1rem', background: 'white', outline: 'none' }}
                >
                  <option value={5}>5 Stars - Excellent</option>
                  <option value={4}>4 Stars - Very Good</option>
                  <option value={3}>3 Stars - Good</option>
                  <option value={2}>2 Stars - Fair</option>
                  <option value={1}>1 Star - Poor</option>
                </select>
              </div>
              <textarea 
                placeholder="Share the details of your spiritual journey here..." 
                required 
                rows="5"
                value={newReview.text} 
                onChange={e => setNewReview({...newReview, text: e.target.value})}
                style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '10px', fontSize: '1rem', resize: 'vertical', outline: 'none', fontFamily: 'inherit' }}
              />
              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', padding: '12px 30px', fontSize: '1.1rem', cursor: 'pointer' }}>Post Review</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
