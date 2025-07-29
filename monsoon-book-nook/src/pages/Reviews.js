import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const booksData = [
  { id: 'circe', title: 'Circe', author: 'Madeline Miller', rating: '★★★★★', cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565909496l/35959740.jpg' },
  { id: 'the-silent-patient', title: 'The Silent Patient', author: 'Alex Michaelides', rating: '★★★★☆', cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546103651l/40097951.jpg' },
  { id: 'project-hail-mary', title: 'Project Hail Mary', author: 'Andy Weir', rating: '★★★★★', cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1603133285l/54493401.jpg' },
  { id: 'klara-and-the-sun', title: 'Klara and the Sun', author: 'Kazuo Ishiguro', rating: '★★★★☆', cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1603206535l/54120408.jpg' },
  { id: 'the-four-winds', title: 'The Four Winds', author: 'Kristin Hannah', rating: '★★★★☆', cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1592262512l/53138081.jpg' },
  { id: 'where-the-crawdads-sing', title: 'Where the Crawdads Sing', author: 'Delia Owens', rating: '★★★★★', cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1524324263l/36809135.jpg' },
];

function Reviews() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Reviews</h1>
        <p>A collection of stories, thoughtfully reviewed.</p>
      </div>
      <div className="reviews-grid">
        {booksData.map(book => (
          <Link to={`/review/${book.id}`} className="book-card-link" key={book.id}>
            <div className="book-card">
              <img src={book.cover} alt={book.title} />
              <h3>{book.title}</h3>
              <h4>{book.author}</h4>
              <p className="rating">{book.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Reviews;