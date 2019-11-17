const mysql = require("mysql2");
const UTILS = require("./utils");

// create the connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "booksdb",
  password: "Password1",
  multipleStatements: true // IMPORTANT!! SO SPROCS CAN PASS IN AND OUT PARAMETERS
});

const getAll = async () => {
  console.log("Service get all");
  let num = 5;

  // DELETE BOOK
  // con
  //   .promise()
  //   .query(`CALL DeleteBook(9)`)
  //   .then(([rows, fields]) => {
  //     console.log("ROWS", rows); // return an object
  //   })
  //   .catch(console.log);

  //   UPDATE BOOK
  //   con
  //     .promise()
  //     .query(`CALL UpdateBook(10, 'NewBook','NewBook','NewBook')`)
  //     .then(([rows, fields]) => {
  //       console.log("ROWS", rows); // return an object
  //     })
  //     .catch(console.log);

  // CREATE BOOK
  UTILS.CreateBook("Author new", "Title new", "Synopsis new", function(result) {
    console.log("RESULT", result);
    // HOW DO I RETURN RESULTS BACK ???
  });

  // CREATE BOOK
  // let query_str = "CALL CreateBook(?,?,?, @OUTPUTPARAM); SELECT @OUTPUTPARAM"; //
  // con
  //   .promise()
  //   .query(query_str, ["aa", "bb", "cc"])
  //   .then(([rows, fields]) => {
  //     console.log("ROWS", rows[1]); // access id of new record
  //   })
  //   .catch(console.log);

  // GET BY ID
  //   con
  //     .promise()
  //     .query(`CALL GetById(${num})`)
  //     .then(([rows, fields]) => {
  //       console.log(rows[0][0]); // return an object
  //     })
  //     .catch(console.log);

  // GET ALL
  //   con
  //     .promise()
  //     .query("CALL GetAllBooks()")
  //     .then(([rows, fields]) => {
  //       console.log(rows[0]);
  //     })
  //     .catch(console.log);

  // QUERY
  //   con
  //     .promise()
  //     .query("SELECT * from books")
  //     .then(([rows, fields]) => {
  //       console.log(rows);
  //     })
  //     .catch(console.log);
};

module.exports = {
  getAll: getAll
};
