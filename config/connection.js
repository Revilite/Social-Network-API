const { connect, connection } = require("mongoose");

connect("mongodb://localhost", {
  useNewParser: true,
  useUnifiedTopology: true
});

module.exports = connection;