const router = require("express").Router();

// grab discussion model

const Discussion = require("./../models/Discussion.model");
const User = require("./../models/User.model");
const Message = require("./../models/Message.model");

// All routes are prefixed with /api/discussions

router.get("/", async (req, res, next) => {
  try {
    const allDiscussions = await Discussion.find().populate(
      "admin listOfUsers",
      "username _id"
    );
    res.json(allDiscussions);
  } catch (error) {
    console.log(error);
  }
});

// return all the messages inside a discussion

router.get("/:discussionId", async (req, res, next) => {
  try {
    const { discussionId } = req.params;

    const theDiscussion = await Discussion.findById(discussionId).populate(
      "admin",
      "username -_id"
    );

    const allMessages = await Message.find({ discussion: discussionId });

    res.json({
      messages: allMessages,
      admin: theDiscussion.admin,
      name: theDiscussion.name,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
