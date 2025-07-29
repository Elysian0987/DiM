import React from 'react';
import '../App.css';

function Contact() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Get In Touch</h1>
        <p>Have a question, a book recommendation, or just want to talk about books? I'd love to hear from you.</p>
      </div>
      <div className="contact-content">
        <p>The best way to reach me is via email or through my social channels. I'll do my best to respond as soon as I can!</p>
        <div className="contact-info">
          <strong>Email:</strong> <a href="mailto:hello@coffeeandcozy.com">hello@coffeeandcozy.com</a>
        </div>
        <p>You can also find me here:</p>
        <div className="contact-info">
          <strong>Instagram:</strong> <a href="#">@coffeeandcozyreads</a>
        </div>
        <div className="contact-info">
          <strong>Twitter:</strong> <a href="#">@cozyreads</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;