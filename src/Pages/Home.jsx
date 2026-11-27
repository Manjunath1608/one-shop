
import React, { useState } from 'react'
// import './Home.css'
import { products, categories } from './HomeData'

const Home = () => {

  const [activeCategory, setActiveCategory] = useState('All')
  const [activeTab, setActiveTab] = useState('New Arrivals')

  const filteredProducts = products.filter(product => {
    return activeCategory === 'All' || product.category === activeCategory
  })

  const displayedProducts = activeTab === 'Best Sellers'
    ? [...filteredProducts].sort((a, b) => b.rating - a.rating)
    : activeTab === 'Featured'
      ? filteredProducts.filter(product => product.featured)
      : filteredProducts

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p>UP TO 50% OFF ON LATEST COLLECTION</p>
          <h1>Discover Your <span>Style</span></h1>
          <p className="description">
            Upgrade your lifestyle with the latest fashion,
            accessories and amazing products at unbeatable prices.
          </p>
          <button onClick={() => {
            setActiveCategory('All')
            document.getElementById('products').scrollIntoView({
              behavior: 'smooth'
            })
          }}>
            SHOP NOW →
          </button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700"
            alt="Fashion Collection"
          />
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="promotions">

        <div className="promotion-card women">
          <div className="promotion-content">
            <p>SUPER SALE</p>
            <h2>New Collection</h2>
            <span>Up to 40% OFF</span>
            <button onClick={() => setActiveCategory('Women')}>
              Explore Now →
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300"
            alt="Women Collection"
          />
        </div>

        <div className="promotion-card men">
          <div className="promotion-content">
            <p>FASHION FEST</p>
            <h2>New Season</h2>
            <span>Sale 40% OFF</span>
            <button onClick={() => setActiveCategory('Men')}>
              Shop Collection →
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=300"
            alt="Men Collection"
          />
        </div>

      </section>

      {/* Categories */}
      <section className="categories">
        <div className="section-heading">
          <p>EXPLORE OUR STORE</p>
          <h2>Shop By Category</h2>
          <span>Find everything you need in one place</span>
        </div>

        <div className="category-list">
          {categories.map(category => (
            <button
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="products-section" id="products">

        <div className="products-header">
          <div>
            <p>HANDPICKED FOR YOU</p>
            <h2>Exclusive Products</h2>
          </div>

          <div className="product-tabs">
            {['New Arrivals', 'Best Sellers', 'Featured'].map(tab => (
              <button
                key={tab}
                className={activeTab === tab ? 'active' : ''}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="product-grid">
          {displayedProducts.length > 0 ? (
            displayedProducts.map(product => (
              <div className="product-card" key={product.id}>

                {product.badge && (
                  <span className="product-badge">
                    {product.badge}
                  </span>
                )}

                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="product-info">
                  <span className="product-category">
                    {product.category}
                  </span>

                  <h3>{product.name}</h3>

                  <div className="product-price">
                    <strong>₹{product.price.toLocaleString('en-IN')}</strong>
                    <del>₹{product.oldPrice.toLocaleString('en-IN')}</del>
                  </div>

                  <div className="rating">
                    ★★★★★ <span>({product.rating})</span>
                  </div>

                  <button
                    className="cart-btn"
                    onClick={() => alert(`${product.name} added to cart!`)}
                  >
                    ADD TO CART +
                  </button>
                </div>

              </div>
            ))
          ) : (
            <p className="no-products">
              No products available in this category.
            </p>
          )}
        </div>

      </section>

      {/* Bottom Banner */}
      <section className="bottom-banner">
        <p>ONE SHOP SPECIAL</p>
        <h2>Everything You Love, All in One Place!</h2>
        <span>
          Amazing deals. Amazing products. Amazing shopping experience.
        </span>
        <button onClick={() => {
          setActiveCategory('All')
          document.getElementById('products').scrollIntoView({
            behavior: 'smooth'
          })
        }}>
          EXPLORE ALL PRODUCTS
        </button>
      </section>

    </div>
  )
}

export default Home
