const router = require("express").Router();
const bookRoutes = require("./book.routes");

// Book routes
// router.use("/api/books", bookRoutes);
router.use("/api/books", bookRoutes);

router.use("/api/user", (req, res) => {
  res.json("No matching routes");
});

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
