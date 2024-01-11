const PostModel = require("../database/schema/factSchema");

const createFact = async (req, res) => {
  const body = req.body;
  try {
    const fact = await PostModel.create(body);
    console.log(fact);
    res.status(200).send("success");
  } catch (err) {
    res.status(500).send("error");
  }
};

const getFact = async (req, res) => {
  const userId = req.params.userId;
  try {
    const fact = await PostModel.find({ userId });
    console.log(fact);
    res.status(200).send(fact);
  } catch (err) {
    res.status(500).send("Internal error");
  }
};

const getAllFact = async (req, res) => {
  try {
    const facts = await PostModel.find({});
    res.status(200).send(facts);
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (req, res) => {
  const factId = req.params.factId;
  try {
    const result = await PostModel.findByIdAndDelete(factId);
    console.log(result);
    res.status(200).send("Deleted");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal error");
  }
};

const editFact = async (req, res) => {
  const factId = req.params.factId;
  const updateData = req.body;
  try {
    const facts = await PostModel.findByIdAndUpdate(factId, updateData, {
      new: true,
    });
    res.status(200).send(facts);
  } catch (error) {
    console.log(error);
  }
};

const addLike = async (req, res) => {
  const factId = req.params.factId;
  const userId = req.params.userId;
  try {
    const fact = await PostModel.findById(factId);
    if (!fact) {
      return res.status(404).send("Fact not found");
    }
    fact.likes.push(userId);
    await fact.save();
    res.status(200).send(fact.likes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal error");
  }
};

const addDislike = async (req, res) => {
  const factId = req.params.factId;
  const userId = req.params.userId;
  try {
    const fact = await PostModel.findById(factId);
    if (!fact) {
      return res.status(404).send("Fact not found");
    }
    fact.dislikes.push(userId);
    await fact.save();
    res.status(200).send(fact.dislikes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal error");
  }
};
module.exports = {
  createFact,
  getFact,
  getAllFact,
  deletePost,
  editFact,
  addLike,
  addDislike,
};
