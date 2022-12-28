import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import generateUniqueId from 'generate-unique-id';
import addNewBookToApi from '../redux/books/addNewBookToApi';
import '../styles/Form.css';

export default function Form() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', author: '', category: 'Programming' });
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
    // generate unique id for new book
    const uniqueId = generateUniqueId({
      length: 8,
      useLetters: false,
    });
    const newBook = {
      ...book,
      item_id: uniqueId,
    };
    dispatch(addNewBookToApi(newBook));
    // dispatch(addBook());

    setBook((prevBook) => ({
      ...prevBook,
      title: '',
      author: '',
    }));
  };

  return (
    <div className="Form">
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
