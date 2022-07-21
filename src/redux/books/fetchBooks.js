// redux thunk middleware to fetch data from api
import { fetchBooksBegin, fetchBooksSuccess, fetchBooksError } from "./books";

const fetchBooksData = () => {
  const APP_KEY = 'LfwQMoB2y0EcfNVsTouw';
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_KEY}/books`;
  return (dispatch) => {
    dispatch(fetchBooksBegin());
    return fetch(url)
      .then(handleError)
      .then((response) => response.json)
      .then((data) => {
        dispatch(fetchBooksSuccess(data.books));
        return data.books;
      })
      .catch((error) => dispatch(fetchBooksError(error)));
  };
};

// error handler for fetch api
const handleError = (response) => {
  if(!response.ok) {
    throw Error(response.statusText);
  }
  return response
};

export default fetchBooksData;