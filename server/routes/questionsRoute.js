const express = require("express");
const router = express.Router();
const Questions = require("../db/questionsModel");

router.get("/api/questions/get-questions", async (req, res) => {
  try {
    const questions = await Questions.find();
    res.json(questions)
  } catch (error) {
    console.error("Error fetching questions", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
