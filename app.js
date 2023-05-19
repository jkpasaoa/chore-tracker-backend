const express = require("express");
const app = express();
const cors = require("cors");
const choresController = require("./Controllers/choresController.js");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/chores", choresController);

app.get("/", (_, res) => {
  res.send("Welcome to Chore Wizard!");
});

// 404 page
app.get("*", (req, res) => {
  res.status(404).json({ error: "Not Found" });
});

module.exports = app;
