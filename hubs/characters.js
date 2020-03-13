const express = require("express");
const charactersModel = require("./shows");

const characters = express.Router();

characters.use(express.json());

characters.get("/", (req, res) => {
  charactersModel.get().then((response) => {
    res.status(202).json(response);
  });
});

module.exports = characters;
