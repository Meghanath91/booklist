import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteBook } from '../redux/actions'
import '../../css/bookitem.css'

export default function BookItem({ book }) {
  const dispatch = useDispatch()
  return (
    <div className="bookitem-container">
      <div className="book-name">{book.name}</div>
      <div onClick={() => dispatch(deleteBook(book.id))}>Delete</div>
      <div>{book.category}</div>
      <div>{book.description}</div>
      <div>{book.price}</div>
    </div>
  )
}
