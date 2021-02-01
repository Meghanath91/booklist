import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v1 as uuid } from "uuid";
import { addBook, updateBook } from "../redux/actions";
import Form from "./Form";
import "../../css/addbook.css";
import PropTypes from 'prop-types';

/**
 * @func AddBook
 * @param {object} props
 * @return {HTML}
 */
export default function AddBook({
  onClose,
  currentId,
  currentName,
  currentCategory,
  currentPrice,
  currentDescription,
  edit,
}) {

  const dispatch = useDispatch();
  //states
  const [name, setName] = useState(currentName ? currentName : "");
  const [category, setCategory] = useState(
    currentCategory ? currentCategory : ""
  );
  const [price, setPrice] = useState(currentPrice ? currentPrice : "");
  const [description, setDescription] = useState(
    currentDescription ? currentDescription : ""
  );
  const [error, setError] = useState("");

  /**
   * @func handleName
   * @param {object} e
   * @return {undefined}
   */
  const handleName = (e) => {
    const bookName = e.target.value;
    setName(bookName);
  };
  /**
 * @func handleCategory
 * @param {object} e
 * @return {undefined}
 */
  const handleCategory = (e) => {
    const bookCategory = e.target.value;
    setCategory(bookCategory);
  };
  /**
 * @func handlePrice
 * @param {object} e
 * @return {undefined}
 */
  const handlePrice = (e) => {
    const bookPrice = e.target.value;
    setPrice(bookPrice);
  };
  /**
 * @func handleDescription
 * @param {object} e
 * @return {undefined}
 */
  const handleDescription = (e) => {
    const bookDescription = e.target.value;
    setDescription(bookDescription);
  };
  /**
   * @func handleAddBook
   * @return {undefined}
   */
  const handleAddBook = () => {
    //error handling
    if (name.length === 0) {
      setError(`Name can't be blank`);
    } else {
      //dispatch addbook action
      dispatch(
        addBook({
          id: uuid(),
          name: name,
          category: category,
          price: price,
          description: description,
        })
      );
      //close modal add book
      onClose();
    }
  };
  /**
   * @func handleUpdateBook
   * @return {undefined}
   */
  const handleUpdateBook = () => {
    //dispatch updatebook action
    dispatch(
      updateBook({
        id: currentId,
        name: name,
        category: category,
        price: price,
        description: description,
      })
    );
    //close modal add book
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
      {error !== "" ? <p className="err-msg">{error}</p> : null}
      {edit ? (
        <input
          className="btn"
          type="button"
          value="Update Book"
          onClick={handleUpdateBook}
        />
      ) : (
          <input
            className="btn"
            type="button"
            value="Add Book"
            onClick={handleAddBook}
          />
        )}
    </div>
  );
}
AddBook.propTypes = {
  onClose: PropTypes.func,
  currentId: PropTypes.string,
  currentName: PropTypes.string,
  currentCategory: PropTypes.string,
  currentPrice: PropTypes.string,
  currentDescription: PropTypes.string,
  edit: PropTypes.bool,
}
