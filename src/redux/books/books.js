// Action

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_BOOKS_BEGIN = 'FETCH_BOOKS_BEGIN';
const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';

// innitial state
const initialState = {
  books: [],
  loading: false,
  error: null,
};

const booksArr = [
  {
    id: '123',
    title: 'JavaScript Like I am Five',
    author: 'Profsain Husseini',
  },
  {
    id: '1231',
    title: 'React Redux in 5 Steps',
    author: 'Eng. Mudi P.H',
  },
  {
    id: '124',
    title: 'Life as a Programmer',
    author: 'John Watermelon',
  },
  {
    id: '125',
    title: 'CSS Pro Like Bro',
    author: 'Joe Bidus',
  },
];

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
    case ADD_BOOK:
      return null
    case REMOVE_BOOK:
      return state.filter((book) => (book.id) !== action.id);
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
  payload: { error }
});

// Add book action creators
export const addBook = (addBookFun) => ({
  type: ADD_BOOK,
  payload: addBookFun,
});

export const removeBook = (id) => (
  {
    type: REMOVE_BOOK,
    id,
  }
);

export default bookReducer;
