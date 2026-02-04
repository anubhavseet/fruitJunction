import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Menu', href: '#menu' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <a href="#home">
            <img src="/images/fruitJunction_logo.png" alt="Fruit Junction" className="logo-image" />
            <span className="logo-text">Fruit Junction</span>
          </a>
        </div>

        <nav className="desktop-nav">
          <ul>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="cart-btn">
            <svg width="20" height="20" viewBox="0 0 15 15" fill="currentColor">
              <path d="M14.1,1.6C14,0.7,13.3,0,12.4,0H2.7C1.7,0,1,0.7,0.9,1.6L0.1,13.1c0,0.5,0.1,1,0.5,1.3C0.9,14.8,1.3,15,1.8,15h11.4c0.5,0,0.9-0.2,1.3-0.6c0.3-0.4,0.5-0.8,0.5-1.3L14.1,1.6zM13.4,13.4c0,0-0.1,0.1-0.2,0.1H1.8c-0.1,0-0.2-0.1-0.2-0.1c0,0-0.1-0.1-0.1-0.2L2.4,1.7c0-0.1,0.1-0.2,0.2-0.2h9.7c0.1,0,0.2,0.1,0.2,0.2l0.8,11.5C13.4,13.3,13.4,13.4,13.4,13.4z M10,3.2C9.6,3.2,9.2,3.6,9.2,4v1.5c0,1-0.8,1.8-1.8,1.8S5.8,6.5,5.8,5.5V4c0-0.4-0.3-0.8-0.8-0.8S4.2,3.6,4.2,4v1.5c0,1.8,1.5,3.2,3.2,3.2s3.2-1.5,3.2-3.2V4C10.8,3.6,10.4,3.2,10,3.2z" />
            </svg>
            <span className="cart-count">0</span>
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={isMobileMenuOpen ? 'open' : ''}></span>
            <span className={isMobileMenuOpen ? 'open' : ''}></span>
            <span className={isMobileMenuOpen ? 'open' : ''}></span>
          </button>
        </div>
      </div>

      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
