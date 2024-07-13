import Cookies from "js-cookie";

export const BASE_URL = import.meta.env.VITE_BASEURL;
export const LOGIN = "LOGIN";

export const login = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "Application/JSON",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Something went wrong");
      const result = await response.json();
      dispatch({
        type: LOGIN,
        payload: result.token,
      });
      Cookies.set("token", result.token);
    } catch (err) {
      console.log(err);
    }
  };
};
