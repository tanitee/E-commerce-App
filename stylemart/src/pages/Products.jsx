import ProductCard from '../components/ProductsCard'
import "../styles/products.css"
import {Link} from 'react-router-dom'
import { useState, useEffect , useRef } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const fetchProducts = async() => {
      setLoading(true);
      try{
        const response =  await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
    setLoading(false);

  }, [])
  if (loading) {
    return (
    <div className="loading-container">
      <ClipLoader size={50}/>
    </div>
    );
  }

  return (
    <div className="products-grid">
      {products.map((product) => (

        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(p) => console.log("Added:", p)}
          />
        </Link>
      ))}
      
    </div>
  )
}

export default Products