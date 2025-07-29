// This file acts as our simple, client-side database.

export const collectionsData = [
  { id: 'rainy-day-reads', title: 'Books for a Rainy Afternoon', description: 'Dive into these compelling stories as the rain patters against the window.' },
  { id: 'modern-classics', title: 'Modern Classics', description: 'Essential reads from recent decades that have already cemented their place in literary history.' },
  { id: 'non-fiction', title: 'Thought-Provoking Non-Fiction', description: 'Books that make you think, challenge your perspective, and teach you something new.' },
];

export const booksData = [
  { 
    id: 'circe', 
    title: 'Circe', 
    author: 'Madeline Miller', 
    rating: '★★★★★', 
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565909496l/35959740.jpg',
    collections: ['modern-classics'] 
  },
  { 
    id: 'the-silent-patient', 
    title: 'The Silent Patient', 
    author: 'Alex Michaelides', 
    rating: '★★★★☆', 
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546103651l/40097951.jpg',
    collections: ['rainy-day-reads']
  },
  { 
    id: 'project-hail-mary', 
    title: 'Project Hail Mary', 
    author: 'Andy Weir', 
    rating: '★★★★★', 
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1603133285l/54493401.jpg',
    collections: []
  },
  { 
    id: 'klara-and-the-sun', 
    title: 'Klara and the Sun', 
    author: 'Kazuo Ishiguro', 
    rating: '★★★★☆', 
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1603206535l/54120408.jpg',
    collections: ['modern-classics', 'rainy-day-reads']
  },
  { 
    id: 'sapiens', 
    title: 'Sapiens: A Brief History of Humankind', 
    author: 'Yuval Noah Harari', 
    rating: '★★★★★', 
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1420585954l/23692271.jpg',
    collections: ['non-fiction']
  },
  { 
    id: 'educated', 
    title: 'Educated', 
    author: 'Tara Westover', 
    rating: '★★★★★', 
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/15 Educated by Tara Westover.jpg',
    collections: ['non-fiction']
  },
  { 
    id: 'where-the-crawdads-sing', 
    title: 'Where the Crawdads Sing', 
    author: 'Delia Owens', 
    rating: '★★★★★', 
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1524324263l/36809135.jpg',
    collections: ['rainy-day-reads']
  },
];