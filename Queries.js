// 1. Find all books in a specific genre (e.g., Fiction)
db.books.find({ genre: "Fiction" });

// 2. Find books published after a certain year (e.g., after 2000)
db.books.find({ published_year: { $gt: 2000 } });

// 3. Find books by a specific author (e.g., Ngũgĩ wa Thiong'o)
db.books.find({ author: "Ngũgĩ wa Thiong'o" });

// 4. Update the price of a specific book (e.g., "Petals of Blood")
db.books.updateOne(
  { title: "Petals of Blood" },
  { $set: { price: 1400 } }
);

// --- ADVANCED QUERIES ---

// 6. Find books that are in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// 7. Return only title, author, and price (using projection)
db.books.find(
  {},
  { _id: 0, title: 1, author: 1, price: 1 }
);

// 8. Sort books by price ascending
db.books.find().sort({ price: 1 });

// 9. Sort books by price descending
db.books.find().sort({ price: -1 });

// 10. Pagination - Page 1: 5 books
db.books.find().limit(5).skip(0);

// 11. Pagination - Page 2: next 5 books
db.books.find().limit(5).skip(5);


// 5. Delete a book by its title (e.g., "Son of Woman")
db.books.deleteOne({ title: "Son of Woman" });
