// const mssql = require("../mssql");
// const TYPES = require("tedious").TYPES;

// const mysql = require("mysql"); // mysql dont support promises, mysql2 does

const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "booksdb",
  password: "Password1",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const getAll = async () => {
  console.log("Service get all");

  //   const result = await pool.execute("GetAllBooks");
  //   console.log("RESULT", result);
  //   return result[0];

  const result = await pool.query("SELECT * from books");
  return result[0];
};

module.exports = {
  getAll: getAll
};
