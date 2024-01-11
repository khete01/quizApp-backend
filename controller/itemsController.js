const UserModel = require("../database/schema/userSchema");
const PostModel = require("../database/schema/factSchema");

const bcrypt = require("bcrypt");
const createUser = async (req, res) => {
  const body = req.body;
  const password = body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const data = { ...body, password: hashedPassword };
  console.log(hashedPassword);
  try {
    const user = await UserModel.create(data);
    res.status(200).send("success");
  } catch (err) {
    res.status(500).send("error");
  }
};

const getUser = async (req, res) => {
  const body = req.body;
  try {
    if (body.UserId) {
      const user = await UserModel.findById(body.userId);
      if (user) {
        res.status(404).send(user);
      } else {
        res.status(404).send("Not found");
      }
    } else {
      const users = await UserModel.find();
      res.status(200).send(users);
    }
  } catch (err) {
    res.status(500).send("Internal error");
  }
};

const loginUser = async (req, res) => {
  const body = req.body;
  console.log(body);
  const user = await UserModel.findOne({ email: body.email });
  const id = user.id;
  // console.log(id);
  if (user) {
    // res.status(200).send(user);
    res.status(200).send(id);
  } else {
    res.status(404).send("user not found");
  }
};

module.exports = {
  createUser,
  loginUser,
  getUser,
};
