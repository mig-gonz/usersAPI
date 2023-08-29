const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

// middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's origin
  })
);
app.use(express.json());
// Import controllers
const usersController = require("./controllers/users");

// Use the usersController for the /users route
app.use("/users", usersController);

app.get("/", (req, res) => {
  res.send("usersAPI");
});

app.listen(process.env.PORT, () => {
  console.log({ message: `Listening on port: ${process.env.PORT}` });
});
