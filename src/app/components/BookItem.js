import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { deleteBook } from "../redux/actions";
import "../../css/bookitem.css";
import deleteBtn from "../../images/delete.webp";
import AddBook from "./AddBook";
import { Modal } from "@material-ui/core";


const useStyles = makeStyles(() => ({
  paper: {
    top: "1%",
    left: "35%",
    position: "absolute",
    width: "30%",
    border: "none",
    "@media (max-width:768px)": {
      width: "100%",
      top: "0%",
      left: "0%",
    },
  },
}));
export default function BookItem({ book }) {
  const classes = useStyles()
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div className={classes.paper}>
      <AddBook onClose={handleClose} currentId={book.id} currentName={book.name} currentCategory={book.category} currentPrice={book.price} currentDescription={book.description} edit={true} />
    </div>
  );

  return (
    <div className="bookitem-container">
      <div className="book-name-container">
        <div className="book-name" onClick={handleOpen}> {book.name}</div>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
