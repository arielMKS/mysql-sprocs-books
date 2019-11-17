const router = require("express").Router();
// const db = require("../../models");

const bookService = require("../../services/book.service");

// Matches with "/api/books"
// get all
router.get("/", (req, res) => {
  console.log("Routes get all");
  bookService
    .getAll()
    .then(results => {
      console.log("");
      // res.status(200).json(results);
    })
    .catch(err => res.status(500));
});

// Matches with "/api/books"
router.post("/", (req, res) => {
  const { title, author, synopsis } = req.body;
  console.log("routes post home");
});

// Matches with "/api/books/:id"
router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log("routes get/:id home");
});

// Matches with "/api/books/:id"
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  console.log("routes del /:id home");
});

module.exports = router;

// ============================
// // Matches with "/api/books"
// router.get("/", (req, res) => {
//   db.Book.findAll({})
//     .then(results => {
//       res.json(results);
//     })
//     .catch(err => res.send(500).send(err.message));
// });

// // Matches with "/api/books"
// router.post("/", (req, res) => {
//   const { title, author, synopsis } = req.body;

//   db.Book.create({
//     title,
//     author,
//     synopsis
//   })
//     .then(results => res.json(results))
//     .catch(err => res.status(500).send(err.message));
// });

// // Matches with "/api/books/:id"
// router.get("/:id", (req, res) => {
//   const { id } = req.params;

//   db.Book.findOne({ where: { bookid: id } })
//     .then(results => res.json(results))
//     .catch(err => res.status(500).send(err.message));
// });

// // Matches with "/api/books/:id"
// router.delete("/:id", (req, res) => {
//   const { id } = req.params;

//   db.Book.destroy({
//     where: {
//       bookid: id
//     }
//   })
//     .then(results => res.json(results))
//     .catch(err => res.status(500).send(err.message));
// });

// module.exports = router;
