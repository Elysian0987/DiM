import React from 'react';

function Home() {
  return (
    <div className="page-content">
      <h2>Welcome to the Book Nook!</h2>
      <p>Grab a cup of chai and find your next great read. This is a cozy corner of the internet dedicated to books that are perfect for a rainy day.</p>
      <div className="featured-review">
        <h3>This Month's Monsoon Read</h3>
        <p><strong>The God of Small Things by Arundhati Roy</strong></p>
        <p>A modern classic set in Kerala, its lush, descriptive prose perfectly matches the rainy season's mood. A must-read!</p>
      </div>
    </div>
  );
}

export default Home;