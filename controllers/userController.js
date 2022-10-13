const User = require("../models/User");

module.exports = {
  getAllUsers(req, res) {
    User.find()
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  },
  getOneUser(req, res) {
    User.findOne({ _id: req.params.id })
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  },
  createNewUser(req, res) {
    User.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { runValidators: true, new: true })
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.findOneAndDelete({_id: req.params.id})
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
  }

}