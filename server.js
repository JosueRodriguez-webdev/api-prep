const express = require("express");
const helmet = require("helmet");
const shows = require("./hubs/shows.js");
const characters = require("./hubs/characters");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "The server is running!!" });
});

server.use("/api/shows", shows);

server.use("/api/characters", characters);

module.exports = server;
