const express = require("express");

const characters = express();

characters.use(express.json());

module.exports = characters;
