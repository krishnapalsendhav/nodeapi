const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: "Title is required.",
    minlength: 4,
    maxlength: 140,
  },
  body: {
    type: String,
    required: "Body is required.",
    minlength: 4,
    maxlength: 2000,
  },
});


module.exports = mongoose.model('Post',postSchema);