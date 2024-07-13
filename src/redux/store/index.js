import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookReducer from "../reducers/bookReducer";
import authReducer from "../reducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  books: bookReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
