import {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "../styles/productDetails.css"
import dummyProducts from "../data/dummyProducts";

const ProductDetails = ({onAddToCart}) => {
  const { id } = useParams();
  const product = dummyProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-details">
    
      <div className="product-image-section">
        <img src={product.image} alt={product.title} className="product-detail-image" />
      </div>

      <div className="product-info-section">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>

        <label htmlFor="quantity">Quantity:</label>
        <select id="quantity" className="quantity-dropdown">
          {[...Array(10).keys()].map((n) => (
            <option key={n + 1} value={n + 1}>
              {n + 1}
            </option>
          ))}
        </select>

        <button className="add-to-cart-btn"  onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDetails