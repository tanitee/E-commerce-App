import React from 'react'
import "../styles/filter.css"

const AlphabetOrdFilter = ({ order, onOrderChange }) => {
  return (
    <select value={order} onChange={(e) => onOrderChange(e.target.value)}>
      <option value="">Sort Alphabetically</option>
      <option value="asc">A → Z</option>
      <option value="desc">Z → A</option>
    </select>
  )
}

export default AlphabetOrdFilter