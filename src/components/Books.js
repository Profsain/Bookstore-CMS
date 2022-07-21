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
  const booksData = useSelector((state) => state.book);
  console.log(booksData.books)
  // const bookList = books.map((book) => (
  //   <Bookcard key={book.id} title={book.title} author={book.author} id={book.id} />
  // ));

  return (
    <div className="Container">
      {/* {bookList} */}
      <Form />
    </div>
  );
}
