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
const createChore = async (choreToAdd) => {
    try {
        const newChore = await db.one('INSERT INTO chores (chore_name, description, due_date, status, points, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [choreToAdd.chore_name, choreToAdd.description, choreToAdd.due_date, choreToAdd.status, choreToAdd.points, choreToAdd.created_at, choreToAdd.updated_at])
        return newChore
    } catch (error) {
        return error
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
        const updatedChore = await db.one('UPDATE chores SET chore_name=$1, description=$2, due_date=$3, status=$4, points=$5, created_at=$6, updated_at=$7 WHERE id=$8 RETURNING *', [chore.chore_name, chore.description, chore.due_date, chore.status, chore.points, chore.created_at, chore.updated_at, id])
        return updatedChore
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllChores,
    getChore,
    createChore,
    deleteChore,
    updateChore,
}