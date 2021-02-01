export const ADD_BOOK = "ADD_BOOK";
export const DELETE_BOOK = "DELETE_BOOK";
export const UPDATE_BOOK = "UPDATE_BOOK";

/**
 * @func addBook
 * @param book
 * @return {object}
 */
export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: book
  }
}
/**
 * @func deleteBook
 * @param book
 * @return {object}
 */
export function deleteBook(book) {
  return {
    type: DELETE_BOOK,
    payload: book
  }
}
/**
 * @func updateBook
 * @param book
 * @return {object}
 */
export function updateBook(book) {
  return {
    type: UPDATE_BOOK,
    payload: book
  }
}