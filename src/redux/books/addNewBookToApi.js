import { addBookBegin, addBookError, addBook } from "./books";
import fetchBooksData from "./fetchBooks";

const addNewBookToApi = (booksObj) => {
  const APP_KEY = 'LfwQMoB2y0EcfNVsTouw';
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_KEY}/books`;

  return (dispatch) => {
    dispatch(addBookBegin());
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booksObj),
    })
      .then(response => response)
      .then(() => {
        dispatch(addBook());
        return dispatch(fetchBooksData());
      })
      .catch((error) => dispatch(addBookError(error)));
  }
};

export default addNewBookToApi;