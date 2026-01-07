import { useState } from 'react';
import { useBackground } from '../context/BackgroundContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { currentBackground } = useBackground();
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1, once: true });

  const testimonials = [
    {
      id: 1,
      name: 'Al Pastor',
      rating: 5,
      text: 'I recently ordered an Exotic Fruit Salad from Freshly Fruits. The delivery was on time, and the salad was fresh, beautifully presented, and full of variety. Everyone in the office loved it!',
      date: '2 days ago',
      image: '👨‍💼'
    },
    {
      id: 2,
      name: 'Ravindra',
      rating: 5,
      text: 'Delicious with freshness. The quality is outstanding and the packaging is excellent. Highly recommended!',
      date: '3 days ago',
      image: '👨'
    },
    {
      id: 3,
      name: 'Anuj Sharma',
      rating: 5,
      text: 'Best place to get hygienic and tasty food. The fruits are always fresh and the service is prompt.',
      date: '1 week ago',
      image: '👨‍💻'
    },
    {
      id: 4,
      name: 'Kushal Thakur',
      rating: 5,
      text: 'I ordered the Lettuce Paprika Paneer Salad and it was absolutely delicious! Super fresh ingredients and perfect seasoning made it the best salad I\'ve had.',
      date: '2 weeks ago',
      image: '👨‍🎓'
    },
    {
      id: 5,
      name: 'Anant Mishra',
      rating: 5,
      text: 'Great service from Freshly Fruits! Timely delivery, hygienic packing, and excellent fruit quality. The subscription plan is really helpful.',
      date: '2 weeks ago',
      image: '👨‍🎨'
    },
    {
      id: 6,
      name: 'Dr. Raksha Goyal',
      rating: 5,
      text: 'Tried the Sprout Salad from Freshly Fruits and I must say, it was amazing. Fresh, hygienic and perfectly balanced in taste. Truly the best salad in Indore!',
      date: '3 weeks ago',
      image: '👩‍⚕️'
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      className="testimonials"
      ref={sectionRef}
      style={{
        background: `linear-gradient(135deg, ${currentBackground.colors[0]}dd, ${currentBackground.colors[2]}dd)`,
        transition: 'background 1.5s ease-in-out'
      }}
    >
      <div className="container">
        <div className={`section-header fade-in-up ${isVisible ? 'animate-on-scroll' : ''}`}>
          <div className="section-title-wrapper">
            <span className="section-label">Happy Customers</span>
            <h2 className="section-title animated-title">
              <span className="title-line">Real Stories,</span>
              <span className="title-line highlight">Real Smiles!</span>
            </h2>
          </div>
          <p className="section-subtitle">
            Healthy bowls, happy souls – hear what our customers are saying about their experience with us.
          </p>
        </div>

        <div className="testimonials-slider">
          <button 
            className="slider-btn prev"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={testimonial.id}
                  className={`testimonial-card ${isActive ? 'active' : ''}`}
                >
                  <div className="testimonial-quote-icon">"</div>
                  <div className="stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <span className="avatar-emoji">{testimonial.image}</span>
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="testimonial-date">{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button 
            className="slider-btn next"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
