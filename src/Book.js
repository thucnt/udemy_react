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
export default Book
