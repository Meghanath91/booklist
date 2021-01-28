import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from './actions'
import { books } from './states'
export let reducer = (state = books, action) => {
  let newBooks;
  switch (action.type) {
    case ADD_BOOK:
      newBooks = [...state]
      newBooks.push(action.payload)
      return newBooks;


    case DELETE_BOOK:
      newBooks = [...state]
      newBooks = newBooks.filter(book => book.id !== action.payload)
      return newBooks;

    case EDIT_BOOK:
      break;
    default:


  }
  return state;
}

