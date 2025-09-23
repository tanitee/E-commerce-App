import ProductCard from '../components/ProductsCard'
import "../styles/products.css"
import {Link} from 'react-router-dom'
import { useState, useEffect , useRef } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import CategoryFilter from '../components/CategoryFilter';
import AlphabetOrdFilter from '../components/AlphabetOrdFilter';
import PriceRangeFilter from '../components/PriceRangeFilter';

const Products = ({isHome}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categoriesRef = useRef(null);
  const [alphabetOrder, setAlphabetOrder] = useState("");
  const [priceOrder, setPriceOrder] = useState("");

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

  useEffect(() => {
    let updatedProducts = [...products];

    if (selectedCategory !== "all") {
    updatedProducts = updatedProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  //sort by price
  if (priceOrder === "lowToHigh") {
    updatedProducts.sort((a, b) => a.price - b.price);
  } else if (priceOrder === "highToLow") {
    updatedProducts.sort((a, b) => b.price - a.price);
  }

  //sort alphabetically
  if (alphabetOrder === "asc") {
    updatedProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (alphabetOrder === "desc") {
    updatedProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  setFilteredProducts(updatedProducts);
  },  [products, selectedCategory, priceOrder, alphabetOrder])

  if (loading) {
    return (
    <div className="loading-container">
      <ClipLoader size={50}/>
    </div>
    );
  }

  return (
    <>
      {!isHome && (
        <>
          <p>Sort by:</p>
          <AlphabetOrdFilter order={alphabetOrder} onOrderChange={setAlphabetOrder} />
          <PriceRangeFilter sortByPrice={priceOrder} onSortChange={setPriceOrder} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </>
      )}

      <div className="products-grid">
        {filteredProducts.map((product) => (

          <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={(p) => console.log("Added:", p)}
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Products