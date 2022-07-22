import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import checkBookStatusReducer from './categories/categories';

const rootReducer = combineReducers({
  book: bookReducer,
  bookStatus: checkBookStatusReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
