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
        { id: 1, name: 'Creamy Fruit Bowl', price: 299, image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=300&h=300&fit=crop' },
        { id: 2, name: 'Cream Chia Paneer Salad', price: 199, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 3, name: 'High Protein Rajma Salad', price: 289, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 4, name: 'Lettuce Paprika Paneer Salad', price: 349, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 5, name: 'Paneer Protein Salad', price: 189, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 6, name: 'Loki Mint Detox Juice', price: 129, image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=300&h=300&fit=crop' },
        { id: 7, name: 'Lemon Juice', price: 129, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 8, name: 'Amla Anar Detox Juice', price: 129, image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=300&h=300&fit=crop' },
      ]
    },
    {
      id: 2,
      name: 'Fresh Mixed Fruit Salad',
      icon: '🍓',
      items: [
        { id: 1, name: 'Creamy Fruit Bowl', price: 299, image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=300&h=300&fit=crop' },
        { id: 2, name: 'Fruit Salad Classic', price: 249, image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=300&h=300&fit=crop' },
        { id: 3, name: 'Exotic Fruit Mix', price: 199, image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=300&h=300&fit=crop' },
        { id: 4, name: 'Tropical Fruit Bowl', price: 279, image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=300&h=300&fit=crop' },
        { id: 5, name: 'Seasonal Fruit Mix', price: 229, image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=300&h=300&fit=crop' },
      ]
    },
    {
      id: 3,
      name: 'Paneer Protein Salad',
      icon: '🥗',
      items: [
        { id: 1, name: 'Cream Chia Paneer Salad', price: 199, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 2, name: 'High Protein Rajma Salad', price: 289, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 3, name: 'Lettuce Paprika Paneer Salad', price: 349, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 4, name: 'Paneer Protein Salad', price: 189, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 5, name: 'Classic Paneer Salad', price: 219, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 6, name: 'Spicy Paneer Delight', price: 259, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
      ]
    },
    {
      id: 4,
      name: 'Fresh Fruit Juices',
      icon: '🧃',
      items: [
        { id: 1, name: 'Orange Juice 300ml', price: 129, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 2, name: 'Apple Juice 300ml', price: 139, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 3, name: 'Watermelon Juice 300ml', price: 119, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 4, name: 'Pineapple Juice 300ml', price: 149, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 5, name: 'Mixed Fruit Juice 300ml', price: 159, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 6, name: 'Mango Juice 300ml', price: 149, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 7, name: 'Pomegranate Juice 300ml', price: 169, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 8, name: 'Grape Juice 300ml', price: 139, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 9, name: 'Strawberry Juice 300ml', price: 159, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 10, name: 'Kiwi Juice 300ml', price: 169, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 11, name: 'Papaya Juice 300ml', price: 129, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 12, name: 'Guava Juice 300ml', price: 129, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 13, name: 'Mosambi Juice 300ml', price: 119, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 14, name: 'Lychee Juice 300ml', price: 179, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 15, name: 'Dragon Fruit Juice 300ml', price: 189, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
      ]
    },
    {
      id: 5,
      name: 'Fresh Fruit Smoothies',
      icon: '🥤',
      items: [
        { id: 1, name: 'Mango Smoothie', price: 159, image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop' },
        { id: 2, name: 'Berry Blast Smoothie', price: 169, image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop' },
        { id: 3, name: 'Banana Smoothie', price: 149, image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop' },
        { id: 4, name: 'Tropical Smoothie', price: 179, image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop' },
        { id: 5, name: 'Avocado Smoothie', price: 189, image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop' },
        { id: 6, name: 'Peanut Butter Smoothie', price: 199, image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop' },
        { id: 7, name: 'Green Detox Smoothie', price: 179, image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop' },
      ]
    },
    {
      id: 6,
      name: 'Healthy Detox Juices',
      icon: '🥬',
      items: [
        { id: 1, name: 'Loki Mint Detox Juice', price: 129, image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=300&h=300&fit=crop' },
        { id: 2, name: 'Lemon Juice', price: 129, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { id: 3, name: 'Amla Anar Detox Juice', price: 129, image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=300&h=300&fit=crop' },
        { id: 4, name: 'Cucumber Detox Juice', price: 119, image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=300&h=300&fit=crop' },
        { id: 5, name: 'Beetroot Detox Juice', price: 139, image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=300&h=300&fit=crop' },
        { id: 6, name: 'Carrot Ginger Detox', price: 129, image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=300&h=300&fit=crop' },
        { id: 7, name: 'Green Detox Mix', price: 149, image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=300&h=300&fit=crop' },
      ]
    },
    {
      id: 7,
      name: 'Crispy Vegetable Salad',
      icon: '🥕',
      items: [
        { id: 1, name: 'Garden Fresh Salad', price: 159, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 2, name: 'Mediterranean Veggie Salad', price: 179, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 3, name: 'Crunchy Veggie Mix', price: 149, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
      ]
    },
    {
      id: 8,
      name: 'Nutritious Sprout Salad',
      icon: '🌱',
      items: [
        { id: 1, name: 'Mixed Sprout Salad', price: 139, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 2, name: 'Moong Sprout Salad', price: 129, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 3, name: 'Chickpea Sprout Salad', price: 149, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 4, name: 'Protein Power Sprout', price: 159, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
        { id: 5, name: 'Tangy Sprout Mix', price: 139, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
      ]
    },
    {
      id: 9,
      name: 'Coconut Beverages',
      icon: '🥥',
      items: [
        { id: 1, name: 'Fresh Coconut Water', price: 99, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop' },
        { id: 2, name: 'Coconut Milk Shake', price: 149, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop' },
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

