import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v1 as uuid } from 'uuid'
import { addBook } from '../redux/actions'

export default function AddBook() {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const handleName = (e) => {
    const bookName = e.target.value;
    setName(bookName);
  }
  const handleAddBook = () => {
    dispatch(addBook({
      id: uuid(),
      name: name
    }))
    setName('')
  }
  return (
    <div>
      <div onClick={handleAddBook}>Add book</div>
      <input
        onChange={handleName}
        value={name}
        type="text"
      />
    </div>
  )
}
