import React from 'react';

const Contact = () => {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container animate-fade-in-up">
        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Contact <span className="highlight">Us</span></h1>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '0.5rem' }}>Ready to start planning? Send us a message and our travel experts will get back to you shortly.</p>
          <div style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--brand-dark)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={`${import.meta.env.BASE_URL}assets/owner.jpeg`} alt="K.CHANDRA BABU (Vasu)" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '4px solid #0ea5e9', boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }} />
            <div style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              <strong>Owner:</strong> K.CHANDRA BABU (Vasu)<br />
              <strong>Mobile/Phone:</strong> +91 9491340504<br />
              <strong>Email:</strong> vasukoduru717@gmail.com
            </div>
            
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+919491340504" style={{ padding: '12px 25px', background: '#3b82f6', color: 'white', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)' }}>📞 Call Us</a>
              <a href="https://wa.me/919491340504?text=Hello! I am interested in booking a package." target="_blank" rel="noopener noreferrer" style={{ padding: '12px 25px', background: '#25D366', color: 'white', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(37, 211, 102, 0.3)' }}>💬 WhatsApp</a>
              <a href="mailto:vasukoduru717@gmail.com?subject=Package Inquiry" style={{ padding: '12px 25px', background: '#f43f5e', color: 'white', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(244, 63, 94, 0.3)' }}>✉️ Email</a>
            </div>
          </div>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: '500', color: 'var(--brand-dark)' }}>First Name</label>
                <input type="text" placeholder="John" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', fontFamily: 'var(--font-body)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: '500', color: 'var(--brand-dark)' }}>Last Name</label>
                <input type="text" placeholder="Doe" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', fontFamily: 'var(--font-body)' }} />
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontWeight: '500', color: 'var(--brand-dark)' }}>Email Address</label>
              <input type="email" placeholder="john@example.com" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', fontFamily: 'var(--font-body)' }} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontWeight: '500', color: 'var(--brand-dark)' }}>Message or Inquiry</label>
              <textarea placeholder="I am interested in a 7-day trip to Bali..." rows="5" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', fontFamily: 'var(--font-body)', resize: 'vertical' }}></textarea>
            </div>
            
            <button type="button" className="btn btn-primary" style={{ padding: '1rem', marginTop: '1rem', fontSize: '1.1rem' }}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
