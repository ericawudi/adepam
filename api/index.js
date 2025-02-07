const mongodb = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const studentRouter = require("./studentRouter");
const teacherRouter = require("./teacherRouter");
const procureRouter = require("./procureRouter");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(morgan("combined"));
app.use(express.json({ limit: "5mb" }));
app.use(cors());

const dBUrl = `mongodb+srv://${process.env.DB_NAME}:${process.env.KEY}@adepam.9fdwx.mongodb.net/${process.env.USERNAME}?retryWrites=true&w=majority&appName=adepam`;

app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);
app.use("/procure", procureRouter);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ status: 404, msg: "Not found" });
});

// Connect to MongoDB
mongodb
  .connect(dBUrl)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("DB Connection Error:", err));

// Export app for Vercel
module.exports = app;
