const { model, Schema } = require("mongoose");
const FactSchema = new Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  userId: String,
  title: String,
  text: String,
  likes: [],
  dislikes: [],
});

const PostModel = model("Fact", FactSchema);
module.exports = PostModel;
