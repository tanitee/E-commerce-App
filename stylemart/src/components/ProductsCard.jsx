import "../styles/ProductStyle.css"; 

const ProductsCard = ({ product, onAddToCart }) => {
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
        onClick={() => onAddToCart(product)}
        className="add-to-cart-btn"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductsCard;
