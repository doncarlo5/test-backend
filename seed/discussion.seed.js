require("dotenv/config");
require("./../config/dbConnect");
const Discussion = require("./../models/Discussion.model");
const User = require("./../models/User.model");

const discussionToCreate = [
  {
    name: "project-management",
    admin: "Julien",
    listOfUsers: ["Samara", "Michaël", "Julien "],
  },
  {
    name: "cat meme",
    admin: "María",
    listOfUsers: ["Evan", "Samara", "Julien "],
  },
];

(async function () {
  try {
    await Discussion.deleteMany({});
    const allUsers = await User.find({});
    for (const discussionElement of discussionToCreate) {
      const admin = await User.findOne({ username: discussionElement.admin });
      discussionElement.admin = admin._id;
      let usersOfDiscussion = [];
      for (const user of discussionElement.listOfUsers) {
        const userToAdd = await User.findOne({ username: user });
        usersOfDiscussion.push(userToAdd._id);
      }
      discussionElement.listOfUsers = usersOfDiscussion;
    }
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
});
