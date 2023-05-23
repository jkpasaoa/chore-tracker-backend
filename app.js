const express = require("express");
const app = express();
const cors = require("cors");
const choresController = require("./controllers/choresController.js");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/chores", choresController);

//Default endpoint
app.get("/", (_, res) => {
  res.send("Welcome to Chore Wizard!");
});

// 404 page
app.get('*', (req,res) => {
  res.status(404).send("Page not Found!");
});

module.exports = app;
