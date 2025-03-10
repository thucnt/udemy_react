<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
=======
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { books } from './books'
import Book from './Book'

function BookList() {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className='booklist'>
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index}/>
      })}
    </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
>>>>>>> 0c84d77544d6494f974342999a638f2974b4efb9
