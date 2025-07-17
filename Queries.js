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

// 5. Delete a book by its title (e.g., "Son of Woman")
db.books.deleteOne({ title: "Son of Woman" });
