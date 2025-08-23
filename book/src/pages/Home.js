import React from 'react';
import { Link } from 'react-router-dom';

// Replace with a real book cover image URL
const featuredBookCover = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565909496l/35959740.jpg';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>A thoughtful collection of curated reads.</h1>
        <p>Your cozy corner for words and warmth.</p>
      </section>

      <section className="featured-review">
        <div className="featured-image">
          <img src={featuredBookCover} alt="Cover of Circe by Madeline Miller" />
        </div>
        <div className="featured-content">
          <h3>CURRENTLY READING</h3>
          <h2>Circe by Madeline Miller</h2>
          <p>A breathtaking retelling of a classic myth, Circe is a story of defiant feminism, witchcraft, and finding your own power. An unforgettable read.</p>
          <Link to="/reviews" className="styled-link">Read the full review &rarr;</Link>
        </div>
      </section>

      <section className="curated-lists">
        <h2>Curated Collections</h2>
        <div className="lists-container">

          <Link to="/list/rainy-day-reads" className="list-card-link">
            <div className="list-card">
              <h4>Books for a Rainy Afternoon</h4>
              <p>Dive into these compelling stories.</p>
            </div>
          </Link>

          <Link to="/list/modern-classics" className="list-card-link">
            <div className="list-card">
              <h4>Modern Classics</h4>
              <p>Essential reads for every book lover.</p>
            </div>
          </Link>

          <Link to="/list/non-fiction" className="list-card-link">
            <div className="list-card">
              <h4>Thought-Provoking Non-Fiction</h4>
              <p>Books that make you think.</p>
            </div>
          </Link>

        </div>
      </section>
    </div>
  );
}

export default Home;