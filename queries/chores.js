const db = require("../db/dbConfig");

//GET ALL
const getAllChores = async () => {
  try {
    const allChores = await db.any("SELECT * FROM chores");
    return allChores;
  } catch (error) {
    return error;
  }
};

//GET ONE
const getAChore = async (id) => {
  try {
    const chore = await db.one("SELECT * FROM chores WHERE id=$1", id);
    return chore;
  } catch (error) {
    return error
  }
};


//CREATE ONE
const createChore = async (choreToUpdate) => {
  try {
    const newChore = await db.one(
      "INSERT INTO chores (name, calorie, sugar, fat, is_healthy) VALUES ($1, $2, $3, $4, $5)  RETURNING *",
      [
        choreToUpdate.name,
        choreToUpdate.calorie,
        choreToUpdate.sugar,
        choreToUpdate.fat,
        choreToUpdate.is_healthy,
      ]
    );
    return newChore;
  } catch (error) {
    return error;
  }
};

//UPDATE ONE
const updateChore = async (id, choreToUpdate) => {
  try {
    const updatedChore = await db.one(
        "UPDATE chores SET name=$1, calorie=$2, sugar=$3, fat=$4, is_healthy=$5 WHERE id=$6 RETURNING *",
        [
        choreToUpdate.name,
        choreToUpdate.calorie,
        choreToUpdate.sugar,
        choreToUpdate.fat,
        choreToUpdate.is_healthy,
        id
      ]
    );
    return updatedChore;
  } catch (error) {
    return error;
  }
};

//DELETE ONE
const deleteChore = async (id) => {
  try {
    const deletedChore = await db.one(
      "DELETE FROM chores WHERE id=$1 RETURNING *",
      [id]
    );
    return deletedChore;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllChores,
  getAChore,
  createChore,
  updateChore,
  deleteChore,
};
