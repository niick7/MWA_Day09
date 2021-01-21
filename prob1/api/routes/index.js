const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books-controller");

router.route("/books").get(booksController.getBooks)
                      .post(booksController.createBook);
router.route("/books/:bookId").get(booksController.getBook)
                              .delete(booksController.deleteBook);

module.exports = router;