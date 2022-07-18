// Action
const BOOKSTATUS = 'CHECKSTATUS';

// Reducer
const checkBookStatusReducer = (bookStatus = [], action) => {
  switch (action.type) {
    case BOOKSTATUS:
      return 'Under construction';
    default:
      return bookStatus;
  }
};

// Action creators
export const checkBookStatus = (bookStatus) => (
  {
    type: BOOKSTATUS,
    bookStatus,
  }
);

export default checkBookStatusReducer;
