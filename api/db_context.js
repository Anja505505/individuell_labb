const pgp = require("pg-promise")(/* options */);
const db = pgp("postgres://postgres:505505@localhost:5432/Bibliotekssystem3");

async function selectCustomerByKeyword(keyword) {
  let data = await db.any(
    `SELECT * FROM book JOIN loan ON book.book_id = loan.loan_book_id WHERE (book.title LIKE '%${keyword}%' OR book.author LIKE '%${keyword}%')`
  );

  return data;
}

async function insertCustomer(title, author, genre, year) {
  console.log(title, author, genre, year);

  db.none(`INSERT INTO book (title, author, genre, year)
           VALUES ('${title}', '${author}', '${genre}', ${year})`);
}

async function updateCustomer(title, author, genre, year, book_id) {
  await db.none(
    `UPDATE book SET title = '${title}', author = '${author}', genre = '${genre}', year = '${year}' WHERE book_id = ${book_id}`
  );
}

async function deleteCustomer(book_id) {
  await db.none(`DELETE FROM loan WHERE book_id = ${book_id};
  DELETE FROM book WHERE book_id = ${book_id}`);
}

module.exports = {
  selectCustomerByKeyword,
  insertCustomer,
  updateCustomer,
  deleteCustomer,
};
