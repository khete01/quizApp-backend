const { Router } = require("express");
const bcrypt = require("bcrypt");
const router = Router();
const {
  createUser,
  loginUser,
  getUser,
} = require("../controller/itemsController");
const UserModel = require("../database/schema/userSchema");

const validateEmail = async (req, res, next) => {
  const body = req.body;
  const user = await UserModel.findOne({ email: body.email });

  if (user) {
    res.status(403).send("email is already in use");
  } else {
    next();
  }
};

const validatePassword = async (req, res, next) => {
  const body = req.body;
  const user = await UserModel.findOne({ email: body.email });

  if (user) {
    const isPasswordCorrect = bcrypt.compareSync(body.password, user.password);
    if (isPasswordCorrect) {
      next();
    } else {
      res.status(404).send("Password is incorrect");
    }
  } else {
    res.status(404).send("User not found");
  }
};

router.post("/sign", validateEmail, createUser);
router.post("/login", validatePassword, loginUser);
router.get("/user", getUser);
module.exports = router;
