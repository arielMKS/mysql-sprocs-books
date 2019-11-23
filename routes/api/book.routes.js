const router = require("express").Router();

const bookController = require("../../controllers/book.controller");

// Matches with "/api/books"
router.get("/", bookController.getAll); // no args passed in
router.get("/:id", bookController.getById); // args passed in req.params.id
router.delete("/:id", bookController.del); // args passed in req.params.id
router.put("/", bookController.update); // args passed in req.body
router.post("/", bookController.post); // args passed in req.body

module.exports = router;
