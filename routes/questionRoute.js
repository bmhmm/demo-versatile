const express = require('express');
const router = express.Router();

//importing auth middleware
const authMiddleware = require("../middleware/authMiddleware.js")

router.get("/all-questions", authMiddleware,  (req, res) => {
    res.send("all questions")
})

module.exports = router