import {
  DELETE_AUTHOR,
  DELETE_BOOK,
  GET_AUTHORS,
  GET_BOOKS,
  SET_BOOK_AS_READ,
} from "../actions/bookActions";

const initialState = {
  books: [],
  readBooks: [],
  authors: [],
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
        readBooks: [...state.readBooks, action.payload],
      };

    case DELETE_BOOK:
      return {
        ...state,
        readBooks: state.readBooks.filter(
          (book) => book._id !== action.payload
        ),
        books: state.books.filter((book) => book._id !== action.payload),
      };

    case GET_AUTHORS:
      return {
        ...state,
        authors: action.payload,
      };

    case DELETE_AUTHOR:
      return {
        ...state,
        authors: state.authors.filter(
          (author) => author._id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default bookReducer;
