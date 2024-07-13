/* eslint-disable no-unused-vars */
import Cookies from "js-cookie";

export const GET_BOOKS = "GET_BOOKS";
export const BASE_URL = import.meta.env.VITE_BASEURL;

export const getBooks = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "/books", {});
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
