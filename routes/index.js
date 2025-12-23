const express = require("express");
const router = express.Router();

const travelerController = require("../controllers/traveler");

router.get("/", travelerController.home);

module.exports = router;