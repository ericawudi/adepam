const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const studentRouter = require("./router/studentRouter");
const teacherRouter = require("./router/teacherRouter");
const procureRouter = require("./router/procureRouter");

const app = express();

app.use(morgan("combined"));
app.use(express.json({ limit: "5mb" }));
app.use(cors());

// Routes
app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);
app.use("/procure", procureRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ status: 404, msg: "Not found" });
});

async function startServer() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_NAME}:${process.env.KEY}@adepam.9fdwx.mongodb.net/${process.env.USERNAME}?retryWrites=true&w=majority&appName=adepam`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit if MongoDB fails to connect
  }
}

startServer();

module.exports = app; // Export for Vercel
