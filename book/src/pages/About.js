import React from 'react';
import '../App.css';
// import '../public/img/Author.jpg'; // Adjust the path as necessary

function About() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>About the Curator</h1>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src="/img/Author.jpg" alt="The blog author" />  
        </div>
        <div className="about-text">
          <h2>Hello, I'm Samrudhi.</h2>
          <p>Welcome to Coffee & Cozy, my personal corner of the internet dedicated to the magic of storytelling. As a lifelong reader and a perpetual student based in the bustling city of Mumbai, I've always found solace and adventure within the pages of a good book.</p>
          <p>This blog began as a simple project to document my reading journey, but it has grown into a space where I can connect with fellow book lovers. Here, I share my honest thoughts on the books that move me, challenge me, and stay with me long after I've turned the final page.</p>
          <p>My taste is eclectic, spanning from contemporary fiction and gripping thrillers to timeless classics and thought-provoking non-fiction. My goal is simple: to help you find your next favorite story. So please, grab a warm drink, get cozy, and let's talk about books.</p>
        </div>
      </div>
    </div>
  );
}

export default About;