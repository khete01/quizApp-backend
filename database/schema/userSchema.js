const { model, Schema } = require("mongoose");
const UserSchema = new Schema({
  username: String,
  email: String,
  age: String,
  password: String,
});

const UserModel = model("User", UserSchema);
module.exports = UserModel;
