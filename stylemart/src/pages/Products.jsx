import ProductCard from '../components/ProductsCard'
import "../styles/products.css"

const Products = () => {
    const dummyProducts = [
      { id: 1, title: "Sneakers", price: 49.99, category: "Shoes", image: "https://via.placeholder.com/200" },
      { id: 2, title: "Backpack", price: 29.99, category: "Bags", image: "https://via.placeholder.com/200" },
      { id: 3, title: "Watch", price: 99.99, category: "Accessories", image: "https://via.placeholder.com/200" },
      { id: 4, title: "Jacket", price: 79.99, category: "Clothing", image: "https://via.placeholder.com/200" },
  ];

  return (
    <div className="products-grid">
      {dummyProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={(p) => console.log("Added:", p)}
        />
      ))}
    </div>
  )
}

export default Products