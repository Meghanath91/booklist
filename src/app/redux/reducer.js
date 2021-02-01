import { ADD_BOOK, UPDATE_BOOK, DELETE_BOOK } from "./actions";
import { books } from "./states";

/**
 * @func reducer
 * @param {object} state
 * @param {object} action
 * @return {object}
 */
export let reducer = (state = books, action) => {
  let newBooks;
  switch (action.type) {
    case ADD_BOOK:
      newBooks = [...state];
      newBooks.push(action.payload);
      return newBooks;

    case DELETE_BOOK:
      newBooks = [...state];
      newBooks = newBooks.filter((book) => book.id !== action.payload);
      return newBooks;

    case UPDATE_BOOK:
      newBooks = [...state];
      const index = newBooks.findIndex((book) => {
        return book.id === action.payload.id;
      });
      newBooks[index] = action.payload;
      return newBooks;
    default:
  }
  return state;
};
