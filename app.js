// load env variatbles
require("dotenv/config");

// connect to the database
require("./config/dbConnect");

// import express

const express = require("express");
const logger = require("morgan");
const app = express();

// import middlewares

app.use(logger("dev"));

// used to read JSON data inside the body
app.use(express.json());

// routings

app.use("/api", require("./routes/index.routes"));

// 404

app.all("*", (req, res, next) => {
  res.status(404).json({
    message: "This route doest not exist",
    info: "Please acces the documentation at http://my-doc.com",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});

module.exports = app;
