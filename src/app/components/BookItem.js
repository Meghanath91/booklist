import React from 'react'
import '../../css/bookitem.css'

export default function BookItem() {
  return (
    <div className="bookitem-container">
      <div className="book-name">Book Name</div>
      <div>Delete</div>
      <div>Category</div>
      <div>Description</div>
      <div>Price</div>
    </div>
  )
}
