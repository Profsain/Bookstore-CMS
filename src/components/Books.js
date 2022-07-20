import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Books.css';
import Form from './Form';
import Bookcard from './Bookcard';

export default function Books() {
  const books = useSelector((state) => state.book);
  const bookList = books.map((book) => (
    <Bookcard key={book.id} title={book.title} author={book.author} id={book.id} />
  ));

  return (
    <div className="Container">
      {bookList}
      <Form />
    </div>
  );
}
