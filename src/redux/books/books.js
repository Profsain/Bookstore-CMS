// Action
const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

// Reducers
const bookReducer = (books = [], action) => {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...books,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case REMOVEBOOK:
      return books.filter((todo) => todo.id !== action.id);
    default:
      return books;
  }
};
// Action creators
export const addBook = ({ title, author }) => (
  {
    type: ADDBOOK,
    book: {
      title,
      author,
    },
  }
);

export const removeBook = (id) => (
  {
    type: REMOVEBOOK,
    id,
  }
);

export default bookReducer;
