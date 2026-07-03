import React, { useState } from 'react';

// ===================================================================
// 🔑 HOW TO GET YOUR ACCESS KEY (takes 30 seconds):
//    1. Go to https://web3forms.com
//    2. Enter the email: vasukoduru717@gmail.com
//    3. Click "Create Access Key"
//    4. Check the email inbox for the access key
//    5. Paste it below replacing YOUR_ACCESS_KEY_HERE
// ===================================================================
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Inquiry from ${formData.firstName} ${formData.lastName} — Sri Varahi Tirtha Yatra`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          // Honeypot for spam protection
          botcheck: ''
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please check your internet connection and try again.');
    }
  };

  // Styles
  const inputStyle = {
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    border: '1px solid #e2e8f0',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  };

  const inputFocusHandler = (e) => {
    e.target.style.borderColor = '#0ea5e9';
    e.target.style.boxShadow = '0 0 0 3px rgba(14, 165, 233, 0.15)';
  };

  const inputBlurHandler = (e) => {
    e.target.style.borderColor = '#e2e8f0';
    e.target.style.boxShadow = 'none';
  };

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
              <strong>Email:</strong> vasukoduru717@gmail.com<br />
              <strong>Location:</strong> <a href="https://www.google.com/maps/@14.4552293,79.9771783,3a,47.3y,92.68h,88.98t/data=!3m7!1e1!3m5!1seMGZPiTGsuu5cbPj3EYK1w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D1.019999999999996%26panoid%3DeMGZPiTGsuu5cbPj3EYK1w%26yaw%3D92.68!7i16384!8i8192?entry=ttu" target="_blank" rel="noopener noreferrer" style={{color: 'var(--brand-accent)', textDecoration: 'none'}}>Nellore, Andhra Pradesh 📍</a>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+919491340504" style={{ padding: '12px 25px', background: '#3b82f6', color: 'white', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)' }}>📞 Call Us</a>
              <a href="https://wa.me/919491340504?text=Hello! I am interested in booking a package." target="_blank" rel="noopener noreferrer" style={{ padding: '12px 25px', background: '#25D366', color: 'white', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(37, 211, 102, 0.3)' }}>💬 WhatsApp</a>
              <a href="mailto:vasukoduru717@gmail.com?subject=Package Inquiry" style={{ padding: '12px 25px', background: '#f43f5e', color: 'white', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(244, 63, 94, 0.3)' }}>✉️ Email</a>
            </div>
          </div>

          {/* ===== SUCCESS MESSAGE ===== */}
          {status === 'success' && (
            <div style={{
              padding: '1.5rem',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
              borderRadius: '1rem',
              textAlign: 'center',
              border: '1px solid #6ee7b7',
              animation: 'fadeInUp 0.4s ease'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✅</div>
              <h3 style={{ color: '#065f46', margin: '0 0 0.5rem 0', fontSize: '1.3rem' }}>Message Sent Successfully!</h3>
              <p style={{ color: '#047857', margin: 0 }}>
                Thank you for your inquiry. Our team will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                style={{
                  marginTop: '1rem',
                  padding: '8px 20px',
                  background: '#059669',
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}
              >
                Send Another Message
              </button>
            </div>
          )}

          {/* ===== ERROR MESSAGE ===== */}
          {status === 'error' && (
            <div style={{
              padding: '1rem 1.5rem',
              marginBottom: '1.5rem',
              background: '#fef2f2',
              borderRadius: '0.75rem',
              border: '1px solid #fca5a5',
              color: '#991b1b',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <span style={{ fontSize: '1.3rem' }}>⚠️</span>
              <span>{errorMsg}</span>
            </div>
          )}
          
          {/* ===== CONTACT FORM ===== */}
          {status !== 'success' && (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Hidden honeypot field for spam protection */}
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="contact-firstName" style={{ fontWeight: '500', color: 'var(--brand-dark)' }}>First Name <span style={{ color: '#ef4444' }}>*</span></label>
                  <input
                    id="contact-firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={inputFocusHandler}
                    onBlur={inputBlurHandler}
                    placeholder="Your first name"
                    required
                    style={inputStyle}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="contact-lastName" style={{ fontWeight: '500', color: 'var(--brand-dark)' }}>Last Name</label>
                  <input
                    id="contact-lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={inputFocusHandler}
                    onBlur={inputBlurHandler}
                    placeholder="Your last name"
                    style={inputStyle}
                  />
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="contact-email" style={{ fontWeight: '500', color: 'var(--brand-dark)' }}>Email Address <span style={{ color: '#ef4444' }}>*</span></label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={inputFocusHandler}
                    onBlur={inputBlurHandler}
                    placeholder="your@email.com"
                    required
                    style={inputStyle}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="contact-phone" style={{ fontWeight: '500', color: 'var(--brand-dark)' }}>Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={inputFocusHandler}
                    onBlur={inputBlurHandler}
                    placeholder="+91 98765 43210"
                    style={inputStyle}
                  />
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="contact-message" style={{ fontWeight: '500', color: 'var(--brand-dark)' }}>Message or Inquiry <span style={{ color: '#ef4444' }}>*</span></label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={inputFocusHandler}
                  onBlur={inputBlurHandler}
                  placeholder="Tell us about your travel plans — destination, number of travelers, preferred dates..."
                  rows="5"
                  required
                  style={{ ...inputStyle, resize: 'vertical' }}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary"
                style={{
                  padding: '1rem',
                  marginTop: '1rem',
                  fontSize: '1.1rem',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  opacity: status === 'sending' ? 0.7 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {status === 'sending' ? (
                  <>
                    <span style={{
                      display: 'inline-block',
                      width: '18px',
                      height: '18px',
                      border: '3px solid rgba(255,255,255,0.3)',
                      borderTopColor: 'white',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite'
                    }}></span>
                    Sending...
                  </>
                ) : (
                  '📩 Send Message'
                )}
              </button>
            </form>
          )}

          {/* Spinner animation keyframes */}
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Contact;
