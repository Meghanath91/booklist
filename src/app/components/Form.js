import React from "react";
import "../../css/form.css";
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
