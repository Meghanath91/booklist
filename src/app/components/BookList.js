import React from "react";
import AddBook from "./AddBook";
import BookItem from "./BookItem";

export default function BookList() {
  return (
    <div>
      <h3>BookList app</h3>
      <AddBook />
      <br />
      <BookItem />
      <br />
      <BookItem />
      <br />
      <BookItem />

    </div>
  );
}
