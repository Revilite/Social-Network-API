const Thought = require("../models/Thought");

module.exports = {
   getAllThoughts(req, res) {
    Thought.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
    
  }

}