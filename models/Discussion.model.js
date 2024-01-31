const { model, Schema } = require("mongoose");

const discussionSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 30,
      minLength: 3,
    },
    picture: { type: String },
    admin: { type: Schema.Types.ObjectId, ref: "User" },
    listOfUsers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },

  {
    timestamps: true,
  }
);

// timestamps : create two new fields in the document : createdAt and updatedAt
// convention for model : capital letter and singular

const Discussion = model("Discussion", discussionSchema);

module.exports = Discussion;
