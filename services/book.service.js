const mysql = require("mysql2");
const UTILS = require("./utils");

// GET ALL
const getAll = async () => {
  try {
    const results = await UTILS.getAll();
    return results;
  } catch (err) {
    return err.message;
  }
};

// GET BY ID
const getById = async id => {
  try {
    const results = await UTILS.getById(id);
    return results;
  } catch (err) {
    return err.message;
  }
};

// POST
const post = async (author = "", title = "", synopsis = "") => {
  try {
    const results = await UTILS.post(author, title, synopsis);
    return results;
  } catch (err) {
    // Ariel Note: this catches if error occurs in database and passes err.message to controller .then()
    return err.message;
  }
};

// DELETE
const del = async id => {
  try {
    const results = await UTILS.del(id);
    return results;
  } catch (err) {
    return err.message;
  }
};

// UPDATE
const update = async (id, author, title, synopsis) => {
  try {
    const results = await UTILS.update(id, author, title, synopsis);
    return results;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  getAll,
  getById,
  post,
  update,
  del
};
