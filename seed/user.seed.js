require("dotenv/config");
require("./../config/dbConnect");
const User = require("./../models/User.model");

const usersToCreate = [
  {
    username: "Evan",
  },
  {
    username: "María",
  },
  {
    username: "Julien",
  },

  {
    username: "Samara",
  },
  {
    username: "Michaël",
  },
];

(async function () {
  try {
    const createdUsers = await User.create(usersToCreate);
    console.log(`Create ${createdUsers.length} users`);
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
});
