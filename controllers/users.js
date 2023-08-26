const express = require("express");
const router = express.Router();
const { User, Address } = require("../models"); // Assuming your models are imported correctly

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll({
      include: Address, // Include the Address model to fetch related address data
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
