import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useBackground } from '../context/BackgroundContext';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1, once: true });
  const { currentBackground } = useBackground();

  const categories = [
    {
      id: 1,
      name: 'All Items',
      icon: '🍎',
      items: [
        { id: 1, name: 'Exotic Fruit Salad', price: 199, image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=300&h=300&fit=crop' },
        { id: 2, name: 'Super Exotic Fruit Salad', price: 249, image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=300&h=300&fit=crop' },
        { id: 3, name: 'Regular Fruit Salad', price: 149, image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=300&h=300&fit=crop' },
        { id: 4, name: 'Cream Chia Paneer Salad', price: 199, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 5, name: 'Strawberry Juice', price: 129, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 6, name: 'Watermelon Juice', price: 119, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
      ]
    },
    {
      id: 2,
      name: 'Fruit Salads',
      icon: '🍓',
      items: [
        { id: 1, name: 'Exotic Fruit Salad', price: 199, image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=300&h=300&fit=crop' },
        { id: 2, name: 'Super Exotic Fruit Salad', price: 249, image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=300&h=300&fit=crop' },
        { id: 3, name: 'Regular Fruit Salad', price: 149, image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=300&h=300&fit=crop' },
        { id: 4, name: 'Mixed Fruit Bowl', price: 179, image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=300&h=300&fit=crop' },
      ]
    },
    {
      id: 3,
      name: 'Protein Salads',
      icon: '🥗',
      items: [
        { id: 1, name: 'Cream Chia Paneer Salad', price: 199, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 2, name: 'High Protein Rajma Salad', price: 289, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 3, name: 'Lettuce Paprika Paneer Salad', price: 275, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 4, name: 'Paneer Protein Salad', price: 189, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
      ]
    },
    {
      id: 4,
      name: 'Fresh Juices',
      icon: '🧃',
      items: [
        { id: 1, name: 'Strawberry Juice', price: 129, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 2, name: 'Watermelon Juice', price: 119, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 3, name: 'Kiwi Juice', price: 189, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 4, name: 'Apple Juice', price: 159, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 5, name: 'Orange Juice', price: 139, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
      ]
    },
    {
      id: 5,
      name: 'Smoothies',
      icon: '🥤',
      items: [
        { id: 1, name: 'Mango Smoothie', price: 149, image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop' },
        { id: 2, name: 'Berry Blast Smoothie', price: 169, image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop' },
        { id: 3, name: 'Green Detox Smoothie', price: 179, image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop' },
      ]
    },
  ];

  return (
    <section 
      id="menu" 
      className="menu-section"
      ref={sectionRef}
      style={{
        background: `linear-gradient(135deg, ${currentBackground.colors[0]}dd, ${currentBackground.colors[2]}dd)`,
        transition: 'background 1.5s ease-in-out'
      }}
    >
      <div className="container">
        <div className={`section-header fade-in-up ${isVisible ? 'animate-on-scroll' : ''}`}>
          <div className="section-title-wrapper">
            <span className="section-label">Browse Menu</span>
            <h2 className="section-title animated-title">
              <span className="title-line">Every Bite,</span>
              <span className="title-line highlight">A Delicious Choice!</span>
            </h2>
          </div>
          <p className="section-subtitle">
            Explore our complete menu with fresh, healthy options for every taste
          </p>
        </div>

        <div className="menu-categories">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className={`menu-category-btn ${activeCategory === index ? 'active' : ''} fade-in-up ${isVisible ? 'animate-on-scroll' : ''}`}
              onClick={() => setActiveCategory(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="menu-items-grid">
          {categories[activeCategory].items.map((item, index) => (
            <div
              key={item.id}
              className={`menu-item-card fade-in-up ${isVisible ? 'animate-on-scroll' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="menu-item-image">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="menu-item-overlay">
                  <button className="menu-quick-view">Quick View</button>
                </div>
              </div>
              <div className="menu-item-info">
                <h3 className="menu-item-name">{item.name}</h3>
                <div className="menu-item-footer">
                  <span className="menu-item-price">₹{item.price}</span>
                  <button className="menu-add-btn">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

