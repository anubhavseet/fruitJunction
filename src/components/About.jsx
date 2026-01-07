import { useBackground } from '../context/BackgroundContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { currentBackground } = useBackground();
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1, once: true });
  
  const stats = [
    { number: '5000+', label: 'Happy Customers' },
    { number: '10000+', label: 'Orders Delivered' },
    { number: '50+', label: 'Product Varieties' },
    { number: '4.9', label: 'Average Rating' },
  ];

  const values = [
    {
      icon: '🌱',
      title: '100% Natural',
      description: 'No preservatives or artificial additives. Pure, natural goodness in every bite.'
    },
    {
      icon: '🏆',
      title: 'Quality Assured',
      description: 'Handpicked fresh ingredients daily. We never compromise on quality.'
    },
    {
      icon: '❤️',
      title: 'Made with Love',
      description: 'Prepared fresh every day with care. Your health is our priority.'
    },
    {
      icon: '🌍',
      title: 'Eco-Friendly',
      description: 'Sustainable practices and eco-friendly packaging for a better planet.'
    },
  ];

  return (
    <section 
      id="about" 
      className="about"
      ref={sectionRef}
      style={{
        background: `linear-gradient(135deg, ${currentBackground.colors[2]}dd, ${currentBackground.colors[1]}dd)`,
        transition: 'background 1.5s ease-in-out'
      }}
    >
      <div className="container">
        <div className={`section-header fade-in-up ${isVisible ? 'animate-on-scroll' : ''}`}>
          <div className="section-title-wrapper">
            <span className="section-label">Our Story</span>
            <h2 className="section-title animated-title">
              <span className="title-line">Fresh. Healthy.</span>
              <span className="title-line highlight">Deliciously Yours!</span>
            </h2>
          </div>
          <p className="section-subtitle">
            Where nature meets nutrition, and every bite tells a story of freshness
          </p>
        </div>

        <div className="about-content">
          <div className={`about-text fade-in-left ${isVisible ? 'animate-on-scroll' : ''}`}>
            <div className="about-intro">
              <div className="intro-highlight">
                <span className="highlight-icon">🍎</span>
                <p className="about-description large">
                  At <strong className="brand-name">Fruit Junction</strong>, we're not just delivering fruits—we're delivering 
                  <em className="highlight-text"> nature's purest goodness</em> straight to your door. Every fruit is handpicked, 
                  every meal is crafted with care, and every order comes with a promise of freshness.
                </p>
              </div>
              <p className="about-description">
                Our mission? To make healthy eating <strong>deliciously simple</strong>. We wake up early, source the finest ingredients, 
                prepare everything with zero preservatives, and deliver with a smile. Because your health isn't just our business—it's our passion.
              </p>
            </div>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="stat-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="about-values">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="value-item fade-in-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="value-icon-wrapper">
                    <span className="value-icon">{value.icon}</span>
                  </div>
                  <div className="value-content">
                    <h4 className="value-title">{value.title}</h4>
                    <p className="value-description">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`about-image fade-in-right ${isVisible ? 'animate-on-scroll' : ''}`}>
            <div className="about-image-placeholder">
              <div className="image-content">
                <div className="fruit-icons">
                  <span className="fruit-icon" style={{ '--i': 0 }}>🍎</span>
                  <span className="fruit-icon" style={{ '--i': 1 }}>🍊</span>
                  <span className="fruit-icon" style={{ '--i': 2 }}>🍌</span>
                  <span className="fruit-icon" style={{ '--i': 3 }}>🍇</span>
                  <span className="fruit-icon" style={{ '--i': 4 }}>🍓</span>
                  <span className="fruit-icon" style={{ '--i': 5 }}>🥝</span>
                </div>
                <h3>Fresh & Healthy</h3>
                <p>Nature's Best Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
