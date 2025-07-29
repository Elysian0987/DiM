// import React from 'react';

// function Recommendations() {
//   return (
//     <div className="page-content">
//       <h2>Top Reading Lists</h2>
      
//       <h3>Top 5 Thrillers for a Stormy Night</h3>
//       <ul>
//         <li>Gone Girl by Gillian Flynn</li>
//         <li>The Girl with the Dragon Tattoo by Stieg Larsson</li>
//         <li>And Then There Were None by Agatha Christie</li>
//         <li>Rebecca by Daphne du Maurier</li>
//         <li>The Woman in Cabin 10 by Ruth Ware</li>
//       </ul>

//       <h3>Must-Read Books by Mumbai Authors</h3>
//       <ul>
//         <li>Sacred Games by Vikram Chandra</li>
//         <li>Maximum City by Suketu Mehta</li>
//         <li>Such a Long Journey by Rohinton Mistry</li>
//       </ul>
//     </div>
//   );
// }

// export default Recommendations;

import React from 'react';
import '../App.css';

function Recommendations() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Reading Lists</h1>
        <p>Hand-picked collections for every mood and moment.</p>
      </div>
      <div className="recommendations-content">
        <section className="list-section">
          <div className="list-text">
            <h2>Books for a Rainy Afternoon</h2>
            <p>There's nothing better than curling up with a compelling story while the rain patters against the window. These books are perfect companions for a cozy day in, filled with mystery, heart, and unforgettable characters.</p>
            <ul>
              <li>The Thursday Murder Club by Richard Osman</li>
              <li>Eleanor Oliphant Is Completely Fine by Gail Honeyman</li>
              <li>Big Little Lies by Liane Moriarty</li>
            </ul>
          </div>
          <div className="list-image">
            <img src="https://images.unsplash.com/photo-1515542706656-8e6193074351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Rain on a window"/>
          </div>
        </section>

        <section className="list-section reverse">
          <div className="list-text">
            <h2>Modern Classics</h2>
            <p>These are the books from recent decades that have already cemented their place in literary history. They are the stories we'll be talking about for generations to come, defining our time with their powerful prose and timeless themes.</p>
            <ul>
              <li>A Little Life by Hanya Yanagihara</li>
              <li>Never Let Me Go by Kazuo Ishiguro</li>
              <li>The Road by Cormac McCarthy</li>
            </ul>
          </div>
          <div className="list-image">
            <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=990&q=80" alt="A library shelf"/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Recommendations;