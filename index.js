const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const serverless = require("serverless-http");

app.use(
  cors({
    origin: "https://users-api-frontend.vercel.app",
  })
);
app.use(express.json());
const usersController = require("./controllers/users");

app.use("/users", usersController);

app.get("/hello", (req, res) => {
  res.send("usersAPI");
});

// app.listen(process.env.PORT, () => {
//   console.log({ message: `Listening on port: ${process.env.PORT}` });
// });

module.exports.handler = serverless(app);
