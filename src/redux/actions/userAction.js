import Cookies from "js-cookie";
import { BASE_URL } from "./authActions";

export const usersURI = "/users";
export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const DELETE_USER = "DELETE_USER";

export const getCurrentUser = () => {
  return async function (dispatch) {
    try {
      const token = Cookies.get("token");
      const res = await fetch(BASE_URL + usersURI + `/me`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      dispatch({
        type: GET_CURRENT_USER,
        payload: data.user,
      });
      return data.user;
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAllUsers = () => {
  return async function (dispatch) {
    try {
      const token = Cookies.get("token");
      const res = await fetch(BASE_URL + usersURI, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      dispatch({
        type: GET_ALL_USERS,
        payload: data.data.users,
      });
      return data.user;
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteUser = (userId) => {
  return async function (dispatch) {
    try {
      const token = Cookies.get("token");
      const res = await fetch(BASE_URL + usersURI + "/" + userId, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (!res.ok) throw new Error("Something went wrong");
      dispatch({
        type: DELETE_USER,
        payload: userId,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
