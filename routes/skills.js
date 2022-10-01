const express = require("express");
const router = express.Router();

const skillsCtrl = require("../controllers/skills");

// path starts with /skills
router.get("/", skillsCtrl.index);
router.get("/:id", skillsCtrl.show);

module.exports = router;
