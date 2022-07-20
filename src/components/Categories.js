import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkBookStatus } from '../redux/categories/categories';

export default function Categories() {
  const statusMsg = useSelector((state) => state.bookStatus);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch(checkBookStatus())}
      >
        Check status
      </button>
      <h4>{statusMsg}</h4>
    </div>
  );
}
