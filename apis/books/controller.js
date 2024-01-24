const Book = require("../../models/Book");

let getBookDetails = async (request, response) => {
  try {
    const books = await Book.find();
    return response.status(201).json(books);
  } catch (error) {
    console.log(error);
    return response.status(500).json("server error");
  }
};
let getBookDetailsById = async (request, response) => {
  try {
    const _id = request.params._id;
    const book = await Book.find(_id, request.body);
    return response.status(201).json(book);
  } catch (error) {
    console.log(error);
    return response.status(500).json("server error");
  }
};
let createBookDetails = async (request, response) => {
  try {
    const book = await Book.create(request.body);
    return response.status(200).json(book);
  } catch (error) {
    console.log(error);
    return response.status(500).json("server error");
  }
};
let updateBookDetailsById = async (request, response) => {
  try {
    const _id = request.params._id;
    const book = await Book.findByIdAndUpdate(_id, req.body);
    return response.status(200).json(book);
  } catch (error) {
    console.log(error);
    return response.status(500).json("server error");
  }
};
let deleteBookDetailsById = async (request, response) => {
  try {
    const _id = request.params._id;
    await Book.findByIdAndDelete(_id);
    return response.status(204).end();
  } catch (error) {
    console.log(error);
    return response.status(500).json("server error");
  }
};
module.exports = {
  getBookDetails,
  getBookDetailsById,
  createBookDetails,
  updateBookDetailsById,
  deleteBookDetailsById,
};
