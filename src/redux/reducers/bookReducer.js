import { GET_BOOKS, SET_BOOK_AS_READ } from "../actions/bookActions";

const initialState = {
  books: [],
  readBooks: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case SET_BOOK_AS_READ:
      return {
        ...state,
        readBooks: [
          ...state.readBooks,
          state.books.find((book) => book._id === action.payload),
        ],
      };
    default:
      return state;
  }
};

export default bookReducer;
