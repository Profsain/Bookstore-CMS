import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { addBook } from '../redux/books/books';

export default function Form() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', author: '' });
  // input field handler
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  // add new book method
  const addNewBook = () => {
    const newBook = {
      ...book,
      id: uniqid(),
    };
    dispatch(addBook({ ...newBook }));

    setBook((prevBook) => ({
      ...prevBook,
      title: '',
      author: '',
    }));
  };

  return (
    <div className="Form-container">
      <h2>Add New Book</h2>
      <form>
        <input
          type="text"
          placeholder="Book Title"
          value={book.title}
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Author"
          value={book.author}
          name="author"
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={addNewBook}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}
