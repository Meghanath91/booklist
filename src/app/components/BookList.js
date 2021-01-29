import { Modal } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from "react";
import { useSelector } from 'react-redux';
import AddBook from "./AddBook";
import BookItem from "./BookItem";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function BookList() {

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  let books = useSelector(state => state)
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <AddBook />
    </div>
  );
  return (
    <div>
      <h3>BookList app</h3>
      <div onClick={handleOpen}>Add Book Button</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >{body}</Modal>
      {/* <AddBook /> */}
      {books.map(book => {
        return <BookItem key={book.id} book={book}
        />
      })}

    </div>
  );
}
