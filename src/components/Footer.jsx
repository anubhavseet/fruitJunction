const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Fruit Junction</h3>
            <p className="footer-description">
              Delivering nature's best—fresh fruits, juices, and more—handpicked
              for quality and health, straight to your doorstep.
            </p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="social-link"
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Products</h4>
            <ul className="footer-links">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📍</span>
                <span>Kolkata, West Bengal</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span>+91 7890437011</span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <span>fruitjunction.in@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Fruit Junction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
