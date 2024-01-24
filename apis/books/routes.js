const {
  getBookDetails,
  createBookDetails,
  updateBookDetailsById,
  deleteBookDetailsById,
  getBookDetailsById,
} = require("./controller");
const express = require("express");
const router = express.Router();

router.get("/books", getBookDetails);

router.post("/books", createBookDetails);

router.put("/books/:_id", updateBookDetailsById);

router.delete("/books/:_id", deleteBookDetailsById);

router.get("/books/:_id", getBookDetailsById);

module.exports = router;
