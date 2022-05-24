const express = require("express");
const Student = require("../controller/studentController");

const router = express.Router();

router.post("/", Student.create);
router.get("/", Student.getAll);
router.get("/:name", Student.getUser);
router.get("/id/:id", Student.get);
router.put("/:id", Student.update);
router.delete("/:id", Student.remove);

module.exports = router;
