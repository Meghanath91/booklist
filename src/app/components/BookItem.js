import React from 'react'
import '../../css/bookitem.css'

export default function BookItem({ book }) {
  return (
    <div className="bookitem-container">
      <div className="book-name">{book.name}</div>
      <div>Delete</div>
      <div>{book.category}</div>
      <div>{book.description}</div>
      <div>{book.price}</div>
    </div>
  )
}
