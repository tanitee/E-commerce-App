import "../styles/ProductStyle.css"; 
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductsCard = ({ product, onAddToCart }) => {
  const { addToCart } = useContext(CartContext);


  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-price">${product.price}</p>
      
      <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();  
            addToCart(product, 1);
          }}

        className="add-to-cart-btn"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductsCard;
