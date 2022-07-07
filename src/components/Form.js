import React from 'react'

export default function Form() {
  return (
    <div className="Form-container">
      <h2>Add New Book</h2>
      <form>
        <input type="text" placeholder="Book Title" />
        <input type="text" placeholder="Author" />
        <button>Add Book</button>
      </form>
    </div>
  )
}
