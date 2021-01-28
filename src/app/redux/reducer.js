import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from './actions'
import { books } from './states'
export let reducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      break;
    case EDIT_BOOK:
      break;
    case DELETE_BOOK:
      break;
    default:
      return state;
  }
}

