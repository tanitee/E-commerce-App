import React from 'react'

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
      <option value="all">All</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewelery</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="women's clothing">Women's Clothing</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  )
}

export default CategoryFilter