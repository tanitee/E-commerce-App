import React from 'react'

const PriceRangeFilter = ({ sortByPrice, onSortChange }) => {
  return (
    <select value={sortByPrice} onChange={(e) => onSortChange(e.target.value)}>
      <option value="">Sort by Price</option>
      <option value="lowToHigh">Low → High</option>
      <option value="highToLow">High → Low</option>
    </select>
  )
}

export default PriceRangeFilter