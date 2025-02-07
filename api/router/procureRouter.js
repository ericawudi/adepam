const express = require("express");
const Procure = require("../controller/procureController");

const router = express.Router();

router.post("/", Procure.create);
router.get("/", Procure.getAll);
router.get("/:name", Procure.getByName);
router.get("/id/:id", Procure.get);
router.put("/:id", Procure.update);
router.delete("/:id", Procure.remove);

module.exports = router;
