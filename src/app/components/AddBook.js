import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v1 as uuid } from "uuid";
import { addBook } from "../redux/actions";
import Form from "./Form";
import "../../css/addbook.css";

export default function AddBook({ onClose }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleName = (e) => {
    const bookName = e.target.value;
    setName(bookName);
  };
  const handleCategory = (e) => {
    const bookCategory = e.target.value;
    setCategory(bookCategory);
  };
  const handlePrice = (e) => {
    const bookPrice = e.target.value;
    setPrice(bookPrice);
  };
  const handleDescription = (e) => {
    const bookDescription = e.target.value;
    setDescription(bookDescription);
  };
  const handleAddBook = () => {
    dispatch(
      addBook({
        id: uuid(),
        name: name,
        category: category,
        price: price,
        description: description,
      })
    );
    setName("");
    setCategory("");
    setPrice("");
    setDescription("");
    onClose();
  };
  return (
    <div className="modal-container">
      <Form
        name={name}
        category={category}
        price={price}
        description={description}
        handleName={handleName}
        handleCategory={handleCategory}
        handlePrice={handlePrice}
        handleDescription={handleDescription}
      />
      <input
        className="btn"
        type="button"
        value="Add Book"
        onClick={handleAddBook}
      />
    </div>
  );
}
