require("dotenv/config");
require("./../config/dbConnect");
const Message = require("./../models/Message.model");
const Discussion = require("./../models/Discussion.model");
const User = require("./../models/User.model");

const messsage = "Welcome";

(async function () {
  try {
    await Message.deleteMany({});
    const allDiscussions = await Discussion.find({});

    for (const discussion of allDiscussions) {
      const allUsers = await User.find({});

      for (const discusion of allDiscussions) {
        const creator = discussion.admin;
        const content = message;

        const messageToCreate = {
          creator,
          content,
          discussion: discussion._id,
        };

        await Message.create(messageToCreate);
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
});
