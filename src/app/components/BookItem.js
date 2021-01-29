import React from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../redux/actions";
import "../../css/bookitem.css";
import deleteBtn from "../../images/delete.webp";
export default function BookItem({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="bookitem-container">
      <div className="book-name-container">
        <div className="book-name"> {book.name}</div>
        <img
          className="img-del"
          src={deleteBtn}
          alt="deletebtn"
          onClick={() => dispatch(deleteBook(book.id))}
        />
      </div>
      <div className="category">Category : {book.category}</div>
      <div className="desc">{book.description}</div>
      <div className="price">Price : {book.price} $</div>
    </div>
  );
}
