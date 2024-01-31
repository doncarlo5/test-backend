const { model, Schema } = require("mongoose");

const userSchema = Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      maxLength: 30,
      minLength: 3,
    },
    picture: { type: String },
  },
  {
    timestamps: true,
  }
);

// timestamps : create two new fields in the document : createdAt and updatedAt
// convention for model : capital letter and singular

const User = model("User", userSchema);

module.exports = User;
