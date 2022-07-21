// redux thunk middleware to fetch data from api
import { fetchBooksBegin, fetchBooksSuccess, fetchBooksError } from './books';

const fetchBooksData = () => {
  const APP_KEY = 'LfwQMoB2y0EcfNVsTouw';
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_KEY}/books`;
  return (dispatch) => {
    dispatch(fetchBooksBegin());
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchBooksSuccess(data));
        return data;
      })
      .catch((error) => dispatch(fetchBooksError(error)));
  };
};

export default fetchBooksData;
