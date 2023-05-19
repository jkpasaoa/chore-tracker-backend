const express = require("express");
const chores = express.Router();
const {
  getAllChores,
  getAChore,
  createChore,
  deleteChore,
  updateChore,
} = require("../queries/chores");
// const { checkName } = require("../validations/checkChores");

//GET ROUTE
chores.get("/", async (req, res) => {
  const allChores = await getAllChores();
  res.status(200).json(allChores);
});

//GET ONE ROUTE
chores.get("/:id", async (req, res) => {
  const { id } = req.params;
  const chore = await getAChore(id);

  if (chore) {
    res.status(200).json(chore);
  } else {
    res.status(404).json({ error: "Chore not found" });
  }
});

//CREATE ROUTE
chores.post("/", async (req, res) => {
  const newChore = req.body;

  if (!newChore.calorie) {
    res.status(400).json({ error: "Calorie is missing" });
  } else {
    try {
      const addedChore = await createChore(newChore);
      res.status(200).json(addedChore);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
});
//TODO: add checkNAME

//DELETE ROUTE
chores.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedChore = await deleteChore(id);
    if (deletedChore.id) {
      res.status(200).json(deletedChore);
    } else {
      throw new Error("A chore with that Id does not exist");
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

//UPDATE ROUTE
chores.put("/:id", async (req, res) => {
  const { id } = req.params;
  const choreToUpdate = req.body;
  console.log(id, req.body)
  try {
    const existingChore = await getAChore(id);

    if (!existingChore) {
      res.status(404).json({ error: "Chore not found" });
      return;
    }
//TODO: add checkName

    const isModified = Object.keys(choreToUpdate).some(
      (key) => choreToUpdate[key] !== existingChore[key]
    );

    if (!isModified) {
      res.status(400).json({ error: "No changes detected in the chore object" });
      return;
    }

    const updatedChore = await updateChore(id, choreToUpdate);
    res.status(200).json(updatedChore);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = chores;
