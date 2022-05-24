const express = require("express");

const router = express.Router();

router.get("/", (req, resp) => {
  resp.json({ msg: "in level route" });
});
module.exports = router;
