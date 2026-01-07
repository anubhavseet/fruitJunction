import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useBackground } from '../context/BackgroundContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1, once: true });
  const { currentBackground } = useBackground();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      info: 'Indore, Madhya Pradesh, India',
      link: '#'
    },
    {
      icon: '📞',
      title: 'Phone',
      info: '+91 XXXXX XXXXX',
      link: 'tel:+91XXXXXXXXXX'
    },
    {
      icon: '✉️',
      title: 'Email',
      info: 'info@fruitjunction.com',
      link: 'mailto:info@fruitjunction.com'
    },
    {
      icon: '🕒',
      title: 'Hours',
      info: 'Mon-Sat: 8AM - 8PM',
      link: '#'
    },
  ];

  return (
    <section 
      id="contact" 
      className="contact-section"
      style={{
        background: `linear-gradient(135deg, ${currentBackground.colors[1]}dd, ${currentBackground.colors[2]}dd)`,
        transition: 'background 1.5s ease-in-out'
      }}
    >
      <div className="container">
        <div className={`section-header fade-in-up ${isVisible ? 'animate-on-scroll' : ''}`} ref={sectionRef}>
          <div className="section-title-wrapper">
            <span className="section-label">Let's Connect</span>
            <h2 className="section-title animated-title">
              <span className="title-line">We're Here</span>
              <span className="title-line highlight">For You, Always!</span>
            </h2>
          </div>
          <p className="section-subtitle">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="contact-content">
          <div className={`contact-info fade-in-left ${isVisible ? 'animate-on-scroll' : ''}`}>
            <h3>Contact Information</h3>
            <p className="contact-description">
              Reach out to us through any of these channels. We're here to help you with all your fresh fruit needs!
            </p>
            
            <div className="contact-info-grid">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="contact-info-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="contact-icon-wrapper">
                    <span className="contact-icon">{item.icon}</span>
                  </div>
                  <h4>{item.title}</h4>
                  <a href={item.link}>{item.info}</a>
                </div>
              ))}
            </div>

            <div className="social-contact">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">📘</a>
                <a href="#" className="social-icon" aria-label="Instagram">📷</a>
                <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
                <a href="#" className="social-icon" aria-label="WhatsApp">💬</a>
              </div>
            </div>
          </div>

          <div className={`contact-form-wrapper fade-in-right ${isVisible ? 'animate-on-scroll' : ''}`}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <span className="btn-icon">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

