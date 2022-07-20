import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import generateUniqueId from 'generate-unique-id';

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
    const uniqueId = generateUniqueId({
      length: 8,
      useLetters: false,
    });
    const newBook = {
      ...book,
      id: uniqueId,
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
