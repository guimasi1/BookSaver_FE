import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookReducer from "../reducers/bookReducer";

const rootReducer = combineReducers({
  books: bookReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
