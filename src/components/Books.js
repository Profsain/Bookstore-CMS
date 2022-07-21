import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBooksData from '../redux/books/fetchBooks';
import '../styles/Books.css';
import Form from './Form';
import Bookcard from './Bookcard';

export default function Books() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooksData());
  }, []);
  const booksData = useSelector((state) => state.book.books);

  return (
    <div className="Container">
      {Object.entries(booksData).map(([key, value]) =>
        <Bookcard key={key} id={key} title={value[0].title} author={value[0].author} />)
      },
      <Form />
    </div>
  );
}
