const customerModel = require("../models/customerModel");
const db_context = require("../db_context");

async function getAllCustomers() {
  let customers = [];

  let data = await db_context.selectAllCustomers();

  data.forEach((customer) => {
    customers.push(
      new customerModel(customer.first_name, customer.last_name, customer.email)
    );
  });

  return customers;
}

async function getCustomerByKeyword(keyword) {
  let customers = [];

  let data = await db_context.selectCustomerByKeyword(keyword);

  console.log(data);

  data.forEach((customer) => {
    customers.push(
      new customerModel(
        customer.book_id,
        customer.genre,
        customer.year,
        customer.title,
        customer.author,
        customer.book_loan,
        customer.book_available
      )
    );
  });

  return customers;
}

async function addCustomer(title, author, genre, year) {
  db_context.insertCustomer(title, author, genre, year);
}

async function editCustomer(title, author, genre, year, book_id) {
  db_context.updateCustomer(title, author, genre, year, book_id);
}

async function deleteCustomer(customerId) {
  db_context.deleteCustomer(customerId);
}

module.exports = {
  getAllCustomers,
  getCustomerByKeyword,
  addCustomer,
  editCustomer,
  deleteCustomer,
};
