const express = require("express");
const Teacher = require("./controller/teacherController");

const router = express.Router();

router.post("/", Teacher.create);
router.get("/", Teacher.getAll);
router.get("/:name", Teacher.getByName);
router.get("/id/:id", Teacher.get);
router.put("/:id", Teacher.update);
router.delete("/:id", Teacher.remove);

module.exports = router;
