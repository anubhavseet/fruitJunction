import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useBackground } from '../context/BackgroundContext';

const Services = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1, once: true });
  const { currentBackground } = useBackground();

  const services = [
    {
      id: 1,
      title: 'Fast Delivery',
      description: 'Get your fresh fruits and healthy meals delivered to your doorstep within hours. We ensure prompt and reliable delivery service.',
      icon: '🚚',
      color: '#FFE5B4',
      features: ['Same Day Delivery', 'Express Service', 'Track Your Order']
    },
    {
      id: 2,
      title: '100% Fresh',
      description: 'All our products are made fresh daily with no preservatives or additives. We guarantee the freshest ingredients in every order.',
      icon: '✨',
      color: '#C8E6C9',
      features: ['Daily Fresh', 'No Preservatives', 'Farm to Door']
    },
    {
      id: 3,
      title: 'Quality Assured',
      description: 'We handpick the finest fruits and ingredients to ensure the best quality. Every product goes through strict quality checks.',
      icon: '⭐',
      color: '#FFF9C4',
      features: ['Handpicked', 'Quality Checked', 'Premium Selection']
    },
    {
      id: 4,
      title: 'Custom Orders',
      description: 'Place custom orders for special occasions or dietary requirements. We cater to your specific needs and preferences.',
      icon: '🎯',
      color: '#FFCCBC',
      features: ['Personalized', 'Dietary Options', 'Bulk Orders']
    },
  ];

  return (
    <section 
      id="services" 
      className="services" 
      ref={sectionRef}
      style={{
        background: `linear-gradient(135deg, ${currentBackground.colors[1]}dd, ${currentBackground.colors[0]}dd)`,
        transition: 'background 1.5s ease-in-out'
      }}
    >
      <div className="container">
        <div className={`section-header fade-in-up ${isVisible ? 'animate-on-scroll' : ''}`}>
          <div className="section-title-wrapper">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title animated-title">
              <span className="title-line">We Don't Just Deliver,</span>
              <span className="title-line highlight">We Deliver Excellence!</span>
            </h2>
          </div>
          <p className="section-subtitle">
            We provide comprehensive services to meet all your healthy food needs with excellence and care.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card fade-in-up ${isVisible ? 'animate-on-scroll' : ''}`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                '--service-color': service.color
              }}
            >
              <div className="service-icon-wrapper">
                <div 
                  className="service-icon"
                  style={{ backgroundColor: service.color }}
                >
                  <span className="emoji">{service.icon}</span>
                </div>
                <div className="service-icon-glow" style={{ backgroundColor: service.color }}></div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
