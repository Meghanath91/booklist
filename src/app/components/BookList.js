import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddBook from "./AddBook";
import BookItem from "./BookItem";
import addBtn from "../../images/add.png";
import logo from "../../images/logo4.gif";
import "../../css/booklist.css";


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

/**
   * @func BookList
   * @return {HTML}
   */
export default function BookList() {
  const classes = useStyles();
  const books = useSelector((state) => state);
  const [open, setOpen] = useState(false);
  /**
   * @func handleOpen
   * @return {undefined}
   */
  const handleOpen = () => {
    setOpen(true);
  };
  /**
    * @func handleClose
    * @return {undefined}
    */
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <AddBook onClose={handleClose} />
    </div>
  );
  return (
    <div>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        <h3>BookList app</h3>
      </div>
      <div className="booklist-container">
        <div className="add-btn-container" onClick={handleOpen}>
          <div className="add-btn-text">Add Book</div>
          <img className="add-del" src={addBtn} alt="addbtn" />
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
        {books.map((book) => {
          return <BookItem key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
}

