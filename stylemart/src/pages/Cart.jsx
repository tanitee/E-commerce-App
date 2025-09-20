import React from 'react'
import { useState } from 'react'
import "../styles/cart.css"
import { Link } from 'react-router-dom'

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Popwave Curse", price: 25.99, image: "/images/popwave.jpg" , quantity: 1},
    { id: 2, title: "Retro Hoodie", price: 49.99, image: "/images/hoodie.jpg" , quantity: 1},
  ]);

  // Remove item from cart
  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-item-img" />

                <div className="cart-item-info">
                  <h4>{item.title}</h4>
                  <p>${item.price.toFixed(2)}</p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Total: ${subtotal.toFixed(2)}</p>
            <Link to={'/order-confirmation'}>
            <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart