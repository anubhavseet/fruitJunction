import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=1200&h=800&fit=crop',
      alt: 'Fresh Fruit Salad',
      title: 'Fresh Fruits, Fresh Life',
      subtitle: '100% Natural & Preservative-Free',
      description: 'Your trusted source for premium quality fruits and healthy meals delivered fresh to your door.'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop',
      alt: 'Fresh Fruits',
      title: 'Farm Fresh, Daily Delivered',
      subtitle: 'Handpicked Daily for Maximum Freshness',
      description: 'From our farm to your table, we guarantee the freshest produce with premium quality assurance.'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&h=800&fit=crop',
      alt: 'Healthy Smoothies',
      title: 'Nutritious Smoothies & Salads',
      subtitle: 'Power-Packed with Vitamins & Energy',
      description: 'Blended with love and packed with nutrition. Experience the perfect balance of taste and health.'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=800&fit=crop',
      alt: 'Fresh Vegetables',
      title: 'Your Daily Wellness Partner',
      subtitle: 'Balanced Nutrition Made Delicious',
      description: 'Making healthy eating simple, delicious, and accessible. Your journey to wellness starts here.'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-carousel-wrapper">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className="hero-slide-overlay"></div>
            <div className="hero-content-wrapper">
              <div className="hero-content">
                <div className="hero-badge animate-bounce-in">
                  <span>✨ Fresh Daily</span>
                </div>
                <h1 className="hero-title animate-slide-up">
                  {image.title}
                </h1>
                <p className="hero-subtitle animate-slide-up-delay">
                  {image.subtitle}
                </p>
                <p className="hero-description animate-fade-in">
                  {image.description}
                </p>
                <div className="hero-buttons animate-slide-up-delay-2">
                  <a
                    href="#products"
                    className="btn btn-primary btn-animated"
                  >
                    <span>Shop Now</span>
                    <span className="btn-icon">→</span>
                  </a>
                  <a
                    href="#menu"
                    className="btn btn-secondary btn-animated"
                  >
                    <span>View Menu</span>
                    <span className="btn-icon">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="hero-carousel-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span className="scroll-text">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
