const express = require("express");
const router = express.Router();

// path starts with /skills
router.get("/", skillsCtrl.index);

module.exports = router;
