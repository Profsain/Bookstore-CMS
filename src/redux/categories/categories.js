// Action
const BOOKSTATUS = 'CHECKSTATUS';

// Reducer
const checkBookStatusReducer = (bookStatus = [], action) => {
  switch(action.type) {
    case BOOKSTATUS:
      return [
        ...bookStatus,
        action.bookStatus,
      ]
      default:
        return bookStatus
  }
};

// Action creators
export const checkBookStatus = (bookStatus) => {
  return {
    type: BOOKSTATUS,
    bookStatus,
  }
};

export default checkBookStatusReducer;
