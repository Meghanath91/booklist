export const ADD_BOOK = "ADD_BOOK";
export const DELETE_BOOK = "DELETE_BOOK";
export const UPDATE_BOOK = "UPDATE_BOOK";

export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: book
  }
}
export function deleteBook(book) {
  return {
    type: DELETE_BOOK,
    payload: book
  }
}
export function updateBook(book) {
  return {
    type: UPDATE_BOOK,
    payload: book
  }
}