import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  let handleExplore = () => {
    navigate(`/usersportal/products`);
  };
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <span>WELCOME TO ONESHOP</span>
          <h1>
            Shopping Made <br /> Simple & Special
          </h1>
          <p>
            Your one-stop destination for quality products, amazing deals, and a
            seamless shopping experience.
          </p>
          <button onClick={handleExplore}>Explore Our Store</button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900"
            alt="OneShop shopping store"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about-info">
        <div className="section-heading">
          <span>WHO WE ARE</span>
          <h2>About OneShop</h2>
          <p>Everything You Need, All in One Place.</p>
        </div>

        <div className="info-content">
          <div className="info-image">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900"
              alt="Online shopping"
            />
          </div>

          <div className="info-text">
            <h2>Your Favourite Online Shopping Destination</h2>
            <p>
              OneShop is an online shopping platform designed to make your
              shopping experience easy, convenient, and enjoyable.
            </p>
            <p>
              From fashion and electronics to everyday essentials, we bring a
              wide range of products together in one place. Our goal is to
              provide quality products at affordable prices with reliable
              service.
            </p>

            <div className="info-points">
              <div>✓ Quality Products</div>
              <div>✓ Affordable Prices</div>
              <div>✓ Secure Shopping</div>
              <div>✓ Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="mission">
        <div className="mission-card">
          <div className="mission-icon">🎯</div>
          <h2>Our Mission</h2>
          <p>
            To provide customers with quality products, affordable prices, and a
            convenient online shopping experience.
          </p>
        </div>

        <div className="mission-card">
          <div className="mission-icon">🚀</div>
          <h2>Our Vision</h2>
          <p>
            To become a trusted online shopping destination by delivering
            innovation, quality, and customer satisfaction.
          </p>
        </div>

        <div className="mission-card">
          <div className="mission-icon">💎</div>
          <h2>Our Values</h2>
          <p>
            We believe in trust, transparency, quality, affordability, and
            building long-lasting relationships with our customers.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="section-heading">
          <span>OUR FEATURES</span>
          <h2>Why Choose OneShop?</h2>
          <p>We make online shopping better for everyone.</p>
        </div>

        <div className="features">
          <div className="feature-card">
            <div>🛍️</div>
            <h3>Wide Product Range</h3>
            <p>Discover everything you need in one place.</p>
          </div>

          <div className="feature-card">
            <div>💰</div>
            <h3>Best Prices</h3>
            <p>Enjoy quality products at affordable prices.</p>
          </div>

          <div className="feature-card">
            <div>🔒</div>
            <h3>Secure Shopping</h3>
            <p>Shop confidently with a secure shopping experience.</p>
          </div>

          <div className="feature-card">
            <div>🚚</div>
            <h3>Fast Delivery</h3>
            <p>Get your favourite products delivered to your doorstep.</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="about-stats">
        <div>
          <h2>1000+</h2>
          <p>Happy Customers</p>
        </div>

        <div>
          <h2>500+</h2>
          <p>Products</p>
        </div>

        <div>
          <h2>50+</h2>
          <p>Categories</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="about-banner">
        <h2>Start Your Shopping Journey With OneShop!</h2>
        <p>Discover more. Shop smarter. Live better.</p>
      </section>
    </div>
  );
};

export default About;
