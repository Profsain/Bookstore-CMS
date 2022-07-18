import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import bookReducer from "./books/books";
import checkBookStatusReducer from "./categories/categories";

const rootReducer = combineReducers({
  book: bookReducer,
  status: checkBookStatusReducer,
});

const store = configureStore(rootReducer);

export default store;