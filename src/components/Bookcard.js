import PropTypes from 'prop-types';
import React from 'react';
import '../styles/Bookcard.css';

export default function Bookcard({ title, author }) {
  return (
    <div className="Book-card">
      <div className="Book-info">
        <p>Science Fiction</p>
        <h3 className="Tilte">{title}</h3>
        <p>{author}</p>
        <div className="Buttons">
          <button type="button">Comment</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div>Reading Progress</div>
      <div className="Chapter-info">
        <p>Current Chapter</p>
        <h3>Chapter 3: A leason learned</h3>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
}

Bookcard.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
