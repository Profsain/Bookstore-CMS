import React from 'react';
import Header from './Header';
import Bookcard from './Bookcard';
import Form from './Form';

export default function Books() {
  return (
    <div>
      <Header />
      <Bookcard title="Dune" author="Frank Berbert" />
      <hr />
      <Bookcard title="Capital in the Twenty-First Century" author="Suzanne Collins" />
      <hr />
      <Form />
    </div>
  )
}
