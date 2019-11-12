const router = require("express").Router();
// const booksController = require("../../controllers/booksController");

router.get("/", (req, res) => {
  console.log("/api/books firingggggggg");
  res.json([]);
});

// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
