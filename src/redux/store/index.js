import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookReducer from "../reducers/bookReducer";
import authReducer from "../reducers/authReducer";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  books: bookReducer,
  users: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
