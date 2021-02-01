import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v1 as uuid } from "uuid";
import { addBook, updateBook } from "../redux/actions";
import Form from "./Form";
import "../../css/addbook.css";


export default function AddBook({ onClose, currentId, currentName, currentCategory, currentPrice, currentDescription, edit }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(currentName ? currentName : "");
  const [category, setCategory] = useState(currentCategory ? currentCategory : "");
  const [price, setPrice] = useState(currentPrice ? currentPrice : "");
  const [description, setDescription] = useState(currentDescription ? currentDescription : "");
  const [error, setError] = useState('')
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
    if (name.length === 0) {
      setError(`Name can't be blank`)
    } else {
      dispatch(
        addBook({
          id: uuid(),
          name: name,
          category: category,
          price: price,
          description: description,
        })
      );
      onClose()
    }
    ;
  };
  const handleUpdateBook = () => {
    dispatch(updateBook({
      id: currentId,
      name: name,
      category: category,
      price: price,
      description: description,
    }))
    onClose();
  }
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
      {error !== '' ? <p className="err-msg">{error}</p> : null}
      {edit ? <input
        className="btn"
        type="button"
        value="Update Book"
        onClick={handleUpdateBook}
      /> : <input
          className="btn"
          type="button"
          value="Add Book"
          onClick={handleAddBook}
        />}

    </div>
  );
}
