import { Modal } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from "react";
import { useSelector } from 'react-redux';
import AddBook from "./AddBook";
import BookItem from "./BookItem";
import addBtn from "../../images/add.png";
import logo from "../../images/logo4.gif";
import '../../css/booklist.css'
import useMediaQuery from '@material-ui/core/useMediaQuery';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }


const useStyles = makeStyles((theme) => ({
  paper: {
    // margin: 'auto',
    top: '1%',
    left: '35%',
    position: 'absolute',
    width: '30%',
    '@media (max-width:768px)': {
      width: '100%',
      top: '0%',
      left: '0%',
    },
    // backgroundColor: theme.palette.background.paper,
    border: 'none',


    // borderRadius: '15px',
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 1, 0),
  },
}));

export default function BookList() {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle);

  let books = useSelector(state => state)
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const body = (
    <div className={classes.paper}>
      <AddBook onClose={handleClose} />
    </div>
  );
  return (
    <div>
      <div className="logo-container">
        <img
          className="logo"
          src={logo}
          alt="logo"
        />
        <h3>BookList app</h3>
      </div>
      <div className="booklist-container">
        <div className="add-btn-container" onClick={handleOpen}>
          <div className="add-btn-text">Add Book</div>
          <img
            className="add-del"
            src={addBtn}
            alt="addbtn"
          />
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >{body}</Modal>

        {books.map(book => {
          return <BookItem key={book.id} book={book}
          />
        })}
      </div>


    </div>
  );
}
