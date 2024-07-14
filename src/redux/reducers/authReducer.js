import { LOGIN } from "../actions/authActions";

const initialState = {
  token: "",
  loggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload,
        loggedIn: true,
      };
    /*    case LOGOUT:
      return {
        ...state,
        token: "",
        loggedIn: false,
      }; */

    default:
      return state;
  }
};

export default authReducer;
