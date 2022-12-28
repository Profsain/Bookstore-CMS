// Action

const ADD_BOOK_BEGIN = 'ADD_BOOK_BEGIN';
const ADD_BOOK = 'ADD_BOOK';
const ADD_BOOK_ERROR = 'ADD_BOOK_ERROR';
const DELETE_BOOK_BEGIN = 'DELETE_BOOK_BEGIN';
const DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS';
const DELETE_BOOK_ERROR = 'DELETE_BOOK_SUCCESS';
const FETCH_BOOKS_BEGIN = 'FETCH_BOOKS_BEGIN';
const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';

// innitial state
const initialState = {
  books: [],
  loading: false,
  error: null,
};

// Reducers
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload.books,
      };
    case FETCH_BOOKS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        books: [],
      };
    case ADD_BOOK_BEGIN:
      return {
        ...state,
        loading: 'Book is adding',
      };
    case ADD_BOOK:
      return {
        ...state,
        loading: 'Book added success',
      };
    case ADD_BOOK_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case DELETE_BOOK_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case DELETE_BOOK_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
// fetch books action creators
export const fetchBooksBegin = () => ({
  type: FETCH_BOOKS_BEGIN,
});

export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: { books },
});

export const fetchBooksError = (error) => ({
  type: FETCH_BOOKS_ERROR,
  payload: { error },
});

// Add book action creators
export const addBookBegin = () => ({
  type: ADD_BOOK_BEGIN,
});
export const addBook = () => ({
  type: ADD_BOOK,
});
export const addBookError = (error) => ({
  type: ADD_BOOK_ERROR,
  payload: { error },
});

// Delete book action creators
export const deleteBookBegin = () => ({
  type: DELETE_BOOK_BEGIN,
});
export const deleteBookSuccess = (fetchFunc) => ({
  type: DELETE_BOOK_SUCCESS,
  payload: fetchFunc,
});
export const deleteBookError = (error) => ({
  type: DELETE_BOOK_ERROR,
  payload: { error },
});

export default bookReducer;
