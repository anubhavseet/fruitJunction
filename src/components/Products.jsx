import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useBackground } from '../context/BackgroundContext';

const Products = () => {
  const [offersRef, offersVisible] = useScrollAnimation({ threshold: 0.1, once: true });
  const [popularRef, popularVisible] = useScrollAnimation({ threshold: 0.1, once: true });
  const { currentBackground } = useBackground();
  const specialOffers = [
    {
      id: 1,
      name: 'Cream Chia Paneer Salad',
      originalPrice: 249,
      salePrice: 199,
      category: 'Paneer Based Protein Salad',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      onSale: true
    },
    {
      id: 2,
      name: 'High Protein Rajma Salad (250 Gms)',
      originalPrice: 349,
      salePrice: 289,
      category: 'Paneer Based Protein Salad',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      onSale: true
    },
    {
      id: 3,
      name: 'Lettuce Paprika Paneer Salad',
      originalPrice: 499,
      salePrice: 349,
      category: 'Paneer Based Protein Salad',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      onSale: true
    },
    {
      id: 4,
      name: 'Paneer Protein Salad',
      originalPrice: 239,
      salePrice: 189,
      category: 'Paneer Based Protein Salad',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      onSale: true
    },
  ];

  const popularProducts = [
    {
      id: 5,
      name: 'Creamy Fruit Bowl',
      price: 299,
      category: 'Fresh Mixed Fruit Salad',
      image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'Loki Mint Detox Juice – 300 ML',
      price: 129,
      category: 'Healthy Detox Juices',
      image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=400&fit=crop'
    },
    {
      id: 7,
      name: 'Lemon Juice – 300 ML',
      price: 129,
      category: 'Healthy Detox Juices',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop'
    },
    {
      id: 8,
      name: 'Amla Anar Detox Juice – 300 ML',
      price: 129,
      category: 'Healthy Detox Juices',
      image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=400&fit=crop'
    },
  ];

  const ProductCard = ({ product, isSpecialOffer = false, index = 0, isVisible = false }) => (
    <div
      className={`product-card fade-in-up ${isSpecialOffer ? 'special-offer' : ''} ${isVisible ? 'animate-on-scroll' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {product.onSale && (
        <span className="sale-badge">SALE</span>
      )}
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        <div className="product-image-overlay">
          <button className="quick-view-btn">Quick View</button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-price">
          {product.onSale ? (
            <>
              <span className="original-price">₹{product.originalPrice}</span>
              <span className="sale-price">₹{product.salePrice}</span>
            </>
          ) : (
            <span className="current-price">₹{product.price}</span>
          )}
        </div>
        <button className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );

  return (
    <div className="products-section">
      {/* Special Offers */}
      <section
        className="special-offers"
        ref={offersRef}
        style={{
          background: `linear-gradient(135deg, ${currentBackground.colors[0]}dd, ${currentBackground.colors[1]}dd)`,
          transition: 'background 1.5s ease-in-out'
        }}
      >
        <div className="container">
          <div className={`section-header fade-in-up ${offersVisible ? 'animate-on-scroll' : ''}`}>
            <div className="section-title-wrapper">
              <span className="section-label">Limited Time</span>
              <h2 className="section-title animated-title">
                <span className="title-line">Taste the Savings,</span>
                <span className="title-line highlight">Feel the Freshness!</span>
              </h2>
            </div>
            <p className="section-subtitle">
              Looking for the perfect Diet Food or a quick Weight Loss Meal?
              Our special offers make healthy eating affordable!
            </p>
          </div>

          <div className="products-grid">
            {specialOffers.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                isSpecialOffer
                index={index}
                isVisible={offersVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section
        className="popular-products"
        ref={popularRef}
        style={{
          background: `linear-gradient(135deg, ${currentBackground.colors[1]}dd, ${currentBackground.colors[2]}dd)`,
          transition: 'background 1.5s ease-in-out'
        }}
      >
        <div className="container">
          <div className={`section-header fade-in-up ${popularVisible ? 'animate-on-scroll' : ''}`}>
            <div className="section-title-wrapper">
              <span className="section-label">Customer Favorites</span>
              <h2 className="section-title animated-title">
                <span className="title-line">Loved by Many,</span>
                <span className="title-line highlight">Chosen by You!</span>
              </h2>
            </div>
            <p className="section-subtitle">
              Top picks for every day — from fruit bowls to refreshing sips,
              enjoy our best-selling flavors full of freshness and goodness.
            </p>
          </div>

          <div className="products-grid">
            {popularProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                isVisible={popularVisible}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
