/* eslint-disable no-unused-vars */
import Cookies from "js-cookie";
import { BASE_URL } from "./authActions";

export const booksURI = "/books";
export const authorsURI = "/authors";

export const GET_BOOKS = "GET_BOOKS";
export const GET_AUTHORS = "GET_AUTHORS";
export const SET_BOOK_AS_READ = "SET_BOOK_AS_READ";
export const DELETE_BOOK = "DELETE_BOOK";
export const DELETE_AUTHOR = "DELETE_AUTHOR";

export const getBooks = (title) => {
  return async (dispatch) => {
    try {
      let response;
      if (title)
        response = await fetch(BASE_URL + booksURI + `?title=${title}`);
      else response = await fetch(BASE_URL + booksURI);
      if (!response.ok) throw new Error("Something went wrong");
      const result = await response.json();
      dispatch({
        type: GET_BOOKS,
        payload: result.data.books,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAllAuthors = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + authorsURI);
      if (!response.ok) throw new Error("Something went wrong");
      const result = await response.json();
      dispatch({
        type: GET_AUTHORS,
        payload: result.data.authors,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addBookToRead = (bookId) => {
  return async (dispatch) => {
    const token = Cookies.get("token");
    try {
      const res = await fetch(BASE_URL + booksURI + "/read/" + bookId, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "Application/JSON",
        },
      });
      if (!res.ok) throw new Error("Couldn't add the book");
      const data = res.json();

      dispatch({
        type: SET_BOOK_AS_READ,
        payload: data.book,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteBook = (bookId) => {
  return async (dispatch) => {
    const token = Cookies.get("token");
    try {
      const response = await fetch(BASE_URL + booksURI + "/" + bookId, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (!response.ok) throw new Error("Something went wrong");
      dispatch({
        type: DELETE_BOOK,
        payload: bookId,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteAuthor = (authorId) => {
  return async (dispatch) => {
    const token = Cookies.get("token");
    try {
      const response = await fetch(BASE_URL + authorsURI + "/" + authorId, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (!response.ok) throw new Error("Something went wrong");
      dispatch({
        type: DELETE_AUTHOR,
        payload: authorId,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
