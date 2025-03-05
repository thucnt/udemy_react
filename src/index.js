import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts for Curious Minds',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'Thuc Nguyen',
    title: 'Java Programming',
    img: './images/book-1.jpg',
    id: 2,
  },
]

function BookList() {
  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const EventExamples = () => {
  const handleFormInput = () => {
    console.log('handle form input.')
  }
  const handleButtonClick = () => {
    alert('handle button click')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          style={{ margin: '1rem 0' }}
          onChange={handleFormInput}
        ></input>
        <div>
          <button type='submit'>submit</button>
        </div>
        <button type='button' onClick={handleButtonClick}>
          click me
        </button>
      </form>
    </section>
  )
}

function Book(props) {
  const { img, title, author, children } = props
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
      <button>click me</button>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
