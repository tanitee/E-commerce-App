import {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "../styles/productDetails.css"
import ClipLoader from "react-spinners/ClipLoader";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductDetails = ({onAddToCart}) => {
  const [qty, setQty] = useState(1); 
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shortDesc, setShortDesc] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);
  const shortenedDesc = product?.description.length > 20
    ? product.description.slice(0, 80) + "..."
    : product?.description;

   if (loading) {
    return (
    <div className="loading-container">
      <ClipLoader size={50}/>
    </div>
    );
  }
  if (!product) {
    return <p>Product not found</p>;
  }
  const handleShow = () => {
    setShortDesc(!shortDesc)
  }
 

  return (
    <div className="product-details">
    
      <div className="product-image-section">
        <img src={product.image} alt={product.title} className="product-detail-image" />
      </div>

      <div className="product-info-section">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description"> 
           {shortDesc ? shortenedDesc : product.description}{" "}
            <button onClick={handleShow}>
              {shortDesc ? "Show more" : "Show less"}
            </button>
        </p>
        <p className="product-category"><strong>Category:</strong> {product.category}</p>

        <label htmlFor="quantity">Quantity:</label>
        <select id="quantity" className="quantity-dropdown" value={qty}
          onChange={(e) => setQty(parseInt(e.target.value))}>
          {[...Array(10).keys()].map((n) => (
            <option key={n + 1} value={n + 1}>
              {n + 1}
            </option>
          ))}
        </select>

        <button className="add-to-cart-btn"  onClick={() => addToCart(product, qty)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDetails