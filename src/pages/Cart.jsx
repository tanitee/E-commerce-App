import React from 'react'
import { useState , useContext } from 'react'
import "../styles/cart.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const { cart , removeFromCart , increaseQty , decreaseQty , getCartTotals } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-item-img" />

                <div className="cart-item-info">
                  <h4>{item.title}</h4>
                  <p>${item.price.toFixed(2)}</p>
                </div>

                <div className="modifier-controls">
                  <button className="qty-btn" onClick={() => {decreaseQty(item.id)}}>-</button>
                  <span className="qty">{item.quantity}</span>
                  <button className="qty-btn" onClick={() => {increaseQty(item.id)}}>+</button>
                </div>


                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Subtotal: ${getCartTotals().toFixed(2)}</p>
            <p>Total: ${getCartTotals().toFixed(2)}</p>
            <Link to={'/checkout'}>
            <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart