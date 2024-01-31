// first thing : connect to the database. Mongoose : ODM (Object Data Mapper).
// It's allow you to connect to the database and make it alive.

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI_DEV)
  .then((db) => console.log(`Database connected ${db.connection.name}`))
  .catch((err) => console.log("Error connecting the database", err));
