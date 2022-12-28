import { deleteBookBegin, deleteBookSuccess, deleteBookError } from './books';
import fetchBooksData from './fetchBooks';

const deleteBookFromApi = (bookId) => {
  const APP_KEY = 'LfwQMoB2y0EcfNVsTouw';
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_KEY}/books/${bookId}`;

  return (dispatch) => {
    dispatch(deleteBookBegin());
    return fetch(url, { method: 'DELETE' })
      .then((response) => response)
      .then(() => {
        dispatch(deleteBookSuccess());
        return dispatch(fetchBooksData());
      })
      .catch((error) => dispatch(deleteBookError(error)));
  };
};

export default deleteBookFromApi;
