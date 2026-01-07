import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useEffect, useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [footerRef, isVisible] = useScrollAnimation({ threshold: 0.1, once: true });
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Fallback: if footer is already in viewport on load, show it
    const checkVisibility = () => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport) {
          setShouldShow(true);
        }
      }
    };

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    setTimeout(checkVisibility, 500); // Check after a short delay

    return () => window.removeEventListener('scroll', checkVisibility);
  }, [footerRef]);

  const showContent = isVisible || shouldShow;

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Our Services', href: '#services' },
    ],
    products: [
      { name: 'Fresh Fruits', href: '#products' },
      { name: 'Salads', href: '#products' },
      { name: 'Smoothies', href: '#products' },
      { name: 'Juices', href: '#products' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
  ];

  return (
    <footer className="footer" ref={footerRef}>
      <div className="container">
        <div className="footer-content">
          <div className={`footer-section fade-in-up ${showContent ? 'animate-on-scroll' : ''}`}>
            <h3 className="footer-logo">Fruit Junction</h3>
            <p className="footer-description">
              Delivering nature's best—fresh fruits, juices, and more—handpicked 
              for quality and health, straight to your doorstep.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="social-link"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className={`footer-section fade-in-up ${showContent ? 'animate-on-scroll' : ''}`} style={{ animationDelay: '0.1s' }}>
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={`footer-section fade-in-up ${showContent ? 'animate-on-scroll' : ''}`} style={{ animationDelay: '0.2s' }}>
            <h4 className="footer-title">Products</h4>
            <ul className="footer-links">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={`footer-section fade-in-up ${showContent ? 'animate-on-scroll' : ''}`} style={{ animationDelay: '0.3s' }}>
            <h4 className="footer-title">Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📍</span>
                <span>Indore, Madhya Pradesh</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <span>info@fruitjunction.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`footer-bottom fade-in-up ${showContent ? 'animate-on-scroll' : ''}`} style={{ animationDelay: '0.4s' }}>
          <p>&copy; {currentYear} Fruit Junction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
