const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3001;
app.use(cors());

const allowedOrigins = ["http://localhost:3000"];

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const customerRouter = require("./routes/customer");
app.use("/customer", customerRouter);

app.listen(PORT, () => {
  // LYSSNA på port
  console.log("API - Listening on port*:" + PORT);
});
