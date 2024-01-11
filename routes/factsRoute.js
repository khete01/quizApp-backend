const { Router } = require("express");
const factsRoute = Router();
const {
  createFact,
  getFact,
  deletePost,
  getAllFact,
  editFact,
  addLike,
  addDislike,
} = require("../controller/factsController");
const PostModel = require("../database/schema/factSchema");

factsRoute.post("/facts", createFact);
factsRoute.get("/facts", getAllFact);
factsRoute.get("/facts/:userId", getFact);
factsRoute.delete("/delete/:factId", deletePost);
factsRoute.put("/facts/:factId", editFact);
factsRoute.post("/likes/:factId/:userId", addLike);
factsRoute.post("/dislikes/:factId/:userId", addDislike);
module.exports = factsRoute;
