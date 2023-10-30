import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react'

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/api/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
  })

  return (
    <>
      <h1>Best Books!</h1>
      <p>Books : {books.length}</p>

      {
        books.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
