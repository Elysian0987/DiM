import React from 'react';

// You can get book cover image URLs from sites like goodreads.com or openlibrary.org
const books = [
  { title: 'The Silent Patient', author: 'Alex Michaelides', rating: '★★★★☆', cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546103651l/40097951.jpg' },
  { title: 'Circe', author: 'Madeline Miller', rating: '★★★★★', cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565909496l/35959740.jpg' }
];

function Reviews() {
  return (
    <div className="page-content">
      <h2>My Bookshelf</h2>
      <div className="bookshelf">
        {books.map(book => (
          <div className="book-card" key={book.title}>
            <img src={book.cover} alt={book.title} />
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <p className="rating">{book.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;