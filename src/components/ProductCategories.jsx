import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useBackground } from '../context/BackgroundContext';

const ProductCategories = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1, once: true });
  const { currentBackground } = useBackground();
  const categories = [
    {
      id: 1,
      name: 'Coconut Beverages',
      count: 2,
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop',
      color: '#FFE5B4'
    },
    {
      id: 2,
      name: 'Crispy Vegetable Salad',
      count: 3,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
      color: '#C8E6C9'
    },
    {
      id: 3,
      name: 'Fasting Foods',
      count: 6,
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop',
      color: '#FFF9C4'
    },
    {
      id: 4,
      name: 'Fresh Fruit Juices',
      count: 9,
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop',
      color: '#FFCCBC'
    },
    {
      id: 5,
      name: 'Fresh Fruits Smoothies',
      count: 7,
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=400&fit=crop',
      color: '#E1BEE7'
    },
    {
      id: 6,
      name: 'Fresh Mixed Fruit Salad',
      count: 4,
      image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&h=400&fit=crop',
      color: '#FFCDD2'
    },
    {
      id: 7,
      name: 'Nutritious Sprout Salad',
      count: 5,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
      color: '#DCEDC8'
    },
    {
      id: 8,
      name: 'Paneer Protein Salads',
      count: 6,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
      color: '#FFECB3'
    },
  ];

  return (
    <section 
      id="products" 
      className="product-categories" 
      ref={sectionRef}
      style={{
        background: `linear-gradient(135deg, ${currentBackground.colors[0]}dd, ${currentBackground.colors[1]}dd)`,
        transition: 'background 1.5s ease-in-out'
      }}
    >
      <div className="container">
        <div className={`section-header fade-in-up ${isVisible ? 'animate-on-scroll' : ''}`}>
          <div className="section-title-wrapper">
            <span className="section-label">Our Collection</span>
            <h2 className="section-title animated-title">
              <span className="title-line">Fresh Picks,</span>
              <span className="title-line highlight">Endless Choices!</span>
            </h2>
          </div>
          <p className="section-subtitle">
            Discover our wide variety of healthy salads, smoothies, and fresh fruit products
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`category-card fade-in-up ${isVisible ? 'animate-on-scroll' : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--category-color': category.color
              }}
            >
              <div className="category-image-wrapper">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="category-image"
                  loading="lazy"
                />
                <div className="category-overlay"></div>
              </div>
              <div className="category-content">
                <h3 className="category-name">{category.name}</h3>
                <p className="category-count">{category.count} items</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
