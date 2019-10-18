const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    _id: String,
    text: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", PostSchema);
