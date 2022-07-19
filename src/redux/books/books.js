// Action
const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

// initial state
const booksArr = [
  {
    id: 123,
    title: 'JavaScript Like I am Five',
    author: 'Profsain Husseini',
  },
  {
    id: 1231,
    title: 'React Redux in 5 Steps',
    author: 'Eng. Mudi P.H',
  },
  {
    id: 124,
    title: 'Life as a Programmer',
    author: 'John Watermelon',
  },
  {
    id: 125,
    title: 'CSS Pro Like Bro',
    author: 'Joe Bidus',
  },
];

// Reducers
const bookReducer = (books = booksArr, action) => {
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
      return books.filter((book) => book.id !== action.id);
    default:
      return books;
  }
};
// Action creators
export const addBook = (book) => (
  {
    type: ADDBOOK,
    ...book,
  }
);

export const removeBook = (id) => (
  {
    type: REMOVEBOOK,
    playload: id,
  }
);

export default bookReducer;
