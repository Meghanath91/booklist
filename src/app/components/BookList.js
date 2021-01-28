import React from "react";
import { useSelector } from 'react-redux';
import AddBook from "./AddBook";
import BookItem from "./BookItem";

export default function BookList() {

  let books = useSelector(state => state)
  const handleAddBook = () => {

  }
  return (
    <div>
      <h3>BookList app</h3>
      <div onClick={handleAddBook}>Add Book Button</div>
      <AddBook />
      {books.map(book => {
        return <BookItem key={book.id} book={book}
        />
      })}

    </div>
  );
}
