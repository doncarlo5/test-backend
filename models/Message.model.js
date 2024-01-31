const { model, Schema } = require("mongoose");

const messageSchema = Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    discussion: {
      type: Schema.Types.ObjectId,
      ref: "Discussion",
    },
    content: { type: String, maxLength: 500, required: true },
  },
  {
    timestamps: true,
  }
);

// timestamps : create two new fields in the document : createdAt and updatedAt
// convention for model : capital letter and singular

const Message = model("Message", messageSchema);

module.exports = Message;
