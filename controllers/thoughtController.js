const Thought = require("../models/Thought");

module.exports = {
  getAllThoughts(req, res) {
    Thought.find()
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  },
  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.id })
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate({_id : req.params.id}, {$set: req.body})
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
  },
  deleteThought(req, res) {
    Thought.findOneAndDelete({_id :req.params.id})
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
  }

}