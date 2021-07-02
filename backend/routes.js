const express = require("express");
const router = express.Router();
const User = require("./user");

router.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).send(user);
});

router.get("/users", async (req, res) => {
  const people = await User.find();
  res.status(200).send(people);
});
router.get("/users/:id", async (req, res) => {
  const findId = await User.findById(req.params.id);
  res.status(200).send(findId);
});

router.delete("/users/:id", async (req, res) => {
  const deleteUser = await User.findByIdAndDelete(req.params.id);
  res.send(deleteUser);
});

module.exports = router;
