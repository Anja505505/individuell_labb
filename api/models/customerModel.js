module.exports = class customer {
  constructor(book_id, genre, year, title, author, book_loan, book_available) {
    this.book_id = book_id;
    this.genre = genre;
    this.year = year;
    this.title = title;
    this.author = author;
    this.book_loan = book_loan;
    this.book_available = book_available;
  }
};
