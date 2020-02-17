const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/").get(booksController.findAll);

router.route("/:id").delete(booksController.remove);

module.exports = router;
