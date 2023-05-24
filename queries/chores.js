const db = require(`../db/dbConfig`)

//INDEX of Chores
const getAllChores = async () => {
  try {
    const allChores = await db.any('SELECT * FROM chores')
    return allChores;
  } catch (error) {
    return error;
  }
}

//SHOWS a Chore
const getChore = async (id) => {
  try {
    const chore = await db.one('SELECT * FROM chores WHERE id=$1', id)
    return chore
  } catch (error) {
    return error
  }
}

//CREATE/NEW chore
// const createChore = async (choreToAdd) => {
//   try {
//     const { name, description, due_date, status, points, priority, category } = choreToAdd;
//     const newChore = await db.one('INSERT INTO chores (choreToAdd.name, choreToAdd.description, choreToAdd.due_date, choreToAdd.status, choreToAdd.points, choreToAdd.priority, category) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [name, description, due_date, status, points, priority, category]);
//     return newChore;
//   } catch (error) {
//     return error;
//   }
// };

//CREATE/NEW chore
const createChore = async (choreToAdd) => {
  try {
    const newChore = await db.one('INSERT INTO chores (name, description, due_date, status, points, priority, category) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [choreToAdd.name, choreToAdd.description, choreToAdd.due_date, choreToAdd.status, choreToAdd.points, choreToAdd.priority, choreToAdd.category]);
    return newChore;
  } catch (error) {
    return error;
  }
}


//DELETE chore
const deleteChore = async (id) => {
  try {
    const deletedChore = await db.one('DELETE FROM chores WHERE id=$1 RETURNING *', id)
    return deletedChore
  } catch (error) {
    return error
  }
}

//UPDATE/EDIT chore
const updateChore = async (id, chore) => {
  try {
    const updatedChore = await db.one('UPDATE chores SET name=$1, description=$2, due_date=$3, status=$4, points=$5, priority=$6, category=$7 WHERE id=$8 RETURNING *', [chore.name, chore.description, chore.due_date, chore.status, chore.points, chore.priority, chore.category, id]);
    return updatedChore;
  } catch (error) {
    return error;
  }
}

module.exports = {
  getAllChores,
  getChore,
  createChore,
  deleteChore,
  updateChore,
}