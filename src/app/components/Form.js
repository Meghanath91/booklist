import React from "react";
import "../../css/form.css";
import PropTypes from 'prop-types';

export default function Form({
  name,
  category,
  price,
  description,
  handleName,
  handleCategory,
  handlePrice,
  handleDescription,
}) {
  return (
    <div className="form-container">
      <input
        placeholder="Name"
        onChange={handleName}
        value={name}
        type="text"
      />
      <input
        placeholder="Category"
        onChange={handleCategory}
        value={category}
        type="text"
      />
      <input
        placeholder="Price"
        onChange={handlePrice}
        value={price}
        type="text"
      />
      <textarea
        className="desc-input"
        placeholder="Description"
        onChange={handleDescription}
        value={description}
        type="text"
      ></textarea>
    </div>
  );
}

Form.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  handleName: PropTypes.func,
  handleCategory: PropTypes.func,
  handlePrice: PropTypes.func,
  handleDescription: PropTypes.func,
}
