const {
  getAllCustomers,
  addCustomer,
  getCustomerByKeyword,
  editCustomer,
  deleteCustomer,
} = require("../repositories/customerRepository");

async function search(req, res) {
  let data = await getCustomerByKeyword(req.query.keyword);

  console.log(data);

  return res.json(data);
}

async function add(req, res) {
  console.log(req.body);

  await addCustomer(
    req.body.title,
    req.body.author,
    req.body.genre,
    req.body.year
  );
}

async function edit(req, res) {
  console.log(req.body);

  await editCustomer(
    req.body.title,
    req.body.author,
    req.body.genre,
    req.body.year,
    req.body.book_id
  );
}

async function remove(req, res) {
  await deleteCustomer(req.body.book_id);
}

module.exports = {
  search,
  add,
  edit,
  remove,
};
