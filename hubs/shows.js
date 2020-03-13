const express = require("express");
const showModel = require("../data/helpers/showsModel");

const shows = express.Router();

shows.use(express.json());

shows.get("/", (req, res) => {
  showModel.get().then((response) => {
    res.status(202).json(response);
  });
});

shows.post("/", (req, res) => {
  showModel
    .insert(req.body)
    .then((response) => {
      res.status(201).json(req.body);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

shows.put("/:id", (req, res) => {
  showModel
    .update(req.params.id, req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

shows.get("/:id/characters", (req, res) => {
  showModel
    .getShowsCharacters(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

shows.delete("/:id", (req, res) => {
  showModel
    .remove(req.params.id)
    .then((e) => {
      res.status(200).json({ message: "show was successfully deleted" });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = shows;
