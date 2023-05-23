const express = require("express");
const chores = express.Router();
const {
  getAllChores,
  getChore,
  createChore,
  deleteChore,
  updateChore,
} = require("../queries/chores");
//const { checkName } = require('../validations/checkChore.js')

//INDEX
chores.get("/", async (req, res) => {
  try {
    const allChores = await getAllChores();
    res.status(200).json(allChores);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

//SINGLE CHORE
chores.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const chore = await getChore(id);
    res.status(200).json(chore);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

//CREATE/NEW CHORE Route
chores.post("/", async (req, res) => {
  const newChore = req.body;
  try {
    const addedChore = await createChore(newChore);
    res.status(201).json(addedChore);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//TODO: add checkName

//DELETE CHORE
chores.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedChore = await deleteChore(id);
    res.status(200).json(deletedChore);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//UPDATE/EDIT CHORE
chores.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const updatedChore = await updateChore(id, body);
    res.status(200).json(updatedChore);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//TODO: add checkName

module.exports = chores;
