import React from "react";
import { useSelector } from 'react-redux';
import BookItem from "./BookItem";

export default function BookList() {

  let books = useSelector(state => state)

  return (
    <div>
      <h3>BookList app</h3>
      {books.map(book => {
        return <BookItem key={book.id} book={book}
        />
      })}

    </div>
  );
}
