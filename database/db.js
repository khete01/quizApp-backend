const mongoose = require("mongoose");

const uri =
  "mongodb+srv://UB:Zxcv1001%40Tu@cluster0.fq5chxs.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("success");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connect;
