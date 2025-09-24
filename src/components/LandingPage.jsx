import React from 'react'
import '../styles/landingPage.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to StyleMart</h1>
        <p className="hero-subtitle">
          Discover the latest fashion trends at unbeatable prices.
        </p>
        <div className="hero-buttons">
          <Link to="/products" className="btn primary-btn">Shop Now</Link>
          <Link to="/cart" className="btn secondary-btn">View Cart</Link>
        </div>
      </div>
    </section>
  )
}

export default LandingPage