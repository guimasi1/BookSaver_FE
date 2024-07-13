/* eslint-disable no-unused-vars */
import Cookies from "js-cookie";
import { BASE_URL } from "./authActions";

export const booksURI = "/books";

export const GET_BOOKS = "GET_BOOKS";
export const SET_BOOK_AS_READ = "SET_BOOK_AS_READ";

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

export const addBookToRead = (bookId) => {
  const token = Cookies.get("token");

  return async (dispatch) => {
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
        payload: bookId,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
