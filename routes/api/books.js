const router = require("express").Router();
const db = require("../../models");

// Matches with "/api/books"
router.get("/", (req, res) => {
  db.Book.findAll({}).then(results => {
    res.json(results);
  });
});

// Matches with "/api/books"
router.post("/", (req, res) => {
  const { title, author, synopsis } = req.body;
  console.log("routes books.js post");
  db.Book.create({
    title,
    author,
    synopsis
  })
    .then(results => res.json(results))
    .catch(err => res.status(500).send(err.message));
});

// Matches with "/api/books/:id"
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.Book.findOne({ where: { bookid: id } }).then(results => res.json(results));
});

// Matches with "/api/books/:id"
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.Book.destroy({
    where: {
      bookid: id
    }
  }).then(results => res.json(results));
});

// Matches with "/api/books"
// router
//   .route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
