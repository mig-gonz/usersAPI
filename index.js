const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

// Import controllers
const usersController = require("./controllers/users");

// Use the usersController for the /users route
app.use("/users", usersController);

// middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send("usersAPI");
});

app.listen(process.env.PORT, () => {
  console.log({ message: `Listening on port: ${process.env.PORT}` });
});
