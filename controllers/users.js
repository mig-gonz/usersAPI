const express = require("express");
const router = express.Router();
const { User, Address } = require("../models");

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll({
      include: Address,
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
    const user = await User.findByPk(userId, {
      include: Address,
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    // First, create a new address entry in the "Addresses" table
    const newAddress = await Address.create({
      street: req.body.Address.street,
      suite: req.body.Address.suite,
      city: req.body.Address.city,
      zipcode: req.body.Address.zipcode,
      lat: req.body.Address.lat,
      lng: req.body.Address.lng,
    });

    // Then, create a new user entry in the "Users" table
    const newUser = await User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      website: req.body.website,
      company_name: req.body.company_name,
      catch_phrase: req.body.catch_phrase,
      bs: req.body.bs,
      address_id: newAddress.id, // Set the address_id to the newly created address's ID
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    // First, find the user by their ID
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete the user
    await user.destroy();

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    // First, find the user by their ID
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user's information based on the request body
    await user.update(req.body);

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
