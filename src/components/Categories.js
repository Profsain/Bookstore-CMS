import React from 'react';
import { useDispatch } from 'react-redux';
import { checkBookStatus } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch(checkBookStatus())}
      >
        Check status
      </button>
    </div>
  );
}
