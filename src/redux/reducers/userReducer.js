import {
  DELETE_USER,
  GET_ALL_USERS,
  GET_CURRENT_USER,
} from "../actions/userAction";

const initialState = {
  currentUser: null,
  allUsers: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };

    case DELETE_USER:
      return {
        ...state,
        allUsers: state.allUsers.filter((user) => user._id !== action.payload),
      };

    default:
      return state;
  }
};

export default userReducer;
