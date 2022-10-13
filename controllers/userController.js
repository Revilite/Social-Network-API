const User = require("../models/User");

module.exports = {
   getAllUsers(req, res) {
    User.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
    
  }

}