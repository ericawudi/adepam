const mongodb = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const studentRouter = require("./router/studentRouter");
const teacherRouter = require("./router/teacherRouter");
const procureRouter = require("./router/procureRouter");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(morgan("combined"));
app.use(express.json({ limit: "5mb" }));

const dbUrl = `mongodb+srv://${process.env.DB_NAME}:${process.env.KEY}@cluster0.9fdwx.mongodb.net/${process.env.USERNAME}?retryWrites=true&w=majority`;
app.use(cors());
app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);
app.use("/procure", procureRouter);

app.use(function (req, res, next) {
  res.status(404).json({ status: 404, mgs: "Not found" });
  return;
});

const db = mongodb
  .connect(dbUrl)
  .then((result) =>
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    })
  )
  .catch((err) => {
    console.log("there was an error connecting to dB ....");
  })
  .catch((err) => console.log({ err }));
