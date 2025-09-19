import ProductCard from '../components/ProductsCard'
import "../styles/products.css"
import {Link} from 'react-router-dom'
import dummyProducts from "../data/dummyProducts";

const Products = () => {

  return (
    <div className="products-grid">
      {dummyProducts.map((product) => (

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