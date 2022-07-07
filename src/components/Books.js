import React from 'react';
import Header from './Header';
import Bookcard from './Bookcard';
import Form from './Form';

export default function Books() {
  return (
    <div>
      <Header />
      <button type="button">Remove</button>
      <Form />
    </div>
  );
}
