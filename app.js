const express = require("express");
const connectDB = require("./database");
const bookRouter = require("./apis/books/routes");
const app = express();
const morgan = require("morgan");
app.use(express.json());
app.use(morgan("dev"));
app.use("/api", bookRouter);

connectDB();

app.listen(8000, () => {
  console.log("connected to server");
});
