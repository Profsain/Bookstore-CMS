import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import deleteBookFromApi from '../redux/books/deleteBook';
import '../styles/Bookcard.css';

export default function Bookcard({ id, title, author, category }) {
  const dispatch = useDispatch();
  const removeBookHandler = (e) => {
    const bookId = e.target.id;
    dispatch(deleteBookFromApi(bookId));
  };
  const percentage = 60;

  return (
    <div className="Book-card">
      <div className="Book-info">
        <p className="Category">{category}</p>
        <h3 className="Title">{title}</h3>
        <p className="Author">{author}</p>
        <div className="Buttons">
          <button type="button">Comment</button>
          <button
            className="Remove-btn"
            id={id}
            type="button"
            onClick={removeBookHandler}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="Reading-progress">
      <CircularProgressbar value={percentage} text={`${percentage}%`} />;
      </div>
      <div className="Chapter-info">
        <p className="Current-cha">Current Chapter</p>
        <p >Chapter 15</p>
        <button className="Update-btn" type="button">Update Progress</button>
      </div>
    </div>
  );
}

Bookcard.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};