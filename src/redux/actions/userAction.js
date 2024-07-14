import Cookies from "js-cookie";
import { BASE_URL } from "./authActions";

export const usersURI = "/users";
export const GET_CURRENT_USER = "GET_CURRENT_USER";

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
    } catch (err) {
      console.log(err);
    }
  };
};
