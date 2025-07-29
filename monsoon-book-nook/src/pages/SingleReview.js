import React from 'react';
import '../App.css';

// This is a static example. In a real app, you'd use the ID from the URL 
// to fetch the correct book data.
const book = { 
  id: 'circe', 
  title: 'Circe', 
  author: 'Madeline Miller', 
  rating: '★★★★★', 
  cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565909496l/35959740.jpg',
  genre: 'Fantasy, Mythology',
  pages: 393
};

function SingleReview() {
  return (
    <div className="single-review-page">
      <header className="review-hero" style={{ backgroundImage: `url(${book.cover})` }}>
        <div className="hero-overlay">
          <h1>{book.title}</h1>
          <h2>by {book.author}</h2>
        </div>
      </header>
      <div className="review-content-wrapper">
        <div className="review-stats">
          <div className="stat"><strong>RATING</strong><span>{book.rating}</span></div>
          <div className="stat"><strong>GENRE</strong><span>{book.genre}</span></div>
          <div className="stat"><strong>PAGES</strong><span>{book.pages}</span></div>
        </div>
        <div className="review-body">
          <h3>A Masterful Retelling</h3>
          <p>Madeline Miller has done it again. Following her acclaimed "The Song of Achilles," "Circe" stands as a monumental achievement in modern literature, breathing vibrant, defiant life into a figure often relegated to the footnotes of Odysseus's epic journey.</p>
          <p>The novel reimagines the life of Circe, the daughter of Helios, god of the sun. Deemed strange and powerless by her divine family, she is exiled to the island of Aiaia, where she discovers and hones her craft of "pharmaka"—witchcraft. It is here that she transforms from a scorned nymph into a formidable sorceress, encountering famous mythological figures like Hermes, Daedalus, and of course, the mortal Odysseus.</p>
          <h3>Why It Resonates</h3>
          <p>What makes "Circe" so compelling is its deep-seated humanism. Miller grounds the divine in mortal emotion: loneliness, love, rage, and the profound ache for connection. Circe's journey is one of self-discovery, a powerful narrative of a woman finding her voice and power in a world designed to silence her. The prose is lyrical and evocative, painting Aiaia with such vivid detail that you can almost smell the wild herbs and hear the waves crashing against the shore.</p>
          <p>This is not just a retelling; it is a reclamation. A must-read for anyone who loves mythology, powerful female protagonists, and simply beautiful writing.</p>
        </div>
      </div>
    </div>
  );
}

export default SingleReview;